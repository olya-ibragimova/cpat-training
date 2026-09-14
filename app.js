(function () {
  "use strict";

  const STORAGE_KEY = "cpat-progress-v1";

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* private browsing / storage disabled — checkmarks just won't persist */
    }
  }

  let state = loadState();

  function todayISO() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      }
    }
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }

  function checkItem(id, title, detail) {
    const checked = !!state[id];
    const wrap = el("div", { class: "check-item" + (checked ? " checked" : "") });
    const cb = el("input", { type: "checkbox", id: id });
    cb.checked = checked;
    cb.addEventListener("change", () => {
      state[id] = cb.checked;
      saveState(state);
      wrap.classList.toggle("checked", cb.checked);
      refreshProgress();
    });
    const label = el("label", { for: id }, [
      el("div", { class: "t", text: title }),
      detail ? el("div", { class: "dt", text: detail }) : null,
    ]);
    wrap.appendChild(cb);
    wrap.appendChild(label);
    return { node: wrap, id };
  }

  const allSessionIds = [];

  function buildSetup(container) {
    const block = el("section", { class: "block" }, [
      el("h2", { text: "Setup & open items" }),
      el("p", { class: "hint", text: "One-time admin from the research team's ask list — clear these before the training load ramps up." }),
    ]);
    SETUP_ITEMS.forEach((item) => {
      allSessionIds.push(item.id);
      block.appendChild(checkItem(item.id, item.title, item.detail).node);
    });
    container.appendChild(block);
  }

  function weekProgress(week) {
    let total = 0, done = 0;
    week.days.forEach((day) => {
      day.sessions.forEach((s, i) => {
        const id = sessionId(week.number, day.date.iso, i);
        total++;
        if (state[id]) done++;
      });
    });
    return { total, done };
  }

  function sessionId(weekNum, iso, idx) {
    return `w${weekNum}-${iso}-${idx}`;
  }

  function buildWeeks(container) {
    const today = todayISO();
    WEEKS.forEach((week) => {
      const weekEl = el("div", { class: "week", "data-week": week.number });
      const chevron = el("span", { class: "chevron", html: "&#8250;" });
      const miniFill = el("div", { class: "fill" });
      const miniBar = el("div", { class: "mini-bar" }, [miniFill]);

      const head = el("div", { class: "week-head" }, [
        el("div", { class: "wnum", text: `Week ${week.number}` }),
        el("div", { class: "wrange", text: week.range }),
        el("span", { class: `badge ${week.type}`, text: week.typeLabel }),
        miniBar,
        chevron,
      ]);

      const body = el("div", { class: "week-body" });
      if (week.note) body.appendChild(el("div", { class: "week-note", text: week.note }));

      const containsToday = week.days.some((dd) => dd.date.iso === today);

      week.days.forEach((day) => {
        const isToday = day.date.iso === today;
        const dayEl = el("div", { class: "day" + (isToday ? " is-today" : "") });
        dayEl.appendChild(
          el("div", { class: "day-label", text: day.date.label + (isToday ? " · today" : "") })
        );
        day.sessions.forEach((s, i) => {
          const id = sessionId(week.number, day.date.iso, i);
          allSessionIds.push(id);
          dayEl.appendChild(checkItem(id, s.title, s.detail).node);
        });
        body.appendChild(dayEl);
      });

      head.addEventListener("click", () => {
        weekEl.classList.toggle("open");
      });

      weekEl.appendChild(head);
      weekEl.appendChild(body);
      container.appendChild(weekEl);

      if (containsToday) weekEl.classList.add("open");

      function updateMini() {
        const p = weekProgress(week);
        const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
        miniFill.style.width = pct + "%";
      }
      updateMini();
      weekEl._updateMini = updateMini;
    });
  }

  function buildReference(container) {
    const stretchBlock = el("section", { class: "block" }, [
      el("h2", { text: "Warm-up & the 13 stretches (pp. 41–43)" }),
      el("p", { class: "hint", text: "Two phases per stretch: hold 10s at mild tension, move slightly farther, hold 10s more. Repeat 2–3 times. No bouncing, no pain. Full set Wed & Sun; abbreviated (calf, quad, hamstring, hip flexor) on other days." }),
    ]);
    const list = el("ol", { class: "stretch-list" });
    STRETCHES.forEach((s) => list.appendChild(el("li", { text: s })));
    stretchBlock.appendChild(list);
    container.appendChild(stretchBlock);

    const chinBlock = el("section", { class: "block" }, [
      el("h2", { text: "Chin-up progression (assist bands)" }),
      el("p", { class: "hint", text: "Stay on each step until 3 sets of 8 clean reps. Add slow negatives once a week: jump/step to the top, lower over 5 seconds, 3–5 reps." }),
    ]);
    CHIN_UP_PROGRESSION.forEach((step) => {
      allSessionIds.push(step.id);
      chinBlock.appendChild(checkItem(step.id, step.label, "").node);
    });
    container.appendChild(chinBlock);

    const circuitABlock = el("section", { class: "block" }, [
      el("h2", { text: "Circuit A — dumbbell" }),
      el("p", { class: "hint", text: "Minimal rest between exercises. Work \"somewhat hard\" — not to failure. Build from 1 pass to 3." }),
    ]);
    circuitABlock.appendChild(refTable(["Exercise", "Load", "CPAT events"], CIRCUIT_A.map((r) => [r.ex, r.load, r.events])));
    container.appendChild(circuitABlock);

    const circuitBBlock = el("section", { class: "block" }, [
      el("h2", { text: "Circuit B — calisthenics" }),
      el("p", { class: "hint", text: "Straight from pages 48–50, no substitutions." }),
    ]);
    circuitBBlock.appendChild(refTable(["Exercise", "Notes"], CIRCUIT_B.map((r) => [r.ex, r.note])));
    container.appendChild(circuitBBlock);

    const packBlock = el("section", { class: "block" }, [
      el("h2", { text: "Stair climb — pack loading" }),
      el("p", { class: "hint", text: "24 complete stepping cycles per minute (up-up, down-down = 1 cycle; two cycles every 5 seconds). Wrap kettlebells in a towel; use a hiking pack with a hip belt." }),
    ]);
    packBlock.appendChild(refTable(["Pack target", "What goes in"], PACK_LOADING.map((r) => [r.target, r.contents])));
    container.appendChild(packBlock);

    const principlesBlock = el("section", { class: "block" }, [
      el("h2", { text: "Four principles behind all of this" }),
    ]);
    PRINCIPLES.forEach((p) => {
      principlesBlock.appendChild(
        el("div", { class: "principle" }, [
          el("div", { class: "t", text: p.title }),
          el("div", { class: "b", text: p.body }),
        ])
      );
    });
    container.appendChild(principlesBlock);

    const cautionsBlock = el("section", { class: "block" }, [
      el("h2", { text: "Cautions" }),
    ]);
    const ul = el("ul", { class: "caution-list" });
    CAUTIONS.forEach((c) => ul.appendChild(el("li", { text: c })));
    cautionsBlock.appendChild(ul);
    container.appendChild(cautionsBlock);
  }

  function refTable(headers, rows) {
    const wrap = el("div", { class: "ref-table-wrap" });
    const table = el("table", { class: "ref-table" });
    const thead = el("thead", {}, [el("tr", {}, headers.map((h) => el("th", { text: h })))]);
    const tbody = el("tbody");
    rows.forEach((row) => {
      tbody.appendChild(el("tr", {}, row.map((cell) => el("td", { text: cell }))));
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
  }

  function refreshProgress() {
    const total = allSessionIds.length;
    const done = allSessionIds.filter((id) => state[id]).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("progress-count").textContent = `${done} / ${total}`;
    document.getElementById("progress-bar-fill").style.width = pct + "%";
    document.querySelectorAll(".week").forEach((w) => {
      if (w._updateMini) w._updateMini();
    });
  }

  function setupTabs() {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    });
  }

  function setupTodayJump() {
    const btn = document.getElementById("today-jump");
    btn.addEventListener("click", () => {
      const today = todayISO();
      const week = WEEKS.find((w) => w.days.some((d) => d.date.iso === today));
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      document.querySelector('[data-tab="panel-program"]').classList.add("active");
      document.getElementById("panel-program").classList.add("active");
      if (week) {
        const weekEl = document.querySelector(`.week[data-week="${week.number}"]`);
        if (weekEl) {
          weekEl.classList.add("open");
          weekEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  function setupFooterActions() {
    document.getElementById("reset-all").addEventListener("click", () => {
      if (!confirm("Clear every checkmark on this device? This can't be undone.")) return;
      state = {};
      saveState(state);
      document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.checked = false;
        cb.closest(".check-item").classList.remove("checked");
      });
      refreshProgress();
    });

    document.getElementById("export-btn").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cpat-progress.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });

    const importInput = document.getElementById("import-input");
    document.getElementById("import-btn").addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          state = parsed && typeof parsed === "object" ? parsed : {};
          saveState(state);
          document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
            cb.checked = !!state[cb.id];
            cb.closest(".check-item").classList.toggle("checked", cb.checked);
          });
          refreshProgress();
        } catch (err) {
          alert("That file doesn't look like a valid progress export.");
        }
      };
      reader.readAsText(file);
      importInput.value = "";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hero-title").textContent = PROGRAM_META.title;
    document.getElementById("hero-subtitle").textContent = PROGRAM_META.subtitle;

    buildSetup(document.getElementById("panel-program"));
    buildWeeks(document.getElementById("panel-program"));
    buildReference(document.getElementById("panel-reference"));

    setupTabs();
    setupTodayJump();
    setupFooterActions();
    refreshProgress();
  });
})();

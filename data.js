// CPAT 9-Week Training Program — data model
// Source: IAFF CPAT Candidate Preparation Guide (Appendix B), personalized 9-week plan
// Sept 14 – Nov 15, 2026

const PROGRAM_META = {
  title: "CPAT 9-Week Training Program",
  subtitle: "Built from the IAFF CPAT Candidate Preparation Guide (Appendix B)",
  start: "2026-09-14",
  end: "2026-11-15",
};

// One-time / recurring admin items from the current open-items list.
const SETUP_ITEMS = [
  {
    id: "setup-reply-devon",
    title: "Reply to Devon",
    detail:
      "Confirm you'll continue, that the guide is readable, and flag that pages 44–45 and 51–52 are missing from the attached PDF.",
  },
  {
    id: "setup-book-lab2",
    title: "Book Lab Visit #2",
    detail:
      "Prefer Oct 10–11 if given a choice — it lands at the end of a normal week, where you'll be strongest. Oct 17–18 falls mid-easy-week.",
  },
  {
    id: "setup-blood-test",
    title: "Schedule a blood test",
    detail:
      "Ferritin, haemoglobin, and CRP together. Fasted, morning, 24–48h after a hard session.",
  },
  {
    id: "setup-plate-weight",
    title: "Confirm total plate weight",
    detail: "Needed to set exact loads for Weeks 6–8 (30–40 lb, 50 lb, 75 lb).",
  },
  {
    id: "setup-pack",
    title: "Sort the pack",
    detail:
      "Two kettlebells (20 + 30 lb) hit the 50 lb target exactly — wrap them in a towel, use a hiking pack with a hip belt, not a school backpack. A weight vest is the safer upgrade if there's budget.",
  },
];

// Weekly reflection survey — recurring, every Sunday. Tracked separately since
// it repeats; shown once per week inside that week's Sunday entry too.
const RECURRING_NOTE =
  "Weekly reflection survey is due every Sunday — track rounds, reps, dumbbell weight, pack weight, minutes stepped, run/swim duration, effort (easy / somewhat hard / very hard), and a one-word note on where you are in your cycle.";

function d(iso, label) {
  return { iso, label };
}

const WEEKS = [
  {
    number: 1,
    range: "Sep 14–20",
    type: "easy",
    typeLabel: "Easy · Baseline",
    note: "Baseline week. Set your 10-rep numbers, unweighted stepping.",
    days: [
      { date: d("2026-09-14", "Mon Sep 14"), sessions: [
        { title: "Circuit A", detail: "1 round, light — set baseline 10-rep numbers" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-09-15", "Tue Sep 15"), sessions: [
        { title: "Stair climb", detail: "2 × 5 min, unweighted — 24 cycles/min" },
      ]},
      { date: d("2026-09-16", "Wed Sep 16"), sessions: [
        { title: "Easy swim", detail: "20–30 min" },
        { title: "Full stretch routine", detail: "All 13 stretches" },
      ]},
      { date: d("2026-09-17", "Thu Sep 17"), sessions: [
        { title: "Easy run", detail: "20 min, conversational pace" },
      ]},
      { date: d("2026-09-18", "Fri Sep 18"), sessions: [
        { title: "Full stretch routine", detail: "" },
        { title: "Easy run", detail: "20 min" },
      ]},
      { date: d("2026-09-19", "Sat Sep 19"), sessions: [
        { title: "Circuit B", detail: "1 round, light — baseline numbers" },
      ]},
      { date: d("2026-09-20", "Sun Sep 20"), sessions: [
        { title: "Full rest", detail: "Light stretch only" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 2,
    range: "Sep 21–27",
    type: "normal",
    typeLabel: "Normal",
    note: "2 circuit rounds, reach 3×5 min stepping.",
    days: [
      { date: d("2026-09-21", "Mon Sep 21"), sessions: [
        { title: "Circuit A", detail: "2 rounds, 10 reps" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-09-22", "Tue Sep 22"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min, unweighted" },
        { title: "Easy run", detail: "20–25 min" },
      ]},
      { date: d("2026-09-23", "Wed Sep 23"), sessions: [
        { title: "Circuit B", detail: "2 rounds, 10 reps" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-09-24", "Thu Sep 24"), sessions: [
        { title: "Long easy run", detail: "20–25 min" },
      ]},
      { date: d("2026-09-25", "Fri Sep 25"), sessions: [
        { title: "Stair climb", detail: "2 × 5 min, unweighted" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-09-26", "Sat Sep 26"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "2 rounds" },
        { title: "Short easy run", detail: "20–25 min" },
      ]},
      { date: d("2026-09-27", "Sun Sep 27"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 3,
    range: "Sep 28–Oct 4",
    type: "normal",
    typeLabel: "Normal",
    note: "Pack weight begins (10 lb).",
    days: [
      { date: d("2026-09-28", "Mon Sep 28"), sessions: [
        { title: "Circuit A", detail: "2 rounds, 12 reps (or add weight and back to 10)" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-09-29", "Tue Sep 29"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min, unweighted" },
        { title: "Easy run", detail: "25 min" },
      ]},
      { date: d("2026-09-30", "Wed Sep 30"), sessions: [
        { title: "Circuit B", detail: "2 rounds" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-10-01", "Thu Oct 1"), sessions: [
        { title: "Long easy run", detail: "35 min" },
      ]},
      { date: d("2026-10-02", "Fri Oct 2"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 10 lb pack" },
        { title: "Easy swim", detail: "20–30 min (optional: add 4–6 × 25m harder effort)" },
      ]},
      { date: d("2026-10-03", "Sat Oct 3"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "2 rounds" },
        { title: "Short easy run", detail: "25 min" },
      ]},
      { date: d("2026-10-04", "Sun Oct 4"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 4,
    range: "Oct 5–11",
    type: "normal",
    typeLabel: "Normal",
    note: "Preferred Lab Visit #2 weekend (Oct 10–11).",
    days: [
      { date: d("2026-10-05", "Mon Oct 5"), sessions: [
        { title: "Circuit A", detail: "3 rounds, 10 reps" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-06", "Tue Oct 6"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 10 lb" },
        { title: "Easy run", detail: "25 min" },
      ]},
      { date: d("2026-10-07", "Wed Oct 7"), sessions: [
        { title: "Circuit B", detail: "3 rounds" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-10-08", "Thu Oct 8"), sessions: [
        { title: "Long easy run", detail: "40 min" },
      ]},
      { date: d("2026-10-09", "Fri Oct 9"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 20 lb" },
        { title: "Easy swim", detail: "20–30 min — last hard session if Lab Visit #2 is this weekend" },
      ]},
      { date: d("2026-10-10", "Sat Oct 10"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "3 rounds" },
        { title: "Short easy run", detail: "25 min" },
        { title: "Lab Visit #2 — preferred weekend", detail: "If booked Oct 10–11: stretch-only, skip the circuit/run above" },
      ]},
      { date: d("2026-10-11", "Sun Oct 11"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
        { title: "Lab Visit #2 — preferred weekend", detail: "If booked Oct 10–11" },
      ]},
    ],
  },
  {
    number: 5,
    range: "Oct 12–18",
    type: "easy",
    typeLabel: "Easy",
    note: "Alternate Lab Visit #2 weekend (Oct 17–18).",
    days: [
      { date: d("2026-10-12", "Mon Oct 12"), sessions: [
        { title: "Circuit A", detail: "1–2 rounds, light" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-13", "Tue Oct 13"), sessions: [
        { title: "Stair climb", detail: "2 × 5 min @ 10 lb (or unweighted)" },
      ]},
      { date: d("2026-10-14", "Wed Oct 14"), sessions: [
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-15", "Thu Oct 15"), sessions: [
        { title: "Easy run", detail: "25 min — skip or walk if you feel flat" },
      ]},
      { date: d("2026-10-16", "Fri Oct 16"), sessions: [
        { title: "Full stretch routine", detail: "" },
        { title: "Easy run", detail: "25 min" },
      ]},
      { date: d("2026-10-17", "Sat Oct 17"), sessions: [
        { title: "Circuit B", detail: "1–2 rounds, light" },
        { title: "Lab Visit #2 — alternate weekend", detail: "If booked Oct 17–18: stretch-only, skip the circuit above" },
      ]},
      { date: d("2026-10-18", "Sun Oct 18"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
        { title: "Lab Visit #2 — alternate weekend", detail: "If booked Oct 17–18" },
      ]},
    ],
  },
  {
    number: 6,
    range: "Oct 19–25",
    type: "normal",
    typeLabel: "Normal",
    note: "Pack to 30–40 lb.",
    days: [
      { date: d("2026-10-19", "Mon Oct 19"), sessions: [
        { title: "Circuit A", detail: "3 rounds, 10–12 reps" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-20", "Tue Oct 20"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 20 lb" },
        { title: "Easy run", detail: "25 min" },
      ]},
      { date: d("2026-10-21", "Wed Oct 21"), sessions: [
        { title: "Circuit B", detail: "3 rounds" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-10-22", "Thu Oct 22"), sessions: [
        { title: "Long easy run", detail: "45 min" },
      ]},
      { date: d("2026-10-23", "Fri Oct 23"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 30–40 lb" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-24", "Sat Oct 24"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "3 rounds" },
        { title: "Short easy run", detail: "25 min" },
      ]},
      { date: d("2026-10-25", "Sun Oct 25"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 7,
    range: "Oct 26–Nov 1",
    type: "normal",
    typeLabel: "Normal",
    note: "Pack to 50 lb — full guide target.",
    days: [
      { date: d("2026-10-26", "Mon Oct 26"), sessions: [
        { title: "Circuit A", detail: "3 rounds — add weight where reps came easy" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-27", "Tue Oct 27"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 30 lb" },
        { title: "Easy run", detail: "30 min" },
      ]},
      { date: d("2026-10-28", "Wed Oct 28"), sessions: [
        { title: "Circuit B", detail: "3 rounds" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-10-29", "Thu Oct 29"), sessions: [
        { title: "Long easy run", detail: "50 min" },
      ]},
      { date: d("2026-10-30", "Fri Oct 30"), sessions: [
        { title: "Stair climb", detail: "3 × 5 min @ 50 lb — full pack target" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-10-31", "Sat Oct 31"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "3 rounds" },
        { title: "Short easy run", detail: "30 min" },
      ]},
      { date: d("2026-11-01", "Sun Nov 1"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 8,
    range: "Nov 2–8",
    type: "normal",
    typeLabel: "Normal",
    note: "75 lb total, 3-min intervals.",
    days: [
      { date: d("2026-11-02", "Mon Nov 2"), sessions: [
        { title: "Circuit A", detail: "3 rounds, 12 reps" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-11-03", "Tue Nov 3"), sessions: [
        { title: "Stair climb", detail: "3 × 3 min @ ~75 lb (50 lb pack + 10–15 lb each hand)" },
        { title: "Easy run", detail: "25 min" },
      ]},
      { date: d("2026-11-04", "Wed Nov 4"), sessions: [
        { title: "Circuit B", detail: "3 rounds" },
        { title: "Full stretch routine", detail: "" },
      ]},
      { date: d("2026-11-05", "Thu Nov 5"), sessions: [
        { title: "Long easy run", detail: "45 min" },
      ]},
      { date: d("2026-11-06", "Fri Nov 6"), sessions: [
        { title: "Stair climb", detail: "3 × 3 min @ 75 lb" },
        { title: "Easy swim", detail: "20–30 min" },
      ]},
      { date: d("2026-11-07", "Sat Nov 7"), sessions: [
        { title: "Circuit (alternate A/B)", detail: "3 rounds" },
        { title: "Short easy run", detail: "25 min" },
      ]},
      { date: d("2026-11-08", "Sun Nov 8"), sessions: [
        { title: "Full rest", detail: "" },
        { title: "Weekly survey", detail: RECURRING_NOTE },
      ]},
    ],
  },
  {
    number: 9,
    range: "Nov 9–15",
    type: "taper",
    typeLabel: "Easy + Taper",
    note: "Lab Visit #3 (Nov 14–15). Don't add work to compensate if this also lands as an easy cycle week.",
    days: [
      { date: d("2026-11-09", "Mon Nov 9"), sessions: [
        { title: "Stair climb", detail: "2 × 3 min @ 75 lb" },
        { title: "Easy swim", detail: "" },
      ]},
      { date: d("2026-11-10", "Tue Nov 10"), sessions: [
        { title: "Easy run", detail: "20 min" },
      ]},
      { date: d("2026-11-11", "Wed Nov 11"), sessions: [
        { title: "Stair climb", detail: "1 × 3 min @ 50 lb" },
      ]},
      { date: d("2026-11-12", "Thu Nov 12"), sessions: [
        { title: "Easy swim", detail: "20 min" },
      ]},
      { date: d("2026-11-13", "Fri Nov 13"), sessions: [
        { title: "Full stretch routine", detail: "" },
        { title: "Easy walk", detail: "10 min" },
      ]},
      { date: d("2026-11-14", "Sat Nov 14"), sessions: [
        { title: "Lab Visit #3", detail: "" },
      ]},
      { date: d("2026-11-15", "Sun Nov 15"), sessions: [
        { title: "Lab Visit #3", detail: "" },
      ]},
    ],
  },
];

const STRETCHES = [
  "Knee to Chest",
  "Knee to Chest, Leg Straight",
  "Knee to Chest Diagonal",
  "Leg Cross",
  "Side Quadricep",
  "Butterfly",
  "Straddle",
  "Cross Over",
  "Calf",
  "Upper Back",
  "Chest",
  "Triceps",
  "Forearm",
];

const CIRCUIT_A = [
  { ex: "Goblet Squat", load: "20 lb KB → 30 lb KB", events: "Stair climb, hose drag, ladder raise, rescue" },
  { ex: "DB Floor Press", load: "Spinlock DBs", events: "Ladder raise, forcible entry, search, ceiling breach/pull" },
  { ex: "Band Lat Pulldown", load: "Light → hard band", events: "Hose pull, ladder extension, ceiling breach/pull" },
  { ex: "Split-Squats", load: "8 lb DBs → spinlock", events: "Stair climb, hose drag, ladder raise, forcible entry, search, rescue" },
  { ex: "Single-Arm KB Row", load: "20 lb KB", events: "Hose pull, forcible entry, rescue, ceiling breach/pull" },
  { ex: "DB Military Press", load: "8 lb DBs → spinlock", events: "Ladder raise, search, ceiling breach/pull" },
  { ex: "KB Romanian Deadlift", load: "30 lb KB, both hands", events: "Stair climb, hose pull, ladder raise, rescue" },
  { ex: "Farmer's Carry — 40m out and back", load: "Both KBs (50 lb)", events: "Equipment carry, hose drag" },
  { ex: "Overhead DB Triceps Extension", load: "8 lb DB, both hands", events: "Ladder raise, forcible entry, ceiling breach/pull" },
  { ex: "Abdominal Curls", load: "Bodyweight", events: "All events" },
  { ex: "Swimmers", load: "Bodyweight", events: "All events" },
  { ex: "DB Wrist Curls + tennis ball squeezes", load: "8 lb DBs", events: "Hose drag, equipment carry, ladder extension" },
];

const CIRCUIT_B = [
  { ex: "Chair Squats", note: "Lower until you barely touch the seat, then stand" },
  { ex: "Push Ups", note: "Upper arms at least parallel at the bottom, body in one line" },
  { ex: "Split-Squats", note: "Back foot ~26\" back, knee lowers straight down" },
  { ex: "Chin Ups", note: "Palms facing you, hands ~6\" apart, no kicking or swinging" },
  { ex: "Bench Steps", note: "6\"–18\" high. Start low, build. Never above 18\"" },
  { ex: "Dips", note: "Hands behind on a chair, upper arms to parallel, feet clear of the floor" },
  { ex: "Squat Thrusts", note: "Squat → hands down → feet back to push-up position → reverse. One rep" },
  { ex: "Abdominal Curls", note: "Same cues as Circuit A" },
  { ex: "Swimmers", note: "Opposite arm and leg, moderate cadence" },
  { ex: "Tennis ball squeezes", note: "Both hands" },
];

const CHIN_UP_PROGRESSION = [
  { id: "chinup-1", label: "Thickest band, both feet in the loop" },
  { id: "chinup-2", label: "Thickest band, one knee in the loop" },
  { id: "chinup-3", label: "Thinner band, both feet" },
  { id: "chinup-4", label: "Thinner band, one knee" },
  { id: "chinup-5", label: "Unassisted, singles, adding one rep at a time" },
];

const PACK_LOADING = [
  { target: "10 lb", contents: "Two 8 lb DBs (16 lb) or loose plates" },
  { target: "20 lb", contents: "20 lb kettlebell" },
  { target: "30 lb", contents: "30 lb kettlebell" },
  { target: "40 lb", contents: "30 lb KB + plates" },
  { target: "50 lb", contents: "Both kettlebells — 20 + 30 = exactly 50 lb" },
  { target: "Hand weights", contents: "Spinlock DBs loaded to ~12 lb each" },
];

const PRINCIPLES = [
  { title: "Adaptation", body: "The body adjusts to overload in small increments. Progress depends on rest, consistency, nutrition, and genetics." },
  { title: "Overload", body: "Adaptation only happens when demand exceeds what you're used to. Generally above 75% of maximal effort, not 100%." },
  { title: "Progression", body: "Increases must be gradual and small, or you outrun your recovery." },
  { title: "Specificity", body: "You adapt to exactly what you do. Bench pressing doesn't improve sit-ups — this is why the weighted stair climb sits at the centre and the runs stay easy." },
];

const CAUTIONS = [
  "Leg extensions should not be performed by anyone who has had reconstructive knee surgery. None appear in this program, but the caution applies to loaded knee work generally.",
  "Bench steps: never above 18 inches. Use a wall or partner until balance is solid.",
  "Stretching should feel good. Pain means stop.",
  "Not to failure. Overload the muscle, don't break it.",
  "Ten sessions across six days is a real load. If sleep quality drops, resting heart rate climbs, or motivation falls off for more than a few days, cut a run before you cut a stair session.",
  "This is a training plan assembled from the IAFF guide, not medical advice. Pain beyond ordinary muscle soreness is worth raising with the research team and, if it persists, a clinician.",
];

const muscleGroups = [
  "Benen",
  "Core",
  "Rug",
  "Borst",
  "Schouders",
  "Armen",
  "Mobiliteit"
];

const exercises = [
  {
    name: "Goblet squat",
    demo: "squat",
    groups: ["Benen", "Core"],
    equipment: "Dumbbell",
    prescription: "3 sets van 10-15 herhalingen",
    cue: "Houd 1 dumbbell voor je borst, zak rustig 3 tellen en duw krachtig omhoog.",
    youtube: "https://www.youtube.com/results?search_query=goblet+squat+proper+form"
  },
  {
    name: "Reverse lunge",
    demo: "lunge",
    groups: ["Benen", "Core"],
    equipment: "Lichaamsgewicht of dumbbells",
    prescription: "3 sets van 8-12 per been",
    cue: "Stap naar achteren, houd je romp hoog en duw via je voorste voet terug.",
    youtube: "https://www.youtube.com/results?search_query=reverse+lunge+proper+form"
  },
  {
    name: "Single-leg Romanian deadlift",
    demo: "hinge",
    groups: ["Benen", "Rug", "Core"],
    equipment: "Dumbbells",
    prescription: "3 sets van 8-10 per been",
    cue: "Scharnier vanuit je heupen, houd je rug lang en beweeg langzaam.",
    youtube: "https://www.youtube.com/results?search_query=single+leg+romanian+deadlift+dumbbell+form"
  },
  {
    name: "Push-up",
    demo: "pushup",
    groups: ["Borst", "Schouders", "Armen", "Core"],
    equipment: "Lichaamsgewicht",
    prescription: "3 sets van 6-15",
    cue: "Span buik en billen aan. Maak hem lichter op knieën of handen hoger.",
    youtube: "https://www.youtube.com/results?search_query=push+up+proper+form"
  },
  {
    name: "Dumbbell floor press",
    demo: "press",
    groups: ["Borst", "Armen"],
    equipment: "Dumbbells",
    prescription: "3 sets van 10-15",
    cue: "Lig op de vloer, ellebogen gecontroleerd omlaag, duw boven je borst uit.",
    youtube: "https://www.youtube.com/results?search_query=dumbbell+floor+press+proper+form"
  },
  {
    name: "One-arm dumbbell row",
    demo: "row",
    groups: ["Rug", "Armen", "Core"],
    equipment: "Dumbbell",
    prescription: "3 sets van 10-15 per arm",
    cue: "Steun op knie of camperrand, trek je elleboog naar je heup.",
    youtube: "https://www.youtube.com/results?search_query=one+arm+dumbbell+row+proper+form"
  },
  {
    name: "Prone Y-T-W raises",
    demo: "raise",
    groups: ["Rug", "Schouders"],
    equipment: "Lichaamsgewicht",
    prescription: "2 sets van 6 Y, 6 T, 6 W",
    cue: "Lig op je buik en knijp je schouderbladen rustig naar elkaar.",
    youtube: "https://www.youtube.com/results?search_query=prone+y+t+w+raises+form"
  },
  {
    name: "Pike push-up",
    demo: "pike",
    groups: ["Schouders", "Armen", "Core"],
    equipment: "Lichaamsgewicht",
    prescription: "3 sets van 5-10",
    cue: "Heupen hoog, hoofd richting vloer, duw jezelf terug met controle.",
    youtube: "https://www.youtube.com/results?search_query=pike+push+up+proper+form"
  },
  {
    name: "Plank shoulder tap",
    demo: "plank",
    groups: ["Core", "Schouders"],
    equipment: "Lichaamsgewicht",
    prescription: "3 sets van 20-40 taps",
    cue: "Houd je heupen stil terwijl je om en om je schouder aantikt.",
    youtube: "https://www.youtube.com/results?search_query=plank+shoulder+taps+form"
  },
  {
    name: "Dead bug",
    demo: "deadbug",
    groups: ["Core"],
    equipment: "Lichaamsgewicht",
    prescription: "3 sets van 8-12 per kant",
    cue: "Druk je onderrug licht in de grond en beweeg arm en been langzaam weg.",
    youtube: "https://www.youtube.com/results?search_query=dead+bug+exercise+proper+form"
  },
  {
    name: "Side plank",
    demo: "sideplank",
    groups: ["Core"],
    equipment: "Lichaamsgewicht",
    prescription: "2-3 sets van 20-45 sec per kant",
    cue: "Maak een rechte lijn van enkels tot kruin. Zak niet in je schouder.",
    youtube: "https://www.youtube.com/results?search_query=side+plank+proper+form"
  },
  {
    name: "Glute bridge march",
    demo: "bridge",
    groups: ["Benen", "Core"],
    equipment: "Lichaamsgewicht",
    prescription: "3 sets van 16-24 stappen",
    cue: "Houd je heupen hoog en wissel langzaam van been.",
    youtube: "https://www.youtube.com/results?search_query=glute+bridge+march+form"
  },
  {
    name: "Couch stretch",
    demo: "stretch",
    groups: ["Mobiliteit", "Benen"],
    equipment: "Lichaamsgewicht",
    prescription: "60-90 sec per kant",
    cue: "Open je heupbuigers na veel wandelen, fietsen of zitten.",
    youtube: "https://www.youtube.com/results?search_query=couch+stretch+hip+flexor"
  },
  {
    name: "World's greatest stretch",
    demo: "stretch",
    groups: ["Mobiliteit", "Core", "Benen"],
    equipment: "Lichaamsgewicht",
    prescription: "5 langzame rondes per kant",
    cue: "Lunge, hand naar de grond, roteer open en adem rustig door.",
    youtube: "https://www.youtube.com/results?search_query=world%27s+greatest+stretch+form"
  },
  {
    name: "Thoracic open book",
    demo: "rotate",
    groups: ["Mobiliteit", "Rug"],
    equipment: "Lichaamsgewicht",
    prescription: "8-10 herhalingen per kant",
    cue: "Draai vanuit je bovenrug, niet vanuit je onderrug.",
    youtube: "https://www.youtube.com/results?search_query=thoracic+open+book+stretch"
  }
];

const state = {
  selectedGroups: new Set(["Benen", "Core", "Rug"]),
  duration: 20,
  useDumbbells: true,
  currentWorkout: []
};

const storageKey = "camper-fit-progress-v1";
const defaultProgress = {
  xp: 0,
  completedDates: [],
  sessions: []
};

let progress = loadProgress();

function loadProgress() {
  try {
    return { ...defaultProgress, ...JSON.parse(localStorage.getItem(storageKey)) };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function isoDate(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function weekStart(date = new Date()) {
  const copy = new Date(date);
  const day = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - day);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function sessionsThisWeek() {
  const start = weekStart();
  return progress.sessions.filter((session) => new Date(session.date) >= start).length;
}

function calculateStreak() {
  const dates = new Set(progress.completedDates);
  let streak = 0;
  const cursor = new Date();

  while (dates.has(isoDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  if (streak === 0) {
    cursor.setDate(cursor.getDate() - 1);
    while (dates.has(isoDate(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
  }

  return streak;
}

function levelFromXp(xp) {
  return Math.floor(xp / 120) + 1;
}

function trainingStage() {
  const completed = progress.sessions.length;
  if (completed >= 18) {
    return {
      name: "Sterk niveau",
      label: "Zwaar",
      note: "Extra set of moeilijkere variant. Houd de laatste herhalingen uitdagend maar netjes.",
      suffix: "Plus: voeg 1 set toe of kies een zwaardere variant. Rust 45-60 sec."
    };
  }
  if (completed >= 9) {
    return {
      name: "Tempo niveau",
      label: "Tempo",
      note: "Zelfde oefeningen, maar rustiger zakken en iets minder rust. Dit maakt 5 kg ineens serieuzer.",
      suffix: "Tempo: 3 sec zakken, 1 sec pauze. Rust 45-60 sec."
    };
  }
  if (completed >= 4) {
    return {
      name: "Opbouw niveau",
      label: "Meer reps",
      note: "Je blijft technisch strak, maar mikt op de bovenkant van de herhalingsrange.",
      suffix: "Opbouw: mik op de hoogste reps uit de range. Rust 60 sec."
    };
  }
  return {
    name: "Basisniveau",
    label: "Basis",
    note: "Start met nette techniek en stop met 1-2 herhalingen over. Eerst ritme, dan zwaarder.",
    suffix: "Basis: leer de beweging. Rust 60-75 sec."
  };
}

function progressedPrescription(exercise) {
  return `${exercise.prescription}. ${trainingStage().suffix}`;
}

function demoMarkup(exercise) {
  return `
    <div class="exercise-demo demo-${exercise.demo}" aria-hidden="true">
      <span class="demo-head"></span>
      <span class="demo-body"></span>
      <span class="demo-arm demo-arm-a"></span>
      <span class="demo-arm demo-arm-b"></span>
      <span class="demo-leg demo-leg-a"></span>
      <span class="demo-leg demo-leg-b"></span>
      <span class="demo-weight demo-weight-a"></span>
      <span class="demo-weight demo-weight-b"></span>
      <span class="demo-floor"></span>
    </div>
  `;
}

function updateStats() {
  const weekly = sessionsThisWeek();
  const stage = trainingStage();
  const ring = document.querySelector("#week-ring");
  const percent = Math.min(weekly / 3, 1);
  ring.style.strokeDashoffset = String(314 - 314 * percent);
  document.querySelector("#week-count").textContent = `${weekly}/3`;
  document.querySelector("#streak").textContent = `${calculateStreak()} dagen`;
  document.querySelector("#xp").textContent = String(progress.xp);
  document.querySelector("#level").textContent = String(levelFromXp(progress.xp));
  document.querySelector("#training-stage").textContent = stage.name;
  document.querySelector("#training-progression").textContent = stage.note;

  const todayDone = progress.completedDates.includes(isoDate());
  document.querySelector("#daily-title").textContent = todayDone ? "Vandaag gewonnen" : "Kies je sessie";
  document.querySelector("#daily-subtitle").textContent = todayDone
    ? "Mooi. Morgen telt een mobiliteitsblokje ook mee om je ritme warm te houden."
    : "Hou het klein genoeg om te starten en stevig genoeg om sterker te worden.";
}

function renderMuscleChips() {
  const container = document.querySelector("#muscle-chips");
  container.innerHTML = "";
  muscleGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state.selectedGroups.has(group) ? "active" : ""}`;
    button.textContent = group;
    button.addEventListener("click", () => {
      if (state.selectedGroups.has(group)) {
        state.selectedGroups.delete(group);
      } else {
        state.selectedGroups.add(group);
      }
      if (state.selectedGroups.size === 0) state.selectedGroups.add(group);
      renderMuscleChips();
    });
    container.append(button);
  });
}

function renderLibraryFilter() {
  const select = document.querySelector("#library-filter");
  muscleGroups.forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    select.append(option);
  });
  select.addEventListener("change", renderExerciseLibrary);
}

function renderExerciseLibrary() {
  const filter = document.querySelector("#library-filter").value;
  const container = document.querySelector("#exercise-list");
  container.innerHTML = "";
  const filtered = filter === "all"
    ? exercises
    : exercises.filter((exercise) => exercise.groups.includes(filter));

  filtered.forEach((exercise) => {
    const card = document.createElement("article");
    card.className = "exercise-card";
    card.innerHTML = `
      ${demoMarkup(exercise)}
      <div>
        <h3>${exercise.name}</h3>
        <p class="meta">${progressedPrescription(exercise)} · ${exercise.equipment}</p>
      </div>
      <p class="meta">${exercise.cue}</p>
      <div class="exercise-tags">${exercise.groups.map((group) => `<span>${group}</span>`).join("")}</div>
      <div class="exercise-actions">
        <a href="${exercise.youtube}" target="_blank" rel="noreferrer">Bekijk video</a>
      </div>
    `;
    container.append(card);
  });
}

function matchingExercises() {
  const selected = [...state.selectedGroups];
  return exercises.filter((exercise) => {
    const groupMatch = exercise.groups.some((group) => selected.includes(group));
    const equipmentMatch = state.useDumbbells || exercise.equipment === "Lichaamsgewicht";
    return groupMatch && equipmentMatch;
  });
}

function makeWorkout() {
  const pool = matchingExercises();
  const targets = ["Benen", "Rug", "Borst", "Schouders", "Core", "Mobiliteit"];
  const wantedCount = state.duration === 12 ? 5 : state.duration === 20 ? 6 : 7;
  const selected = [];

  targets.forEach((target) => {
    const candidate = pool.find((exercise) => exercise.groups.includes(target) && !selected.includes(exercise));
    if (candidate && selected.length < wantedCount) selected.push(candidate);
  });

  pool.forEach((exercise) => {
    if (!selected.includes(exercise) && selected.length < wantedCount) selected.push(exercise);
  });

  return selected;
}

function renderWorkout(workout = makeWorkout()) {
  state.currentWorkout = workout;
  const list = document.querySelector("#workout-list");
  const xp = state.duration === 12 ? 25 : state.duration === 20 ? 35 : 50;
  list.innerHTML = "";
  workout.forEach((exercise) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div class="workout-item">
        ${demoMarkup(exercise)}
        <div>
          <h3>${exercise.name}</h3>
          <p class="meta">${progressedPrescription(exercise)}</p>
          <p class="meta">${exercise.cue}</p>
          <a class="video-link" href="${exercise.youtube}" target="_blank" rel="noreferrer">Video techniek</a>
        </div>
      </div>
    `;
    list.append(item);
  });

  document.querySelector("#session-title").textContent = `${state.duration} minuten · ${trainingStage().label} · ${[...state.selectedGroups].join(", ")}`;
  document.querySelector("#session-xp").textContent = `+${xp} XP`;
  document.querySelector("#session-panel").classList.remove("hidden");
  document.querySelector("#session-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function completeSession() {
  const today = isoDate();
  const xp = state.duration === 12 ? 25 : state.duration === 20 ? 35 : 50;
  progress.xp += xp;
  if (!progress.completedDates.includes(today)) {
    progress.completedDates.push(today);
  }
  progress.sessions.push({
    date: new Date().toISOString(),
    duration: state.duration,
    stage: trainingStage().name,
    groups: [...state.selectedGroups],
    exercises: state.currentWorkout.map((exercise) => exercise.name)
  });
  saveProgress();
  updateStats();
  document.querySelector("#complete-session").textContent = "Opgeslagen";
  setTimeout(() => {
    document.querySelector("#complete-session").textContent = "Training gedaan";
  }, 1400);
}

function surpriseMe() {
  const presets = [
    ["Benen", "Core"],
    ["Rug", "Schouders", "Core"],
    ["Borst", "Armen", "Core"],
    ["Mobiliteit", "Benen", "Rug"],
    ["Benen", "Rug", "Borst", "Core"]
  ];
  const pick = presets[Math.floor(Math.random() * presets.length)];
  state.selectedGroups = new Set(pick);
  renderMuscleChips();
  renderWorkout();
}

function bindControls() {
  document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());

  document.querySelectorAll("#duration-control button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("#duration-control button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.duration = Number(button.dataset.duration);
    });
  });

  document.querySelector("#use-dumbbells").addEventListener("change", (event) => {
    state.useDumbbells = event.target.checked;
  });

  document.querySelector("#start-session").addEventListener("click", () => renderWorkout());
  document.querySelector("#complete-session").addEventListener("click", completeSession);
  document.querySelector("#surprise-me").addEventListener("click", surpriseMe);
  document.querySelector("#reset-demo").addEventListener("click", () => {
    progress = { ...defaultProgress, completedDates: [], sessions: [] };
    saveProgress();
    updateStats();
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

renderMuscleChips();
renderLibraryFilter();
renderExerciseLibrary();
bindControls();
updateStats();

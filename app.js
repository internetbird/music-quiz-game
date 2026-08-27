/* Classical Music Quiz Game — app logic
   No build step, no fetch/import — plain script so it runs from a double-clicked
   index.html with zero setup. Content lives in data.js (window.QUIZ_DATA / window.STRINGS).
*/
(function () {
  "use strict";

  var QUIZ_DATA = window.QUIZ_DATA;
  var ENCORE = window.QUIZ_DATA.finalEncore;
  var STRINGS = window.STRINGS;
  var STORAGE_KEY = "cmq_state_v1";
  var LANG_KEY = "cmq_lang_v1";
  var GENRE_ORDER = ["classical", "pop", "rock", "israeli"];
  var TEAM_COLORS = ["#e8c574", "#5eb0d6", "#e0665f", "#8e7fd6", "#4caf7d", "#e08fc0"];
  var GAME_SCREENS = {
    "screen-board": true,
    "screen-question": true,
    "screen-reveal": true,
    "screen-wager": true,
    "screen-encore-question": true,
    "screen-encore-resolve": true
  };

  var STATE = {
    lang: "he",
    teams: [],
    selectedGenres: ["classical"],
    activeRounds: [],
    roundIndex: 0,
    done: new Set(),
    wagers: {},
    encoreResults: {},
    persistedScreen: "board",
    current: null,
    timerHandle: null,
    timeLeft: 30
  };

  var els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheEls();
    wireEvents();

    STATE.lang = loadLang();
    applyDocumentDirection();

    var resumed = loadPersisted();
    if (resumed && STATE.teams.length) {
      els.resumeBanner.style.display = "";
    } else {
      ensureDefaultTeams();
    }
    applyStaticStrings();
    renderSetupTeams();
    renderGenreOptions();
    showScreen("screen-setup");
  }

  function cacheEls() {
    [
      "lang-toggle",
      "genre-heading", "genre-options",
      "team-list", "btn-add-team", "btn-start-game", "resume-banner", "resume-banner-text", "btn-resume", "btn-cancel-game",
      "setup-eyebrow", "setup-title", "setup-tagline", "setup-teams-heading", "setup-hint",
      "round-title", "board-grid", "btn-end-round",
      "q-category", "q-points", "q-prompt", "q-audio-wrap", "q-audio", "q-image-wrap", "q-image", "q-options",
      "timer-display", "btn-timer", "btn-reveal",
      "r-category", "r-points", "r-prompt", "r-image-wrap", "r-image", "r-options", "r-fact", "r-fact-label", "award-title", "award-buttons", "btn-back-to-board",
      "wager-eyebrow", "wager-heading", "wager-tagline", "wager-list", "btn-lock-wagers",
      "encore-q-eyebrow", "e-prompt", "e-options", "btn-encore-reveal",
      "e-prompt2", "e-options2", "e-fact", "e-fact-label", "mark-wagers-title", "encore-resolve-list", "btn-show-podium",
      "end-eyebrow", "end-heading", "podium", "btn-new-game", "global-scoreboard"
    ].forEach(function (id) {
      els[toCamel(id)] = document.getElementById(id);
    });
  }

  function toCamel(id) {
    return id.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  }

  function wireEvents() {
    els.langToggle.addEventListener("click", toggleLanguage);
    els.btnAddTeam.addEventListener("click", addTeam);
    els.btnStartGame.addEventListener("click", startGame);
    els.btnResume.addEventListener("click", resumeGame);
    els.btnCancelGame.addEventListener("click", newGame);
    els.btnEndRound.addEventListener("click", endRound);
    els.btnTimer.addEventListener("click", toggleTimer);
    els.btnReveal.addEventListener("click", revealAnswer);
    els.btnBackToBoard.addEventListener("click", backToBoard);
    els.btnLockWagers.addEventListener("click", lockWagers);
    els.btnEncoreReveal.addEventListener("click", revealEncore);
    els.btnShowPodium.addEventListener("click", showPodium);
    els.btnNewGame.addEventListener("click", newGame);
  }

  /* ---------------- language ---------------- */

  function loadLang() {
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === "he" || saved === "en") return saved;
    } catch (e) { /* ignore */ }
    return "he";
  }

  function persistLang() {
    try { localStorage.setItem(LANG_KEY, STATE.lang); } catch (e) { /* ignore */ }
  }

  function applyDocumentDirection() {
    document.documentElement.lang = STATE.lang;
    document.documentElement.dir = STATE.lang === "he" ? "rtl" : "ltr";
  }

  function toggleLanguage() {
    STATE.lang = STATE.lang === "he" ? "en" : "he";
    persistLang();
    applyDocumentDirection();
    retranslateDefaultTeamNames();
    applyStaticStrings();
    refreshCurrentScreenText();
    renderGlobalScoreboard();
  }

  function retranslateDefaultTeamNames() {
    STATE.teams.forEach(function (team, i) {
      if (team.isDefaultName) team.name = s().teamWord + " " + (i + 1);
    });
  }

  function t(field) { return field[STATE.lang]; }

  function s() { return STRINGS[STATE.lang]; }

  function applyStaticStrings() {
    var strs = s();
    els.langToggle.textContent = strs.langToggleLabel;
    els.setupEyebrow.textContent = strs.setupEyebrow;
    els.setupTitle.textContent = strs.setupTitle;
    els.setupTagline.textContent = strs.setupTagline;
    els.resumeBannerText.textContent = strs.resumeBannerText;
    els.btnResume.textContent = strs.resumeGame;
    els.btnCancelGame.textContent = strs.cancelGame;
    els.genreHeading.textContent = strs.chooseGenres;
    els.setupTeamsHeading.textContent = strs.teamsHeading;
    els.btnAddTeam.textContent = strs.addTeam;
    els.btnStartGame.textContent = strs.startGame;
    els.setupHint.textContent = strs.setupHint;
    els.btnReveal.textContent = strs.revealAnswer;
    els.rFactLabel.textContent = strs.didYouKnow;
    els.awardTitle.textContent = strs.awardTitle;
    els.btnBackToBoard.textContent = strs.backToBoard;
    els.wagerEyebrow.textContent = strs.finalEncoreEyebrow;
    els.wagerHeading.textContent = strs.wagerRoundTitle;
    els.wagerTagline.textContent = strs.wagerTagline;
    els.btnLockWagers.textContent = strs.lockWagers;
    els.encoreQEyebrow.textContent = strs.finalEncoreEyebrow;
    els.eFactLabel.textContent = strs.didYouKnow;
    els.markWagersTitle.textContent = strs.markWagers;
    els.btnShowPodium.textContent = strs.showResults;
    els.endEyebrow.textContent = strs.bravo;
    els.endHeading.textContent = strs.finalResults;
    els.btnNewGame.textContent = strs.newGame;
    updateTimerButtonText();
  }

  function refreshCurrentScreenText() {
    var active = document.querySelector(".screen.active");
    if (!active) return;
    switch (active.id) {
      case "screen-setup": renderSetupTeams(); renderGenreOptions(); break;
      case "screen-board": renderBoard(); break;
      case "screen-question": populateQuestionText(); break;
      case "screen-reveal": populateRevealText(); break;
      case "screen-wager": renderWagerScreen(); break;
      case "screen-encore-question": populateEncoreQuestionText(); break;
      case "screen-encore-resolve": populateEncoreResolveText(); break;
      case "screen-end": showPodium(); break;
    }
  }

  /* ---------------- persistence ---------------- */

  function persist() {
    var data = {
      teams: STATE.teams,
      selectedGenres: STATE.selectedGenres,
      roundIndex: STATE.roundIndex,
      done: Array.from(STATE.done),
      wagers: STATE.wagers,
      encoreResults: STATE.encoreResults,
      screen: STATE.persistedScreen
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { /* ignore quota errors */ }
  }

  function loadPersisted() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data.teams || !data.teams.length) return false;
      STATE.teams = data.teams;
      STATE.selectedGenres = (data.selectedGenres && data.selectedGenres.length) ? data.selectedGenres : ["classical"];
      STATE.activeRounds = buildActiveRounds(STATE.selectedGenres);
      STATE.roundIndex = data.roundIndex || 0;
      STATE.done = new Set(data.done || []);
      STATE.wagers = data.wagers || {};
      STATE.encoreResults = data.encoreResults || {};
      STATE.persistedScreen = data.screen || "board";
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---------------- genre selection ---------------- */

  function buildActiveRounds(selectedGenres) {
    var rounds = [];
    GENRE_ORDER.forEach(function (g) {
      if (selectedGenres.indexOf(g) === -1) return;
      rounds = rounds.concat(QUIZ_DATA.genres[g].rounds);
    });
    var musicianCategories = GENRE_ORDER
      .filter(function (g) { return selectedGenres.indexOf(g) !== -1; })
      .map(function (g) {
        var genre = QUIZ_DATA.genres[g];
        return { icon: genre.icon, name: genre.name, questions: QUIZ_DATA.musicianPhotos[g] };
      });
    rounds.push({ name: QUIZ_DATA.musicianRoundName, categories: musicianCategories });
    return rounds;
  }

  function renderGenreOptions() {
    els.genreOptions.innerHTML = "";
    GENRE_ORDER.forEach(function (g) {
      var genre = QUIZ_DATA.genres[g];
      var checked = STATE.selectedGenres.indexOf(g) !== -1;
      var row = document.createElement("label");
      row.className = "genre-row" + (checked ? " checked" : "");
      row.innerHTML =
        '<input type="checkbox" data-genre="' + g + '"' + (checked ? " checked" : "") + '>' +
        '<span class="genre-icon">' + genre.icon + '</span>' +
        '<span class="genre-label">' + escapeHtml(t(genre.name)) + '</span>';
      els.genreOptions.appendChild(row);
    });
    var checkboxes = els.genreOptions.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener("change", onGenreToggle);
    }
  }

  function onGenreToggle(e) {
    var g = e.target.dataset.genre;
    if (e.target.checked) {
      if (STATE.selectedGenres.indexOf(g) === -1) STATE.selectedGenres.push(g);
    } else {
      if (STATE.selectedGenres.length <= 1) {
        e.target.checked = true;
        return;
      }
      STATE.selectedGenres = STATE.selectedGenres.filter(function (x) { return x !== g; });
    }
    renderGenreOptions();
  }

  function resumeGame() {
    var screen = STATE.persistedScreen || "board";
    if (screen === "wager") {
      renderWagerScreen();
      showScreen("screen-wager");
    } else if (screen === "end") {
      showPodium();
    } else {
      renderBoard();
      showScreen("screen-board");
    }
  }

  /* ---------------- helpers ---------------- */

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function tileKey(ri, ci, qi) { return "r" + ri + "c" + ci + "q" + qi; }

  function teamColor(index) { return TEAM_COLORS[index % TEAM_COLORS.length]; }

  function showScreen(id) {
    var sections = document.querySelectorAll(".screen");
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.toggle("active", sections[i].id === id);
    }
    document.body.classList.toggle("in-game", !!GAME_SCREENS[id]);
    renderGlobalScoreboard();
    window.scrollTo(0, 0);
  }

  function renderGlobalScoreboard() {
    els.globalScoreboard.innerHTML = "";
    STATE.teams.forEach(function (team, i) {
      var chip = document.createElement("div");
      chip.className = "score-chip";
      chip.innerHTML =
        '<span class="swatch" style="background:' + teamColor(i) + '"></span>' +
        escapeHtml(team.name) + " <b>" + team.score + "</b>";
      els.globalScoreboard.appendChild(chip);
    });
  }

  function renderOptions(container, options, correctIndex) {
    container.innerHTML = "";
    var letters = s().optionLetters;
    options.forEach(function (opt, i) {
      var div = document.createElement("div");
      var cls = "option";
      if (correctIndex !== null && correctIndex !== undefined) {
        cls += i === correctIndex ? " correct" : " incorrect-hint";
      }
      div.className = cls;
      div.innerHTML = '<span class="opt-letter">' + letters[i] + "</span>" + escapeHtml(opt);
      container.appendChild(div);
    });
  }

  /* ---------------- setup screen ---------------- */

  function newTeam(name) {
    return { id: "t" + Date.now() + Math.random().toString(36).slice(2, 7), name: name, score: 0, isDefaultName: true };
  }

  function ensureDefaultTeams() {
    if (!STATE.teams.length) {
      STATE.teams.push(newTeam(s().teamWord + " 1"));
      STATE.teams.push(newTeam(s().teamWord + " 2"));
    }
  }

  function renderSetupTeams() {
    els.teamList.innerHTML = "";
    var removeTitle = s().removeTeamTitle;
    STATE.teams.forEach(function (team, i) {
      var row = document.createElement("div");
      row.className = "team-row";
      row.innerHTML =
        '<span class="swatch" style="background:' + teamColor(i) + '"></span>' +
        '<input type="text" maxlength="24" data-id="' + team.id + '" value="' + escapeHtml(team.name) + '">' +
        '<button type="button" class="btn-remove" data-id="' + team.id + '" title="' + escapeHtml(removeTitle) + '"' +
        (STATE.teams.length <= 2 ? " disabled" : "") + ">&times;</button>";
      els.teamList.appendChild(row);
    });

    var inputs = els.teamList.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", onTeamNameInput);
    }
    var removeBtns = els.teamList.querySelectorAll(".btn-remove");
    for (var j = 0; j < removeBtns.length; j++) {
      removeBtns[j].addEventListener("click", onRemoveTeam);
    }
    els.btnAddTeam.disabled = STATE.teams.length >= 6;
  }

  function onTeamNameInput(e) {
    var team = STATE.teams.filter(function (x) { return x.id === e.target.dataset.id; })[0];
    if (team) {
      team.name = e.target.value;
      team.isDefaultName = false;
    }
  }

  function onRemoveTeam(e) {
    if (STATE.teams.length <= 2) return;
    var id = e.target.dataset.id;
    STATE.teams = STATE.teams.filter(function (x) { return x.id !== id; });
    renderSetupTeams();
  }

  function addTeam() {
    if (STATE.teams.length >= 6) return;
    STATE.teams.push(newTeam(s().teamWord + " " + (STATE.teams.length + 1)));
    renderSetupTeams();
  }

  function startGame() {
    STATE.teams.forEach(function (team) {
      team.name = (team.name || "").trim() || s().teamWord;
      team.score = 0;
    });
    STATE.activeRounds = buildActiveRounds(STATE.selectedGenres);
    STATE.roundIndex = 0;
    STATE.done = new Set();
    STATE.wagers = {};
    STATE.encoreResults = {};
    STATE.persistedScreen = "board";
    persist();
    renderBoard();
    showScreen("screen-board");
  }

  /* ---------------- board screen ---------------- */

  function renderBoard() {
    var round = STATE.activeRounds[STATE.roundIndex];
    els.roundTitle.textContent = t(round.name);
    els.boardGrid.innerHTML = "";
    els.boardGrid.style.gridTemplateColumns = "repeat(" + round.categories.length + ", minmax(0, 260px))";

    round.categories.forEach(function (cat) {
      var header = document.createElement("div");
      header.className = "board-col-header";
      header.innerHTML = "<span>" + cat.icon + "</span><span>" + escapeHtml(t(cat.name)) + "</span>";
      els.boardGrid.appendChild(header);
    });

    var numRows = round.categories[0].questions.length;
    for (var qi = 0; qi < numRows; qi++) {
      round.categories.forEach(function (cat, ci) {
        var q = cat.questions[qi];
        var key = tileKey(STATE.roundIndex, ci, qi);
        var done = STATE.done.has(key);
        var tile = document.createElement("button");
        tile.type = "button";
        tile.className = "tile" + (done ? " tile-done" : "");
        tile.textContent = done ? "" : q.points;
        if (!done) {
          tile.addEventListener("click", (function (catIdx, qIdx) {
            return function () { openQuestion(catIdx, qIdx); };
          })(ci, qi));
        }
        els.boardGrid.appendChild(tile);
      });
    }

    els.btnEndRound.textContent = STATE.roundIndex === STATE.activeRounds.length - 1
      ? s().finishRoundFinal
      : s().finishRound;
  }

  function endRound() {
    if (STATE.roundIndex < STATE.activeRounds.length - 1) {
      STATE.roundIndex++;
      STATE.persistedScreen = "board";
      persist();
      renderBoard();
      showScreen("screen-board");
    } else {
      STATE.persistedScreen = "wager";
      persist();
      renderWagerScreen();
      showScreen("screen-wager");
    }
  }

  /* ---------------- question / reveal ---------------- */

  function openQuestion(catIdx, qIdx) {
    var round = STATE.activeRounds[STATE.roundIndex];
    var cat = round.categories[catIdx];
    var q = cat.questions[qIdx];
    STATE.current = { catIdx: catIdx, qIdx: qIdx, cat: cat, q: q, awardedTeams: new Set() };

    populateQuestionText();

    if (q.type === "audio") {
      els.qAudioWrap.style.display = "";
      els.qAudio.src = q.audio;
      els.qAudio.currentTime = 0;
    } else {
      els.qAudioWrap.style.display = "none";
      els.qAudio.removeAttribute("src");
    }

    if (q.type === "photo") {
      els.qImageWrap.style.display = "";
      els.qImage.src = q.image;
    } else {
      els.qImageWrap.style.display = "none";
      els.qImage.removeAttribute("src");
    }

    resetTimer();
    showScreen("screen-question");
  }

  function questionPromptText(q) {
    return q.type === "photo" ? s().whoIsThisMusician : t(q.prompt);
  }

  function populateQuestionText() {
    var cur = STATE.current;
    if (!cur) return;
    els.qCategory.textContent = t(cur.cat.name);
    els.qPoints.textContent = cur.q.points + s().ptsSuffix;
    els.qPrompt.textContent = questionPromptText(cur.q);
    renderOptions(els.qOptions, t(cur.q.options), null);
  }

  function updateTimerButtonText() {
    var strs = s();
    if (els.btnTimer.disabled) {
      els.btnTimer.textContent = strs.timeUp;
    } else if (STATE.timerHandle) {
      els.btnTimer.textContent = strs.pauseTimer;
    } else if (STATE.timeLeft > 0 && STATE.timeLeft < 30) {
      els.btnTimer.textContent = strs.resumeTimer;
    } else {
      els.btnTimer.textContent = strs.startTimer;
    }
  }

  function resetTimer() {
    clearInterval(STATE.timerHandle);
    STATE.timerHandle = null;
    STATE.timeLeft = 30;
    els.timerDisplay.textContent = "30";
    els.timerDisplay.classList.remove("warn");
    els.btnTimer.disabled = false;
    updateTimerButtonText();
  }

  function toggleTimer() {
    if (STATE.timerHandle) {
      clearInterval(STATE.timerHandle);
      STATE.timerHandle = null;
      updateTimerButtonText();
      return;
    }
    updateTimerButtonText();
    STATE.timerHandle = setInterval(function () {
      STATE.timeLeft--;
      els.timerDisplay.textContent = Math.max(STATE.timeLeft, 0);
      if (STATE.timeLeft <= 10) els.timerDisplay.classList.add("warn");
      if (STATE.timeLeft <= 0) {
        clearInterval(STATE.timerHandle);
        STATE.timerHandle = null;
        els.btnTimer.disabled = true;
        updateTimerButtonText();
      }
    }, 1000);
  }

  function revealAnswer() {
    clearInterval(STATE.timerHandle);
    STATE.timerHandle = null;
    if (!els.qAudio.paused) els.qAudio.pause();

    populateRevealText();

    var cur = STATE.current;
    STATE.done.add(tileKey(STATE.roundIndex, cur.catIdx, cur.qIdx));
    persist();
    showScreen("screen-reveal");
  }

  function populateRevealText() {
    var cur = STATE.current;
    if (!cur) return;
    els.rCategory.textContent = t(cur.cat.name);
    els.rPoints.textContent = cur.q.points + s().ptsSuffix;
    els.rPrompt.textContent = questionPromptText(cur.q);
    if (cur.q.type === "photo") {
      els.rImageWrap.style.display = "";
      els.rImage.src = cur.q.image;
    } else {
      els.rImageWrap.style.display = "none";
      els.rImage.removeAttribute("src");
    }
    renderOptions(els.rOptions, t(cur.q.options), cur.q.answerIndex);
    els.rFact.textContent = t(cur.q.fact);
    renderAwardButtons(cur.q.points);
  }

  function renderAwardButtons(points) {
    els.awardButtons.innerHTML = "";
    var awarded = STATE.current.awardedTeams;
    STATE.teams.forEach(function (team, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "award-btn" + (awarded.has(team.id) ? " awarded" : "");
      btn.innerHTML =
        '<span class="swatch" style="background:' + teamColor(i) + '"></span>' +
        escapeHtml(team.name) + " +" + points;
      btn.addEventListener("click", function () {
        if (awarded.has(team.id)) {
          awarded.delete(team.id);
          team.score -= points;
          btn.classList.remove("awarded");
        } else {
          awarded.add(team.id);
          team.score += points;
          btn.classList.add("awarded");
        }
        persist();
        renderGlobalScoreboard();
      });
      els.awardButtons.appendChild(btn);
    });
  }

  function backToBoard() {
    renderBoard();
    showScreen("screen-board");
  }

  /* ---------------- final encore: wager ---------------- */

  function renderWagerScreen() {
    els.wagerList.innerHTML = "";
    var strs = s();
    STATE.teams.forEach(function (team, i) {
      if (STATE.wagers[team.id] === undefined) STATE.wagers[team.id] = 0;
      var row = document.createElement("div");
      row.className = "wager-row";
      row.innerHTML =
        '<span class="swatch" style="background:' + teamColor(i) + '"></span>' +
        '<span class="wager-name">' + escapeHtml(team.name) + '</span>' +
        '<span class="wager-score">' + escapeHtml(strs.scoreLabel) + ' ' + team.score + '</span>' +
        '<input type="number" min="0" max="' + Math.max(team.score, 0) + '" step="10" data-id="' + team.id + '" value="' + STATE.wagers[team.id] + '">';
      els.wagerList.appendChild(row);
    });

    var inputs = els.wagerList.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("change", onWagerChange);
    }
  }

  function onWagerChange(e) {
    var id = e.target.dataset.id;
    var team = STATE.teams.filter(function (x) { return x.id === id; })[0];
    var max = Math.max(team.score, 0);
    var val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 0) val = 0;
    if (val > max) val = max;
    e.target.value = val;
    STATE.wagers[id] = val;
    persist();
  }

  function lockWagers() {
    persist();
    populateEncoreQuestionText();
    showScreen("screen-encore-question");
  }

  function populateEncoreQuestionText() {
    els.ePrompt.textContent = t(ENCORE.prompt);
    renderOptions(els.eOptions, t(ENCORE.options), null);
  }

  function revealEncore() {
    populateEncoreResolveText();
    showScreen("screen-encore-resolve");
  }

  function populateEncoreResolveText() {
    els.ePrompt2.textContent = t(ENCORE.prompt);
    renderOptions(els.eOptions2, t(ENCORE.options), ENCORE.answerIndex);
    els.eFact.textContent = t(ENCORE.fact);
    renderEncoreResolveList();
  }

  function renderEncoreResolveList() {
    els.encoreResolveList.innerHTML = "";
    var strs = s();
    STATE.teams.forEach(function (team, i) {
      var wager = STATE.wagers[team.id] || 0;
      var result = STATE.encoreResults[team.id];
      var row = document.createElement("div");
      row.className = "wager-row";
      row.innerHTML =
        '<span class="swatch" style="background:' + teamColor(i) + '"></span>' +
        '<span class="wager-name">' + escapeHtml(team.name) + '</span>' +
        '<span class="wager-score">' + escapeHtml(strs.wageredLabel) + ' ' + wager + '</span>' +
        '<div class="resolve-buttons">' +
        '<button type="button" class="mark-correct' + (result === "correct" ? " active" : "") + '" data-id="' + team.id + '">' + escapeHtml(strs.correct) + '</button>' +
        '<button type="button" class="mark-incorrect' + (result === "incorrect" ? " active" : "") + '" data-id="' + team.id + '">' + escapeHtml(strs.incorrect) + '</button>' +
        '</div>';
      els.encoreResolveList.appendChild(row);
    });

    var correctBtns = els.encoreResolveList.querySelectorAll(".mark-correct");
    for (var i = 0; i < correctBtns.length; i++) {
      correctBtns[i].addEventListener("click", function (e) { resolveEncore(e.target.dataset.id, "correct"); });
    }
    var incorrectBtns = els.encoreResolveList.querySelectorAll(".mark-incorrect");
    for (var j = 0; j < incorrectBtns.length; j++) {
      incorrectBtns[j].addEventListener("click", function (e) { resolveEncore(e.target.dataset.id, "incorrect"); });
    }
  }

  function resolveEncore(teamId, result) {
    var team = STATE.teams.filter(function (x) { return x.id === teamId; })[0];
    if (!team) return;
    var wager = STATE.wagers[teamId] || 0;
    var prev = STATE.encoreResults[teamId];
    if (prev === "correct") team.score -= wager;
    if (prev === "incorrect") team.score += wager;
    if (result === "correct") team.score += wager;
    if (result === "incorrect") team.score -= wager;
    STATE.encoreResults[teamId] = result;
    persist();
    renderEncoreResolveList();
    renderGlobalScoreboard();
  }

  /* ---------------- end / podium ---------------- */

  function showPodium() {
    var indexed = STATE.teams.map(function (team, i) { return { team: team, colorIndex: i }; });
    indexed.sort(function (a, b) { return b.team.score - a.team.score; });

    els.podium.innerHTML = "";
    indexed.forEach(function (entry, rank) {
      var row = document.createElement("div");
      row.className = "podium-row" + (rank === 0 ? " rank-1" : "");
      row.innerHTML =
        '<span class="podium-rank">#' + (rank + 1) + '</span>' +
        '<span class="swatch" style="background:' + teamColor(entry.colorIndex) + '"></span>' +
        '<span class="podium-name">' + escapeHtml(entry.team.name) + '</span>' +
        '<span class="podium-score">' + entry.team.score + '</span>';
      els.podium.appendChild(row);
    });

    STATE.persistedScreen = "end";
    persist();
    showScreen("screen-end");
  }

  function newGame() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    STATE.teams = [];
    STATE.selectedGenres = ["classical"];
    STATE.activeRounds = [];
    STATE.roundIndex = 0;
    STATE.done = new Set();
    STATE.wagers = {};
    STATE.encoreResults = {};
    STATE.persistedScreen = "board";
    els.resumeBanner.style.display = "none";
    ensureDefaultTeams();
    renderSetupTeams();
    renderGenreOptions();
    showScreen("screen-setup");
  }
})();

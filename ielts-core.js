/* ============ IELTS PRO · Core views & state ============ */
const IST = Object.assign({ mistakes: [], tests: [], planCfg: null, planTicks: {}, daily: {}, dailyAns: {}, vocabKnown: {}, vocabFav: {}, vocabStats: {}, colStats: {}, diag: null, mock: null, writing: {}, favWords: 0, studyTime: 0 }, JSON.parse(localStorage.getItem('lf_ielts') || '{}'));
function istSave() { try { localStorage.setItem('lf_ielts', JSON.stringify(IST)); } catch (e) {} }
const IELTS_LEVELS = ['A2', 'B1', 'B1+', 'B2', 'B2+', 'C1'];
function ieltsLV(l) { const map = { 'A2/B1': 'A2', A1: 'A2', A2: 'A2', B1: 'B1', 'B1+': 'B1+', B2: 'B2', 'B2+': 'B2+', C1: 'C1' }; return map[l] || l; }
function lvColorI(l) { return { A2: '#3aa0e8', B1: '#22b07d', 'B1+': '#7a6bff', B2: '#e8853a', 'B2+': '#e05252', C1: '#8e2f8e' }[l] || '#5d50e9'; }
function ieltstime() { return new Date().toISOString().slice(0, 10); }
function todayKey() { return ieltstime(); }
function recordTest(skill, c, t) { IST.tests.push({ skill, c, t, date: todayKey() }); istSave(); }
function saveMistake(item) {
  if (IST.mistakes.find(m => m.qid === item.qid && m.user === item.user)) return;
  IST.mistakes.unshift(Object.assign({ date: todayKey() }, item));
  if (IST.mistakes.length > 300) IST.mistakes.length = 300;
  istSave();
}
/* ---------- generic IELTS question renderer + checker ---------- */
function ieltsRenderQ(q, prefix, state0) {
  const s = state0 || {};
  if (q.t === 'gap' || q.t === 'short') return `<div class="qcard"><div class="qmeta"><span class="pill">${q.qtype || 'Completion'}</span></div><p><b>${q.n}. ${esc(q.q)}</b></p><input class="input qc-input" id="${prefix}-${q.n}" autocomplete="off" value="${esc(s.val || '')}"></div>`;
  const opts = q.t === 'tf' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : q.opts;
  const optHtml = opts.map((o, j) => `<label class="qc-opt ${s.sel === j ? 'sel' : ''}"><input type="radio" name="${prefix}-${q.n}" value="${j}" ${s.sel === j ? 'checked' : ''} onchange="document.querySelectorAll('[name=${prefix}-${q.n}]').forEach(x=>x.closest('label').classList.remove('sel'));this.closest('label').classList.add('sel')"> <span><b>${String.fromCharCode(65 + j)}</b> ${esc(o)}</span></label>`).join('');
  return `<div class="qcard"><div class="qmeta"><span class="pill">${q.qtype || (q.t === 'tf' ? 'True/False/Not Given' : 'Multiple choice')}</span></div><p><b>${q.n}. ${esc(q.q)}</b></p><div class="qc-opts">${optHtml}</div></div>`;
}
function ieltsCorrectText(q) { return q.t === 'gap' || q.t === 'short' ? (Array.isArray(q.accept) ? q.accept[0] : q.accept) : q.t === 'tf' ? q.a : q.opts[q.a]; }
function ieltsGrade(prefix, items, skill, ctxTitle) {
  let correct = 0; const results = [];
  items.forEach(q => {
    let user = '', ok = false;
    if (q.t === 'gap' || q.t === 'short') {
      const el = document.getElementById(`${prefix}-${q.n}`);
      user = el ? el.value.trim() : '';
      const norm = x => String(x).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, ' ').replace(/^£/, '').replace(/%$/, '').trim();
      const acc = (Array.isArray(q.accept) ? q.accept : [q.accept]).map(norm);
      ok = acc.includes(norm(user));
    } else {
      const opts = q.t === 'tf' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : q.opts;
      const ai = q.t === 'tf' ? opts.indexOf(q.a) : q.a;
      const el = document.querySelector(`[name="${prefix}-${q.n}"]:checked`);
      user = el ? opts[+el.value] : '—';
      ok = el && +el.value === ai;
    }
    if (ok) correct++; else saveMistake({ qid: q.qid || (prefix + '-' + q.n), skill, topic: q.topic || ctxTitle, question: q.q, user, correct: ieltsCorrectText(q), exp: q.exp });
    results.push({ q, user, ok });
  });
  recordTest(skill, correct, items.length);
  return { correct, results };
}
function ieltsShowResults(res) {
  const pct = Math.round(100 * res.correct / res.results.length);
  return `<div class="qc-results"><div class="qc-score ${pct >= 60 ? 'good' : ''}"><b>${res.correct}/${res.results.length}</b> correct · ${pct}%</div>${res.results.map(r => `<div class="qcard ${r.ok ? 'ok' : 'bad'}"><p><b>${r.q.n}.</b> ${esc(r.q.q)}</p><p class="muted small">Your answer: <b class="${r.ok ? 'grn' : 'red'}">${esc(r.user || '—')}</b>${r.ok ? '' : ` · Correct: <b class="grn">${esc(ieltsCorrectText(r.q))}</b>`}</p><p class="muted small">💡 ${esc(r.q.exp)}</p></div>`).join('')}</div>`;
}
/* ---------- 1 · Hub ---------- */
function ieltsHub() {
  const diag = IST.diag;
  const tiles = [
    ['ielts-overview', 'ℹ️', 'IELTS Overview', 'Format, scoring, strategy'], ['ielts-diagnostic', '🩺', 'Diagnostic Test', diag ? `Last: ${diag.band} (estimate)` : 'Find your starting level'],
    ['ielts-plan', '📅', 'Study Plan', IST.planCfg ? `${IST.planCfg.weeks}-week plan · ${planPct()}% done` : 'Build a personalised plan'], ['ielts-listening', '🎧', 'Listening', '4 parts · forms, maps, lectures'],
    ['ielts-reading', '📚', 'Reading', 'Academic & General passages'], ['ielts-writing', '✍️', 'Writing', 'Task 1 + Task 2 with editor'],
    ['ielts-speaking', '🗣️', 'Speaking', 'Cue cards, recorder, Part 3'], ['ielts-vocab', '🔤', 'Vocabulary', 'Topic families + flashcards'],
    ['ielts-colloc', '🔗', 'Collocations', 'Academic word partnerships'], ['ielts-grammar', '📐', 'Grammar for IELTS', '12 topics · 4 bands'],
    ['ielts-mocks', '🧪', 'Mock Tests', 'Academic & General simulation'], ['ielts-calc', '🧮', 'Band Score Calculator', 'Raw → band → overall'],
    ['ielts-progress', '📊', 'Progress Tracking', `${IST.tests.length} practice tests saved`], ['ielts-mistakes', '📒', 'Mistake Review', `${IST.mistakes.length} saved mistakes`],
    ['ielts-daily', '☀️', 'Daily Practice', IST.daily[todayKey()] ? 'Today: done ✓' : "Today's 13-question session"], ['ielts-resources', '📦', 'IELTS Resources', 'Curated books, sites, channels']
  ];
  return `<div class="section ielts-hero"><div class="ih-left"><span class="ih-badge">IELTS PREPARATION PLATFORM</span><h1>Master IELTS,<br>band by band.</h1><p class="muted">Academic & General Training · four skills · diagnostic testing · study plans · mock simulations · ${IELTS_QB.length}+ graded questions with explanations. All practice results are estimates — not official IELTS scores.</p><div class="row" style="gap:10px;margin-top:14px;flex-wrap:wrap"><button class="btn dark" onclick="go('ielts-diagnostic')">${diag ? '🩺 Retake Diagnostic' : '🩺 Start Diagnostic Test'}</button><button class="btn light" onclick="go('ielts-plan')">📅 Build Study Plan</button><button class="btn light" onclick="go('ielts-mocks')">🧪 Take a Mock Test</button></div>${diag ? `<div class="ih-diag">Latest diagnostic: <b>${diag.band} estimated band</b> · ${diag.date} · strengths: ${diag.strong.join(', ')} · focus: ${diag.weak.join(', ')}</div>` : ''}</div><div class="ih-right"><div class="ih-bandcard"><div class="ih-b9">9.0</div><div class="ih-bands">${[9, 8, 7, 6, 5, 4].map(b => `<div class="ih-brow"><span>${b}</span><div class="ih-bar"><i style="width:${b * 11}%"></i></div></div>`).join('')}</div><p class="muted small">Band scale 4–9 · half bands from raw scores out of 40</p></div></div></div><div class="section"><h2>Your IELTS System</h2><div class="tiles4">${tiles.map(t => `<div class="tile4 ${t[1] === '🩺' && !IST.diag ? 'hot' : ''}" onclick="go('${t[0]}')"><span class="t4i">${t[1]}</span><b>${t[2]}</b><span class="muted small">${t[3]}</span></div>`).join('')}</div></div>`;
}
/* ---------- 2 · Overview ---------- */
function ieltsOverview() {
  const I = IELTS_INFO;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>IELTS Overview</h2><p class="muted">${esc(I.what)}</p><div class="ih-cards2">${I.types.map(t => `<div class="card"><span class="pill">${t.az}</span><h3>${t.t}</h3><p class="muted">${esc(t.d)}</p><p class="muted small">✅ ${esc(t.who)}</p></div>`).join('')}</div><div class="section"><h3>The Four Sections</h3><div class="ih-skills">${I.sections.map(s => `<div class="ih-skill"><div class="ih-sk-head"><span class="ih-sk-ico">${s.icon}</span><div><b>${s.n}</b> <span class="muted small">· ${s.az}</span><div class="muted small">${s.time} · ${typeof s.qs === 'number' ? s.qs + ' questions' : 'interview'}</div></div></div><p class="muted small">${esc(s.d)}</p></div>`).join('')}</div></div><div class="ih-cards2"><div class="card"><h3>🎯 How scoring works</h3><p class="muted small">${esc(I.scoring)}</p></div><div class="card"><h3>🌍 Bands & CEFR (approximate)</h3><p class="muted small">${esc(I.cefr)}</p><div class="ih-btable">${I.bands.map(b => `<div class="ih-brow2"><span class="bc-level">${b.b}</span><b>${b.n}</b><span class="muted small">${esc(b.d)}</span></div>`).join('')}</div></div></div><div class="card"><h3>🗺️ Exam structure at a glance</h3><div class="ih-struct">${I.sections.map((s, i) => `<div class="ih-struct-col" style="--sc:${['#3aa0e8', '#22b07d', '#e8853a', '#8e2f8e'][i]}"><div class="ih-struct-h">${s.icon} ${s.n}</div><div class="ih-struct-t">${s.time}</div><div class="ih-struct-q">${typeof s.qs === 'number' ? s.qs + ' items · ' + s.parts + ' parts' : '3 parts · face to face'}</div></div>`).join('')}</div></div><div class="section"><h3>Preparation strategy</h3><div class="list">${I.strategy.map(s => `<div class="item"><div><b>${s.t}</b><span class="muted small"> · ${s.az}</span><p class="muted small">${esc(s.d)}</p></div></div>`).join('')}</div></div><div class="card"><p class="muted small">⚖️ This platform offers original practice material inspired by the IELTS format. It is not affiliated with, endorsed by, or copying official IELTS materials. All scores generated here are practice estimates.</p></div></div>`;
}
/* ---------- 3 · Band calculator ---------- */
function rawToBand(raw, table) { for (const r of table) if (raw >= r[0] && raw <= r[1]) return r[2]; return raw >= 40 ? 9 : raw <= 9 ? 3 : 4; }
function overallBand(vals) { const avg = vals.reduce((a, b) => a + b, 0) / 4; const base = Math.floor(avg * 2) / 2; const frac = avg - base; let out = base; if (frac >= 0.25 && frac < 0.5) out = base + 0.5; else if (frac >= 0.5 && frac < 0.75) out = base + 0.5; else if (frac >= 0.75) out = base + 1; return Math.min(9, out); }
function ieltsCalc() {
  const ls = +(window.__bc && window.__bc.l || 6.5), rs = +(window.__bc && window.__bc.r || 6.5), ws = +(window.__bc && window.__bc.w || 6), ss = +(window.__bc && window.__bc.s || 6.5);
  const vals = window.__bcVals || null;
  const sel = k => window.__bc && window.__bc[k];
  const dd = (k, cur) => [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map(v => `<option value="${v}" ${+cur === v ? 'selected' : ''}>${v.toFixed(1)}</option>`).join('');
  const l = sel('l') || 6.5, r = sel('r') || 6.5, w = sel('w') || 6, s = sel('s') || 6.5;
  const ob = overallBand([+l, +r, +w, +s]);
  const raws = [10, 15, 20, 25, 30, 35, 40];
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🧮 Band Score Calculator</h2><div class="ih-cards2"><div class="card"><h3>Overall band from four skills</h3><div class="bc-grid">${[['l', '🎧 Listening', l], ['r', '📚 Reading', r], ['w', '✍️ Writing', w], ['s', '🗣️ Speaking', s]].map(x => `<label class="bc-lab">${x[1]}<select class="input" onchange="window.__bc=Object.assign(window.__bc||{},{});window.__bc=window.__bc||{};window.__bc['${x[0]}']=this.value;render()">${dd(x[0], x[2])}</select></label>`).join('')}</div><div class="ih-ob"><span>OVERALL BAND</span><b>${ob % 1 ? ob.toFixed(1) : ob.toFixed(1)}</b></div><p class="muted small">Average = ${((+l + +r + +w + +s) / 4).toFixed(3)} → rounded up to the nearest .5 when the fraction is .25 or .75 (standard IELTS convention).</p></div><div class="card"><h3>Raw score → band reference</h3><p class="muted small">Approximate published conversions (out of 40):</p><div class="ih-rawt"><div class="ih-rawr ih-rawh"><span>Raw</span><span>Listening</span><span>Reading A</span><span>Reading GT</span></div>${raws.map(raw => `<div class="ih-rawr"><span>${raw}</span><span>${rawToBand(raw, IELTS_RAW.listening).toFixed(1)}</span><span>${rawToBand(raw, IELTS_RAW.readingA).toFixed(1)}</span><span>${rawToBand(raw, IELTS_RAW.readingG).toFixed(1)}</span></div>`).join('')}</div><p class="muted small">Raw score = number of correct answers. Section band = converted score. Overall band = rounded average of the four skills. Tables are approximate public guidance.</p></div></div></div>`;
}
/* ---------- 4 · Diagnostic test ---------- */
function diagItems() {
  const items = [];
  IELTS_POOL.filter(p => p.skill === 'Grammar').slice(0, 6).forEach((p, i) => items.push(Object.assign({}, p, { n: i + 1, t: 'mc', qtype: p.questionType, topic: p.topic })));
  const vw = IELTS_VOCAB[0].words[0], vw2 = IELTS_VOCAB[1].words[0], vw3 = IELTS_VOCAB[3].words[0], vw4 = IELTS_VOCAB[4].words[5];
  const allW = IELTS_VOCAB.flatMap(t => t.words.map(w => Object.assign({ topic: t.topic }, w)));
  [vw, vw2, vw3, vw4].forEach((v, i) => {
    const pool = allW.filter(x => x.w !== v.w && x.topic !== v.topic);
    const others = [pool[i * 2], pool[i * 2 + 1]];
    const opts = [v.def, others[0].def, others[1].def];
    items.push({ n: items.length + 1, t: 'mc', qid: 'diag-v' + i, skill: 'Vocabulary', qtype: 'Word meaning', topic: v.topic, q: `What does “${v.w}” mean?`, opts, a: 0, exp: `${v.w} = ${v.def} (${v.az}).` });
  });
  const ra = IELTS_READ[0].qs.filter(q => q.t === 'tf' || q.t === 'mc').slice(0, 2);
  ra.forEach((q, i) => items.push(Object.assign({}, q, { n: items.length + 1, qid: 'diag-r' + i, skill: 'Reading', qtype: q.t === 'tf' ? 'T/F/NG' : 'MC', topic: 'Urban design', opts: q.t === 'tf' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : q.opts, a: q.t === 'tf' ? (q.a === 'TRUE' ? 0 : 1) : q.a })));
  const lq = IELTS_LISTEN[0].qs.filter(q => q.t === 'mc').slice(0, 2);
  lq.forEach((q, i) => items.push(Object.assign({}, q, { n: items.length + 1, qid: 'diag-l' + i, skill: 'Listening', qtype: 'MC (audio)', topic: 'Part 1', tts: IELTS_LISTEN[0].script })));
  return items;
}
function ieltsDiagnostic() {
  if (IST.diag && !IST.diagShow) {
    const d = IST.diag;
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🩺 Diagnostic Results</h2><div class="ih-diagres"><div class="ih-diagband"><span>ESTIMATED LEVEL</span><b>${d.band}</b><small>≈ CEFR ${d.cefr}</small></div><div class="ih-diagside"><div><b>Strengths</b><p class="grn">${d.strong.join(' · ')}</p></div><div><b>Needs improvement</b><p class="red">${d.weak.join(' · ')}</p></div><div><b>Recommended plan</b><p>${d.plan}</p></div></div></div><p class="muted small">⚠️ This profile is an <b>estimate for study planning only</b> — it is not an official IELTS score or prediction. Real IELTS results come only from official test centres.</p><div class="row" style="gap:10px"><button class="btn dark" onclick="go('ielts-plan')">📅 Build my plan →</button><button class="btn light" onclick="IST.diagShow=1;render()">🔁 Retake the test</button></div></div>`;
  }
  if (!window.__diag) window.__diag = { started: false, done: false };
  const dg = window.__diag;
  if (!dg.started) {
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🩺 Diagnostic Test</h2><p class="muted">14 questions across four skills: 6 grammar, 4 vocabulary, 2 reading, 2 listening (TTS audio), plus self-assessment for Writing and Speaking. Takes about 10 minutes. Your result is an <b>estimated starting profile</b>, not an official IELTS score.</p><div class="card"><h3>Before you start</h3><p class="muted small">• Answer without a dictionary.<br>• For listening questions, press ▶ Play and listen as many times as you need (real IELTS allows one play — this is practice).<br>• Be honest in the self-assessment; it shapes your plan.</p><button class="btn dark" onclick="window.__diag={started:true};render()">▶ Start the test</button></div></div>`;
  }
  if (!dg.done) {
    const items = dg.items || (dg.items = diagItems());
    const self = dg.self || (dg.self = { w: 5, s: 5 });
    return `<div class="section"><h2>🩺 Diagnostic Test — ${items.length} questions</h2><div class="qwrap">${items.map(q => ieltsRenderQ(q, 'diag')).join('')}</div><div class="card"><h3>Self-assessment (1–9)</h3><label class="bc-lab">✍️ Writing — how comfortable are essays/letters now?<select class="input" onchange="window.__diag.self.w=+this.value">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => `<option ${self.w === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label><label class="bc-lab">🗣️ Speaking — fluency and confidence now?<select class="input" onchange="window.__diag.self.s=+this.value">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(v => `<option ${self.s === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label></div><button class="btn dark" style="margin-top:14px" onclick="diagSubmit()">Submit diagnostic →</button></div>`;
  }
  const d = dg.result;
  return `<div class="section"><h2>🩺 Your Estimated Profile</h2><div class="ih-diagres"><div class="ih-diagband"><span>ESTIMATED LEVEL</span><b>${d.band}</b><small>≈ CEFR ${d.cefr}</small></div><div class="ih-diagside"><div><b>Strengths</b><p class="grn">${d.strong.join(' · ')}</p></div><div><b>Needs improvement</b><p class="red">${d.weak.join(' · ')}</p></div><div><b>Recommended plan</b><p>${d.plan}</p></div></div></div><p class="muted small">⚠️ Estimate only — not an official IELTS score.</p><div class="row" style="gap:10px"><button class="btn dark" onclick="IST.diag=dg.result;IST.diagShow=0;istSave();window.__diag={started:false,done:false};go('ielts-plan')">📅 Build my plan →</button><button class="btn light" onclick="window.__diag={started:false,done:false};render()">Retake</button></div></div>`;
}
function diagSubmit() {
  const dg = window.__diag; const items = dg.items;
  const res = ieltsGrade('diag', items, 'Diagnostic');
  const perSkill = {};
  res.results.forEach(r => { perSkill[r.q.skill] = perSkill[r.q.skill] || { c: 0, t: 0 }; perSkill[r.q.skill].t++; if (r.ok) perSkill[r.q.skill].c++; });
  ['Writing', 'Speaking'].forEach(sk => { perSkill[sk] = { c: dg.self[sk === 'Writing' ? 'w' : 's'], t: 9 }; });
  const pcts = Object.entries(perSkill).map(([k, v]) => ({ sk: k, pct: Math.round(100 * v.c / v.t) })).sort((a, b) => b.pct - a.pct);
  const avgPct = Math.round(pcts.reduce((s, x) => s + x.pct, 0) / pcts.length);
  const band = (avgPct > 88 ? 7.5 : avgPct > 78 ? 7 : avgPct > 68 ? 6.5 : avgPct > 55 ? 6 : avgPct > 42 ? 5.5 : avgPct > 30 ? 5 : 4.5);
  const cefr = band >= 7 ? 'C1' : band >= 5.5 ? 'B2' : band >= 4.5 ? 'B1' : 'A2';
  const strong = pcts.slice(0, 2).map(x => x.sk);
  const weak = pcts.slice(-2).reverse().map(x => x.sk);
  const plan = band <= 5 ? '12-week plan — build foundations first' : band <= 6 ? '8-week plan — balanced skills work' : band <= 6.5 ? '8-week plan — push to 7.0' : '6-week plan — refine exam technique';
  dg.result = { band: band.toFixed(1), cefr, strong, weak, plan, date: todayKey(), perSkill };
  dg.done = true;
  render();
}
/* ---------- 5 · Study plan ---------- */
const PLAN_SKILLS = [
  { k: 'listening', n: 'Listening', ico: '🎧', base: 3 }, { k: 'reading', n: 'Reading', ico: '📚', base: 3 }, { k: 'writing', n: 'Writing', ico: '✍️', base: 4 }, { k: 'speaking', n: 'Speaking', ico: '🗣️', base: 3 },
  { k: 'vocabulary', n: 'Vocabulary', ico: '🔤', base: 2 }, { k: 'grammar', n: 'Grammar', ico: '📐', base: 2 }, { k: 'review', n: 'Review & Mistakes', ico: '📒', base: 1 }, { k: 'mock', n: 'Mock / Practice Test', ico: '🧪', base: 1 }
];
function planPct() { const ticks = Object.values(IST.planTicks).filter(Boolean).length; const total = (IST.planCfg ? IST.planCfg.weeks : 0) * PLAN_SKILLS.length; return total ? Math.round(100 * ticks / total) : 0; }
function ieltsPlan() {
  const c = IST.planCfg;
  if (!c) {
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📅 IELTS Study Plan</h2><p class="muted">Answer five questions and get a week-by-week plan with checkable activities and progress tracking.</p><div class="card"><div class="grid2"><label class="bc-lab">🎯 Target band<select class="input" id="pl-t">${[5.5, 6, 6.5, 7, 7.5, 8].map(v => `<option value="${v}">${v.toFixed(1)}</option>`).join('')}</select></label><label class="bc-lab">📍 Current estimated level<select class="input" id="pl-cur"><option>${IST.diag ? IST.diag.band : '5.0'}</option>${[4.5, 5, 5.5, 6, 6.5, 7].map(v => `<option value="${v}">${v.toFixed(1)}</option>`).join('')}</select></label><label class="bc-lab">📋 Exam type<select class="input" id="pl-type"><option value="Academic">IELTS Academic</option><option value="General">IELTS General Training</option></select></label><label class="bc-lab">⏳ Preparation duration<select class="input" id="pl-w">${[4, 6, 8, 12, 16].map(v => `<option value="${v}" ${v === 8 ? 'selected' : ''}>${v} weeks</option>`).join('')}</select></label><label class="bc-lab">🕐 Hours available per day<select class="input" id="pl-h"><option value="1">1 hour</option><option value="1.5">1.5 hours</option><option value="2">2 hours</option><option value="3">3 hours</option></select></label><label class="bc-lab">📆 Exam date (optional)<input class="input" id="pl-date" type="date"></label></div><button class="btn dark" style="margin-top:14px" onclick="planBuild()">Generate my plan →</button></div></div>`;
  }
  const weeks = [];
  const focusPool = { listening: ['Part 1 form completion drill', 'Part 2 map/matching practice', 'Part 3 discussion listening', 'Part 4 lecture notes'], reading: ['Academic passage + TFNG', 'Matching headings set', 'Summary completion drill', 'GT section practice'], writing: ['Task 1 chart practice', 'Task 2 opinion essay', 'Task 2 problem/solution', 'GT letter + review'], speaking: ['Part 1 topic block', 'Part 2 cue card ×2', 'Part 3 discussion', 'Full mock speaking'], vocabulary: ['Topic family flashcards', 'Collocation gap-fills', 'Quiz + mistake review'], grammar: ['Grammar-for-IELTS unit + quiz', 'Error-correction drill'], review: ['Mistake notebook review', 'Re-test saved mistakes'], mock: ['Timed mini-mock (Listening+Reading)', 'Full mock simulation'] };
  for (let w = 1; w <= c.weeks; w++) {
    weeks.push({ w, items: PLAN_SKILLS.map(s => { const pool = focusPool[s.k]; return { k: s.k, ico: s.ico, n: s.n, task: s.k === 'mock' ? (w === c.weeks ? 'Full mock simulation' : 'Timed mini-mock') : pool[w % pool.length], hrs: s.base * c.hrs } }) });
  }
  const pct = planPct();
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button><button class="btn light" onclick="if(confirm('Reset the plan?')){IST.planCfg=null;IST.planTicks={};istSave();render()}">↺ New plan</button></div><h2>📅 Your ${c.weeks}-Week IELTS Plan</h2><div class="ih-planhead"><div class="ih-planmeta"><span class="pill">${c.type}</span><span class="pill">Target ${(+c.target).toFixed(1)}</span><span class="pill">${c.hrs} h/day</span>${c.date ? `<span class="pill">📆 ${c.date}</span>` : ''}</div><div class="ih-planbar"><div class="ih-planfill" style="width:${pct}%"></div></div><b>${pct}% complete</b></div><div class="list">${weeks.map(wk => `<div class="card ih-week"><h3>Week ${wk.w}${wk.w === c.weeks ? ' · exam week' : ''}</h3><div class="ih-weekgrid">${wk.items.map(it => { const key = 'w' + wk.w + '-' + it.k; const done = !!IST.planTicks[key]; return `<label class="ih-planitem ${done ? 'done' : ''}"><input type="checkbox" ${done ? 'checked' : ''} onchange="IST.planTicks['${key}']=this.checked;istSave();render()"> <span>${it.ico} <b>${it.n}</b> — ${esc(it.task)} <span class="muted small">(~${it.hrs}h)</span></span></label>`; }).join('')}</div></div>`).join('')}</div></div>`;
}
function planBuild() {
  const g = id => document.getElementById(id).value;
  IST.planCfg = { target: g('pl-t'), cur: g('pl-cur'), type: g('pl-type'), weeks: +g('pl-w'), hrs: +g('pl-h'), date: g('pl-date') };
  IST.planTicks = {};
  istSave(); render();
}
/* ---------- 6 · Daily practice ---------- */
function dailySeed() { const d = todayKey(); let h = 0; for (const ch of d) h = (h * 31 + ch.charCodeAt(0)) % 9973; return h; }
function dailyItems() {
  const seed = dailySeed(); const pick = (arr, n, off) => Array.from({ length: n }, (_, i) => arr[(seed + off + i * 7) % arr.length]);
  const gram = pick(IELTS_POOL.filter(p => p.skill === 'Grammar'), 5, 0).map((p, i) => Object.assign({}, p, { n: i + 1, t: 'mc', qtype: 'Grammar', skill: 'Grammar' }));
  const vocab = pick(IELTS_POOL.filter(p => p.skill === 'Vocabulary'), 5, 3).map((p, i) => Object.assign({}, p, { n: gram.length + i + 1, t: 'mc', qtype: 'Vocabulary', skill: 'Vocabulary' }));
  const rq = IELTS_READ[(seed) % IELTS_READ.length].qs.filter(q => q.t === 'mc' || q.t === 'tf');
  const r = [Object.assign({}, rq[seed % rq.length], { n: 11, t: rq[seed % rq.length].t, skill: 'Reading', qtype: 'Reading', opts: rq[seed % rq.length].t === 'tf' ? ['TRUE', 'FALSE', 'NOT GIVEN'] : rq[seed % rq.length].opts, a: rq[seed % rq.length].t === 'tf' ? (rq[seed % rq.length].a === 'TRUE' ? 0 : 1) : rq[seed % rq.length].a })];
  const lq = IELTS_LISTEN[(seed + 1) % IELTS_LISTEN.length].qs.filter(q => q.t === 'mc');
  const l = [Object.assign({}, lq[0], { n: 12, t: 'mc', skill: 'Listening', qtype: 'Listening (TTS)', tts: IELTS_LISTEN[(seed + 1) % IELTS_LISTEN.length].script })];
  const sp = IELTS_SPEAK.p2[(seed) % IELTS_SPEAK.p2.length];
  const items = [...gram, ...vocab, ...r, ...l];
  items.forEach(it => { it.qid = 'daily-' + todayKey() + '-' + (it.qid || it.n); });
  return { items, sp };
}
function ieltsDaily() {
  const key = todayKey();
  const done = IST.daily[key];
  const { items, sp } = dailyItems();
  const goal = items.length + 1;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>☀️ Daily IELTS Practice</h2><div class="ih-dailyhead"><div><b>Today: ${new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</b><p class="muted small">Goal: ${goal} items — 5 vocabulary + 5 grammar + 1 reading + 1 listening + 1 speaking task.</p></div>${done ? `<span class="ih-doneday">✓ Completed — 🔥 keep the streak!</span>` : `<span class="pill">In progress…</span>`}</div><div class="qwrap">${items.map(q => ieltsRenderQ(q, 'daily')).join('')}</div><div class="card"><h3>🗣️ Speaking task (do it out loud!)</h3><p><b>Part 2 cue card:</b> ${esc(sp.card)}</p><ul class="muted small">${sp.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><button class="btn" onclick="go('ielts-speaking')">Open Speaking Studio →</button></div><button class="btn dark" style="margin-top:14px" onclick="dailySubmit()">Check today's session →</button><div id="daily-res"></div></div>`;
}
function dailySubmit() {
  const { items } = dailyItems();
  const res = ieltsGrade('daily', items, 'Daily');
  IST.daily[todayKey()] = { c: res.correct, t: items.length };
  istSave();
  document.getElementById('daily-res').innerHTML = ieltsShowResults(res) + `<div class="qc-score good">Day complete! 🔥 Come back tomorrow — your streak grows daily.</div>`;
  render;
}
/* ---------- 7 · Vocabulary ---------- */
let IV = { topic: 'All', q: '', flip: null, quizOn: false, quiz: null };
function ieltsVocab() {
  const allWords = IELTS_VOCAB.flatMap(t => t.words.map(w => Object.assign({ topic: t.topic }, w)));
  let list = allWords.filter(w => (IV.topic === 'All' || w.topic === IV.topic) && (!IV.q || (w.w + w.def + w.az).toLowerCase().includes(IV.q.toLowerCase())));
  const known = Object.keys(IST.vocabKnown).filter(k => IST.vocabKnown[k] === 'know').length;
  const prac = Object.keys(IST.vocabKnown).filter(k => IST.vocabKnown[k] === 'prac').length;
  if (IV.quizOn) {
    const qz = IV.quiz || (IV.quiz = (() => { const pool = list.length >= 4 ? list : allWords; const qs = Array.from({ length: Math.min(8, pool.length) }, (_, i) => { const w = pool[(i * 3 + 1) % pool.length]; const others = allWords.filter(x => x.w !== w.w && x.topic !== w.topic).slice(i % 7, (i % 7) + 2); return { n: i + 1, t: 'mc', qid: 'vq-' + w.w, skill: 'Vocabulary', qtype: 'Word meaning', topic: w.topic, q: `What does “${w.w}” mean?`, opts: [w.def, others[0].def, others[1].def], a: 0, exp: `${w.w} = ${w.def} (${w.az}).` }; }); return { items: qs, done: false }; })());
    if (!qz.done) return `<div class="section"><div class="crumb"><button class="btn light" onclick="IV.quizOn=false;IV.quiz=null;render()">← Vocabulary</button></div><h2>🔤 Vocabulary Quiz</h2><div class="qwrap">${qz.items.map(q => ieltsRenderQ(q, 'vq')).join('')}</div><button class="btn dark" onclick="const r=ieltsGrade('vq',IV.quiz.items,'Vocabulary');IV.quiz.done=r;recordTest('Vocabulary',r.correct,r.results.length);istSave();render()">Check answers →</button></div>`;
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IV.quizOn=false;IV.quiz=null;render()">← Vocabulary</button></div><h2>Quiz result</h2>${ieltsShowResults(IV.quiz.done)}<button class="btn dark" onclick="IV.quiz=null;render()">New quiz →</button></div>`;
  }
  if (IV.flip !== null) {
    const w = list[IV.flip % list.length] || allWords[0];
    const stateK = IST.vocabKnown[w.w];
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IV.flip=null;render()">← All words</button></div><div class="ih-flash" onclick="window.__ivflip=!window.__ivflip;render()"><div class="${window.__ivflip ? 'ih-cardback' : 'ih-cardfront'}">${window.__ivflip ? `<span class="pill">${w.topic}</span><h2>${esc(w.def)}</h2><p class="muted">🇦🇿 ${esc(w.az)}</p><p class="ih-ex">“${esc(w.ex)}”</p><p class="muted small">🔗 ${esc(w.col)}</p><p class="muted small">± ${esc(w.syn)} · ⚠️ ${esc(w.mistake)}</p>` : `<span class="pill">${w.pos} · ${w.topic} · IELTS-relevant</span><h1>${esc(w.w)}</h1><p class="muted">🇦🇿 ${esc(w.az)}</p><p class="muted small">Tap to flip →</p>`}</div></div><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn dark" onclick="IST.vocabKnown['${w.w}']='know';istSave();IV.flip++;render()">✓ Know it</button><button class="btn" onclick="IST.vocabKnown['${w.w}']='prac';istSave();IV.flip++;render()">🔁 Need practice</button><button class="btn light" onclick="IST.vocabFav['${w.w}']=!IST.vocabFav['${w.w}'];istSave();render()">⭐ Favourite</button><button class="btn light" onclick="speakText('${esc(w.w)}')">🔊 Listen</button></div><p class="muted small center">${(IV.flip % list.length) + 1} / ${list.length} · known: ${known} · practising: ${prac}</p></div>`;
  }
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🔤 Vocabulary for IELTS</h2><p class="muted">${allWords.length} high-frequency words in ${IELTS_VOCAB.length} topic families — every word with definition, Azerbaijani meaning, collocations, synonyms and the mistake to avoid.</p><div class="ih-statrow"><span class="pill">✓ Known: ${known}</span><span class="pill">🔁 Practising: ${prac}</span><span class="pill">⭐ Favourites: ${Object.values(IST.vocabFav).filter(Boolean).length}</span></div><div class="row" style="gap:8px;margin:12px 0;flex-wrap:wrap"><input class="input" placeholder="Search word or meaning…" value="${esc(IV.q)}" oninput="IV.q=this.value;render();this.constructor;const i=document.querySelector('.section .input');i.focus();i.setSelectionRange(i.value.length,i.value.length)"><button class="btn dark" onclick="IV.quizOn=true;IV.quiz=null;render()">⚡ Quiz me</button></div><div class="filters">${['All', ...IELTS_VOCAB.map(t => t.topic)].map(x => `<button class="filter ${IV.topic === x ? 'active' : ''}" onclick="IV.topic='${x}';IV.flip=null;render()">${x}</button>`).join('')}</div><div class="vtiles" style="margin-top:12px">${list.map((w, i) => `<div class="vtile ih-vtile"><div class="vtile-body"><b>${esc(w.w)}</b> <span class="muted small">${w.pos}</span><span class="pill ih-topicpill">${w.topic}</span><p class="muted small">${esc(w.def)}</p><p class="muted small">🇦🇿 ${esc(w.az)}</p><p class="example">“${esc(w.ex)}”</p></div><div class="ih-vbtns"><button class="btn light mini-btn" onclick="IV.flip=${i};window.__ivflip=false;render()">📇 Flip card</button><button class="btn light mini-btn" onclick="speakText('${esc(w.w)}')">🔊</button></div></div>`).join('') || '<div class="empty">No words match your search.</div>'}</div></div>`;
}
/* ---------- 8 · Collocations ---------- */
let IC = { cat: 0, done: {} };
function ieltsColloc() {
  const c = IELTS_COLL[IC.cat];
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🔗 IELTS Collocations</h2><p class="muted">Words that travel together — examiners reward natural partnerships, not translations.</p><div class="filters">${IELTS_COLL.map((x, i) => `<button class="filter ${IC.cat === i ? 'active' : ''}" onclick="IC.cat=${i};render()">${x.cat}</button>`).join('')}</div><div class="list">${c.items.map((it, i) => { const ok = IC.done[c.cat + '-' + i]; return `<div class="card"><h3>${esc(it.p)}</h3><p class="muted small">${esc(it.m)} · 🇦🇿 ${esc(it.az)}</p><p class="example">“${esc(it.ex)}”</p><div class="row" style="gap:8px"><input class="input" id="col-${i}" placeholder="Fill the gap…" ${ok ? 'disabled' : ''} value="${ok ? esc(it.a) : ''}"><button class="btn ${ok ? 'light' : ''}" onclick="colCheck(${i})">${ok ? '✓' : 'Check'}</button></div>${ok ? '<p class="grn small">✓ Correct — saved to your collocation stats.</p>' : ''}</div>`; }).join('')}</div></div>`;
}
function colCheck(i) {
  const c = IELTS_COLL[IC.cat]; const it = c.items[i];
  const el = document.getElementById('col-' + i);
  if (el.value.trim().toLowerCase() === it.a.toLowerCase()) { IC.done[IC.cat + '-' + i] = true; IST.colStats[it.p] = (IST.colStats[it.p] || 0) + 1; istSave(); toast('✓ ' + it.p); render(); }
  else { el.classList.add('sb-shake'); toast('Try again — check the verb that pairs with it.'); setTimeout(() => el.classList.remove('sb-shake'), 500); }
}
/* ---------- 9 · Grammar for IELTS ---------- */
let IG = { band: 'All', open: null, done: {} };
function ieltsGrammar() {
  const bands = ['All', 'Foundation', 'Intermediate', 'Upper-Intermediate', 'Advanced'];
  const list = IELTS_GRAM.filter(g => IG.band === 'All' || g.band === IG.band);
  if (IG.open !== null) {
    const g = IELTS_GRAM.find(x => x.id === IG.open);
    const done = IG.done[g.id];
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IG.open=null;render()">← Grammar for IELTS</button></div><span class="pill">${g.band}</span><h2>📐 ${g.t}</h2><p class="muted">🇦🇿 ${esc(g.azd)}</p><div class="card"><h3>Simple explanation</h3><p>${esc(g.ex)}</p></div><div class="card"><h3>In the IELTS exam</h3><p class="muted">${esc(g.ielts)}</p></div><div class="card" style="border-left:4px solid #ef4444"><h3>⚠️ Common mistake</h3><p class="muted">${esc(g.mistake)}</p></div><div class="card"><h3>Mini quiz</h3>${g.quiz.map((q, i) => ieltsRenderQ(Object.assign({ n: i + 1, t: 'mc', qid: 'gq-' + g.id + i, skill: 'Grammar', topic: g.t, qtype: 'MC' }, q), 'gq-' + g.id)).join('')}<button class="btn dark" onclick="const r=ieltsGrade('gq-${g.id}',IELTS_GRAM.find(x=>x.id==='${g.id}').quiz.map((q,i)=>Object.assign({n:i+1,t:'mc',qid:'gq-${g.id}'+i,skill:'Grammar',topic:'${esc(g.t)}'},q)),'Grammar');IG.done['${g.id}']=r;recordTest('Grammar',r.correct,r.results.length);istSave();render()">Check →</button>${done ? ieltsShowResults(done) : ''}</div></div>`;
  }
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📐 Grammar for IELTS</h2><p class="muted">${IELTS_GRAM.length} topics organised by difficulty — each with a simple explanation, exam use, the classic mistake, and a mini quiz with explanations.</p><div class="filters">${bands.map(b => `<button class="filter ${IG.band === b ? 'active' : ''}" onclick="IG.band='${b}';IG.open=null;render()">${b}</button>`).join('')}</div><div class="list">${list.map(g => `<div class="item" onclick="IG.open='${g.id}';render()"><div><span class="pill ih-lv" style="background:${{ Foundation: '#22b07d', Intermediate: '#3aa0e8', 'Upper-Intermediate': '#e8853a', Advanced: '#8e2f8e' }[g.band]}">${g.band}</span> <b>${g.t}</b><span class="muted small"> · ${g.azd}</span><p class="muted small">${esc(g.ex.slice(0, 110))}…</p></div><button class="btn light">Study →</button></div>`).join('')}</div></div>`;
}
/* ---------- 10 · Progress ---------- */
function ieltsProgress() {
  const tests = IST.tests;
  const bySkill = {};
  tests.forEach(t => { bySkill[t.skill] = bySkill[t.skill] || { c: 0, t: 0, n: 0 }; bySkill[t.skill].c += t.c; bySkill[t.skill].t += t.t; bySkill[t.skill].n++; });
  const totalQ = tests.reduce((s, t) => s + t.t, 0);
  const totalC = tests.reduce((s, t) => s + t.c, 0);
  const acc = totalQ ? Math.round(100 * totalC / totalQ) : 0;
  const days = Object.keys(IST.daily).sort();
  let streak = 0; for (let i = 0; ; i++) { const d = new Date(); d.setDate(d.getDate() - i); const k = d.toISOString().slice(0, 10); if (IST.daily[k]) streak++; else if (i > 0) break; else break; }
  const skills = ['Listening', 'Reading', 'Writing', 'Speaking', 'Grammar', 'Vocabulary', 'Diagnostic'];
  const maxN = Math.max(1, ...skills.map(s => (bySkill[s] || { n: 0 }).n));
  const weak = Object.entries(bySkill).filter(([k, v]) => v.t >= 2 && 100 * v.c / v.t < 60).map(([k]) => k);
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📊 IELTS Progress</h2><div class="grid" style="margin:12px 0"><div class="stat"><b>${tests.length}</b><br><span class="muted">Practice tests</span></div><div class="stat"><b>${totalQ}</b><br><span class="muted">Questions answered</span></div><div class="stat"><b>${acc}%</b><br><span class="muted">Overall accuracy</span></div><div class="stat"><b>${streak}🔥</b><br><span class="muted">Daily streak</span></div><div class="stat"><b>${Object.keys(IST.vocabKnown).filter(k => IST.vocabKnown[k] === 'know').length}</b><br><span class="muted">Words known</span></div><div class="stat"><b>${days.length}</b><br><span class="muted">Days active</span></div></div><div class="card"><h3>Skill breakdown</h3>${skills.map(s => { const v = bySkill[s] || { c: 0, t: 0, n: 0 }; const p = v.t ? Math.round(100 * v.c / v.t) : 0; return `<div class="ih-prow"><span class="ih-pname">${s}</span><div class="ih-pbar"><i style="width:${p}%;background:${p >= 70 ? '#22c55e' : p >= 50 ? '#eab308' : '#ef4444'}"></i></div><span class="muted small">${v.n ? p + '% · ' + v.n + ' tests' : '—'}</span></div>`; }).join('')}</div><div class="ih-cards2"><div class="card"><h3>Weak topics to revisit</h3>${weak.length ? `<p class="red">${weak.join(' · ')}</p><button class="btn dark" onclick="go('ielts-mistakes')">Review mistakes →</button>` : `<p class="muted">No weak areas yet — complete more practice tests.</p>`}</div><div class="card"><h3>Recent activity</h3>${tests.slice(-6).reverse().map(t => `<div class="ih-actrow"><span class="pill">${t.skill}</span><span class="muted small">${t.c}/${t.t} · ${t.date}</span></div>`).join('') || '<p class="muted">Nothing yet — take the diagnostic or a mock test.</p>'}</div></div></div>`;
}
/* ---------- 11 · Mistake notebook ---------- */
let IM = { skill: 'All' };
function ieltsMistakes() {
  const list = IST.mistakes.filter(m => IM.skill === 'All' || m.skill === IM.skill);
  const skills = ['All', ...new Set(IST.mistakes.map(m => m.skill))];
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📒 My Mistakes</h2><p class="muted">Every wrong answer is saved here automatically. Review them, re-practice, and remove the ones you have mastered.</p><div class="filters">${skills.map(s => `<button class="filter ${IM.skill === s ? 'active' : ''}" onclick="IM.skill='${s}';render()">${s}</button>`).join('')}</div><div class="list">${list.map((m, i) => `<div class="card ih-mist"><div class="row" style="justify-content:space-between"><span class="pill">${m.skill}</span><span class="muted small">${m.date}</span></div><p><b>${esc(m.question)}</b></p><p class="muted small">Your answer: <b class="red">${esc(m.user || '—')}</b> · Correct: <b class="grn">${esc(m.correct)}</b></p><p class="muted small">💡 ${esc(m.exp)}</p><div class="row" style="gap:8px;margin-top:8px"><button class="btn light mini-btn" onclick="IM.skill='${m.skill}';go('ielts-${m.skill.toLowerCase()}')">Practise ${m.skill} →</button><button class="btn light mini-btn" onclick="IST.mistakes.splice(IST.mistakes.findIndex(x=>x.qid==='${esc(m.qid)}'&&x.user===${JSON.stringify(m.user).replace(/'/g, '&#39;')}),1);istSave();toast('Removed ✓');render()">✓ Mastered — remove</button></div></div>`).join('') || '<div class="empty">No mistakes saved — excellent work! 🎉</div>'}</div></div>`;
}
/* ---------- 12 · Resources ---------- */
function ieltsResources() {
  const res = [
    { t: 'Books worth buying', items: ['Cambridge IELTS 15–19 (official past papers — the gold standard for practice)', 'The Official Cambridge Guide to IELTS (skills + 8 tests)', 'English Collocations in Use (McCarthy & O’Dell) — collocations per unit', 'Vocabulary for IELTS (Collins / Cambridge) — topic-based word lists', 'IELTS Writing task helpers: “Improve your IELTS Writing Skills” (McCarter)'] },
    { t: 'YouTube channels', items: ['IELTS Liz — clear strategy per question type', 'IELTS Advantage — writing deep-dives', 'E2 IELTS — live classes and mock marking', 'English with Lucy — pronunciation for speaking bands'] },
    { t: 'Websites & tools', items: ['ielts.org — official test information and band descriptors', 'britishcouncil.org/take-ielts — free preparation courses', 'LizziePin / IELTS-up style practice portals for extra questions', 'YouGlish — hear any word in real video contexts', 'Ozdic — collocation dictionary for writing'] },
    { t: 'For Azerbaijani learners', items: ['Keep a bilingual mistake notebook (this site saves one automatically)', 'Translate collocations, never single words — “böyük təsir” = significant impact, not “big impact”', 'Practise T/F/NG logic: “Not Given” means the passage is silent, not “false”', 'Speaking Part 1 answers: 2–3 sentences, one example — not one word, not a speech'] }
  ];
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📦 IELTS Resources</h2><div class="ih-cards2">${res.map(r => `<div class="card"><h3>${r.t}</h3><div class="list">${r.items.map(i => `<div class="item"><p class="muted small">${esc(i)}</p></div>`).join('')}</div></div>`).join('')}</div></div>`;
}

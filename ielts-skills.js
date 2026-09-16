/* ============ IELTS PRO · Skills: Listening, Reading, Writing, Speaking, Mocks ============ */
/* ---------- Listening ---------- */
let IL = { track: null, done: null, rate: 1 };
function ieltsListening() {
  if (IL.track !== null) {
    const t = IELTS_LISTEN[IL.track];
    if (IL.done) return `<div class="section"><div class="crumb"><button class="btn light" onclick="IL.track=null;IL.done=null;render()">← Listening</button></div><h2>${t.part} · ${t.title} — Results</h2>${ieltsShowResults(IL.done)}<div class="card"><h3>Transcript</h3>${t.script.split(' | ').map(p => `<p class="muted">${esc(p)}</p>`).join('')}</div><div class="card"><h3>Key vocabulary</h3>${t.vocab.map(v => `<p class="muted small"><b>${v.w}</b> — ${esc(v.d)}</p>`).join('')}</div><button class="btn dark" onclick="IL.track=null;IL.done=null;render()">Another track →</button></div>`;
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IL.track=null;render()">← Listening</button></div><span class="pill">${t.part}</span> <span class="pill" style="background:${lvColorI(ieltstime() && t.level)};color:#fff">${t.level}</span><h2>🎧 ${t.title}</h2><div class="card"><h3>Audio (TTS playback)</h3><p class="muted small">In the real test you hear each recording once. Here, TTS reads the original script — play it fully first, then answer.</p><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn dark" onclick="listenPlay(${IL.track},1)">▶ Play full track</button><button class="btn light" onclick="listenPlay(${IL.track},2)">▶ Part A</button><button class="btn light" onclick="listenPlay(${IL.track},3)">▶ Part B</button><button class="btn light" onclick="speechSynthesis.cancel();toast('Stopped')">⏹ Stop</button><span class="pill">Speed ${IL.rate}×</span><button class="btn light mini-btn" onclick="IL.rate=IL.rate===1?0.85:1;render()">${IL.rate === 1 ? 'Slow it' : 'Normal'}</button></div></div><div class="qwrap">${t.qs.map(q => ieltsRenderQ(q, 'lq')).join('')}</div><button class="btn dark" style="margin-top:12px" onclick="listenSubmit()">Submit answers →</button></div>`;
  }
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🎧 Listening</h2><p class="muted">Four parts, ten question types: forms, tables, maps, matching, MC and completions. Practice tracks use original scripts read by TTS.</p><div class="list">${IELTS_LISTEN.map((t, i) => `<div class="item" onclick="IL.track=${i};render()"><div><span class="pill">${t.part}</span> <b>${t.title}</b><span class="muted small"> · ${t.level} · 🇦🇿 ${t.az}</span><p class="muted small">${t.qs.length} questions · form completion, multiple choice, matching, short answers</p></div><button class="btn light">Start →</button></div>`).join('')}</div><div class="card"><h3>Question-type tactics</h3><div class="list">${[['Form/note/table completion', 'Read the word limit (“NO MORE THAN TWO WORDS”) — a correct idea in three words scores zero. Predict the part of speech before listening.'], ['Multiple choice', 'Read the options first; cross out ones you hear contradicted. Watch for “but/however” — the answer often follows.'], ['Matching', 'Match meaning, not words: paraphrase is the whole game.'], ['Maps & diagrams', 'Follow the speaker’s route words: “past”, “opposite”, “just beyond”.']].map(x => `<div class="item"><div><b>${x[0]}</b><p class="muted small">${esc(x[1])}</p></div></div>`).join('')}</div></div></div>`;
}
function listenPlay(i, part) {
  const t = IELTS_LISTEN[i]; speechSynthesis.cancel();
  const segs = part === 1 ? t.script.split(' | ') : part === 2 ? t.script.split(' | ').slice(0, Math.ceil(t.script.split(' | ').length / 2)) : t.script.split(' | ').slice(Math.ceil(t.script.split(' | ').length / 2));
  segs.forEach(s => { const u = new SpeechSynthesisUtterance(s); u.lang = 'en-GB'; u.rate = IL.rate; speechSynthesis.speak(u); });
}
function listenSubmit() {
  const t = IELTS_LISTEN[IL.track];
  const items = t.qs.map((q, i) => Object.assign({ n: i + 1, qid: t.id + '-q' + i, skill: 'Listening', topic: t.title, qtype: q.t === 'mc' ? 'Multiple choice' : q.t === 'match' ? 'Matching' : 'Completion', tts: t.script }, q));
  IL.done = ieltsGrade('lq', items, 'Listening');
  render();
}
/* ---------- Reading ---------- */
let IR = { passage: null, timerOn: false, t0: 0, done: null };
function readingElapsed() { return IR.t0 ? Math.floor((Date.now() - IR.t0) / 1000) : 0; }
function fmtT(s) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
function ieltsReading() {
  if (IR.passage !== null) {
    const p = IELTS_READ[IR.passage];
    if (IR.done) return `<div class="section"><div class="crumb"><button class="btn light" onclick="IR.passage=null;IR.done=null;IR.timerOn=false;IR.t0=0;render()">← Reading</button></div><h2>${p.title} — Results</h2><p class="muted">Time: <b>${fmtT(readingElapsed())}</b> (real IELTS gives 20 minutes per passage)</p>${ieltsShowResults(IR.done)}<div class="card"><h3>Passage vocabulary</h3>${p.vocab.map(v => `<p class="muted small"><b>${v.w}</b> — ${esc(v.d)}</p>`).join('')}</div><button class="btn dark" onclick="IR.passage=null;IR.done=null;IR.timerOn=false;IR.t0=0;render()">Another passage →</button></div>`;
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IR.passage=null;render()">← Reading</button></div><span class="pill">${p.type === 'A' ? 'Academic' : 'General Training'}</span> <span class="pill" style="background:${lvColorI(t ? p.level : p.level)};color:#fff">${p.level}</span><h2>📚 ${p.title}</h2><div class="row" style="gap:8px;margin:8px 0"><span class="pill" id="rd-timer">${IR.t0 ? '⏱ ' + fmtT(readingElapsed()) : '⏱ 20:00 target'}</span>${IR.t0 ? '<button class="btn light mini-btn" onclick="IR.t0=0;render()">Reset</button>' : '<button class="btn mini-btn" onclick="IR.t0=Date.now();setInterval(()=>{const e=document.getElementById(\'rd-timer\');if(e)e.textContent=\'⏱ \'+fmtT(readingElapsed())},1000)">Start timer</button>'}</div><div class="ih-passage">${p.paras.map((t, i) => `<p><b class="ih-paraletter">${String.fromCharCode(65 + i)}</b> ${esc(t)}</p>`).join('')}</div><div class="qwrap">${p.qs.map((q, i) => ieltsRenderQ(Object.assign({ n: i + 1, qid: p.id + '-q' + i, skill: 'Reading', topic: p.topic, qtype: q.t === 'tf' ? 'True/False/Not Given' : q.t === 'heads' ? 'Matching headings' : q.t === 'mc' ? 'Multiple choice' : q.t === 'gap' ? 'Summary completion' : 'Short answer' }, q), 'rq')).join('')}</div><button class="btn dark" style="margin-top:12px" onclick="readingSubmit()">Submit answers →</button></div>`;
  }
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>📚 Reading</h2><p class="muted">Original Academic and General Training passages with the full question-type range, a 20-minute timer, scoring, explanations and passage vocabulary.</p><div class="list">${IELTS_READ.map((p, i) => `<div class="item" onclick="IR.passage=${i};render()"><div><span class="pill">${p.type === 'A' ? 'Academic' : 'GT'}</span> <b>${p.title}</b><span class="muted small"> · ${p.level} · ${p.topic}</span><p class="muted small">${p.qs.length} questions · ${p.qs.map(q => q.t).filter((v, j, a) => a.indexOf(v) === j).join(', ')}</p></div><button class="btn light">Start →</button></div>`).join('')}</div><div class="card"><h3>Strategy essentials</h3><p class="muted small">• Skim the passage first (2–3 min), then scan for answers.<br>• TFNG: TRUE = stated, FALSE = contradicted, NOT GIVEN = not mentioned. “Not mentioned” ≠ false.<br>• Matching headings: match paragraph main ideas, ignore detail words.<br>• Completion: respect the word limit and copy spelling exactly from the text.</p></div></div>`;
}
function readingSubmit() {
  const p = IELTS_READ[IR.passage];
  const items = p.qs.map((q, i) => Object.assign({ n: i + 1, qid: p.id + '-q' + i, skill: 'Reading', topic: p.topic, qtype: q.t === 'tf' ? 'True/False/Not Given' : q.t === 'heads' ? 'Matching headings' : q.t === 'mc' ? 'Multiple choice' : q.t === 'gap' ? 'Summary completion' : 'Short answer' }, q));
  IR.done = ieltsGrade('rq', items, 'Reading');
  render();
}
/* ---------- Writing ---------- */
let IW = { task: null, group: 'a1' };
function ieltsWriting() {
  if (IW.task) {
    const t = IW.task;
    const st = IST.writing[t.id] || { text: '', t0: 0 };
    const words = st.text.trim() ? st.text.trim().split(/\s+/).length : 0;
    const paras = st.text.split(/\n\s*\n/).filter(x => x.trim()).length;
    const min = t.prompt.includes('250') ? 250 : 150;
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IW.task=null;render()">← Writing</button></div><span class="pill">${t.type}</span><h2>✍️ ${t.title}</h2><div class="card ih-task"><h3>Task</h3><p>${esc(t.prompt)}</p>${t.data ? `<div class="ih-data"><b>Data:</b><p class="muted small">${esc(t.data)}</p></div>` : ''}</div><div class="ih-cards2"><div class="card"><h3>🧰 Vocabulary bank</h3><div class="chips">${t.vocab.map(v => `<span class="pill">${esc(v)}</span>`).join('')}</div><h3 style="margin-top:10px">🏗️ Useful structures</h3>${t.structures.map(s => `<p class="muted small">• ${esc(s)}</p>`).join('')}</div><div class="card"><h3>🧭 Paragraph guidance</h3><p class="muted small"><b>Introduction:</b> ${esc(t.guide.intro)}<br><b>Body:</b> ${esc(t.guide.body)}<br><b>Conclusion:</b> ${esc(t.guide.concl)}</p><div style="border-left:4px solid #ef4444;padding-left:10px"><h3>⚠️ Common mistakes</h3>${t.guide.mistakes.map(m => `<p class="muted small">• ${esc(m)}</p>`).join('')}</div></div></div><div class="card"><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><h3>✏️ Your answer</h3><div class="row" style="gap:8px"><span class="pill" id="w-time">${st.t0 ? '⏱ ' + fmtT(Math.floor((Date.now() - st.t0) / 1000)) : '⏱ 20 min target'}</span><button class="btn mini-btn" onclick="IWtStart('${t.id}')">${st.t0 ? 'Restart' : 'Start timer'}</button></div></div><textarea class="input ih-editor" id="w-editor" rows="12" placeholder="Write your answer here… (recommended: ${min}+ words)" oninput="IWtCount()">${esc(st.text)}</textarea><div class="ih-wstats"><span id="w-words"><b>${words}</b> words</span><span id="w-chars"><b>${st.text.length}</b> characters</span><span id="w-paras"><b>${paras}</b> paragraphs</span><span class="${words >= min ? 'grn' : 'red'}" id="w-goal">${words >= min ? '✓ Word count met' : 'Target: ' + min + ' words'}</span></div><button class="btn dark" onclick="IWtSave('${t.id}')">Save answer</button> <button class="btn light" onclick="IWtCheck('${t.id}')">🔍 Practice feedback</button><div id="w-fb"></div></div><div class="card"><h3>Sample answer (Band 7–8 style)</h3><details><summary class="btn light">Show model answer</summary><p class="ih-sample">${esc(t.sample)}</p></details></div></div>`;
  }
  const a2 = IELTS_WRITE.a2;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>✍️ Writing</h2><p class="muted">Every task: prompt, planning time, vocabulary bank, structures, paragraph guidance, common mistakes, timed editor with word count, and a Band 7–8 style sample.</p><div class="filters"><button class="filter ${IW.group === 'a1' ? 'active' : ''}" onclick="IW.group='a1';render()">Academic Task 1</button><button class="filter ${IW.group === 'a2' ? 'active' : ''}" onclick="IW.group='a2';render()">Task 2 — Essays</button><button class="filter ${IW.group === 'gt1' ? 'active' : ''}" onclick="IW.group='gt1';render()">GT Task 1 — Letters</button></div><div class="list">${IELTS_WRITE[IW.group].map((t, i) => `<div class="item" onclick="IW.task=IELTS_WRITE['${IW.group}'][${i}];render()"><div><span class="pill">${t.type}</span> <b>${t.title}</b><p class="muted small">${Object.keys(IST.writing).includes(t.id) ? '✓ You have a saved draft' : 'Not attempted yet'}</p></div><button class="btn light">Open →</button></div>`).join('')}</div>${IW.group === 'a2' ? `<div class="card"><p class="muted small">ℹ️ General Training Task 2 uses the same essay types (opinion, discussion, advantages/disadvantages, problem/solution, two-part) — practise them above.</p></div>` : ''}<div class="card"><h3>Assessment criteria (self-check)</h3><div class="ih-crit">${IELTS_SPEAK.criteria.filter(c => c.c !== 'Pronunciation').map(c => `<div class="ih-critrow"><b>${c.c}</b><span class="muted small">${esc(c.d)}</span></div>`).join('')}</div><p class="muted small">Task 2 counts twice as much as Task 1. Spending 40 minutes on Task 2 is not advice — it is arithmetic.</p></div></div>`;
}
function IWtStart(id) { IST.writing[id] = IST.writing[id] || { text: '' }; IST.writing[id].t0 = Date.now(); istSave(); render(); setInterval(() => { const e = document.getElementById('w-time'); const st = IST.writing[id]; if (e && st && st.t0) e.textContent = '⏱ ' + fmtT(Math.floor((Date.now() - st.t0) / 1000)); }, 1000); }
function IWtCount() {
  const ed = document.getElementById('w-editor'); if (!ed) return;
  const text = ed.value; const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const min = document.getElementById('w-goal').dataset.min || 150;
  document.getElementById('w-words').innerHTML = `<b>${words}</b> words`;
  document.getElementById('w-chars').innerHTML = `<b>${text.length}</b> characters`;
  document.getElementById('w-paras').innerHTML = `<b>${text.split(/\n\s*\n/).filter(x => x.trim()).length}</b> paragraphs`;
}
function IWtSave(id) { IST.writing[id] = Object.assign(IST.writing[id] || {}, { text: document.getElementById('w-editor').value }); istSave(); toast('Draft saved ✓'); }
function IWtCheck(id) {
  const st = IST.writing[id] || { text: '' }; const text = st.text = document.getElementById('w-editor').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const linkers = (text.match(/\b(however|moreover|furthermore|therefore|although|whereas|consequently|nevertheless|in addition|on the other hand|for instance|for example)\b/gi) || []).length;
  const sents = text.split(/[.!?]+/).filter(s => s.trim().length > 2);
  const avgLen = sents.length ? Math.round(words / sents.length) : 0;
  const longSents = sents.filter(s => s.trim().split(/\s+/).length > 30).length;
  const notes = [];
  notes.push(words >= 250 ? '✓ Length meets Task 2 minimum (250+).' : words >= 150 ? '✓ Length meets Task 1 minimum (150+).' : '✗ Too short — under-length answers lose Task Achievement points.');
  notes.push(linkers >= 4 ? '✓ Good use of linking devices (' + linkers + ' found).' : '⚠ Add cohesive devices: however, consequently, for instance… (' + linkers + ' found).');
  notes.push(avgLen >= 12 && avgLen <= 24 ? '✓ Healthy average sentence length (' + avgLen + ' words).' : '⚠ Average sentence length ' + avgLen + ' words — vary between short and complex sentences.');
  if (longSents) notes.push('⚠ ' + longSents + ' very long sentence(s) — split them for clarity.');
  if (!/\n\s*\n/.test(text) && words > 120) notes.push('⚠ No paragraph breaks — examiners need visible paragraphs.');
  document.getElementById('w-fb').innerHTML = `<div class="ih-fb"><b>Estimated practice feedback — not an official IELTS assessment.</b><div class="list">${notes.map(n => `<div class="item"><p class="muted small">${esc(n)}</p></div>`).join('')}</div><p class="muted small">Self-score against the four criteria below, then compare with the sample answer.</p></div>`;
}
/* ---------- Speaking ---------- */
let IS = { part: 1, cue: null, rec: null, recURL: null, timer: null };
function ieltsSpeaking() {
  const tts = (txt) => `speakText(${jarg(txt)})`;
  if (IS.part === 2) {
    const c = IS.cue !== null ? IELTS_SPEAK.p2[IS.cue] : IELTS_SPEAK.p2[0];
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IS.part=1;render()">← Speaking</button><div class="seg"><button class="filter" onclick="IS.part=1;render()">Part 1</button><button class="filter active" onclick="IS.part=2;render()">Part 2</button><button class="filter" onclick="IS.part=3;render()">Part 3</button></div></div><h2>🎤 Part 2 · Long Turn</h2><div class="ih-cue"><span class="ih-cuehead">CUE CARD</span><h3>${esc(c.card)}</h3><p class="muted">You should say:</p><ul class="muted">${c.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div><div class="ih-cards2"><div class="card"><h3>⏱ Timers</h3><div class="ih-timerrow"><div class="ih-timerbox"><b id="sp-p1">1:00</b><span class="muted small">prepare</span><button class="btn mini-btn" onclick="spTimer('sp-p1',60)">Start 1′</button></div><div class="ih-timerbox"><b id="sp-p2">2:00</b><span class="muted small">speak</span><button class="btn mini-btn" onclick="spTimer('sp-p2',120)">Start 2′</button></div></div><div class="row" style="gap:8px;margin-top:10px"><button class="btn light mini-btn" onclick="${tts(c.card)}">🔊 Read the card</button><button class="btn light mini-btn" onclick="IS.cue=(IS.cue+1)%IELTS_SPEAK.p2.length;IS.recURL=null;render()">Next card →</button></div></div><div class="card"><h3>🎙️ Recorder</h3><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn dark" onclick="spRecord()">⏺ Record</button><button class="btn light" onclick="spStop()">⏹ Stop</button><button class="btn light" onclick="spReplay()">▶ Replay</button><button class="btn light" onclick="IS.recURL=null;toast('Deleted');render()">🗑 Delete</button><button class="btn light" onclick="spStop();spRecord()">↻ Retry</button></div><audio id="sp-audio" controls style="width:100%;margin-top:10px;${IS.recURL ? '' : 'display:none'}" ${IS.recURL ? `src="${IS.recURL}"` : ''}></audio><p class="muted small" id="sp-recmsg">${IS.recURL ? 'Recording ready — listen and score yourself.' : 'Recording uses your microphone; the browser will ask for permission. Nothing is uploaded.'}</p></div></div><div class="ih-cards2"><div class="card"><h3>Follow-up questions (Part 3 bridge)</h3>${c.follow.map(f => `<div class="item"><p class="muted small">💬 ${esc(f)}</p></div>`).join('')}</div><div class="card"><h3>Useful phrases</h3>${Object.entries(IS.phr()).slice(0, 2).map(([k, v]) => `<p class="muted small"><b>${k}:</b> ${v.map(x => esc(x)).join(' · ')}</p>`).join('')}</div></div></div>`;
  }
  if (IS.part === 3) {
    return `<div class="section"><div class="crumb"><button class="btn light" onclick="IS.part=1;render()">← Speaking</button><div class="seg"><button class="filter" onclick="IS.part=1;render()">Part 1</button><button class="filter" onclick="IS.part=2;render()">Part 2</button><button class="filter active" onclick="IS.part=3;render()">Part 3</button></div></div><h2>🎤 Part 3 · Discussion</h2><p class="muted">Abstract, opinion-driven questions. Structure every answer: claim → reason → example → concession (“That said…”).</p><div class="list">${IELTS_SPEAK.p3.map(t => `<div class="card"><h3>${t.theme} <span class="muted small">· ${t.az}</span></h3><div class="list">${t.qs.map(q => `<div class="item"><div><b>${esc(q)}</b></div><button class="btn light mini-btn" onclick="${tts(q)}">🔊</button></div>`).join('')}</div></div>`).join('')}</div><div class="card"><h3>Fluency strategies</h3><div class="list">${IELTS_SPEAK.strategies.map(s => `<div class="item"><div><b>${s.t}</b> <span class="muted small">${s.az}</span><p class="muted small">${esc(s.d)}</p></div></div>`).join('')}</div></div></div>`;
  }
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🎤 Speaking</h2><div class="seg" style="margin:10px 0"><button class="filter active" onclick="IS.part=1;render()">Part 1</button><button class="filter" onclick="IS.part=2;render()">Part 2</button><button class="filter" onclick="IS.part=3;render()">Part 3</button></div><p class="muted">Part 1 · Introduction & interview — everyday topics, 4–5 minutes. Answer with the pattern: <b>direct answer → reason → example</b>.</p><div class="list">${IELTS_SPEAK.p1.map(t => `<div class="card"><div class="row" style="justify-content:space-between"><h3>${t.topic} <span class="muted small">· ${t.az}</span></h3><span class="pill">💡 ${esc(t.tip)}</span></div><div class="list">${t.qs.map(q => `<div class="item"><div><b>${esc(q)}</b></div><button class="btn light mini-btn" onclick="${tts(q)}">🔊</button></div>`).join('')}</div></div>`).join('')}</div><div class="card"><h3>Self-assessment (four criteria)</h3><div class="ih-crit">${IELTS_SPEAK.criteria.map(c => `<div class="ih-critrow"><b>${c.c}</b><span class="muted small">${esc(c.d)}</span><span class="muted small">☐ ${c.self.map(x => esc(x)).join('  ☐ ')}</span></div>`).join('')}</div><p class="muted small">Record yourself in Part 2 and check each box honestly. Estimated self-scores are practice only — official Speaking bands come from certified examiners.</p></div></div>`;
}
IS.phr = () => IELTS_SPEAK.phrases;
function spTimer(id, secs) { let s = secs; const el0 = document.getElementById(id); if (!el0) return; el0.textContent = fmtT(s); clearInterval(window.__spt); window.__spt = setInterval(() => { s--; const el = document.getElementById(id); if (!el) { clearInterval(window.__spt); return; } el.textContent = fmtT(Math.max(0, s)); if (s <= 0) { clearInterval(window.__spt); el.textContent = 'Time!'; } }, 1000); }
function spRecord() {
  if (!navigator.mediaDevices || !window.MediaRecorder) { document.getElementById('sp-recmsg').textContent = '⚠ Audio recording is not supported in this browser/context (it needs HTTPS or a compatible browser). Use a phone recorder alongside the timers instead.'; return; }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    IS.rec = new MediaRecorder(stream); const chunks = [];
    IS.rec.ondataavailable = e => chunks.push(e.data);
    IS.rec.onstop = () => { IS.recURL = URL.createObjectURL(new Blob(chunks, { type: 'audio/webm' })); stream.getTracks().forEach(t => t.stop()); render(); };
    IS.rec.start(); toast('⏺ Recording… speak now');
  }).catch(() => { const m = document.getElementById('sp-recmsg'); if (m) m.textContent = '⚠ Microphone permission denied. Allow access and retry, or use the timers with any voice recorder app.'; });
}
function spStop() { if (IS.rec && IS.rec.state === 'recording') IS.rec.stop(); }
function spReplay() { const a = document.getElementById('sp-audio'); if (IS.recURL && a) { a.style.display = ''; a.play(); } else toast('No recording yet'); }
/* ---------- Mock tests ---------- */
function ieltsMocks() {
  const mk = IST.mock;
  if (mk && mk.stage === 'intro') return mockIntro(mk);
  if (mk && mk.stage === 'listening') return mockListening();
  if (mk && mk.stage === 'reading') return mockReading();
  if (mk && mk.stage === 'writing') return mockWriting();
  if (mk && mk.stage === 'speaking') return mockSpeaking();
  if (mk && mk.stage === 'result') return mockResult();
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="go('ielts')">← IELTS Hub</button></div><h2>🧪 Mock Tests</h2><p class="muted">A condensed full-exam simulation: Listening (TTS audio) → Reading (timed) → Writing (timed editor) → Speaking (recorder + timers). Instructions before each section, automatic scoring, and a practice summary at the end.</p><div class="ih-cards2">${[['Academic Mock Test', 'Academic-style listening and reading passages + Task 1 chart + Task 2 essay prompts.', 'A'], ['General Training Mock Test', 'Everyday-context listening and GT section texts + a letter task + essay prompts.', 'G']].map(x => `<div class="card"><h3>${x[0]}</h3><p class="muted small">${x[1]}</p><button class="btn dark" onclick="mockStart('${x[2]}')">Start ${x[2] === 'A' ? 'Academic' : 'General'} mock →</button></div>`).join('')}</div><div class="card"><p class="muted small">⏱ The mock is condensed (about 45 minutes) to fit a study session — real Listening is ~30 min and Reading exactly 60. Results are practice estimates.</p></div></div>`;
}
function mockStart(type) { IST.mock = { type, stage: 'intro', answers: {}, results: {} }; istSave(); render(); }
function mockIntro(mk) {
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">← Mock Tests</button></div><h2>🧪 ${mk.type === 'A' ? 'Academic' : 'General Training'} Mock Test</h2><div class="card"><h3>Instructions</h3><p class="muted small">📋 Structure: <b>Listening</b> (TTS audio, 10 questions) → <b>Reading</b> (12 questions, timer) → <b>Writing</b> (1 task, 20-minute timer) → <b>Speaking</b> (cue card + recorder).<br>🎧 For listening, play each track once if you can — that is the real exam condition.<br>📚 Reading: 15 minutes target for 12 questions (real pace: 20 per passage).<br>✍️ Writing: 150+ words, timed.<br>⚠️ Your result is a practice estimate — not an official IELTS score.</p><button class="btn dark" onclick="IST.mock.stage='listening';istSave();render()">▶ Begin — Listening</button></div></div>`;
}
function mockListening() {
  const mk = IST.mock;
  const tracks = [IELTS_LISTEN[0], IELTS_LISTEN[1]];
  const items = [];
  tracks.forEach(t => t.qs.slice(0, 5).forEach((q, i) => items.push(Object.assign({ n: items.length + 1, qid: 'mock-l-' + t.id + i, skill: 'Listening', topic: t.title, qtype: q.t === 'mc' ? 'Multiple choice' : q.t === 'match' ? 'Matching' : 'Completion', tts: t.script }, q))));
  if (mk.doneL) return `<div class="section"><h2>🎧 Listening section — submitted</h2><div class="qc-score ${100 * mk.doneL.correct / 10 >= 60 ? 'good' : ''}"><b>${mk.doneL.correct}/10</b> correct</div>${ieltsShowResults(mk.doneL)}<button class="btn dark" onclick="IST.mock.stage='reading';istSave();render()">Continue to Reading →</button></div>`;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">✕ Exit mock</button></div><h2>🎧 Section 1 · Listening (10 questions)</h2><div class="row" style="gap:8px;margin:8px 0"><button class="btn dark" onclick="listenPlay(0,1)">▶ Track 1</button><button class="btn dark" onclick="listenPlay(1,1)">▶ Track 2</button><button class="btn light" onclick="speechSynthesis.cancel()">⏹ Stop</button></div><div class="qwrap">${items.map(q => ieltsRenderQ(q, 'ml')).join('')}</div><button class="btn dark" style="margin-top:12px" onclick="const items=window.__mockL||(window.__mockL=${jarg(items.length)});mockSubmitL()">Submit Listening →</button></div>`;
}
function mockSubmitL() {
  const mk = IST.mock;
  const tracks = [IELTS_LISTEN[0], IELTS_LISTEN[1]];
  const items = [];
  tracks.forEach(t => t.qs.slice(0, 5).forEach((q, i) => items.push(Object.assign({ n: items.length + 1, qid: 'mock-l-' + t.id + i, skill: 'Listening', topic: t.title, qtype: q.t === 'mc' ? 'Multiple choice' : q.t === 'match' ? 'Matching' : 'Completion', tts: t.script }, q))));
  mk.doneL = ieltsGrade('ml', items, 'Listening');
  mk.results.listening = mk.doneL.correct + '/' + items.length;
  istSave(); render();
}
function mockReading() {
  const mk = IST.mock;
  const p1 = IELTS_READ[0], p2 = mk.type === 'A' ? IELTS_READ[1] : IELTS_READ[3];
  const items = [];
  [p1, p2].forEach(p => p.qs.slice(0, 6).forEach((q, i) => items.push(Object.assign({ n: items.length + 1, qid: 'mock-r-' + p.id + i, skill: 'Reading', topic: p.topic, qtype: q.t === 'tf' ? 'True/False/Not Given' : q.t === 'heads' ? 'Matching headings' : q.t === 'mc' ? 'Multiple choice' : q.t === 'gap' ? 'Summary completion' : 'Short answer' }, q))));
  mk.readingSrc = [p1.id, p2.id];
  if (mk.doneR) return `<div class="section"><h2>📚 Reading section — submitted</h2><div class="qc-score ${100 * mk.doneR.correct / 12 >= 60 ? 'good' : ''}"><b>${mk.doneR.correct}/12</b> correct</div>${ieltsShowResults(mk.doneR)}<button class="btn dark" onclick="IST.mock.stage='writing';istSave();render()">Continue to Writing →</button></div>`;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">✕ Exit mock</button></div><h2>📚 Section 2 · Reading (12 questions · 15 min target)</h2><div class="ih-passage">${p1.paras.map((t, i) => `<p><b class="ih-paraletter">${String.fromCharCode(65 + i)}</b> ${esc(t)}</p>`).join('')}</div><div class="ih-passage">${p2.paras.map((t, i) => `<p><b class="ih-paraletter">${String.fromCharCode(65 + i)}</b> ${esc(t)}</p>`).join('')}</div><div class="qwrap">${items.map(q => ieltsRenderQ(q, 'mr')).join('')}</div><button class="btn dark" style="margin-top:12px" onclick="mockSubmitR()">Submit Reading →</button></div>`;
}
function mockSubmitR() {
  const mk = IST.mock;
  const p1 = IELTS_READ[0], p2 = mk.type === 'A' ? IELTS_READ[1] : IELTS_READ[3];
  const items = [];
  [p1, p2].forEach(p => p.qs.slice(0, 6).forEach((q, i) => items.push(Object.assign({ n: items.length + 1, qid: 'mock-r-' + p.id + i, skill: 'Reading', topic: p.topic, qtype: q.t === 'tf' ? 'True/False/Not Given' : q.t === 'heads' ? 'Matching headings' : q.t === 'mc' ? 'Multiple choice' : q.t === 'gap' ? 'Summary completion' : 'Short answer' }, q))));
  mk.doneR = ieltsGrade('mr', items, 'Reading');
  mk.results.reading = mk.doneR.correct + '/' + items.length;
  istSave(); render();
}
function mockWriting() {
  const t = IST.mock.type === 'A' ? IELTS_WRITE.a1[0] : IELTS_WRITE.gt1[0];
  IST.mock.wtask = t.id;
  if (IST.mock.doneW) return `<div class="section"><h2>✍️ Writing section — draft saved</h2><p class="muted">Words: <b>${(IST.writing[t.id] || { text: '' }).text.trim().split(/\s+/).filter(Boolean).length}</b> · status: draft saved and counted as “practised”.</p><button class="btn dark" onclick="IST.mock.stage='speaking';istSave();render()">Continue to Speaking →</button></div>`;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">✕ Exit mock</button></div><h2>✍️ Section 3 · Writing (20 min)</h2><div class="card ih-task"><p>${esc(t.prompt)}</p>${t.data ? `<div class="ih-data"><b>Data:</b><p class="muted small">${esc(t.data)}</p></div>` : ''}</div><textarea class="input ih-editor" id="mw-editor" rows="10" placeholder="Write here… 150+ words" oninput="const v=this.value;const w=v.trim()?v.trim().split(/\\s+/).length:0;document.getElementById('mw-w').textContent=w+' words'">${esc((IST.writing[t.id] || { text: '' }).text)}</textarea><p class="muted small"><b id="mw-w">0 words</b> · target 150+</p><button class="btn dark" onclick="IST.writing['${t.id}']=Object.assign(IST.writing['${t.id}']||{},{text:document.getElementById('mw-editor').value});IST.mock.doneW=true;IST.results=IST.results||{};IST.results.writing='drafted';istSave();toast('Draft saved ✓');render()">Save & continue →</button></div>`;
}
function mockSpeaking() {
  const c = IELTS_SPEAK.p2[IST.mock.type === 'A' ? 1 : 3];
  if (IST.mock.doneS) return `<div class="section"><h2>🗣️ Speaking section — practised</h2><p class="muted">Cue card completed with recording: <b>${IST.mock.doneS}</b></p><button class="btn dark" onclick="IST.mock.stage='result';istSave();render()">See my results →</button></div>`;
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">✕ Exit mock</button></div><h2>🗣️ Section 4 · Speaking</h2><div class="ih-cue"><span class="ih-cuehead">CUE CARD</span><h3>${esc(c.card)}</h3><ul class="muted">${c.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn mini-btn" onclick="spTimer('mk-s1',60)">⏱ Prepare 1′</button><span class="pill" id="mk-s1">1:00</span><button class="btn mini-btn" onclick="spTimer('mk-s2',120)">⏱ Speak 2′</button><span class="pill" id="mk-s2">2:00</span><button class="btn dark" onclick="spRecord()">⏺ Record</button><button class="btn light" onclick="spStop()">⏹ Stop</button><button class="btn light" onclick="spReplay()">▶ Replay</button></div><audio id="sp-audio" controls style="width:100%;margin-top:10px;${IS.recURL ? '' : 'display:none'}" ${IS.recURL ? `src="${IS.recURL}"` : ''}></audio><button class="btn dark" style="margin-top:12px" onclick="IST.mock.doneS=IS.recURL?'recorded ✓':'practised (no recording)';IST.mock.results.speaking=IST.mock.doneS;istSave();render()">Mark speaking done →</button></div>`;
}
function mockResult() {
  const mk = IST.mock;
  const lc = mk.doneL ? mk.doneL.correct : 0, lt = mk.doneL ? mk.doneL.results.length : 10;
  const rc = mk.doneR ? mk.doneR.correct : 0, rt = mk.doneR ? mk.doneR.results.length : 12;
  const lBand = rawToBand(Math.round(40 * lc / lt), IELTS_RAW.listening);
  const rBand = rawToBand(Math.round(40 * rc / rt), IELTS_RAW.readingA);
  const weakAreas = [];
  if (lc / lt < 0.6) weakAreas.push('Listening — review transcripts and re-listen');
  if (rc / rt < 0.6) weakAreas.push('Reading — check TFNG logic and timing');
  if (!(IST.writing[mk.wtask] || { text: '' }).text.trim().split(/\s+/).filter(Boolean).length >= 150) weakAreas.push('Writing — develop paragraphs to 150+ words');
  if (!mk.doneS) weakAreas.push('Speaking — record a full 2-minute long turn');
  return `<div class="section"><div class="crumb"><button class="btn light" onclick="IST.mock=null;istSave();render()">← Mock Tests</button></div><h2>🧪 Mock Test Summary</h2><div class="grid" style="margin:12px 0"><div class="stat"><b>${mk.results.listening || lc + '/' + lt}</b><br><span class="muted">Listening (raw)</span></div><div class="stat"><b>${mk.results.reading || rc + '/' + rt}</b><br><span class="muted">Reading (raw)</span></div><div class="stat"><b>${mk.results.writing || '—'}</b><br><span class="muted">Writing</span></div><div class="stat"><b>${mk.results.speaking || '—'}</b><br><span class="muted">Speaking</span></div></div><div class="ih-cards2"><div class="card"><h3>Estimated bands (practice only)</h3><p class="muted small">🎧 Listening ≈ <b>${lBand.toFixed(1)}</b> · 📚 Reading ≈ <b>${rBand.toFixed(1)}</b></p><p class="muted small">Writing and Speaking are practice-status only here — open the studios to self-assess against the four criteria.</p></div><div class="card"><h3>Areas to improve</h3>${weakAreas.length ? weakAreas.map(w => `<p class="muted small">• ${esc(w)}</p>`).join('') : '<p class="grn">All sections strong in this sitting — raise the difficulty next time.</p>'}<button class="btn dark" onclick="go('ielts-mistakes')">Review saved mistakes →</button></div></div><p class="muted small">⚠️ Practice estimate — not an official IELTS result.</p></div>`;
}

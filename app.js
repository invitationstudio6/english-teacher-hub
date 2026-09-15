/* ============================================================
   Lingua Forge Academy PRO — Professional ELT Edition
   Coursebook Library • Grammar in Use • Vocabulary in Use
   60 & 90 minute teaching programmes • Full SVG graphics
   ============================================================ */
const levels = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const adults = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const teens = ['A1', 'A2', 'B1', 'B2'];
const kids = ['Pre-A1', 'A1', 'A2', 'B1', 'B2'];
const TOPICS = window.LF_TOPICS;
const GRAMMAR = window.LF_GRAMMAR.concat(window.LF_GRAMMAR_EXTRA || []);
const VOCAB = window.LF_VOCAB;
(function mergeVocab() {
  const extra = window.LF_VOCAB_EXTRA || {};
  for (const lv in extra) { VOCAB[lv] = (VOCAB[lv] || []).concat(extra[lv]); }
})();
const TIPS = window.LF_TIPS || {};
const icons = ['🍎', '🏠', '👨‍👩‍👧', '🍲', '✈️', '🎒', '🎨', '🌳', '💻', '💼', '🎵', '🌍'];
const stageNames = ['Words in Context', 'Reading & Ideas', 'Listen & Speak', 'Write & Review'];
const stageIcons = ['🔤', '📖', '🎧', '✍️'];
const BIG_Q = [
  'How do we show who we are?', 'What makes a family?', 'How do routines shape our days?',
  'Why do we eat what we eat?', 'What makes a place feel like home?', 'How do we learn best?',
  'Why is free time important?', 'Why do people travel?', 'How does shopping change the way we live?',
  'What makes work meaningful?', 'How does technology change the way we think?', 'What do our traditions say about us?',
  'How can we protect our world?', 'How do ideas become inventions?', 'What makes communication successful?',
  'How do goals become reality?'
];
const SOUNDS = [
  ['/ɪ/', 'big · sit · fish'], ['/iː/', 'see · tea · green'], ['/æ/', 'cat · map · happy'],
  ['/ʌ/', 'cup · sun · lucky'], ['/eɪ/', 'day · name · play'], ['/əʊ/', 'home · go · open'],
  ['/θ/', 'three · thank · healthy'], ['/ð/', 'mother · weather · this'], ['/ʃ/', 'shop · she · show'],
  ['/tʃ/', 'child · teach · chair']
];

function esc(s) { return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
function jarg(s) { return JSON.stringify(String(s)).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
function band(l) { return (l === 'Pre-A1' || l === 'A1') ? 0 : (l === 'A2' || l === 'B1') ? 1 : 2; }
function grammarFor(level, unit) { const list = GRAMMAR.filter(g => g.range.includes(level)); return list[unit % list.length]; }
function vocabFor(level, unit) { const arr = VOCAB[level]; const start = (unit * 4) % arr.length; return [...arr.slice(start), ...arr.slice(0, start)].slice(0, 8); }
function blankWord(str, word) {
  const w = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return str.replace(new RegExp('(?<![A-Za-zÀ-ÿ\'’])' + w + '(?![A-Za-zÀ-ÿ\'’])', 'i'), '______');
}
function shuffled(arr, seed) { const a = [...arr]; let s = seed || 1; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
let __gid = 0;
function gid() { return 'g' + (++__gid); }

/* ---------------- SVG graphics library ---------------- */
function svgBox(w, h, body, extra) { return `<svg viewBox="0 0 ${w} ${h}" ${extra || 'width="100%" height="100%"'} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="illustration">${body}</svg>`; }
function coverSVG(age, lv, idx) {
  const id = gid();
  if (age === 'Kids') {
    return svgBox(300, 400, `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7bd6ff"/><stop offset="1" stop-color="#b7f0ff"/></linearGradient></defs><rect width="300" height="400" fill="url(#${id})"/><circle cx="245" cy="55" r="26" fill="#ffd94b"/><path d="M20 330 Q80 270 140 330 T260 330" stroke="#ff72ad" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M35 355 Q90 300 150 355 T265 355" stroke="#45a3ff" stroke-width="10" fill="none" stroke-linecap="round"/><rect x="45" y="210" width="34" height="34" rx="7" fill="#ffd94b"/><rect x="92" y="196" width="34" height="34" rx="7" fill="#35c98b"/><rect x="139" y="210" width="34" height="34" rx="7" fill="#ff6fae"/><text x="62" y="234" font-size="20" text-anchor="middle">A</text><text x="109" y="220" font-size="20" text-anchor="middle">B</text><text x="156" y="234" font-size="20" text-anchor="middle">C</text><circle cx="110" cy="130" r="9" fill="#fff"/><circle cx="86" cy="118" r="6" fill="#fff"/><circle cx="134" cy="122" r="7" fill="#fff"/><circle cx="58" cy="60" r="8" fill="#7b6dff" opacity=".6"/><circle cx="270" cy="120" r="6" fill="#ff6fae" opacity=".6"/><circle cx="20" cy="150" r="5" fill="#35c98b" opacity=".7"/><path d="M30 275 q6 -14 14 0 q6 14 0 0 z" fill="#8a5cf5"/><path d="M30 275 q6 -14 14 0" stroke="#5d3fd1" stroke-width="2" fill="none"/><text x="150" y="125" font-size="15" font-weight="700" text-anchor="middle" fill="#7b5cff">★</text>`);
  }
  if (age === 'Teens') {
    return svgBox(300, 400, `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#18193a"/><stop offset="1" stop-color="#3d1f6e"/></linearGradient></defs><rect width="300" height="400" fill="url(#${id})"/><path d="M0 300 Q75 250 150 300 T300 300 V400 H0 Z" fill="#ff5d8f" opacity=".85"/><path d="M0 330 Q80 285 160 330 T300 330 V400 H0 Z" fill="#ffd94b" opacity=".9"/><circle cx="90" cy="120" r="40" fill="none" stroke="#45a3ff" stroke-width="9"/><circle cx="90" cy="120" r="9" fill="#45a3ff"/><path d="M200 150 a30 30 0 0 1 60 0" stroke="#7b6dff" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M230 128 v40 M246 128 v40" stroke="#fff" stroke-width="7" stroke-linecap="round"/><rect x="160" y="90" width="9" height="9" fill="#ffd94b"/><rect x="210" y="70" width="9" height="9" fill="#45a3ff"/><rect x="70" y="210" width="9" height="9" fill="#ff6fae"/><rect x="150" y="200" width="9" height="9" fill="#35c98b"/><text x="150" y="260" font-size="34" text-anchor="middle" fill="#fff" font-weight="800">♪</text>`);
  }
  return svgBox(300, 400, `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#23264d"/><stop offset="1" stop-color="#4b3f9e"/></linearGradient></defs><rect width="300" height="400" fill="url(#${id})"/><g fill="#6b7bb3"><rect x="20" y="300" width="26" height="60"/><rect x="60" y="270" width="26" height="90"/><rect x="100" y="290" width="26" height="70"/><rect x="140" y="250" width="26" height="110"/><rect x="180" y="280" width="26" height="80"/><rect x="220" y="260" width="26" height="100"/><rect x="260" y="290" width="22" height="70"/></g><circle cx="150" cy="150" r="52" fill="none" stroke="#ffd94b" stroke-width="4"/><ellipse cx="150" cy="150" rx="52" ry="22" fill="none" stroke="#ffd94b" stroke-width="3"/><path d="M98 150 a52 22 0 0 0 104 0" fill="none" stroke="#ffd94b" stroke-width="3"/><circle cx="60" cy="60" r="4" fill="#ff6fae"/><circle cx="250" cy="90" r="4" fill="#45a3ff"/><circle cx="240" cy="230" r="4" fill="#35c98b"/><path d="M30 210 h40 M30 225 h25" stroke="#8f9bd0" stroke-width="4" stroke-linecap="round"/>`);
}
function bannerSVG(kind) {
  const id = gid();
  const grads = { grammar: ['#6d5dfc', '#a06bff'], vocab: ['#ff6fae', '#ff9d6b'], workbook: ['#1499ce', '#47c6a0'], speaking: ['#45a3ff', '#7b6dff'], reading: ['#ffbf4b', '#ff8d5e'], listening: ['#35c98b', '#45a3ff'], writing: ['#ff5d8f', '#a06bff'], tests: ['#23264d', '#4b3f9e'], games: ['#ff8d5e', '#ff5d8f'], hero: ['#6254f7', '#ff72ad'] };
  const [c1, c2] = grads[kind] || grads.hero;
  const inner = {
    grammar: `<text x="120" y="125" font-size="120" font-weight="800" fill="#fff" opacity=".92" text-anchor="middle" font-family="serif">Aa</text><path d="M620 60 h80 M620 90 h50 M650 125 h110" stroke="#fff" stroke-width="6" opacity=".55" stroke-linecap="round"/>`,
    vocab: `<rect x="90" y="55" width="70" height="90" rx="8" fill="#fff" opacity=".9"/><rect x="172" y="55" width="70" height="90" rx="8" fill="#fff" opacity=".65"/><circle cx="560" cy="120" r="34" fill="#fff" opacity=".85"/><text x="560" y="132" font-size="30" text-anchor="middle">Aa</text><text x="125" y="105" font-size="26" text-anchor="middle" fill="#4a3f8f">word</text>`,
    workbook: `<rect x="90" y="50" width="120" height="100" rx="8" fill="#fff" opacity=".9" transform="rotate(-4 150 100)"/><path d="M105 75 h70 M105 92 h58 M105 109 h64 M105 126 h40" stroke="#1499ce" stroke-width="5" stroke-linecap="round" opacity=".5"/><circle cx="610" cy="85" r="26" fill="#fff" opacity=".9"/><path d="M598 85 l9 9 l16 -18" stroke="#1499ce" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    speaking: `<ellipse cx="150" cy="90" rx="60" ry="34" fill="#fff" opacity=".9"/><text x="150" y="100" font-size="24" text-anchor="middle">Hi!</text><ellipse cx="280" cy="120" rx="48" ry="26" fill="#fff" opacity=".7"/><path d="M560 130 a36 36 0 1 0 -24 -66" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="585" cy="66" r="7" fill="#fff"/>`,
    reading: `<path d="M90 60 h90 v100 h-90 z M180 60 h90 v100 h-90 z" fill="#fff" opacity=".9"/><path d="M135 60 c0 18 -12 24 -26 26 M135 60 c0 18 12 24 26 26" stroke="#ff9d3d" stroke-width="4" fill="none"/><path d="M600 80 q30 20 0 40 q-30 -20 0 -40 z" fill="#fff" opacity=".9"/>`,
    listening: `<path d="M120 95 q0 -35 40 -40 v120 q-40 -5 -40 -40" fill="#fff" opacity=".9"/><circle cx="580" cy="95" r="32" fill="none" stroke="#fff" stroke-width="8"/><circle cx="580" cy="95" r="13" fill="#fff"/>`,
    writing: `<path d="M150 60 l-60 110 l14 14 l66 -66 z" fill="#fff" opacity=".95"/><path d="M150 60 l60 110 l-14 14 l-66 -66 z" fill="#fff" opacity=".6"/><path d="M150 60 l60 110 M150 60 l-60 110" stroke="#a06bff" stroke-width="4"/>`,
    tests: `<circle cx="150" cy="90" r="52" fill="none" stroke="#fff" stroke-width="9"/><circle cx="150" cy="90" r="30" fill="none" stroke="#fff" stroke-width="9"/><circle cx="150" cy="90" r="10" fill="#fff"/><path d="M600 60 l12 26 l28 4 l-20 20 l5 28 l-25 -14 l-25 14 l5 -28 l-20 -20 l28 -4 z" fill="#fff" opacity=".9"/>`,
    games: `<rect x="100" y="55" width="80" height="80" rx="12" fill="#fff" opacity=".9"/><circle cx="120" cy="75" r="6" fill="#ff5d8f"/><circle cx="140" cy="95" r="6" fill="#1499ce"/><circle cx="160" cy="115" r="6" fill="#35c98b"/><rect x="540" y="55" width="80" height="80" rx="12" fill="#fff" opacity=".55"/><circle cx="560" cy="75" r="6" fill="#ffd94b"/><circle cx="600" cy="115" r="6" fill="#7b6dff"/>`,
    hero: `<g opacity=".96"><rect x="70" y="70" width="120" height="90" rx="8" fill="#fff" opacity=".92"/><path d="M90 100 h60 M90 120 h44" stroke="#6254f7" stroke-width="6" stroke-linecap="round" opacity=".5"/><circle cx="250" cy="105" r="34" fill="#ffd94b" opacity=".95"/><path d="M250 105 a30 30 0 0 1 60 0" stroke="#fff" stroke-width="8" fill="none" opacity=".95"/><circle cx="480" cy="70" r="30" fill="#fff" opacity=".6"/><ellipse cx="520" cy="150" rx="46" ry="26" fill="#fff" opacity=".85"/><text x="520" y="158" font-size="22" text-anchor="middle">Hello!</text><path d="M640 90 q26 22 0 44 q-26 -22 0 -44 z" fill="#fff" opacity=".9"/></g>`
  }[kind] || '';
  return svgBox(840, 170, `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="840" height="170" rx="20" fill="url(#${id})"/>${inner}<circle cx="40" cy="40" r="60" fill="#fff" opacity=".08"/><circle cx="800" cy="150" r="70" fill="#fff" opacity=".08"/>`);
}
function timelineSVG(pos) {
  const x = { past: 90, now: 420, future: 750, present: 420, span: 250 }[pos] || 420;
  return svgBox(840, 70, `<line x1="30" y1="35" x2="810" y2="35" stroke="#cfc8ff" stroke-width="5" stroke-linecap="round"/><circle cx="90" cy="35" r="9" fill="${pos === 'past' ? '#ff6fae' : '#d9d3ff'}"/><circle cx="420" cy="35" r="9" fill="${pos === 'now' || pos === 'present' ? '#6d5dfc' : '#d9d3ff'}"/><circle cx="750" cy="35" r="9" fill="${pos === 'future' ? '#45a3ff' : '#d9d3ff'}"/><line x1="420" y1="35" x2="${pos === 'span' ? 750 : 420}" y2="35" stroke="#35c98b" stroke-width="7" stroke-linecap="round"/><text x="90" y="15" text-anchor="middle" font-size="13" font-weight="700" fill="#6f5de0">PAST</text><text x="420" y="15" text-anchor="middle" font-size="13" font-weight="700" fill="#6f5de0">NOW</text><text x="750" y="15" text-anchor="middle" font-size="13" font-weight="700" fill="#6f5de0">FUTURE</text>`);
}
function tensePos(id) {
  if (id === 'present-perfect') return 'span';
  if (id === 'past-simple') return 'past';
  if (id.indexOf('present') !== -1) return 'present';
  if (id.indexOf('future') !== -1) return 'future';
  return null;
}
/* ---------------- IELTS reading renderers ---------------- */
function ieltsPassage(r) {
  if (!r.paras) return `<p class="reading">${r.text}</p>`;
  return `<div class="ielts-passage"><div class="para-note">Read the passage quickly for the main idea, then answer the questions below.</div>${r.paras.map((p, i) => `<div class="parabox"><span class="paralabel">${String.fromCharCode(65 + i)}</span><p>${p}</p></div>`).join('')}</div>`;
}
function ieltsTasks(tasks) {
  if (!tasks || !tasks.length) return '';
  return tasks.map((t, ti) => {
    let body = '';
    if (t.type === 'TFNG') {
      const it = t.items[0] ? ['Vero', 'Falso', 'Non indicato'].includes(t.items[0].a) : false;
      const opts = it ? ['Vero', 'Falso', 'Non indicato'] : ['True', 'False', 'Not Given'];
      body = `<p class="taskintro">${t.intro}</p>${t.items.map((x, i) => `<div class="q wbq"><b>${i + 1}.</b> <span class="tf-stmt">${x.s}</span><select class="input tfpick"><option value="">— ${it ? 'Vero / Falso / Non indicato' : 'True / False / Not Given'} —</option>${opts.map(o => `<option value="${o}" ${x.a === o ? 'data-ok="1"' : ''}>${o}</option>`).join('')}</select></div>`).join('')}`;
    } else if (t.type === 'SUMMARY') {
      body = `<p class="taskintro">${t.intro}</p><div class="bank-chips"><span class="bankchip-label">Word bank</span>${t.bank.map((w, i) => `<span class="bank-chip">${String.fromCharCode(65 + i)}. ${esc(w)}</span>`).join('')}</div>${t.text.map((s, i) => { const parts = s.split('____'); const sel = `<select class="input smpick"><option value="">— choose —</option>${t.bank.map(o => `<option value="${esc(o)}" ${String(o).toLowerCase() === String(t.ans[i]).toLowerCase() ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select>`; return `<div class="q wbq"><b>${i + 1}.</b> <span class="sm-stmt">${parts[0]}${sel}${parts.slice(1).join(sel)}</span></div>`; }).join('')}`;
    } else {
      body = `<p class="taskintro">${t.intro}</p>${t.items.map((it, i) => `<div class="q wbq"><b>${i + 1}.</b> <span class="mc-q">${it.q}</span><select class="input mcpick"><option value="">— choose A, B, C or D —</option>${it.opts.map((o, k) => `<option value="${esc(o)}" ${k === it.a ? 'data-ok="1"' : ''}>${String.fromCharCode(65 + k)}. ${esc(o)}</option>`).join('')}</select></div>`).join('')}`;
    }
    return `<div class="task-card ielts"><div class="task-head"><span class="tasktag">${t.type === 'TFNG' ? 'True / False / Not Given' : t.type === 'SUMMARY' ? 'Summary Completion' : 'Multiple Choice'}</span><span class="muted small">${t.range || ''}</span></div>${body}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div>`;
  }).join('');
}

/* ---------------- Lesson content builders ---------------- */
const warmUps = [
  ['Look at the theme: ', '. Point to things you know and name them in English.', 'Ask your partner: "What is your favourite part of this topic?"'],
  ['Think about the theme: ', '. Share three things you already know about it.', 'Ask your partner one follow-up question.'],
  ['Discuss the theme: ', '. What do you already know? What would you like to find out?', 'Compare your ideas with your partner and agree on one question for the class.']
];
function makeLessons(level, unit) {
  const t = TOPICS[unit];
  const g = grammarFor(level, unit);
  const gl = g.levels[level] || g.levels[g.range[0]];
  const v = vocabFor(level, unit);
  const b = band(level);
  const aims = [
    'Learn eight target words and one grammar focus, and use them in personal sentences.',
    'Read for gist and detail, then respond to the text with evidence from the passage.',
    'Understand a spoken conversation and take part in a structured speaking task.',
    'Plan, draft and check a short piece of writing against a clear checklist.'
  ];
  const homework = [
    'Review the eight target words and write one personal sentence for each.',
    'Re-read the text and write full answers to all three comprehension questions.',
    'Record yourself doing the speaking task and listen back to check pronunciation.',
    'Complete the writing task and check your draft against the checklist.'
  ];
  return stageNames.map((s, j) => {
    const num = j + 1;
    return {
      id: `${level}-${unit}-${num}`, num, stage: s,
      title: `${stageIcons[j]} ${s}: ${t.title}`,
      topic: t.title, aim: aims[j],
      outcomes: bandOutcomes(j, b),
      vocab: v.map(w => ({ ...w, level })),
      grammar: { id: g.id, title: g.title, form: gl.form, use: gl.use, quick: gl.quick, more: gl.more, examples: gl.examples, error: gl.error },
      reading: t.reading, questions: t.questions,
      listening: t.listening, speaking: t.speaking, writing: t.writing,
      warmup: warmUps[b][0] + t.title + warmUps[b][1] + ' ' + warmUps[b][2],
      homework: homework[j], review: makeReview(level, unit),
      pron: pronFocus(level, unit)
    };
  });
}
function bandOutcomes(stage, b) {
  const base = [['Say and recognise the target words.', 'Complete sentences with the target grammar.'], ['Find the main idea of a short text.', 'Answer detail questions with short answers.'], ['Understand the situation and key words in a conversation.', 'Take part in a short exchange with support.'], ['Write 3–5 clear sentences on the topic.', 'Check spelling and word order.']];
  const mid = [['Use the target words in full sentences.', 'Apply the grammar focus in controlled practice.'], ['Identify the main idea and supporting details.', 'Discuss the text with opinions and examples.'], ['Follow the main points of a conversation.', 'Hold a 1–2 minute exchange using target phrases.'], ['Write 80–120 words with a clear structure.', 'Use linking words and the target grammar.']];
  const adv = [['Use the target words flexibly in discussion.', 'Explain the grammar focus and correct errors.'], ['Evaluate the text critically and infer meaning.', 'Justify opinions with evidence.'], ['Follow nuance and speaker intention.', 'Lead a discussion with follow-up questions.'], ['Write 120–180 words with cohesion and register.', 'Self-correct against a detailed checklist.']];
  const set = b === 0 ? base : b === 1 ? mid : adv;
  return set[stage];
}
function pronFocus(level, unit) {
  const s = SOUNDS[(band(level) * 4 + unit) % SOUNDS.length];
  const w = VOCAB[level][(unit * 2) % 20];
  return { word: w.word, ipa: s[0], family: s[1] };
}
function makeReview(level, unit) {
  const t = TOPICS[(unit + 3) % 16];
  const v = VOCAB[level];
  const gs = GRAMMAR.filter(x => x.range.includes(level));
  const g1 = gs[unit % gs.length], g2 = gs[(unit + 1) % gs.length], g3 = gs[(unit + 2) % gs.length];
  const qs = [];
  const w1 = v[unit % v.length], w2 = v[(unit + 5) % v.length];
  qs.push({ q: `Complete: ${blankWord(w1.example, w1.word)}`, opts: [w1.word, v[(unit + 1) % v.length].word, v[(unit + 2) % v.length].word], ans: w1.word });
  qs.push({ q: `Complete: ${blankWord(w2.example, w2.word)}`, opts: [v[(unit + 3) % v.length].word, w2.word, v[(unit + 4) % v.length].word], ans: w2.word });
  qs.push({ q: `Which sentence uses ${g1.title}?`, opts: [pickEx(g1, level, 0), pickEx(g2, level, 0), pickEx(g3, level, 0)], ans: pickEx(g1, level, 0) });
  qs.push({ q: `Which sentence uses ${g2.title}?`, opts: [pickEx(g3, level, 0), pickEx(g1, level, 1), pickEx(g2, level, 1)], ans: pickEx(g2, level, 1) });
  qs.push({ q: `According to "${t.reading.title}", ${t.questions[0].q.charAt(0).toLowerCase()}${t.questions[0].q.slice(1)}`, opts: shuffled([t.questions[0].a, t.questions[1].a, t.questions[2].a], unit + 2), ans: t.questions[0].a });
  return qs;
}
function pickEx(g, level, i) { const e = g.levels[level] || g.levels[g.range[0]]; return e.examples[i % e.examples.length]; }
function grammarExercises(g, lv, seedBase) {
  const e = g.levels[lv] || g.levels[g.range[0]];
  const W = /[^a-zA-ZàèéìòùÀÈÉÌÒÙáíóúÁÍÓÚçÇñÑüÜ'’]+/g;
  const pool = e.examples.join(' ').replace(W, ' ').trim().split(/\s+/).filter(w => w.length >= 4 && w.length <= 16 && !['have', 'they', 'with', 'that', 'this', 'from', 'will', 'were', 'your', 'them', 'there', 'would', 'because', 'about'].includes(w.toLowerCase()));
  const items = e.examples.slice(0, 3).map((ex, i) => {
    const exWords = ex.replace(W, ' ').trim().split(/\s+/).filter(w => w.length >= 4);
    const allWords = ex.replace(W, ' ').trim().split(/\s+/);
    const target = exWords[(i * 2 + 1) % (exWords.length || 1)] || allWords[0];
    const dist = shuffled(pool.filter(w => w !== target), seedBase + i).slice(0, 2);
    return { q: `Complete: ${blankWord(ex, target)}`, opts: shuffled([target, ...dist], seedBase + i + 7), ans: target };
  });
  items.push({ q: `Choose the correct use: ${e.use}`, opts: ['True', 'False'], ans: 'True', intro: true });
  return items;
}
function vocabExercises(words, seedBase) {
  const mean = w => w.en || w.meaning;
  const match = words.slice(0, 4).map((w, i) => {
    const others = words.filter(x => x.word !== w.word).slice(0, 3).map(mean);
    return { q: `What does “${w.word}” mean?`, opts: shuffled([mean(w), ...others], seedBase + i), ans: mean(w) };
  });
  const gf = words.slice(4, 7).map((w, i) => {
    const others = words.filter(x => x.word !== w.word).slice(0, 2).map(x => x.word);
    return { q: `Complete: ${blankWord(w.example, w.word)}`, opts: shuffled([w.word, ...others], seedBase + i + 3), ans: w.word };
  });
  return [...match, ...gf];
}

/* ---------------- Teaching programme (60 / 90 min) ---------------- */
function planRows(l, minutes) {
  const b = band(state.book ? state.book.level : l.level || 'B1');
  const readFirst = l.stage === 1 || ((l.unit ? l.unit.number : 1) % 2 === 1);
  const skillA = readFirst ? 'Reading' : 'Listening';
  const skillB = readFirst ? 'Listening' : 'Reading';
  const skillActA = readFirst ? `Reading: work through “${l.reading.title}”. Gist → detail → discuss the answers.` : `Listening: play “${l.listening.title}”. Listen for gist, then details. Check with the transcript.`;
  const skillActB = readFirst ? `Listening: play “${l.listening.title}”. Listen for gist, then details. Check with the transcript.` : `Reading: work through “${l.reading.title}”. Gist → detail → discuss the answers.`;
  const freer = l.stage >= 2 ? `Speaking: complete the role play — ${l.speaking.roleplay}` : `Writing: ${l.writing.prompt}`;
  if (minutes === 60) {
    return [
      { n: 1, stage: 'Warm-up · Big Question', int: 'T–S · whole class', time: 5, act: `Present the unit Big Question “${BIG_Q[(l.unit ? l.unit.number : 1) - 1]}”. Elicit two or three ideas and set the context.`, mat: 'Board · flashcards' },
      { n: 2, stage: 'Vocabulary presentation', int: 'T–S · choral drill', time: 10, act: `Present ${l.vocab.length} target words with illustrations and audio. Drill pronunciation and highlight spelling patterns.`, mat: 'Picture cards · audio' },
      { n: 3, stage: 'Grammar Bank', int: 'T–S', time: 10, act: `Open the Grammar Bank box “${l.grammar.title}”. Teach form → meaning → use. Concept-check with two questions.`, mat: 'Grammar Bank · board' },
      { n: 4, stage: 'Controlled practice', int: 'Individual', time: 10, act: `Complete the Workbook gap-fill and choice tasks on ${l.grammar.title}. Monitor and give instant correction.`, mat: 'Workbook' },
      { n: 5, stage: `Skills focus · ${skillA}`, int: 'Pairs', time: 15, act: skillActA, mat: 'Coursebook · audio' },
      { n: 6, stage: 'Freer practice', int: 'Pairs / groups', time: 7, act: freer + '. Give feedback on accuracy and fluency.', mat: 'Coursebook' },
      { n: 7, stage: 'Wrap-up & homework', int: 'T–S', time: 3, act: `Elicit two things learners learned. Set the homework: ${l.homework}`, mat: 'Homework sheet' }
    ];
  }
  return [
    { n: 1, stage: 'Warm-up · Big Question', int: 'T–S · whole class', time: 7, act: `Present the unit Big Question “${BIG_Q[(l.unit ? l.unit.number : 1) - 1]}”. Elicit ideas and pre-teach two key words.`, mat: 'Board · flashcards' },
    { n: 2, stage: 'Vocabulary presentation', int: 'T–S · choral drill', time: 12, act: `Present ${l.vocab.length} target words with illustrations and audio. Drill, then personalise with two questions.`, mat: 'Picture cards · audio' },
    { n: 3, stage: 'Pronunciation focus', int: 'T–S · drill', time: 8, act: `Focus on the sound ${l.pron.ipa} (${l.pron.family}). Listen and repeat “${l.pron.word}”. Identify the sound in other words.`, mat: 'Audio · phonemic chart' },
    { n: 4, stage: 'Grammar Bank', int: 'T–S', time: 15, act: `Open the Grammar Bank box “${l.grammar.title}”. Teach form → meaning → use with the timeline on the board.`, mat: 'Grammar Bank · board' },
    { n: 5, stage: 'Controlled practice', int: 'Individual', time: 12, act: `Workbook gap-fill, choice and transformation tasks on ${l.grammar.title}. Monitor and correct.`, mat: 'Workbook' },
    { n: 6, stage: `Reading · ${skillA}`, int: 'Pairs', time: 10, act: skillActA, mat: 'Coursebook' },
    { n: 7, stage: `Listening · ${skillB}`, int: 'Individual → pairs', time: 10, act: skillActB, mat: 'Audio' },
    { n: 8, stage: 'Freer practice', int: 'Pairs / groups', time: 11, act: `${freer}. Then share with the class and give feedback.`, mat: 'Coursebook' },
    { n: 9, stage: 'Wrap-up & homework', int: 'T–S', time: 5, act: `Round-up quiz of three items. Set homework: ${l.homework}`, mat: 'Homework sheet' }
  ];
}
function planTable(l, minutes) {
  const rows = planRows(l, minutes);
  return `<div class="plan-head"><span class="pill">Class programme · ${minutes} minutes</span><span class="muted small">Interaction: T–S teacher–student · S–S pairwork · Ind individual</span></div><table class="plan"><thead><tr><th>#</th><th>Stage</th><th>Interaction</th><th>Time</th><th>Activity</th><th>Materials</th></tr></thead><tbody>${rows.map(r => `<tr><td><b>${r.n}</b></td><td><b>${r.stage}</b></td><td>${r.int}</td><td><span class="tchip">${r.time}′</span></td><td>${r.act}</td><td class="muted small">${r.mat}</td></tr>`).join('')}</tbody></table><div class="plan-total">Total: <b>${rows.reduce((s, r) => s + r.time, 0)} minutes</b> · ${rows.length} stages</div>`;
}

/* ---------------- Books & state ---------------- */
function makeBook(age, level) {
  return {
    id: (age + '-' + level).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    age, level,
    title: `${age} English ${level}`,
    subtitle: 'Student’s Book · International Edition',
    units: Array.from({ length: 16 }, (_, i) => ({ number: i + 1, title: TOPICS[i].title, theme: TOPICS[i].intro, bigQ: BIG_Q[i], lessons: makeLessons(level, i) }))
  };
}
const books = [...kids.map(l => makeBook('Kids', l)), ...teens.map(l => makeBook('Teens', l)), ...adults.map(l => makeBook('Adults', l))];
const allVocab = levels.flatMap(l => VOCAB[l].map((w, i) => ({ ...w, level: l, icon: icons[i % icons.length], topic: TOPICS[i % TOPICS.length].title })));
const state = { view: 'dashboard', age: 'All', level: 'All', book: null, lesson: null, minutes: 60, gunit: null, vunit: null, flip: null, itLevel: 'A1', itBook: null, itLesson: null, itTab: 'Libri', actLang: 'en', actLevel: 0, actIdx: 0, qIdx: 0, mood: 'happy', rp: null, student: JSON.parse(localStorage.getItem('lf_students') || '[]'), homework: JSON.parse(localStorage.getItem('lf_homework') || '[]'), plans: JSON.parse(localStorage.getItem('lf_plans') || '[]'), flashIndex: 0, flashFlip: false };
function save() { localStorage.setItem('lf_students', JSON.stringify(state.student)); localStorage.setItem('lf_homework', JSON.stringify(state.homework)); localStorage.setItem('lf_plans', JSON.stringify(state.plans)); }

/* ---------------- Shell & navigation ---------------- */
function layout(content) {
  document.getElementById('app').innerHTML = `<div class="app"><aside class="side"><div class="brand"><span>LF</span><strong>Lingua Forge</strong></div><div class="navtitle">Teach</div>${[['dashboard', '🏠', 'Dashboard'], ['students', '👩‍🎓', 'Students'], ['planner', '📅', 'Lesson Planner'], ['progress', '📊', 'Progress']].map(x => nav(...x)).join('')}<div class="navtitle">Published Library</div>${[['textbooks', '📚', 'Coursebooks'], ['grammar', '📖', 'Grammar in Use'], ['vocabulary', '🔤', 'Vocabulary in Use'], ['workbook', '📝', 'Workbooks'], ['teacher', '👩‍🏫', 'Teacher’s Book']].map(x => nav(...x)).join('')}<div class="navtitle">Skills Lab</div>${[['reading', '📚', 'Reading Studio'], ['listening', '🎧', 'Listening Lab'], ['speaking', '🗣️', 'Speaking Studio'], ['writing', '✍️', 'Writing Studio'], ['flashcards', '🃏', 'Flashcards'], ['games', '🎮', 'Activities'], ['tests', '🧪', 'Assessments'], ['homework', '🏠', 'Homework']].map(x => nav(...x)).join('')}<div class="navtitle">Tools & Strategies</div>${[['tips', '💡', 'Tips & Strategies']].map(x => nav(...x)).join('')}<div class="navtitle">Italiano 🇮🇹</div>${[['italian', '🍝', 'Italiano'], ['itgrammar', '📖', 'Grammatica'], ['itvocab', '🔤', 'Lessico'], ['itreading', '📚', 'Lettura'], ['itlistening', '🎧', 'Ascolto'], ['itspeaking', '🗣️', 'Parlare'], ['itwriting', '✍️', 'Scrivere']].map(x => nav(...x)).join('')}</aside><main class="main"><div class="top"><input class="search" placeholder="Search vocabulary, grammar, lessons…" onkeydown="if(event.key==='Enter')search(this.value)"><span class="pill">PRO · ELT Edition</span></div>${content}</main></div>`;
}
function nav(id, ico, label) { return `<button class="nav ${state.view === id ? 'active' : ''}" onclick="go('${id}')"><span>${ico}</span> ${label}</button>`; }
function go(v) { state.view = v; state.book = null; state.lesson = null; state.flip = null; render(); }
function render() {
  if (state.flip) { layout(flipView()); return; }
  const m = { dashboard: dashboard, textbooks: textbooks, book: bookPage, lesson: lessonPage, vocabulary: vocabulary, flashcards: flashcards, grammar: grammarPage, reading: reading, listening: listening, speaking: speaking, writing: writing, tests: tests, workbook: workbook, teacher: teacher, students: students, homework: homework, progress: progress, planner: planner, games: activities, tips: tipsPage, italian: italian, itlesson: itLessonPage, itgrammar: itGrammar, itvocab: itVocab, itreading: itReading, itlistening: itListening, itspeaking: itSpeaking, itwriting: itWriting };
  layout(m[state.view]());
}

/* ---------------- Tips & Strategies ---------------- */
function tipsPage() {
  const cats = [TIPS.ielts, TIPS.study, TIPS.italian];
  return `<div class="section"><h2>💡 Tips & Strategies</h2><p class="muted">Exam tactics, science-backed study methods, and skill-building guidance for English and Italian — everything in one professional toolkit.</p>${bannerSVG('hero')}<div class="tips-cats">${cats.map(c => `<div class="tips-cat" style="--tc:${c.color}"><div class="tips-cat-head"><span class="tips-cat-icon">${c.icon}</span><div><h3>${c.title}</h3><p class="muted small">${c.subtitle}</p></div></div><div class="tips-groups">${c.groups.map(g => `<div class="tips-group"><h4><span class="tips-g-icon">${g.icon}</span> ${g.title}</h4><div class="tips-list">${g.tips.map(t => `<div class="tip"><div class="tip-t"><b>${esc(t.t)}</b></div><p class="muted">${esc(t.d)}</p></div>`).join('')}</div></div>`).join('')}</div></div>`).join('')}</div></div>`;
}

/* ---------------- Views ---------------- */
function dashboard() {
  return `<section class="hero"><span class="pill light">LINGUA FORGE ACADEMY · ELT EDITION</span><h1>Teach English beautifully.</h1><p>A published-style curriculum: coursebooks, Grammar in Use, Vocabulary in Use, workbooks and timed 60 / 90-minute teaching programmes — everything a professional teacher needs.</p><div class="row"><button class="btn dark" onclick="go('textbooks')">Open the Coursebook Library →</button><button class="btn light" onclick="go('grammar')">Grammar in Use</button></div>${bannerSVG('hero')}</section><div class="grid"><div class="stat"><span class="muted">Coursebooks</span><br><b>${books.length}</b></div><div class="stat"><span class="muted">Units</span><br><b>${books.length * 16}</b></div><div class="stat"><span class="muted">Lessons</span><br><b>${books.length * 64}</b></div><div class="stat"><span class="muted">Vocabulary</span><br><b>${allVocab.length}</b></div></div><div class="section"><h2>The published library</h2><div class="books"><div class="card"><div class="illus">📚</div><h3>Coursebook Library</h3><p class="muted">Publisher-style Student’s Books with Big Questions, Grammar Banks and 60/90-minute programmes.</p><button class="btn" onclick="go('textbooks')">Browse coursebooks</button></div><div class="card"><div class="illus">🧠</div><h3>Grammar in Use</h3><p class="muted">Grammar units with study boxes, timelines and checkable exercises, matched to CEFR levels.</p><button class="btn" onclick="go('grammar')">Open the grammar book</button></div><div class="card"><div class="illus">🔤</div><h3>Vocabulary in Use</h3><p class="muted">Topic units with illustrated word lists, matching and gap-fill practice with instant checking.</p><button class="btn" onclick="go('vocabulary')">Open the vocabulary book</button></div><div class="card"><div class="illus">✍️</div><h3>Workbooks</h3><p class="muted">Interactive practice with instant checking and an answer key for every level.</p><button class="btn" onclick="go('workbook')">Open workbooks</button></div></div></div>`;
}

function coverCard(b) {
  const hues = ['#5d50e9', '#ef629f', '#1499ce'];
  const i = (levels.indexOf(b.level) % 3 + ['Kids', 'Teens', 'Adults'].indexOf(b.age)) % 3;
  const hue = hues[i];
  return `<div class="cover" style="--hue:${hue}"><div class="cover-art">${coverSVG(b.age, b.level, i)}</div><div class="cover-ribbon">Lingua Forge ELT</div><div class="cover-title"><b>${b.age} English</b><span>${b.level}</span></div><div class="cover-sub">${b.subtitle}<br>16 units · 64 lessons</div><div class="cover-badge">${b.age === 'Kids' ? 'Beginner' : b.age === 'Teens' ? 'Secondary' : 'General English'}</div></div>`;
}
function textbooks() {
  let list = books.filter(b => (state.age === 'All' || b.age === state.age) && (state.level === 'All' || b.level === state.level));
  const groups = [['Kids', '🦋'], ['Teens', '🎧'], ['Adults', '🌍']].filter(x => state.age === 'All' || x[0] === state.age);
  return `<div class="section"><h2>Coursebook Library</h2><p class="muted">Publisher-style editions inspired by the world’s best ELT coursebooks — Big Questions, Grammar Banks, pronunciation, integrated skills and timed lesson programmes. Every coursebook is also a flip book.</p><div class="filters">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';render()">${x}</button>`).join('')}${['All', 'Kids', 'Teens', 'Adults'].map(x => `<button class="filter ${state.age === x ? 'active' : ''}" onclick="state.age='${x}';render()">${x}</button>`).join('')}</div>${groups.map(([age, emoji]) => `<div class="agegroup"><h3 class="agehead">${emoji} ${age} series</h3><div class="covers">${list.filter(b => b.age === age).map(b => `<div class="coverwrap" onclick="openBook('${b.id}')"><div class="hoverc"><button class="btn dark">Open →</button><button class="btn light" onclick="event.stopPropagation();openFlip('${b.title}', enBookPages(books[${books.indexOf(b)}]), '#5d50e9')">📖 Flip →</button></div>${coverCard(b)}</div>`).join('') || '<div class="empty">No courses for this filter.</div>'}</div></div>`).join('')}</div>`;
}
function openBook(id) { state.book = books.find(b => b.id === id); state.view = 'book'; render(); }

function bookPage() {
  let b = state.book;
  return `<div class="lesson-shell"><div class="crumb"><button class="btn light" onclick="go('textbooks')">← Coursebook Library</button></div><div class="book-hero"><div class="book-cover-lg">${coverCard(b)}</div><div class="book-meta"><span class="pill">${b.age} • ${b.level} · CEFR</span><h1>${b.title}</h1><p class="muted">${b.subtitle}. 16 thematic units, 64 lessons, integrated skills, review and assessment.</p><div class="grid" style="margin:16px 0 0"><div class="stat"><b>16</b><br><span class="muted">Units</span></div><div class="stat"><b>64</b><br><span class="muted">Lessons</span></div><div class="stat"><b>2</b><br><span class="muted">Programmes</span></div><div class="stat"><b>${VOCAB[b.level].length}</b><br><span class="muted">Words</span></div></div><div class="row" style="margin-top:16px"><button class="btn" onclick="state.minutes=60;openLesson('${b.units[0].lessons[0].id}')">Teach Unit 1 (60′) →</button><button class="btn light" onclick="state.minutes=90;openLesson('${b.units[0].lessons[0].id}')">Teach Unit 1 (90′) →</button><button class="btn dark" onclick="openFlip('${b.title}', enBookPages(books[${books.indexOf(b)}]), '#5d50e9')">📖 Flip the book →</button></div></div></div><div class="section"><h2>Units</h2><div class="list">${b.units.map(u => `<div class="item unit-item"><div><b>Unit ${u.number} · ${u.title}</b><div class="muted small">Big Question: “${u.bigQ}”</div><div class="stageline">${u.lessons.map(l => `<span class="stage-chip" onclick="openLesson('${l.id}')">${l.stage}</span>`).join('')}</div></div><button class="btn light" onclick="openLesson('${u.lessons[0].id}')">Open unit →</button></div>`).join('')}</div></div></div>`;
}
function openLesson(id) {
  for (const b of books) for (const u of b.units) {
    let l = u.lessons.find(x => x.id === id);
    if (l) { state.book = b; state.lesson = { ...l, unit: u }; state.view = 'lesson'; render(); return; }
  }
}

function lessonPage() {
  let l = state.lesson, lv = state.book.level, b = band(lv), g = l.grammar;
  const tp = tensePos(g.id);
  const taskChip = b === 0 ? 'Supported task' : b === 1 ? 'Guided task' : 'Independent task';
  return `<div class="lesson-shell"><div class="crumb"><button class="btn light" onclick="go('book')">← Coursebook</button> <span class="muted">Unit ${l.unit.number} · ${l.stage}</span></div><div class="lesson-hero"><div class="bigq"><span>Big Question</span><h2>${l.unit.bigQ}</h2></div><div class="row" style="justify-content:space-between;margin-top:12px"><span class="pill">Unit ${l.unit.number} • ${state.book.level} • ${taskChip}</span><div class="seg"><button class="filter ${state.minutes === 60 ? 'active' : ''}" onclick="state.minutes=60;render()">60′ programme</button><button class="filter ${state.minutes === 90 ? 'active' : ''}" onclick="state.minutes=90;render()">90′ programme</button></div></div><h1>${l.title}</h1><p class="muted">${TOPICS[l.unit.number - 1].intro}</p><div class="skills"><span class="skill">Vocabulary</span><span class="skill">Grammar</span><span class="skill">Pronunciation</span><span class="skill">Reading</span><span class="skill">Listening</span><span class="skill">Speaking</span><span class="skill">Writing</span></div></div><div class="aims"><b>Lesson aim</b><p>${l.aim}</p><div class="row">${l.outcomes.map(o => `<span class="outcome">✓ ${o}</span>`).join('')}</div></div><div class="section"><h2>Class programme</h2>${planTable(l, state.minutes)}</div><div class="lesson-grid"><div class="activity"><h3><span class="num">1</span>Warm-up</h3><p>${l.warmup}</p></div><div class="activity"><h3><span class="num">2</span>Vocabulary</h3><div class="ptiles">${l.vocab.map(w => `<div class="ptile"><div class="ptile-pic">${w.pic || '🔤'}</div><div class="ptile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa || ''}</span><div class="chips"><span class="pill poschip">${w.pos || ''}</span><span class="pill catpill">${w.cat || ''}</span><span class="pill lvlpill">${w.level}</span></div><p class="muted small">${w.meaning}</p><p class="example">“${w.example}”</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}')">🔊</button></div>`).join('')}</div><button class="btn" onclick="go('vocabulary')">Vocabulary in Use →</button></div><div class="activity"><h3><span class="num">3</span>Grammar Bank</h3><div class="bank"><span class="banktag">GRAMMAR BANK</span><h4>${g.title}</h4>${tp ? `<div class="tl">${timelineSVG(tp)}</div>` : ''}<div class="gquick"><b>In one line:</b> ${g.quick || g.use}</div><p class="formula">${g.form}</p><p><b>Use.</b> ${g.use}</p><ul class="examples">${g.examples.map(e => `<li>${e}</li>`).join('')}</ul><p class="warn">⚠ ${g.error}</p><button class="btn light morebtn" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">📖 Read the extended explanation</button><div class="gmore">${g.more || ''}</div></div><button class="btn light" onclick="go('grammar')">Open Grammar in Use →</button></div><div class="activity"><h3><span class="num">4</span>Pronunciation</h3><div class="pron"><span class="big-ipa">${l.pron.ipa}</span><p><b>Listen and repeat:</b> “${l.pron.word}”</p><p class="muted small">Sound family: ${l.pron.family}</p><button class="btn" onclick="speakText('${esc(l.pron.word)}')">🔊 Hear it</button></div></div><div class="activity"><h3><span class="num">5</span>Reading · IELTS-style</h3><p class="readtitle"><b>${l.reading.title}</b> <button class="btn light mini-btn" onclick="speakText(${jarg(l.reading.text)})">🔊 Read aloud</button></p>${ieltsPassage(l.reading)}${ieltsTasks(l.reading.tasks)}<button class="btn light" onclick="this.nextElementSibling.style.display='block'">Show simple answers</button><div class="answer script">${l.questions.map((q, i) => `Q${i + 1}. ${q.q} — ${q.a}`).join('<br>')}</div></div><div class="activity"><h3><span class="num">6</span>Listening</h3><p class="readtitle"><b>${l.listening.title}</b> <button class="btn" onclick="speakText(${jarg(l.listening.script)})">▶ Play audio</button></p><p class="muted small">Listen for the situation, the relationship between speakers and the key information.</p><button class="btn light" onclick="this.nextElementSibling.style.display='block'">Show transcript</button><div class="answer script">${l.listening.script}</div></div><div class="activity"><h3><span class="num">7</span>Speaking</h3><div class="task"><b>Role play</b><p>${l.speaking.roleplay}</p></div><div class="task"><b>Discuss</b>${l.speaking.discuss.map(x => `<p>• ${x}</p>`).join('')}</div><button class="btn" onclick="go('speaking')">Speaking Studio →</button></div><div class="activity"><h3><span class="num">8</span>Writing</h3><p>${l.writing.prompt}</p><div class="task"><b>Checklist</b>${l.writing.checklist.map(x => `<p>☐ ${x}</p>`).join('')}</div><button class="btn light" onclick="go('writing')">Writing Studio →</button></div><div class="activity"><h3><span class="num">9</span>Homework</h3><p>${l.homework}</p><button class="btn" onclick="addHW('${esc(l.title)}: ${esc(l.homework)}')">Assign homework</button></div></div><div class="section"><h2>Unit review — ${l.unit.title}</h2><p class="muted">Five quick-check questions covering the unit. Score yourself before moving on.</p><div class="review-grid">${l.review.map((q, i) => `<div class="q wbq"><b>${i + 1}.</b> ${esc(q.q)}<select class="input"><option value="">— choose —</option>${shuffled(q.opts.map(o => ({ o, ok: o === q.ans })), i + 1).map(o => `<option value="${esc(o.o)}" ${o.ok ? 'data-ok="1"' : ''}>${esc(o.o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check my score</button><div class="wbfb"></div></div></div></div>`;
}

/* ---------------- Grammar in Use: three-book reference library ---------------- */
const grammarBooks = [
  { id: 'essential', title: 'Essential Grammar in Use', subtitle: 'Elementary', band: ['Pre-A1', 'A1', 'A2'], c1: '#e05252', c2: '#8e2f2f' },
  { id: 'english', title: 'English Grammar in Use', subtitle: 'Intermediate', band: ['B1', 'B2'], c1: '#3b74d6', c2: '#1d407c' },
  { id: 'advanced', title: 'Advanced Grammar in Use', subtitle: 'Advanced', band: ['C1', 'C2'], c1: '#23935f', c2: '#0f5433' }
];
function bookFor(level) { return grammarBooks.find(b => b.band.includes(level)); }
/* Murphy-style pedagogical arc (like English Grammar in Use) — our own units, same learning sequence */
const GRAMMAR_SEQ = ['be-have', 'articles', 'plurals-demo', 'prepositions', 'present-simple', 'present-continuous', 'past-simple', 'past-continuous', 'present-perfect', 'past-perfect', 'future-forms', 'future-perfect', 'quantifiers', 'determiners', 'comparatives', 'modals', 'conditionals', 'passive', 'reported-speech', 'gerunds-infinitives', 'phrasal-verbs', 'relative-clauses', 'word-formation', 'question-tags', 'linking-words', 'causatives', 'wishes-regrets', 'adverb-clauses', 'advanced'];
const GRAMMAR_PARTS = {
  A: { name: 'Present & Past', ids: ['be-have', 'present-simple', 'present-continuous', 'past-simple', 'past-continuous', 'past-perfect'] },
  B: { name: 'Present Perfect & Future', ids: ['present-perfect', 'future-forms', 'future-perfect'] },
  C: { name: 'Modals & Conditionals', ids: ['modals', 'conditionals', 'wishes-regrets', 'adverb-clauses'] },
  D: { name: 'Passive & Reported Speech', ids: ['passive', 'reported-speech'] },
  E: { name: 'Clauses, Gerunds & Phrasal Verbs', ids: ['relative-clauses', 'gerunds-infinitives', 'phrasal-verbs', 'word-formation'] },
  F: { name: 'Articles, Determiners & Quantifiers', ids: ['articles', 'plurals-demo', 'quantifiers', 'determiners', 'prepositions'] },
  G: { name: 'Linking, Tags & Advanced', ids: ['comparatives', 'question-tags', 'linking-words', 'causatives', 'advanced'] }
};
function partOf(id) { for (const k in GRAMMAR_PARTS) if (GRAMMAR_PARTS[k].ids.includes(id)) return k; return 'F'; }
function gramOrder(g) { const i = GRAMMAR_SEQ.indexOf(g.id); return i === -1 ? 999 : i; }
function bookUnits(book) { const out = []; let n = 0; book.band.forEach(lv => GRAMMAR.filter(g => g.range.includes(lv)).sort((a, b) => gramOrder(a) - gramOrder(b)).forEach(g => out.push({ g, lv, n: ++n }))); return out; }
function grammarUnitCard(u, book) {
  const g = u.g, lv = u.lv;
  const e = g.levels[lv] || g.levels[g.range[0]];
  const tp = tensePos(g.id);
  const ex = grammarExercises(g, lv, u.n * 5 + 1);
  return `<div class="card giu"><div class="giu-head"><span class="giu-num" style="--c:${book.c1}">Unit ${u.n}</span><span class="pill partpill">Part ${partOf(g.id)} · ${GRAMMAR_PARTS[partOf(g.id)].name}</span><span class="muted small">${book.title} · ${lv}</span></div><h3>${g.title}</h3>${tp ? `<div class="tl">${timelineSVG(tp)}</div>` : ''}<div class="giu-split"><div class="bank giu-study"><span class="banktag">STUDY · Explanation</span><div class="gquick"><b>In one line:</b> ${e.quick || e.use}</div><p class="formula">${e.form}</p><p><b>Use.</b> ${e.use}</p><ul class="examples">${e.examples.map(x => `<li>${x}</li>`).join('')}</ul><p class="warn">⚠ ${e.error}</p><button class="btn light morebtn" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">📖 Read the extended explanation</button><div class="gmore">${e.more || ''}</div></div><div class="bank ex giu-ex"><span class="banktag green">EXERCISES · Check</span>${ex.map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b>${x.intro ? '<p class="muted small">Is the statement correct? The study box above confirms it.</p>' : ''}<select class="input"><option value="">— choose —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div></div></div>`;
}
function grammarPage() {
  const filterRow = `<div class="filters" style="margin-top:16px">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';state.gunit=null;state.vunit=null;render()">${x}</button>`).join('')}</div>`;
  if (state.level === 'All') {
    return `<div class="section"><h2>Grammar in Use</h2><p class="muted">A three-book reference grammar organised like the classic Cambridge “in Use” series: a contents page first, then numbered units — explanation on the left, exercises on the right, every answer checked instantly. Every book is also available as a flip book.</p>${bannerSVG('grammar')}${filterRow}<div class="gram-books">${grammarBooks.map(b => { const units = bookUnits(b); return `<div class="gram-book" style="--c:${b.c1};--c2:${b.c2}"><div class="gb-cover"><div class="gb-ribbon">${b.subtitle}</div><div class="gb-title">${b.title}</div><div class="gb-band">${b.band.join(' · ')}</div><div class="gb-units">${units.length} units</div></div><div class="gb-body"><div class="gb-levels">${b.band.map(lv => `<button class="filter" onclick="state.level='${lv}';state.gunit=null;render()">${lv}</button>`).join('')}</div><button class="btn dark gb-open" onclick="state.level='${b.band[0]}';state.gunit=null;render()">Open the book →</button><button class="btn light gb-open" onclick="openFlip('${b.title} · ${b.band[0]}', enGramPages('${b.band[0]}'), '${b.c1}')">📖 Flip book →</button></div></div>`; }).join('')}</div></div>`;
  }
  const book = bookFor(state.level);
  const units = bookUnits(book).filter(u => u.lv === state.level);
  if (state.gunit === null || state.gunit === undefined) {
    const byPart = {};
    units.forEach((u, i) => { const p = partOf(u.g.id); (byPart[p] = byPart[p] || []).push({ ...u, i }); });
    const keys = Object.keys(GRAMMAR_PARTS).filter(k => byPart[k]);
    return `<div class="section"><h2>${book.title} · Contents</h2><p class="muted">Level <b>${state.level}</b> — ${units.length} units, in the classic “in Use” order. Tap a unit to open its two-page spread (explanation + exercises), or flip the whole book.</p>${bannerSVG('grammar')}<div class="row" style="gap:10px;flex-wrap:wrap">${filterRow}<button class="btn dark" onclick="openFlip('${book.title} · ${state.level}', enGramPages('${state.level}'), '${book.c1}')">📖 Flip the book →</button></div><div class="book-contents">${keys.map(k => `<div class="part-block"><div class="part-head"><span class="part-letter">Part ${k}</span><span>${GRAMMAR_PARTS[k].name}</span><span class="muted small">${byPart[k].length} ${byPart[k].length === 1 ? 'unit' : 'units'}</span></div>${byPart[k].map(u => `<div class="unit-row" onclick="state.gunit=${u.i};render()"><span class="un">${u.n}</span><b>${u.g.title}</b><span class="muted small range">${u.g.range.join(' – ')}</span><span class="go">→</span></div>`).join('')}</div>`).join('')}</div></div>`;
  }
  const u = units[state.gunit];
  if (!u) { state.gunit = null; return grammarPage(); }
  const prev = state.gunit > 0, next = state.gunit < units.length - 1;
  return `<div class="section"><h2>${book.title} · Unit ${u.n}</h2>${filterRow}${grammarUnitCard(u, book)}<div class="unit-nav"><button class="btn light" ${prev ? `onclick="state.gunit--;render()"` : 'disabled'}>← Previous unit</button><button class="btn light" onclick="state.gunit=null;render()">📑 Contents</button><button class="btn" ${next ? `onclick="state.gunit++;render()"` : 'disabled'}>Next unit →</button></div></div>`;
}

/* Vocabulary in Use — per-level books in the classic series layout:
   contents (Parts A–E) → numbered units → picture presentation + exercises */
const VOCAB_PARTS = {
  A: { name: 'People & Family', cats: ['People', 'Family'] },
  B: { name: 'Home & Daily Life', cats: ['Home', 'Routine', 'Food', 'Shopping', 'Health'] },
  C: { name: 'School & Work', cats: ['School', 'Work', 'Goals'] },
  D: { name: 'Leisure & Travel', cats: ['Leisure', 'Travel', 'Tech'] },
  E: { name: 'The World Around Us', cats: ['Nature', 'Culture', 'Science', 'Talk', 'Environment'] }
};
function vocabPartOf(cat) { for (const k in VOCAB_PARTS) if (VOCAB_PARTS[k].cats.includes(cat)) return k; return 'E'; }
function vocabUnits(level) {
  const arr = VOCAB[level];
  const sorted = arr.slice().sort((a, b) => {
    const pa = vocabPartOf(a.cat).charCodeAt(0), pb = vocabPartOf(b.cat).charCodeAt(0);
    if (pa !== pb) return pa - pb;
    return arr.indexOf(a) - arr.indexOf(b);
  });
  const units = [];
  for (let i = 0; i < sorted.length; i += 6) {
    const words = sorted.slice(i, i + 6);
    units.push({ part: vocabPartOf(words[0].cat), n: units.length + 1, words });
  }
  return units;
}
function vocabUnitCard(u, bookColor) {
  const ex = vocabExercises(u.words, u.n * 3 + 1);
  return `<div class="card viu unit-page"><div class="giu-head"><span class="giu-num" style="--c:${bookColor}">Unit ${u.n}</span><span class="pill partpill">Part ${u.part} · ${VOCAB_PARTS[u.part].name}</span><span class="muted small">${u.words.length} words</span></div><h3>${u.words.map(w => w.pic).join(' ')}</h3><div class="giu-split"><div class="bank viu-words"><span class="banktag">NEW WORDS · with pictures</span><div class="vtiles vtiles-col">${u.words.map(w => `<div class="vtile"><div class="vtile-pic">${w.pic || '🔤'}</div><div class="vtile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa || ''}</span><div class="chips"><span class="pill poschip">${w.pos || ''}</span><span class="pill catpill">${w.cat || ''}</span></div><p class="muted small">${w.meaning}</p><p class="example">“${w.example}”</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}')">🔊</button></div>`).join('')}</div></div><div class="bank ex viu-ex"><span class="banktag green">EXERCISES · Check</span>${ex.map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b><select class="input"><option value="">— choose —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div></div></div>`;
}
function vocabulary() {
  const filterRow = `<div class="filters" style="margin-top:16px">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';state.gunit=null;state.vunit=null;render()">${x}</button>`).join('')}</div>`;
  if (state.level === 'All') {
    return `<div class="section"><h2>Vocabulary in Use</h2><p class="muted">Seven level books in the classic series layout: contents first, then numbered units — a picture presentation of new words on one side, checkable exercises on the other. ${allVocab.length} words in total, each with picture, IPA, part of speech and topic category — every book is also a flip book.</p>${bannerSVG('vocab')}${filterRow}<div class="vocab-books">${levels.map(lv => { const u = vocabUnits(lv); return `<div class="vbook" onclick="state.level='${lv}';state.vunit=null;render()"><div class="vb-cover"><div class="vb-lvl">${lv}</div><div class="vb-words">${VOCAB[lv].length} words</div><div class="vb-units">${u.length} units · Parts A–E</div></div><button class="btn light vb-open">Open the book →</button><button class="btn dark vb-open" onclick="event.stopPropagation();openFlip('Vocabulary in Use · ${lv}', enVocabPages('${lv}'), '#45a3ff')">📖 Flip book →</button></div>`; }).join('')}</div></div>`;
  }
  const units = vocabUnits(state.level);
  if (state.vunit === null || state.vunit === undefined) {
    return `<div class="section"><h2>Vocabulary in Use · ${state.level}</h2><p class="muted">Contents — ${units.length} units · ${VOCAB[state.level].length} words. Open a unit, study the words with their pictures, then do the exercises.</p>${bannerSVG('vocab')}${filterRow}<div class="book-contents">${['A', 'B', 'C', 'D', 'E'].map(k => { const us = units.filter(x => x.part === k); if (!us.length) return ''; return `<div class="part-block"><div class="part-head"><span class="part-letter">Part ${k}</span><span>${VOCAB_PARTS[k].name}</span><span class="muted small">${us.length} ${us.length === 1 ? 'unit' : 'units'}</span></div>${us.map(u2 => `<div class="unit-row" onclick="state.vunit=${units.indexOf(u2)};render()"><span class="un">${u2.n}</span><div class="uni-prev">${u2.words.slice(0, 5).map(w => `<span>${w.pic}</span>`).join('')}</div><div class="uni-meta"><b>${VOCAB_PARTS[u2.part].name}</b><span class="muted small">${u2.words.map(w => w.word).join(' · ')}</span></div><span class="go">→</span></div>`).join('')}</div>`; }).join('')}</div></div>`;
  }
  const u2 = units[state.vunit];
  if (!u2) { state.vunit = null; return vocabulary(); }
  const prev = state.vunit > 0, next = state.vunit < units.length - 1;
  const col = ['#45a3ff', '#ef629f', '#23935f', '#e05252', '#5d50e9', '#b06a10', '#1499ce'][levels.indexOf(state.level) % 7];
  return `<div class="section"><h2>Vocabulary in Use · ${state.level} · Unit ${u2.n}</h2>${filterRow}${vocabUnitCard(u2, col)}<div class="unit-nav"><button class="btn light" ${prev ? `onclick="state.vunit--;render()"` : 'disabled'}>← Previous unit</button><button class="btn light" onclick="state.vunit=null;render()">📑 Contents</button><button class="btn" ${next ? `onclick="state.vunit++;render()"` : 'disabled'}>Next unit →</button></div></div>`;
}

function workbook() {
  const lv = state.level === 'All' ? 'B1' : state.level;
  const idx = levels.indexOf(lv);
  const v = VOCAB[lv];
  const gs = GRAMMAR.filter(g => g.range.includes(lv));
  const t = TOPICS[(idx * 2 + 1) % 16];
  const pick = g => g.levels[lv] || g.levels[g.range[0]];
  const m1 = v.slice(0, 4).map((w, i) => ({ word: w.word, opts: shuffled([w.meaning, v[(i + 4) % 20].meaning, v[(i + 7) % 20].meaning, v[(i + 11) % 20].meaning], i + 1), ans: w.meaning }));
  const g3 = [gs[idx % gs.length], gs[(idx + 1) % gs.length], gs[(idx + 2) % gs.length]];
  const m2 = g3.map((g, i) => ({ title: g.title, opts: shuffled([pick(g).examples[0], pick(g3[(i + 1) % 3]).examples[0], pick(g3[(i + 2) % 3]).examples[1]], i + 3), ans: pick(g).examples[0] }));
  const m3 = v.slice(4, 8).map((w, i) => ({ q: blankWord(w.example, w.word), opts: shuffled([w.word, v[(i + 9) % 20].word, v[(i + 13) % 20].word], i + 5), ans: w.word }));
  return `<div class="section"><h2>Workbook · ${lv}</h2><p class="muted">Interactive practice with instant checking. Choose a level to generate the activities.</p>${bannerSVG('workbook')}<div class="filters" style="margin-top:16px">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';render()">${x}</button>`).join('')}</div><div class="wb-grid"><div class="card wb"><h3>1 · Vocabulary Builder</h3><p class="muted small">Match each word to its meaning.</p>${m1.map((m, i) => `<div class="q wbq"><b>${i + 1}. ${m.word}</b><select class="input"><option value="">— choose —</option>${m.opts.map(o => `<option value="${esc(o)}" ${o === m.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div><div class="card wb"><h3>2 · Grammar in Context</h3><p class="muted small">Which sentence uses the target structure?</p>${m2.map((m, i) => `<div class="q wbq"><b>${i + 1}. ${m.title}</b><select class="input"><option value="">— choose —</option>${m.opts.map(o => `<option value="${esc(o)}" ${o === m.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div><div class="card wb"><h3>3 · Use of English</h3><p class="muted small">Complete the sentence with the correct word.</p>${m3.map((m, i) => `<div class="q wbq"><b>${i + 1}.</b> ${esc(m.q)}<select class="input"><option value="">— choose —</option>${m.opts.map(o => `<option value="${esc(o)}" ${o === m.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div><div class="card wb"><h3>4 · Reading Skills · IELTS</h3><p class="muted small">Read the passage, then complete the exam-style tasks and check your score.</p>${ieltsPassage(t.reading)}${ieltsTasks([t.reading.tasks[0], t.reading.tasks[2]])}</div><div class="card wb"><h3>5 · Writing Practice</h3><p class="muted small">Plan → draft → check.</p><p><b>Task.</b> ${t.writing.prompt}</p><textarea class="input" rows="8" placeholder="Write your draft here…"></textarea><div class="task"><b>Checklist</b>${t.writing.checklist.map(x => `<p>☐ ${x}</p>`).join('')}</div></div><div class="card wb"><h3>6 · Unit Review</h3><p class="muted small">Five mixed questions. Score yourself at the end.</p>${makeReview(lv, idx).map((q, i) => `<div class="q wbq"><b>${i + 1}.</b> ${esc(q.q)}<select class="input"><option value="">— choose —</option>${shuffled(q.opts.map(o => ({ o, ok: o === q.ans })), i + 7).map(o => `<option value="${esc(o.o)}" ${o.ok ? 'data-ok="1"' : ''}>${esc(o.o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Submit & score</button><div class="wbfb"></div></div></div></div>`;
}
function checkWB() {
  const rows = [...document.querySelectorAll('.wbq')];
  let ok = 0;
  rows.forEach(r => {
    const s = r.querySelector('select');
    if (!s) return;
    const right = s.querySelector('option[data-ok="1"]')?.value;
    const pass = s.value && s.value === right;
    r.classList.remove('good', 'bad');
    r.classList.add(pass ? 'good' : 'bad');
    if (pass) ok++;
  });
  document.querySelectorAll('.wbfb').forEach(f => {
    const card = f.closest('.wb, .giu, .viu, .ielts, .ielts-read');
    const qs = card.querySelectorAll('.wbq');
    const o = card.querySelectorAll('.wbq.good').length;
    f.innerHTML = `<div class="wbscore ${o === qs.length ? 'all' : ''}">Score: ${o} / ${qs.length}${o === qs.length ? ' — excellent work!' : ' — review the marked questions.'}</div>`;
  });
}

function flashcards() {
  let arr = allVocab.filter(x => state.level === 'All' || x.level === state.level);
  let x = arr[state.flashIndex % arr.length];
  return `<div class="section"><h2>Flashcard Studio</h2><p class="muted">Flip, listen, learn and mark words for review.</p><div class="flash" onclick="state.flashFlip=!state.flashFlip;render()"><div>${state.flashFlip ? `<div class="big" style="font-size:34px">${x.meaning}</div><p>${x.example}</p><button class="btn" onclick="event.stopPropagation();speakText('${esc(x.example)}')">🔊 Listen</button>` : `<div class="flash-pic">${x.pic || x.icon || '🔤'}</div><div class="big">${x.word}</div><div class="chips" style="justify-content:center"><span class="pill">${x.pos || ''}</span><span class="pill catpill">${x.ipa || ''}</span></div><span class="pill">${x.level}</span>`}</div></div><div class="row" style="justify-content:center"><button class="btn light" onclick="state.flashIndex=Math.max(0,state.flashIndex-1);state.flashFlip=false;render()">← Previous</button><button class="btn" onclick="state.flashIndex++;state.flashFlip=false;render()">Next →</button></div></div>`;
}

function reading() {
  let arr = TOPICS.map((t, i) => ({ ...t, level: levels[i % 7] })).filter(x => state.level === 'All' || x.level === state.level);
  return `<div class="section"><h2>Reading Studio · IELTS-style</h2><p class="muted">Professional exam-standard passages with True / False / Not Given, Summary completion and Multiple choice tasks — read the passage, complete the tasks, then check your score.</p>${bannerSVG('reading')}<div class="filters" style="margin-top:16px">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';render()">${x}</button>`).join('')}</div><div class="list">${arr.map((t, i) => `<div class="card ielts-read"><div class="row" style="justify-content:space-between"><span class="pill">${t.level}</span><button class="btn light mini-btn" onclick="speakText(${jarg(t.reading.text)})">🔊 Read aloud</button></div><h3>${t.reading.title}</h3>${ieltsPassage(t.reading)}${ieltsTasks(t.reading.tasks)}</div>`).join('')}</div></div>`;
}
function listening() {
  const picks = [[0, 'A1'], [5, 'B1'], [13, 'C1']];
  return `<div class="section"><h2>Listening Lab</h2><p class="muted">Play the built-in audio, listen without the transcript, then check the script and complete the task.</p>${bannerSVG('listening')}<div class="list">${picks.map(([ti, lv], i) => { const t = TOPICS[ti]; return `<div class="card"><div class="row" style="justify-content:space-between"><span class="pill">${lv} · ${t.listening.title}</span><div class="row"><button class="btn" onclick="speakText(${jarg(t.listening.script)})">▶ Play</button><button class="btn light" onclick="document.getElementById('tr${i}').style.display='block'">Show transcript</button></div></div><p id="tr${i}" class="answer script">${t.listening.script}</p><div class="q"><b>Task.</b> Identify the situation, the relationship between the speakers and their main intention.<button class="btn light" onclick="this.nextElementSibling.style.display='block'">Check</button><div class="answer">Listen for who is speaking, where they are and what they want to achieve.</div></div></div>`; }).join('')}</div></div>`;
}
function speaking() {
  return `<div class="section"><h2>Speaking Studio</h2>${bannerSVG('speaking')}<div class="card"><span class="pill">1 minute challenge</span><h3>Speak about a topic you know well.</h3><p>Use an opening, two supporting details and a closing sentence. Try to use five target words.</p><div class="hero" style="text-align:center;margin:18px 0"><div id="timer" style="font:800 54px 'Plus Jakarta Sans'">01:00</div><button class="btn dark" onclick="startTimer()">Start timer</button></div><h3>Useful phrases</h3><div class="row">${['In my experience…', 'One reason is…', 'For example…', 'However…', 'Overall…'].map(x => `<span class="pill">${x}</span>`).join('')}</div></div></div>`;
}
function writing() {
  return `<div class="section"><h2>Writing Studio</h2>${bannerSVG('writing')}<div class="card"><span class="pill">Guided writing</span><h3>Write about a goal you want to achieve.</h3><p>Plan → draft → check. Aim for 120 words. Include one example and one reason.</p><textarea id="writer" rows="12" placeholder="Start writing here…" oninput="document.getElementById('wc').textContent=this.value.trim()?this.value.trim().split(/\\s+/).length:0"></textarea><div class="row" style="justify-content:space-between;margin-top:10px"><span class="muted"><b id="wc">0</b> words</span><button class="btn" onclick="alert('Draft saved in this session. Review spelling, grammar, organization and task completion.')">Check my draft</button></div><div class="card" style="margin-top:15px;background:#fafaff"><b>Writer’s checklist</b><p>☐ Clear opening & purpose<br>☐ Supporting details<br>☐ Target grammar<br>☐ Linking words<br>☐ Spelling & punctuation</p></div></div></div>`;
}
function tests() {
  let qs = ['Choose the best word for the context.', 'Choose the correct grammar form.', 'Identify the main idea of a short text.', 'Choose the appropriate response in a conversation.', 'Rewrite the sentence accurately.', 'Select the best linking expression.', 'Complete the collocation.', 'Choose the correct tense.', 'Infer the speaker’s intention.', 'Select the most precise word.'];
  return `<div class="section"><h2>Assessment Studio</h2><p class="muted">A reusable skills check with automatic scoring and targeted feedback.</p>${bannerSVG('tests')}<div class="card"><span class="pill">Mixed skills</span><h3>10-question diagnostic</h3><form id="testform">${qs.map((q, i) => `<div class="q"><b>${i + 1}. ${q}</b><label><input type="radio" name="q${i}" value="1"> Option A</label><label><input type="radio" name="q${i}" value="0"> Option B</label></div>`).join('')}<button class="btn" type="button" onclick="scoreTest()">Submit & score</button></form><div id="score"></div></div></div>`;
}
function scoreTest() {
  let s = 0;
  for (let i = 0; i < 10; i++) { let x = document.querySelector(`input[name=q${i}]:checked`); if (x) s += +x.value; }
  document.getElementById('score').innerHTML = `<div class="card" style="margin-top:15px"><h3>Score: ${s}/10</h3><div class="progress"><i style="width:${s * 10}%"></i></div><p>${s >= 8 ? 'Strong performance — move to extension practice.' : s >= 5 ? 'Developing — review the target language and try again.' : 'Needs support — revisit vocabulary and grammar before retesting.'}</p></div>`;
}

function teacher() {
  return `<div class="section"><h2>Teacher’s Book</h2><div class="list">${['Lesson aims & outcomes', 'Materials & preparation', '60 & 90 minute programmes', 'Lead-in procedure', 'Vocabulary teaching notes', 'Grammar Bank notes', 'Pronunciation guidance', 'Reading & listening procedure', 'Speaking differentiation', 'Writing feedback', 'Answer key', 'Extension & fast finishers'].map((x, i) => `<div class="item"><div><b>${x}</b><div class="muted small">Professional teacher guidance · ${i + 5}–${i + 15} min</div></div><button class="btn light" onclick="alert('Teacher guide opened: ${x}.')">Open →</button></div>`).join('')}</div></div>`;
}
function students() {
  return `<div class="section"><h2>Students</h2><div class="card"><div class="row"><input id="sn" class="input" placeholder="Student name"><select id="sl"><option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>C1</option></select><button class="btn" onclick="addStudent()">+ Add student</button></div></div><div class="list" style="margin-top:15px">${state.student.map((s, i) => `<div class="item"><div><b>${s.name}</b><div class="muted small">Level ${s.level}</div></div><button class="btn light" onclick="state.student.splice(${i},1);save();render()">Remove</button></div>`).join('') || '<div class="empty">No students yet. Add your first learner above.</div>'}</div></div>`;
}
function addStudent() { let n = document.getElementById('sn').value.trim(); if (!n) return; state.student.push({ name: n, level: document.getElementById('sl').value }); save(); render(); }
function homework() {
  return `<div class="section"><h2>Homework</h2><div class="card"><div class="row"><input id="hw" class="input" placeholder="Homework task"><button class="btn" onclick="let x=document.getElementById('hw').value.trim();if(x){state.homework.push({text:x,done:false});save();render()}">Assign</button></div></div><div class="list" style="margin-top:15px">${state.homework.map((h, i) => `<div class="item"><label><input type="checkbox" ${h.done ? 'checked' : ''} onchange="state.homework[${i}].done=this.checked;save()"> ${h.text}</label><button class="btn light" onclick="state.homework.splice(${i},1);save();render()">Delete</button></div>`).join('') || '<div class="empty">No homework assigned.</div>'}</div></div>`;
}
function progress() {
  return `<div class="section"><h2>Progress</h2><div class="grid"><div class="stat"><span class="muted">Students</span><br><b>${state.student.length}</b></div><div class="stat"><span class="muted">Homework done</span><br><b>${state.homework.filter(x => x.done).length}</b></div><div class="stat"><span class="muted">Planned lessons</span><br><b>${state.plans.length}</b></div><div class="stat"><span class="muted">Lessons</span><br><b>${books.length * 64}</b></div></div><div class="card"><h3>Curriculum mastery</h3><p class="muted">Use lesson activities and assessments to build evidence of progress.</p><div class="progress"><i style="width:68%"></i></div><p><b>68%</b> sample curriculum completion</p></div></div>`;
}
function planner() {
  return `<div class="section"><h2>Lesson Planner</h2>${bannerSVG('tests')}<div class="card"><div class="row"><input id="pd" class="input" type="date"><input id="pt" class="input" placeholder="Lesson topic"><select id="pm" style="max-width:150px"><option value="60">60 minutes</option><option value="90">90 minutes</option></select><button class="btn" onclick="addPlan()">Plan lesson</button></div></div><div class="card" style="margin-top:15px"><h3>Planning workflow</h3><p>Choose level → select coursebook lesson → check aims → prepare materials → teach with the 60/90-minute programme → assign homework → record progress.</p></div><div class="list" style="margin-top:15px">${state.plans.map((p, i) => `<div class="item"><div><b>${esc(p.date)} · ${esc(p.topic)}</b><div class="muted small">${p.minutes} minutes · ${esc(p.level || '—')}</div></div><button class="btn light" onclick="state.plans.splice(${i},1);save();render()">Delete</button></div>`).join('') || '<div class="empty">No lessons planned yet.</div>'}</div></div>`;
}
function addPlan() {
  const d = document.getElementById('pd').value, t = document.getElementById('pt').value.trim();
  if (!d || !t) return alert('Choose a date and enter a lesson topic.');
  state.plans.push({ date: d, topic: t, minutes: document.getElementById('pm').value, level: state.level });
  save(); render();
}
/* ---- Interactive Activities Hub (EN + IT) ---- */
const ACTIVITY_LANGS = {
  en: { name: 'English', flag: '🇬🇧', speak: (t) => speakText(t, 'en-US'), L: 'en-US' },
  it: { name: 'Italiano', flag: '🇮🇹', speak: (t) => speakText(t, 'it-IT'), L: 'it-IT' }
};
function actWords(lang) {
  const al = (typeof state.actLevel === 'number') ? state.actLevel : 3;
  if (lang === 'it') return IT.vocab[['A1', 'A2', 'B1', 'B2', 'C1', 'C2'][Math.min(3, al)]];
  return VOCAB[levels[Math.min(3, al)]];
}
function actL() { const lang = state.actLang || 'en'; return ACTIVITY_LANGS[lang]; }
function actScores() { try { return JSON.parse(localStorage.getItem('lf_actscores') || '{}'); } catch (e) { return {}; } }
function actSaveScore(game, pts) { try { const s = actScores(); const k = (state.actLang || 'en') + ':' + game; if (pts > (s[k] || 0)) { s[k] = pts; localStorage.setItem('lf_actscores', JSON.stringify(s)); } } catch (e) {} }
function actBest(game) { return actScores()[(state.actLang || 'en') + ':' + game] || 0; }
function stars(n) { return '⭐'.repeat(n) + '☆'.repeat(3 - n); }
function activities() {
  const lang = state.actLang || 'en';
  const words = actWords(lang).slice(0, 8);
  const w = words[state.actIdx % words.length] || words[0];
  if (!window.__scWord || window.__scWord.word !== w.word) { window.__scWord = w; if (window.__sc) window.__sc.hints = 0; }
  if (!window.__sc) window.__sc = { streak: 0, hints: 0, lives: 3, solved: 0 };
  let scram = shuffled(w.word.split(''), state.actIdx + 7);
  if (scram.join('') === w.word) scram = scram.reverse();
  const scramTxt = scram.join(' ');
  const speak = lang === 'it' ? `speakText('${esc(w.word)}','it-IT')` : `speakText('${esc(w.word)}')`;
  const mean = w.meaning || w.en;
  const pic = w.pic || '🔤';
  const wb = w.example || '';
  const tt = lang === 'it';
  const sc = window.__sc;
  const hg = window.__hg || (window.__hg = { wrong: 0, found: new Set(), used: new Set(), wins: 0 });
  if (!window.__hgWord || window.__hgWord.word !== w.word) { window.__hgWord = w; hg.wrong = 0; hg.found = new Set(); hg.used = new Set(); }
  const mmWords = words.slice(0, 4);
  const mmCards = shuffled(mmWords.flatMap((x, i) => [{ i, t: 'p', f: x.pic || '🔤' }, { i, t: 'w', f: x.word }]), state.actIdx + 11);
  const qr = window.__qr;
  const qrQs = qrQuestions(lang);
  window.__qrData = qrQs;
  const sbToks = (() => { const t = wb.replace(/[“”]/g, '').split(' ').filter(Boolean); let s = shuffled(t, state.actIdx + 5); if (s.join(' ') === t.join(' ')) s = s.reverse(); return s; })();
  const best = ['scramble', 'hangman', 'match', 'memory', 'quiz', 'builder'].map(g => actBest(g));
  return `<div class="section"><h2>🎮 Activities & Games Studio <span class="pill pro-pill">PRO</span></h2><p class="muted">Nine pro activities for English and Italian — lives, streaks, timers, stars and personal bests, just like the apps your students already love.</p>${bannerSVG('games')}<div class="actscore">🏆 ${tt ? 'Rekorlar' : 'Personal bests'}: Scramble ${best[0] || 0} · Hangman ${best[1] || 0} · Match ${best[2] || 0} · Memory ${best[3] || 0} · Quiz ${best[4] || 0} · Builder ${best[5] || 0}</div><div class="row" style="gap:10px;margin:14px 0;flex-wrap:wrap"><div class="seg">${Object.entries(ACTIVITY_LANGS).map(([k, v]) => `<button class="filter ${lang === k ? 'active' : ''}" onclick="actSwitch('${k}')">${v.flag} ${v.name}</button>`).join('')}</div><div class="seg">${[0, 1, 2, 3].map(i => `<button class="filter ${(typeof state.actLevel === 'number' ? state.actLevel : 3) === i ? 'active' : ''}" onclick="state.actLevel=${i};window.__sc=null;window.__hg=null;window.__mm=null;window.__qr=null;render()">${lang === 'it' ? ['A1', 'A2', 'B1', 'B2'][i] : ['Pre-A1', 'A1', 'A2', 'B1'][i]}</button>`).join('')}</div></div><div class="books">
<div class="card"><div class="illus">🔀</div><h3>Word Scramble</h3><div class="hud"><span class="lives">${'❤️'.repeat(sc.lives)}${'🖤'.repeat(3 - sc.lives)}</span><span class="streak">🔥 ${tt ? 'Seri' : 'Streak'} ${sc.streak}</span><span class="pill">${tt ? 'Çözülen' : 'Solved'} ${sc.solved}</span></div><div class="scramble">${scramTxt}</div><div class="row" style="gap:8px"><input id="act-ans" class="input" placeholder="${tt ? 'Cavabın' : 'Your answer'}" onkeydown="if(event.key==='Enter')scCheck()"><button class="btn" onclick="scCheck()">Check</button><button class="btn light" onclick="scHint()">💡 Hint</button><button class="btn light" onclick="scSkip()">Skip ⏭</button></div><div id="act-fb"></div><div class="row" style="gap:8px;margin-top:10px"><button class="btn light mini-btn" onclick="${speak}">🔊 ${tt ? 'Dinlə' : 'Listen'}</button><span class="muted small">${esc(mean)}</span></div></div>
<div class="card"><div class="illus">🙈</div><h3>Hangman</h3><div class="hud"><span class="pill">${w.cat || (tt ? 'söz' : 'word')}</span><span class="streak">🏆 ${hg.wins}</span></div><div class="hm-wrap">${hmSVG(hg.wrong)}<div id="hangman-word" class="hangman-word">${w.word.split('').map(ch => hg.found.has(ch.toLowerCase()) ? ch : '_').join(' ')}</div></div><div class="hangman-letters">${'abcdefghijklmnopqrstuvwxyz'.split('').map(c => `<button class="btn light mini-btn hm ${hg.used.has(c) ? (hg.found.has(c) ? 'hm-hit' : 'hm-miss') : ''}" ${hg.used.has(c) ? 'disabled' : ''} onclick="hang('${c}')">${c}</button>`).join('')}</div><div id="hangman-fb" class="muted small"></div><div class="row" style="gap:8px;margin-top:10px"><button class="btn light mini-btn" onclick="${speak}">🔊 ${tt ? 'İpucu' : 'Hint'}</button><button class="btn light mini-btn" onclick="hmNew()">↻ ${tt ? 'Yeni söz' : 'New word'}</button></div></div>
<div class="card"><div class="illus">🎯</div><h3>Match It</h3><p class="muted">${tt ? 'Sözləri mənaları ilə birləşdir — iki sütun arasında kliklə.' : 'Tap a word, then its meaning. Two columns, eight pairs.'}</p>${window.__mt && window.__mt.done ? `<div class="qr-done">${stars(window.__mt.st)}<p><b>${window.__mt.matched}/8</b> ${tt ? 'cüt' : 'pairs'} · ${window.__mt.moves} ${tt ? 'hərəkət' : 'moves'}</p><button class="btn dark" onclick="window.__mt=null;render()">↺ ${tt ? 'Yenidən' : 'Play again'}</button></div>` : `<div class="mt-cols"><div class="mt-col">${shuffled(words.map((x, i) => i), state.actIdx + 2).map(i => `<button class="mt-cell" onclick="mtPick(this,'w','${esc(words[i].word)}')"><b>${esc(words[i].word)}</b></button>`).join('')}</div><div class="mt-col">${shuffled(words.map((x, i) => i), state.actIdx + 4).map(i => `<button class="mt-cell" onclick="mtPick(this,'m','${esc(words[i].word)}')"><span class="muted small">${esc(words[i].meaning || words[i].en)}</span></button>`).join('')}</div></div><div class="hud" style="margin-top:10px"><span class="pill" id="mt-moves">${tt ? 'Hərəkət' : 'Moves'} ${window.__mt ? window.__mt.moves : 0}</span><span class="pill">${window.__mt ? window.__mt.matched : 0}/8</span></div><div id="match-fb" class="muted small"></div>`}</div>
<div class="card"><div class="illus">🧠</div><h3>Memory Pairs</h3><p class="muted">${tt ? 'Kartları çevir — şəkil və söz cütlərini tap.' : 'Flip the cards and find the picture–word pairs.'}</p>${window.__mm && window.__mm.done ? `<div class="qr-done">${stars(window.__mm.st)}<p><b>${window.__mm.pairs}/4</b> ${tt ? 'cüt' : 'pairs'} · ${window.__mm.moves} ${tt ? 'hərəkət' : 'moves'}</p><button class="btn dark" onclick="window.__mm=null;render()">↺ ${tt ? 'Yenidən' : 'Play again'}</button></div>` : `<div class="memory mem8">${mmCards.map((c, ci) => `<button class="mem" onclick="mmFlip(this,${c.i},${jarg(c.t)},${jarg(c.f)})">❓</button>`).join('')}</div><div class="hud" style="margin-top:10px"><span class="pill" id="mm-moves">${tt ? 'Hərəkət' : 'Moves'} ${window.__mm ? window.__mm.moves : 0}</span><span class="pill">${window.__mm ? window.__mm.pairs : 0}/4</span></div><div id="mem-fb" class="muted small"></div>`}</div>
<div class="card"><div class="illus">⚡</div><h3>Quiz Race</h3>${!qr || qr.done ? (qr && qr.done ? `<div class="qr-done">${stars(qr.correct >= 5 ? 3 : qr.correct >= 3 ? 2 : qr.correct >= 1 ? 1 : 0)}<p class="qr-big">${qr.score} ${tt ? 'xal' : 'pts'}</p><p class="muted">${qr.correct}/5 ${tt ? 'doğru' : 'correct'} · 🏆 ${tt ? 'Rekor' : 'Best'} ${actBest('quiz')}</p><button class="btn dark" onclick="qrStart()">↺ ${tt ? 'Yenidən yarış' : 'Race again'}</button></div>` : `<p class="muted">${tt ? '5 sual, hər sual 10 saniyə. Sürətli cavab = daha çox xal. Seri bonusu 🔥' : 'Five questions, ten seconds each. Fast answers score more. Streak bonus 🔥'}</p><div class="qr-dots">${[0, 1, 2, 3, 4].map(i => `<span class="qr-dot"></span>`).join('')}</div><button class="btn dark" style="margin-top:12px" onclick="qrStart()">🏁 ${tt ? 'Yarışa başla' : 'Start the race'}</button>`) : `<div class="qr-timer"><div class="qr-bar" id="qr-bar" style="width:${(qr.left || 10) * 10}%"></div></div><div class="hud" style="margin:8px 0"><span class="pill">Q${qr.qi + 1}/5</span><span class="pill" id="qr-sec">${qr.left || 10}s</span><span class="streak">🔥 ${qr.streak}</span><span class="pill">${qr.score} ${tt ? 'xal' : 'pts'}</span></div><div class="q wbq"><b>${esc(qrQs[qr.qi].mean)}</b></div><div class="qr-opts" id="qr-opts">${qrQs[qr.qi].opts.map((o, j) => `<button class="qr-opt" onclick="qrAnswer(${j})">${esc(o)}</button>`).join('')}</div><div id="qr-fb"></div><button id="qr-next" class="btn" style="display:none;margin-top:10px" onclick="qrNext()">Next →</button>`}</div>
<div class="card"><div class="illus">🧩</div><h3>Sentence Builder</h3><p class="muted">${tt ? 'Sözlərə klikləyib cümləni düz qur.' : 'Tap the words in the right order — no typing needed.'}</p><div class="sb-line" id="sb-line"><span class="muted small">${tt ? 'Buraya kliklə…' : 'Tap words here…'}</span></div><div class="sb-pool" id="sb-pool">${sbToks.map((t, i) => `<button class="sb-tile" onclick="sbMove(this)">${esc(t)}</button>`).join('')}</div><div class="row" style="gap:8px;margin-top:10px"><button class="btn" onclick="sbCheck()">Check</button><button class="btn light" onclick="sbReset()">↺ ${tt ? 'Sıfırla' : 'Reset'}</button><button class="btn light mini-btn" onclick="${speak}">🔊 ${tt ? 'Dinlə' : 'Listen'}</button></div><div id="sb-fb"></div></div>
${rpCard(lang)}${qtimeCard(lang)}${moodCard(lang)}</div></div>`;
}
function actSwitch(k) { state.actLang = k; state.actIdx = 0; window.__sc = null; window.__scWord = null; window.__hg = null; window.__hgWord = null; window.__mt = null; window.__mm = null; window.__qr = null; render(); }
function scCheck() {
  const inp = document.getElementById('act-ans'); if (!inp) return;
  const w = window.__scWord; const sc = window.__sc; const fb = document.getElementById('act-fb');
  const v = inp.value.trim().toLowerCase();
  if (v === w.word.toLowerCase()) {
    const pts = Math.max(2, 10 - 3 * sc.hints);
    sc.streak++; sc.solved++;
    actSaveScore('scramble', sc.streak * 10);
    fb.innerHTML = `<span class="wbscore all">${w.pic || ''} Correct! 🎉 +${pts} ${sc.streak > 1 ? '· 🔥 ×' + sc.streak : ''}</span>`;
    inp.disabled = true;
    setTimeout(() => { state.actIdx++; render(); }, 900);
  } else {
    sc.lives--; sc.streak = 0;
    if (sc.lives <= 0) { sc.lives = 3; fb.innerHTML = '<span class="wbscore">💔 Out of lives — streak reset. Try a hint!</span>'; }
    else fb.innerHTML = `<span class="wbscore">Not quite — ${sc.lives} ❤️ left. Try a hint 💡</span>`;
    render();
    const ni = document.getElementById('act-ans'); if (ni) { ni.value = v; ni.focus(); }
  }
}
function scHint() {
  const w = window.__scWord; const sc = window.__sc; const fb = document.getElementById('act-fb');
  sc.hints = Math.min(3, sc.hints + 1);
  const h = sc.hints;
  const msg = h === 1 ? `💡 ${(w.meaning || w.en)}` : h === 2 ? `💡 ${w.word[0]}${'·'.repeat(Math.max(0, w.word.length - 2))}${w.word[w.word.length - 1]}` : `🔊 Listen carefully — the audio is the last hint!`;
  fb.innerHTML = `<span class="wbscore">${esc(msg)}</span>`;
  if (h === 3) speakText(w.word, state.actLang === 'it' ? 'it-IT' : 'en-US');
}
function scSkip() { state.actIdx++; window.__sc.hints = 0; render(); }
function hmSVG(n) {
  const P = ['<circle cx="60" cy="38" r="12"/>', '<line x1="60" y1="50" x2="60" y2="85"/>', '<line x1="60" y1="58" x2="45" y2="72"/>', '<line x1="60" y1="58" x2="75" y2="72"/>', '<line x1="60" y1="85" x2="47" y2="108"/>', '<line x1="60" y1="85" x2="73" y2="108"/>'];
  return `<svg class="hm-svg" viewBox="0 0 120 130"><g fill="none" stroke="#5d50e9" stroke-width="3.5" stroke-linecap="round" opacity="${n >= 6 ? '.45' : '1'}"><line x1="15" y1="122" x2="88" y2="122"/><line x1="32" y1="122" x2="32" y2="12"/><line x1="32" y1="12" x2="60" y2="12"/><line x1="60" y1="12" x2="60" y2="26"/>${P.slice(0, n).join('')}</g></svg>`;
}
function hang(c) {
  const h = window.__hg; const word = window.__hgWord.word;
  if (!h || h.used.has(c) || h.done) return;
  h.used.add(c);
  const idxs = []; word.toLowerCase().split('').forEach((ch, i) => { if (ch === c) idxs.push(i); });
  const fb = document.getElementById('hangman-fb'); const el = document.getElementById('hangman-word');
  if (idxs.length) {
    h.found.add(c);
    if (el) el.textContent = word.toLowerCase().split('').map((ch, i) => h.found.has(ch) ? word[i] : (idxs.includes(i) ? word[i] : '_')).join(' ');
    const arr = word.toLowerCase().split('');
    if (arr.every(ch => h.found.has(ch))) {
      h.done = true; h.wins++;
      actSaveScore('hangman', h.wins * 15);
      fb.innerHTML = `<span class="wbscore all">🎉 You saved the word! ${'⭐'.repeat(Math.max(1, 4 - h.wrong))} +${15 * h.wins}</span>`;
    } else fb.innerHTML = '<span class="wbscore all">✓ Nice!</span>';
  } else {
    h.wrong++;
    if (h.wrong >= 6) { h.done = true; h.wins = 0; if (el) el.textContent = word.split('').join(' '); fb.innerHTML = `<span class="wbscore">💀 The word was <b>${esc(word)}</b>. Streak reset.</span>`; }
    else fb.innerHTML = `<span class="wbscore">✗ Wrong (${h.wrong}/6)</span>`;
  }
  render();
}
function hmNew() { state.actIdx++; window.__hg = { wrong: 0, found: new Set(), used: new Set(), wins: (window.__hg || {}).wins || 0 }; render(); }
function mtPick(el, kind, key) {
  const m = window.__mt || (window.__mt = { sel: null, matched: 0, moves: 0, done: false });
  if (m.done || el.classList.contains('mt-lock')) return;
  const fb = document.getElementById('match-fb');
  if (m.sel && m.sel.kind === kind) { m.sel.el.classList.remove('mt-sel'); m.sel = null; }
  if (m.sel && m.sel.key === key) {
    m.moves++;
    m.sel.el.classList.remove('mt-sel'); m.sel.el.classList.add('mt-lock');
    el.classList.add('mt-lock');
    m.matched++; m.sel = null;
    if (m.matched >= 8) { m.done = true; m.st = m.moves <= 10 ? 3 : m.moves <= 14 ? 2 : 1; actSaveScore('match', m.st * 20); fb.innerHTML = `<span class="wbscore all">All matched! ${stars(m.st)}</span>`; }
    else fb.innerHTML = `<span class="wbscore all">Matched! (${m.matched}/8)</span>`;
  } else if (m.sel) {
    m.moves++;
    m.sel.el.classList.remove('mt-sel'); m.sel = null;
    fb.innerHTML = '<span class="wbscore">Not a pair — try again.</span>';
  } else { m.sel = { el, kind, key }; el.classList.add('mt-sel'); }
  const mv = document.getElementById('mt-moves'); if (mv) mv.textContent = `Moves ${m.moves}`;
}
function mmFlip(el, i, type, face) {
  const m = window.__mm || (window.__mm = { sel: null, pairs: 0, moves: 0, done: false, lock: false });
  if (m.done || m.lock || el.classList.contains('mem-done') || (m.sel && m.sel.el === el)) return;
  el.classList.add('mem-open'); el.textContent = face;
  if (!m.sel) { m.sel = { el, i, type }; return; }
  m.moves++;
  const mv = document.getElementById('mm-moves'); if (mv) mv.textContent = `Moves ${m.moves}`;
  if (m.sel.i === i) {
    m.sel.el.classList.add('mem-done'); el.classList.add('mem-done');
    m.pairs++; m.sel = null;
    const fb = document.getElementById('mem-fb');
    if (m.pairs >= 4) { m.done = true; m.st = m.moves <= 6 ? 3 : m.moves <= 9 ? 2 : 1; actSaveScore('memory', m.st * 20); fb.innerHTML = `<span class="wbscore all">All pairs! ${stars(m.st)}</span>`; }
    else fb.innerHTML = `<span class="wbscore all">Pair found (${m.pairs}/4) ${type === 'p' ? face : ''}</span>`;
  } else {
    m.lock = true;
    const s = m.sel.el; m.sel = null;
    document.getElementById('mem-fb').innerHTML = '<span class="wbscore">Not a pair.</span>';
    setTimeout(() => { s.classList.remove('mem-open'); s.textContent = '❓'; el.classList.remove('mem-open'); el.textContent = '❓'; m.lock = false; }, 750);
  }
}
function qrQuestions(lang) {
  const pool = actWords(lang);
  const qs = [];
  const start = (state.actIdx * 5) % Math.max(1, pool.length - 20);
  for (let k = 0; k < 5; k++) {
    const w = pool[(start + k) % pool.length];
    const others = [];
    for (let j = 1; others.length < 3 && j < pool.length; j++) {
      const o = pool[(start + k + j * 7 + 3) % pool.length];
      if (o.word !== w.word && !others.find(x => x.word === o.word)) others.push(o);
    }
    qs.push({ mean: w.meaning || w.en, word: w.word, pic: w.pic || '🔤', opts: shuffled([w.word, ...others.map(o => o.word)], k + 3) });
  }
  return qs;
}
function qrStart() { window.__qr = { qi: 0, score: 0, streak: 0, correct: 0, left: 10, lock: false, done: false }; render(); qrArm(); }
function qrArm() {
  const q = window.__qr; if (!q || q.done) return;
  clearInterval(window.__qrT);
  q.left = 10;
  window.__qrT = setInterval(() => {
    q.left--;
    const bar = document.getElementById('qr-bar'), sec = document.getElementById('qr-sec');
    if (!bar || !sec) { clearInterval(window.__qrT); return; }
    bar.style.width = Math.max(0, q.left * 10) + '%';
    sec.textContent = Math.max(0, q.left) + 's';
    if (q.left <= 0) qrAnswer(-1);
  }, 1000);
}
function qrAnswer(i) {
  clearInterval(window.__qrT);
  const q = window.__qr; if (!q || q.lock) return;
  q.lock = true;
  const data = window.__qrData[q.qi];
  const btns = [...document.querySelectorAll('#qr-opts .qr-opt')];
  btns.forEach((b, j) => { b.disabled = true; if (data.opts[j] === data.word) b.classList.add('qr-ok'); });
  const fb = document.getElementById('qr-fb');
  if (i >= 0 && data.opts[i] === data.word) {
    q.correct++; q.streak++;
    const pts = 100 + (q.streak - 1) * 20 + Math.max(0, q.left) * 5;
    q.score += pts;
    fb.innerHTML = `<span class="wbscore all">✓ +${pts} ${q.streak > 1 ? '· 🔥 ×' + q.streak : ''}</span>`;
  } else {
    q.streak = 0;
    if (i >= 0) btns[i].classList.add('qr-no');
    fb.innerHTML = `<span class="wbscore">✗ ${data.pic} ${state.actLang === 'it' ? 'Cavab' : 'The answer'}: <b>${esc(data.word)}</b></span>`;
  }
  const nb = document.getElementById('qr-next');
  if (nb) { nb.style.display = ''; nb.textContent = q.qi >= 4 ? 'Results 🏁' : (state.actLang === 'it' ? 'Növbəti sual →' : 'Next question →'); }
}
function qrNext() {
  const q = window.__qr; if (!q) return;
  if (q.qi >= 4) { q.done = true; actSaveScore('quiz', q.score); render(); return; }
  q.qi++; q.lock = false;
  render(); qrArm();
}
function sbMove(el) {
  const line = document.getElementById('sb-line'), pool = document.getElementById('sb-pool');
  if (!line || !pool) return;
  if (el.parentElement === pool) { line.appendChild(el); } else { pool.appendChild(el); }
  const ph = line.querySelector('.muted'); if (ph && line.querySelectorAll('.sb-tile').length) ph.remove();
}
function sbReset() {
  const line = document.getElementById('sb-line'), pool = document.getElementById('sb-pool');
  if (!line || !pool) return;
  [...line.querySelectorAll('.sb-tile')].forEach(t => pool.appendChild(t));
  const fb = document.getElementById('sb-fb'); if (fb) fb.innerHTML = '';
}
function sbCheck() {
  const line = document.getElementById('sb-line');
  if (!line) return;
  const placed = [...line.querySelectorAll('.sb-tile')].map(t => t.textContent);
  if (!placed.length) return;
  const w = window.__scWord;
  const norm = s => s.toLowerCase().replace(/[^a-zà-ÿ' ]/g, '').replace(/\s+/g, ' ').trim();
  const fb = document.getElementById('sb-fb');
  const target = norm((w.example || '').replace(/[“”]/g, ''));
  if (norm(placed.join(' ')) === target && target) {
    const sc = window.__sc;
    sc.streak++;
    actSaveScore('builder', sc.streak * 15);
    fb.innerHTML = `<span class="wbscore all">Perfect! 🎉 +${15 * sc.streak} ${sc.streak > 1 ? '· 🔥 ×' + sc.streak : ''}</span>`;
    line.classList.add('sb-win');
    setTimeout(() => { state.actIdx++; sc.hints = 0; render(); }, 1000);
  } else {
    fb.innerHTML = '<span class="wbscore">Almost — check the word order. Tap tiles to remove them.</span>';
    line.classList.add('sb-shake');
    setTimeout(() => line.classList.remove('sb-shake'), 500);
  }
}

/* ================= Role-Play / Dialogue Theatre (EN + IT) ================= */
const RP_SCENES = {
  en: {
    'Pre-A1': {
      t: 'At the café', icon: '☕', tip: 'Order food and drinks politely.',
      steps: [
        { ai: 'Hello! What would you like?', opts: [
          { t: 'A coffee, please.', ok: 1, fb: 'Perfect — polite and clear!' },
          { t: 'Coffee!', ok: 0, fb: 'Politer with “please”: A coffee, please.' },
          { t: 'I like coffee much.', ok: 0, fb: 'Say: A coffee, please.' }] },
        { ai: 'A coffee. Anything else?', opts: [
          { t: 'Yes, a croissant, please.', ok: 1, fb: 'Great — you added more!' },
          { t: 'No, thank you.', ok: 1, fb: 'Also perfect!' },
          { t: 'Give me croissant.', ok: 0, fb: 'Try: A croissant, please.' }] },
        { ai: 'That’s €4.50.', opts: [
          { t: 'Here you are.', ok: 1, fb: 'Natural and polite.' },
          { t: 'Take money.', ok: 0, fb: 'Say: Here you are.' },
          { t: 'It is expensive.', ok: 0, fb: 'Focus: Here you are.' }] },
        { ai: 'Thank you! Have a nice day!', opts: [
          { t: 'Thank you! Goodbye!', ok: 1, fb: 'A warm exit — well done!' },
          { t: 'Bye-bye-bye.', ok: 0, fb: 'Simple and clear: Goodbye!' },
          { t: 'You too, sir.', ok: 1, fb: 'Also polite!' }] }
      ] },
    A1: {
      t: 'Meeting a new friend', icon: '👋', tip: 'Introduce yourself, ask and answer personal questions.',
      steps: [
        { ai: 'Hi! I’m Leo. What’s your name?', opts: [
          { t: 'Hi Leo, I’m Sara. Nice to meet you!', ok: 1, fb: 'Warm, natural introduction!' },
          { t: 'Sara.', ok: 0, fb: 'Add a greeting: Hi Leo, I’m Sara.' },
          { t: 'My name is Sara and you?', ok: 0, fb: 'Smoother: Nice to meet you!' }] },
        { ai: 'Where are you from, Sara?', opts: [
          { t: 'I’m from Spain. What about you?', ok: 1, fb: 'Answer + return question — great!' },
          { t: 'Spain.', ok: 0, fb: 'Full sentence: I’m from Spain.' },
          { t: 'I from Spain.', ok: 0, fb: 'Don’t forget “am”: I’m from Spain.' }] },
        { ai: 'What do you do at the weekend?', opts: [
          { t: 'I usually play football and meet friends.', ok: 1, fb: 'Rich, accurate answer!' },
          { t: 'Football.', ok: 0, fb: 'Use a full sentence: I usually play football.' },
          { t: 'I play football at the weekend.', ok: 1, fb: 'Also correct!' }] },
        { ai: 'Nice talking to you! See you tomorrow?', opts: [
          { t: 'Yes, see you tomorrow! Bye!', ok: 1, fb: 'Friendly farewell!' },
          { t: 'Tomorrow yes.', ok: 0, fb: 'Fuller: See you tomorrow!' },
          { t: 'I go now.', ok: 0, fb: 'Natural: Yes, see you tomorrow!' }] }
      ] },
    A2: {
      t: 'Asking for directions', icon: '🗺️', tip: 'Ask where places are and understand the answer.',
      steps: [
        { ai: 'Excuse me, can I help you?', opts: [
          { t: 'Yes, please. Where is the station?', ok: 1, fb: 'Clear question — perfect.' },
          { t: 'Station where?', ok: 0, fb: 'Polite: Where is the station?' },
          { t: 'I need station.', ok: 0, fb: 'Say: Where is the station, please?' }] },
        { ai: 'It’s straight on, then turn left at the bank.', opts: [
          { t: 'Straight on and left at the bank — thank you!', ok: 1, fb: 'You repeated to check — excellent!' },
          { t: 'OK.', ok: 0, fb: 'Echo the directions to confirm.' },
          { t: 'Bank left turn.', ok: 0, fb: 'Full echo: Straight on, then left.' }] },
        { ai: 'It takes about ten minutes on foot.', opts: [
          { t: 'Great, is it near the museum?', ok: 1, fb: 'Great follow-up question!' },
          { t: 'Ten minutes.', ok: 0, fb: 'React naturally: Great, thank you!' },
          { t: 'Museum near?', ok: 0, fb: 'Full: Is it near the museum?' }] },
        { ai: 'Yes, it’s opposite the museum.', opts: [
          { t: 'Perfect. Thanks for your help!', ok: 1, fb: 'Politely ending — nice!' },
          { t: 'Bye.', ok: 0, fb: 'Say: Thanks for your help!' },
          { t: 'Opposite.', ok: 0, fb: 'Full: Thanks for your help!' }] }
      ] },
    B1: {
      t: 'At the doctor’s surgery', icon: '🩺', tip: 'Describe symptoms and understand advice.',
      steps: [
        { ai: 'Good morning. What seems to be the problem?', opts: [
          { t: 'I’ve had a sore throat and a headache since Monday.', ok: 1, fb: 'Precise symptoms + time — perfect.' },
          { t: 'My throat hurts.', ok: 0, fb: 'Add duration: since Monday.' },
          { t: 'I am sick a lot.', ok: 0, fb: 'Be specific: sore throat, headache.' }] },
        { ai: 'Have you taken anything for it?', opts: [
          { t: 'I took paracetamol yesterday, but it didn’t help much.', ok: 1, fb: 'Detailed, accurate answer!' },
          { t: 'No.', ok: 0, fb: 'Expand: I haven’t taken anything yet.' },
          { t: 'I take paracetamol yesterday.', ok: 0, fb: 'Past tense: I took…' }] },
        { ai: 'I see. It’s probably a viral infection.', opts: [
          { t: 'Is it serious? How long will it last?', ok: 1, fb: 'Smart follow-up questions!' },
          { t: 'Virus?', ok: 0, fb: 'Ask fully: Is it serious?' },
          { t: 'I worry.', ok: 0, fb: 'Ask: Is it serious, doctor?' }] },
        { ai: 'Not at all. Rest, drink water, and come back in a week.', opts: [
          { t: 'Thank you, doctor. I’ll follow your advice.', ok: 1, fb: 'Professional, courteous close!' },
          { t: 'OK bye.', ok: 0, fb: 'Say: Thank you, doctor.' },
          { t: 'I go rest.', ok: 0, fb: 'Full: I’ll follow your advice.' }] }
      ] }
  },
  it: {
    A1: {
      t: 'Al bar', icon: '☕', tip: 'Ordina da bere e da mangiare in modo gentile.',
      steps: [
        { ai: 'Buongiorno! Cosa desidera?', opts: [
          { t: 'Un caffè, per favore.', ok: 1, fb: 'Perfetto e gentile!' },
          { t: 'Caffè!', ok: 0, fb: 'Più gentile: Un caffè, per favore.' },
          { t: 'Io piace caffè.', ok: 0, fb: 'Dì: Un caffè, per favore.' }] },
        { ai: 'Un caffè. Altro?', opts: [
          { t: 'Sì, una brioche, per favore.', ok: 1, fb: 'Ottimo!' },
          { t: 'No, grazie.', ok: 1, fb: 'Anche corretto!' },
          { t: 'Dammi brioche.', ok: 0, fb: 'Prova: Una brioche, per favore.' }] },
        { ai: 'Sono 2 euro.', opts: [
          { t: 'Ecco a lei.', ok: 1, fb: 'Naturale e cortese.' },
          { t: 'Prendi soldi.', ok: 0, fb: 'Dì: Ecco a lei.' },
          { t: 'È caro.', ok: 0, fb: 'Concentrati: Ecco a lei.' }] },
        { ai: 'Grazie! Buona giornata!', opts: [
          { t: 'Grazie, arrivederci!', ok: 1, fb: 'Ottima chiusura!' },
          { t: 'Ciao ciao ciao.', ok: 0, fb: 'Semplice: Arrivederci!' },
          { t: 'Anche a lei.', ok: 1, fb: 'Anche educato!' }] }
      ] },
    A2: {
      t: 'Conoscere una persona', icon: '👋', tip: 'Presentati, fai e rispondi a domande personali.',
      steps: [
        { ai: 'Ciao! Io sono Marco. Come ti chiami?', opts: [
          { t: 'Ciao Marco, io sono Elena. Piacere!', ok: 1, fb: 'Presentazione naturale!' },
          { t: 'Elena.', ok: 0, fb: 'Aggiungi: Piacere!' },
          { t: 'Il mio nome è Elena e tu?', ok: 0, fb: 'Più fluido: Piacere di conoscerti!' }] },
        { ai: 'Di dove sei, Elena?', opts: [
          { t: 'Sono di Roma. E tu?', ok: 1, fb: 'Risposta + domanda — ottimo!' },
          { t: 'Roma.', ok: 0, fb: 'Frase intera: Sono di Roma.' },
          { t: 'Io di Roma.', ok: 0, fb: 'Non dimenticare “sono”: Sono di Roma.' }] },
        { ai: 'Cosa fai nel fine settimana?', opts: [
          { t: 'Di solito gioco a calcio e vedo gli amici.', ok: 1, fb: 'Risposta ricca!' },
          { t: 'Calcio.', ok: 0, fb: 'Frase intera: Gioco a calcio.' },
          { t: 'Gioco a calcio nel fine settimana.', ok: 1, fb: 'Anche corretto!' }] },
        { ai: 'È stato un piacere! Ci vediamo domani?', opts: [
          { t: 'Sì, ci vediamo domani! Ciao!', ok: 1, fb: 'Congedo amichevole!' },
          { t: 'Domani sì.', ok: 0, fb: 'Completo: Ci vediamo domani!' },
          { t: 'Io vado ora.', ok: 0, fb: 'Naturale: Ci vediamo domani!' }] }
      ] },
    B1: {
      t: 'Chiedere indicazioni', icon: '🗺️', tip: 'Chiedi dove si trovano i posti e capisci la risposta.',
      steps: [
        { ai: 'Mi scusi, posso aiutarla?', opts: [
          { t: 'Sì, per favore. Dov’è la stazione?', ok: 1, fb: 'Domanda chiara — perfetto.' },
          { t: 'Stazione dove?', ok: 0, fb: 'Gentile: Dov’è la stazione?' },
          { t: 'Io bisogno stazione.', ok: 0, fb: 'Dì: Dov’è la stazione, per favore?' }] },
        { ai: 'Sempre dritto, poi giri a sinistra alla banca.', opts: [
          { t: 'Sempre dritto e a sinistra alla banca — grazie!', ok: 1, fb: 'Hai ripetuto per confermare!' },
          { t: 'OK.', ok: 0, fb: 'Ripeti le indicazioni.' },
          { t: 'Banca sinistra.', ok: 0, fb: 'Ripeti: Sempre dritto, poi a sinistra.' }] },
        { ai: 'Ci vogliono circa dieci minuti a piedi.', opts: [
          { t: 'Perfetto, è vicino al museo?', ok: 1, fb: 'Bella domanda di follow-up!' },
          { t: 'Dieci minuti.', ok: 0, fb: 'Reagisci: Perfetto, grazie!' },
          { t: 'Museo vicino?', ok: 0, fb: 'Completo: È vicino al museo?' }] },
        { ai: 'Sì, è di fronte al museo.', opts: [
          { t: 'Perfetto. Grazie mille per l’aiuto!', ok: 1, fb: 'Chiusura cortese!' },
          { t: 'Ciao.', ok: 0, fb: 'Dì: Grazie mille!' },
          { t: 'Di fronte.', ok: 0, fb: 'Completo: Grazie mille per l’aiuto!' }] }
      ] },
    B2: {
      t: 'Dal medico', icon: '🩺', tip: 'Descrivi i sintomi e capisci i consigli.',
      steps: [
        { ai: 'Buongiorno. Che problema ha?', opts: [
          { t: 'Ho mal di gola e mal di testa da lunedì.', ok: 1, fb: 'Sintomi precisi + tempo — perfetto.' },
          { t: 'La gola mi fa male.', ok: 0, fb: 'Aggiungi: da lunedì.' },
          { t: 'Sono molto malato.', ok: 0, fb: 'Sii specifico: mal di gola, mal di testa.' }] },
        { ai: 'Ha preso qualcosa?', opts: [
          { t: 'Ho preso del paracetamolo ieri, ma non ha aiutato molto.', ok: 1, fb: 'Risposta dettagliata!' },
          { t: 'No.', ok: 0, fb: 'Espandi: Non ho preso niente.' },
          { t: 'Prendo paracetamolo ieri.', ok: 0, fb: 'Passato: Ho preso…' }] },
        { ai: 'Vediamo. Probabilmente è un’infezione virale.', opts: [
          { t: 'È grave? Quanto durerà?', ok: 1, fb: 'Ottime domande!' },
          { t: 'Virus?', ok: 0, fb: 'Chiedi: È grave?' },
          { t: 'Io preoccupo.', ok: 0, fb: 'Chiedi: È grave, dottore?' }] },
        { ai: 'Niente affatto. Riposi, beva acqua e torni tra una settimana.', opts: [
          { t: 'Grazie, dottore. Seguirò i suoi consigli.', ok: 1, fb: 'Chiusura professionale!' },
          { t: 'OK ciao.', ok: 0, fb: 'Dì: Grazie, dottore.' },
          { t: 'Io vado a riposare.', ok: 0, fb: 'Completo: Seguirò i suoi consigli.' }] }
      ] }
  }
};
function lvName(lang, i) { return lang === 'it' ? ['A1', 'A2', 'B1', 'B2'][i] : ['Pre-A1', 'A1', 'A2', 'B1'][i]; }
function rpCard(lang) {
  const sc = RP_SCENES[lang][lvName(lang, state.actLevel)] || RP_SCENES[lang][Object.keys(RP_SCENES[lang])[0]];
  if (!state.rp || state.rp.k !== sc.t) state.rp = { k: sc.t, si: 0, sc: 0 };
  const done = state.rp.si >= sc.steps.length;
  const step = sc.steps[Math.min(state.rp.si, sc.steps.length - 1)];
  const tts = lang === 'it' ? 'it-IT' : 'en-US';
  const opts = done ? '' : step.opts.map(o => `<button class="rp-opt" onclick="rpChoose(this,${o.ok},${jarg(o.fb)})">${o.t}</button>`).join('');
  return `<div class="card rp-card"><div class="illus">${sc.icon}</div><h3>Dialogue Theatre · ${sc.t}</h3><p class="muted">${sc.tip} Choose the best reply — the partner always answers.</p><div class="rp-score">${done ? `<b>${state.rp.sc}/${sc.steps.length}</b> ${lang === 'it' ? 'risposte perfette!' : 'perfect replies!'} ${state.rp.sc === sc.steps.length ? '🌟' : '— try again!'}` : `${lang === 'it' ? 'Turno' : 'Line'} ${state.rp.si + 1}/${sc.steps.length}`}</div>${done ? `<button class="btn dark" onclick="state.rp=null;render()">↺ ${lang === 'it' ? 'Ripeti' : 'Replay'}</button>` : `<div class="rp-ai"><span class="rp-av">🤖</span><div><b>${lang === 'it' ? 'Partner' : 'Partner'}</b><p class="rp-ai-t">${esc(step.ai)}</p></div><button class="btn light mini-btn" onclick="speakText(${jarg(step.ai)},'${tts}')">🔊</button></div><div class="rp-opts" id="rp-opts">${opts}</div><div id="rp-fb" class="muted small"></div><button id="rp-next" class="btn" style="display:none;margin-top:10px" onclick="state.rp.si++;render()">${lang === 'it' ? 'Prossima battuta →' : 'Next line →'}</button>`}</div>`;
}
function rpChoose(el, ok, fb) {
  const wrap = document.getElementById('rp-opts');
  if (!wrap || wrap.dataset.locked) return;
  wrap.dataset.locked = '1';
  [...wrap.children].forEach(b => { b.disabled = true; b.classList.remove('rp-hover'); });
  el.classList.add(ok ? 'rp-ok' : 'rp-no');
  if (ok) state.rp.sc++;
  document.getElementById('rp-fb').innerHTML = `<span class="wbscore ${ok ? 'all' : ''}">${ok ? '✓ ' : '✗ '}${esc(fb)}</span>`;
  document.getElementById('rp-next').style.display = '';
}

/* ================= Question Time (conversation starters) ================= */
const QT_BANK = {
  en: {
    'Pre-A1': ['What’s your name?', 'How are you today?', 'Where are you from?', 'How old are you?', 'What’s your favourite colour?', 'What day is it today?'],
    A1: ['What do you do at the weekend?', 'Describe your family.', 'What’s your favourite food?', 'What’s the weather like today?', 'What time do you get up?', 'Do you have any pets?'],
    A2: ['What did you do last summer?', 'How often do you exercise?', 'What would you do with a free day?', 'Tell me about your best friend.', 'Why are you learning English?', 'What did you eat yesterday?'],
    B1: ['If you could live anywhere, where would you live?', 'What are the pros and cons of social media?', 'Describe a skill you want to learn and why.', 'What’s your opinion on remote work?', 'Tell me about a book or film that changed you.', 'What makes you feel stressed and how do you relax?']
  },
  it: {
    A1: ['Come ti chiami?', 'Come stai oggi?', 'Di dove sei?', 'Quanti anni hai?', 'Qual è il tuo colore preferito?', 'Che giorno è oggi?'],
    A2: ['Cosa fai nel fine settimana?', 'Descrivi la tua famiglia.', 'Qual è il tuo cibo preferito?', 'Che tempo fa oggi?', 'A che ora ti alzi?', 'Hai animali domestici?'],
    B1: ['Cosa hai fatto l’estate scorsa?', 'Quanto spesso fai sport?', 'Cosa faresti con un giorno libero?', 'Parlami del tuo migliore amico.', 'Perché studi l’italiano?', 'Cosa hai mangiato ieri?'],
    B2: ['Se potessi vivere ovunque, dove vivresti?', 'Quali sono i pro e i contro dei social media?', 'Descrivi un’abilità che vuoi imparare.', 'Qual è la tua opinione sul lavoro da remoto?', 'Parlami di un libro o film che ti ha cambiato.', 'Cosa ti stressa e come ti rilassi?']
  }
};
function qtimeCard(lang) {
  const bank = QT_BANK[lang][lvName(lang, state.actLevel)];
  const q = bank[state.qIdx % bank.length];
  const tts = lang === 'it' ? 'it-IT' : 'en-US';
  return `<div class="card rp-card"><div class="illus">⏳</div><h3>Question Time</h3><p class="muted">${lang === 'it' ? 'Scegli una carta, ascolta la domanda e rispondi ad alta voce per 30 secondi.' : 'Pick a card, listen to the question, and answer out loud for 30 seconds.'}</p><div class="qtime-card">${esc(q)}<div class="qtime-timer" id="qtimer">0:30</div></div><div class="row" style="gap:8px;margin-top:10px"><button class="btn" onclick="speakText(${jarg(q)},'${tts}')">🔊 ${lang === 'it' ? 'Ascolta' : 'Listen'}</button><button class="btn light" onclick="startTimer2()">⏱ 30″</button><button class="btn light" onclick="state.qIdx++;render()">${lang === 'it' ? 'Prossima →' : 'Next →'}</button></div><div class="muted small" style="margin-top:8px">${lang === 'it' ? 'Suggerimento: apri con una frase completa, aggiungi un dettaglio e chiudi con un’opinione.' : 'Tip: open with a full sentence, add one detail, finish with an opinion.'}</div></div>`;
}

/* ================= Mood Games (emoji feelings + intonation) ================= */
const MOOD_BANK = {
  en: {
    happy: { e: '😊', n: 'Happy', tip: 'Bright voice, rising at the end.', p: ['I’m on cloud nine!', 'What a wonderful day!', 'I’m thrilled about it!'] },
    sad: { e: '😢', n: 'Sad', tip: 'Soft, slower voice, falling intonation.', p: ['I’m feeling a bit down today.', 'What a pity…', 'I’m not in the mood.' ] },
    angry: { e: '😠', n: 'Angry', tip: 'Firm, sharper voice — keep it controlled.', p: ['I can’t believe it!', 'That really annoys me.', 'I’m fed up with this.'] },
    tired: { e: '😴', n: 'Tired', tip: 'Low energy, slow rhythm, little pitch change.', p: ['I’m exhausted.', 'I need a break.', 'I’m running on empty.'] },
    excited: { e: '🤩', n: 'Excited', tip: 'Fast, energetic, strong stress on key words.', p: ['I can’t wait!', 'This is going to be amazing!', 'I’m so pumped!'] },
    nervous: { e: '😰', n: 'Nervous', tip: 'Quiet, hesitant, slight upward end.', p: ['I’m a little worried.', 'What if it goes wrong?', 'I have butterflies.'] }
  },
  it: {
    happy: { e: '😊', n: 'Felice', tip: 'Voce brillante, che sale alla fine.', p: ['Sono al settimo cielo!', 'Che giornata meravigliosa!', 'Sono entusiasta!'] },
    sad: { e: '😢', n: 'Triste', tip: 'Voce morbida, più lenta, caduta finale.', p: ['Oggi sono un po’ giù.', 'Che peccato…', 'Non ho voglia di fare niente.'] },
    angry: { e: '😠', n: 'Arrabbiato', tip: 'Voce ferma e decisa, ma controllata.', p: ['Non ci posso credere!', 'Questo mi dà proprio fastidio.', 'Ne ho abbastanza.'] },
    tired: { e: '😴', n: 'Stanco', tip: 'Bassa energia, ritmo lento.', p: ['Sono esausto.', 'Ho bisogno di una pausa.', 'Sono a corto di energie.'] },
    excited: { e: '🤩', n: 'Emozionato', tip: 'Veloce, energico, accento forte.', p: ['Non vedo l’ora!', 'Sarà fantastico!', 'Sono super entusiasta!'] },
    nervous: { e: '😰', n: 'Nervoso', tip: 'Quieto, esitante, finale leggermente ascendente.', p: ['Sono un po’ preoccupato.', 'E se va storto?', 'Ho le farfalle nello stomaco.'] }
  }
};
function moodCard(lang) {
  const m = MOOD_BANK[lang][state.mood] || MOOD_BANK[lang].happy;
  const tts = lang === 'it' ? 'it-IT' : 'en-US';
  return `<div class="card rp-card"><div class="illus">🎭</div><h3>Mood Mirror</h3><p class="muted">${lang === 'it' ? 'Scegli un’emozione e leggi le frasi con la giusta intonazione.' : 'Pick a feeling and say the phrases with the right intonation.'}</p><div class="mood-row">${Object.entries(MOOD_BANK[lang]).map(([k, v]) => `<button class="mood-btn ${state.mood === k ? 'active' : ''}" onclick="state.mood='${k}';render()" title="${v.n}">${v.e}</button>`).join('')}</div><div class="mood-current">${m.e} <b>${m.n}</b><div class="mood-tip">${m.tip}</div></div>${m.p.map(p => `<div class="mood-line"><span>${esc(p)}</span><button class="btn light mini-btn" onclick="speakText(${jarg(p)},'${tts}')">🔊</button></div>`).join('')}<div class="muted small" style="margin-top:8px">${lang === 'it' ? 'Sfida: ascolta, ripeti e registra la tua voce.' : 'Challenge: listen, repeat, and record yourself.'}</div></div>`;
}
function search(q) {
  q = q.trim().toLowerCase();
  if (!q) return;
  const hit = allVocab.find(x => x.word.toLowerCase().includes(q) || x.meaning.toLowerCase().includes(q));
  if (hit) { state.view = 'vocabulary'; state.level = hit.level; render(); setTimeout(() => document.querySelector('.vword')?.scrollIntoView(), 50); return; }
  const g = GRAMMAR.find(x => x.title.toLowerCase().includes(q));
  if (g) { state.view = 'grammar'; state.level = g.range[0]; render(); return; }
  const t = TOPICS.find(x => x.title.toLowerCase().includes(q));
  if (t) { state.view = 'reading'; state.level = 'All'; render(); return; }
  alert('No direct result found. Try a vocabulary word, a grammar point or a unit theme.');
}
/* ================================================================
   ITALIANO — complete Italian section (Grammatica · Lessico · Lettura)
   ================================================================ */
const IT = window.IT;
(function mergeIT() {
  const ge = window.IT_GRAMMAR_EXTRA || [];
  if (ge.length) IT.grammar = IT.grammar.concat(ge);
  const ve = window.IT_VOCAB_EXTRA || {};
  for (const lv in ve) { IT.vocab[lv] = (IT.vocab[lv] || []).concat(ve[lv]); }
})();
function itWords(lv, idxs) { const arr = IT.vocab[lv] || []; return idxs.map(i => arr[i]).filter(Boolean); }
function itLessons(book) { const out = []; book.units.forEach((u, ui) => u.lessons.forEach((l, li) => out.push({ book, u, l, ui, li }))); return out; }
function itLvColor(lv) { const map = { A1: '#2e9e4f', A2: '#1499ce', B1: '#b02a2a', B2: '#e05252', C1: '#7a3fb0', C2: '#4c2472' }; return map[lv] || '#5d50e9'; }
function itGramTopics(lv) { return IT.grammar.filter(g => g.range.includes(lv) && g.levels[lv]); }
function itVocabUnits(lv) {
  const arr = IT.vocab[lv]; const units = [];
  for (let i = 0; i < arr.length; i += 6) units.push({ n: units.length + 1, words: arr.slice(i, i + 6) });
  return units;
}
function itGramCard(g, lv, seed) {
  const e = g.levels[lv]; const ex = grammarExercises(g, lv, seed);
  return `<div class="card giu"><div class="giu-head"><span class="giu-num" style="--c:${itLvColor(lv)}">${g.part}</span><span class="pill partpill">Livello ${lv}</span><span class="muted small">${IT.grammar.indexOf(g) + 1} / ${IT.grammar.length}</span></div><h3>${g.title}</h3><div class="giu-split"><div class="bank giu-study"><span class="banktag">STUDY · Spiegazione</span><div class="gquick"><b>In una frase:</b> ${e.quick}</div><p class="formula">${e.form}</p><p><b>Uso.</b> ${e.use}</p><ul class="examples">${e.examples.map(x => `<li>${x}</li>`).join('')}</ul><p class="warn">⚠ ${e.error}</p><button class="btn light morebtn" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">📖 Leggi la spiegazione estesa</button><div class="gmore">${e.more}</div></div><div class="bank ex giu-ex"><span class="banktag green">ESERCIZI · Verifica</span>${ex.map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b>${x.intro ? '<p class="muted small">Vero o falso? La spiegazione sopra lo conferma.</p>' : ''}<select class="input"><option value="">— scegli —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Controlla le risposte</button><div class="wbfb"></div></div></div></div>`;
}
function itVocabTiles(words) {
  return `<div class="vtiles">${words.map(w => `<div class="vtile"><div class="vtile-pic">${w.pic}</div><div class="vtile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa}</span><div class="chips"><span class="pill poschip">${w.pos}</span><span class="pill catpill">${w.cat}</span></div><p class="muted small">${esc(w.en)}</p><p class="example">${esc(w.example)}</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}','it-IT')">🔊</button></div>`).join('')}</div>`;
}
function itLessonPage() {
  const b = state.itBook || IT.books[0];
  const all = itLessons(b);
  const cur = state.itLesson || all[0];
  const l = cur.l, u = cur.u, lv = l.grammar.lv;
  const g = IT.grammar.find(x => x.id === l.grammar.id);
  const words = itWords(lv, l.vocab);
  const reading = IT.topics[l.reading];
  const idx = all.indexOf(cur);
  const prev = all[Math.max(0, idx - 1)], next = all[Math.min(all.length - 1, idx + 1)];
  return `<div class="section"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap"><div><span class="pill" style="background:${itLvColor(lv)};color:#fff">${lv}</span><span class="muted small"> · ${b.title} · Unità ${u.title}</span></div><div class="row" style="gap:8px"><button class="btn light" onclick="state.flip=null;state.view='italian';render()">✕ Chiudi</button></div></div><div class="book-hero" style="margin-top:14px"><div><h2>${l.title}</h2><p class="muted">${l.aim}</p></div><div style="background:${itLvColor(lv)};color:#fff;border-radius:16px;padding:16px 22px;min-width:210px"><b>Domanda chiave</b><p style="margin:6px 0 0;font-size:14px;opacity:.95">${u.bigQ}</p></div></div><div class="activity"><h3><span class="num">1</span>Lessico · Vocabolario</h3>${itVocabTiles(words)}<div class="bank ex"><span class="banktag green">ESERCIZI</span>${vocabExercises(words, idx + 1).map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b><select class="input"><option value="">— scegli —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Controlla</button><div class="wbfb"></div></div></div><div class="activity"><h3><span class="num">2</span>Grammatica</h3>${itGramCard(g, lv, idx * 5 + 3)}</div><div class="activity"><h3><span class="num">3</span>Lettura · IELTS</h3><p class="readtitle"><b>${reading.reading.title}</b> <button class="btn light mini-btn" onclick="speakText(${jarg(reading.reading.text)},'it-IT')">🔊 Ascolta</button></p>${ieltsPassage(reading.reading)}${ieltsTasks(reading.reading.tasks)}</div><div class="activity"><h3><span class="num">4</span>Ascolto</h3><p class="muted">Ascolta la lettura e rispondi alle domande del compito a voce. Poi ascolta di nuovo e ripeti le frasi chiave.</p><div class="row"><button class="btn" onclick="speakText(${jarg(reading.reading.paras[0])},'it-IT')">🔊 Ascolta (paragrafo A)</button><button class="btn light" onclick="speakText(${jarg(reading.reading.paras[1])},'it-IT')">🔊 Ascolta (paragrafo B)</button></div></div><div class="activity"><h3><span class="num">5</span>Parlare</h3><p class="muted">${l.speaking}</p></div><div class="activity"><h3><span class="num">6</span>Scrivere</h3><p class="muted">${l.writing}</p></div><div class="unit-nav"><button class="btn light" onclick="state.itLesson=itLessons(state.itBook)[${Math.max(0, idx - 1)}];render()">← Lezione precedente</button><button class="btn" onclick="state.itLesson=itLessons(state.itBook)[${Math.min(all.length - 1, idx + 1)}];render()">Lezione successiva →</button></div></div>`;
}
/* ---- flip book reader (language aware) ---- */
function openFlip(title, pages, c, lang) { state.flip = { title, pages, i: 0, c: c || '#5d50e9', lang: lang || 'en' }; render(); }
function flipView() {
  const f = state.flip; const n = f.pages.length;
  const it = f.lang === 'it';
  const closed = f.i >= n;
  const L = closed ? n - 1 : f.i, R = closed ? n : f.i + 1;
  const lp = String(f.pages[L] || ''), rp = String(f.pages[R] || '');
  const wrap = (content, num) => {
    const isCover = content.indexOf('book-cover') >= 0 || content.indexOf('flip-cover') >= 0;
    const ph = isCover ? '' : `<div class="page-head"><span>${f.title}</span><span class="ph-ed">${it ? 'EDIZIONE ITALIANA' : 'ENGLISH EDITION'}</span></div>`;
    const pf = isCover ? '' : `<div class="page-foot"><span class="pn">${num}</span></div>`;
    return `${ph}<div class="page-body${isCover ? ' is-cover' : ''}">${content}</div>${pf}`;
  };
  return `<div class="section flip-section"><div class="flip-top"><div><h2>${f.title}</h2><p class="muted">${it ? 'Sfoglia il libro — apri le pagine con i comandi sotto.' : 'Flip through the book — turn the pages with the controls below.'}</p></div><div class="row" style="gap:8px"><button class="btn light" onclick="state.flip=null;render()">✕ ${it ? 'Chiudi' : 'Close'}</button></div></div><div class="book3d ${closed ? 'closed' : ''}" style="--bc:${f.c}" onclick="${closed ? `state.flip.i=0;render()` : ''}"><div class="bpage left">${wrap(lp, f.i + 1)}</div><div class="bspine"></div><div class="bpage right">${wrap(rp, f.i + 2)}</div></div>${closed ? `<p class="center"><button class="btn dark" onclick="state.flip.i=0;render()">📖 ${it ? 'Apri di nuovo il libro' : 'Open the book again'}</button></p>` : `<div class="flip-nav"><button class="btn light" ${f.i > 0 ? `onclick="state.flip.i=${Math.max(0, f.i - 2)};render()"` : 'disabled'}>◀ ${it ? 'Indietro' : 'Back'}</button><span class="pill">${Math.floor(f.i / 2) + 1} / ${Math.ceil(n / 2)}</span><button class="btn" ${f.i + 1 < n ? `onclick="state.flip.i=${f.i + 1};render()"` : `onclick="state.flip.i=${n};render()"`}>${it ? 'Avanti' : 'Next'} ▶</button></div><p class="muted small center">${f.i + 1 < n ? (it ? 'Continua a sfogliare…' : 'Keep flipping…') : (it ? 'Fine del libro — sfoglia ancora per chiuderlo.' : 'End of the book — flip once more to close it.')}</p>`}</div>`;
}
function enCoverArt(title, lv) {
  const set = /vocab|lessico/i.test(title) ? ['📘', '🔤', '🗣️', '✍️', '🌍', '🎧'] : /gramm|grammatica/i.test(title) ? ['Aa', 'B2', '?', '!', '→', '&'] : ['🎒', '👩‍🏫', '🗣️', '✍️', '🎧', '📖'];
  return set.map((x, i) => `<span class="bc-glyph g${i}" ${x.length > 1 ? 'data-txt="' + x + '"' : ''}>${x}</span>`).join('');
}
function enCoverPage(title, subtitle, band, meta, c1, c2, flag) {
  const en = flag !== 'ITALIAN';
  return `<div class="book-cover" style="--c:${c1};--c2:${c2}"><div class="bc-inner"><div class="bc-top"><span>LINGUA FORGE ELT</span><span>${en ? 'SECOND EDITION' : 'SECONDA EDIZIONE'}</span></div><div class="bc-art"><div class="bc-art-bg"><span class="bc-water">Aa</span>${enCoverArt(title, band[0])}</div><div class="bc-art-tag">${en ? 'ENGLISH LANGUAGE TEACHING' : 'INSEGNAMENTO DELL’ITALIANO'}</div></div><div class="bc-body"><div class="bc-title">${title}</div><div class="bc-sub">${subtitle}</div><div class="bc-levels">${band.map(x => `<span class="bc-level">${x}</span>`).join('')}</div></div><div class="bc-meta"><span class="bc-meta-l">${meta}</span><span class="bc-isbn">${en ? 'STUDENT’S BOOK · ELT EDITION' : 'LIBRO DELLO STUDENTE'}</span></div></div></div>`;
}
function itCoverPage(b, kind) {
  const meta = `${b.units ? b.units.length + ' unità · ' + b.units.reduce((s, u) => s + u.lessons.length, 0) + ' lezioni' : ''}${b.words ? b.words + ' parole' : ''}${b.topics ? b.topics + ' punti' : ''}`;
  return enCoverPage(b.title, b.subtitle, b.band, meta, b.c1 || '#2e9e4f', b.c2 || '#146b34', 'ITALIAN');
}
function itBookPages(b) {
  const pages = [itCoverPage(b, 'CORSO'), `<div class="fp"><h3 class="fp-title">Sommario · ${b.title}</h3><p class="muted small">${b.intro}</p><div class="fp-contents">${b.units.map((u, ui) => `<div class="fp-row" onclick="state.flip=null;state.itBook=IT.books[${IT.books.indexOf(b)}];state.itLesson=itLessons(state.itBook)[${itLessons(b).findIndex(x => x.ui === ui && x.li === 0)}];state.view='itlesson';render()"><span class="un">${ui + 1}</span><div><b>${u.title}</b><div class="muted small">${u.lessons.map(x => x.title).join(' · ')}</div></div><span class="go">→</span></div>`).join('')}</div></div>`];
  b.units.forEach((u, ui) => {
    const le = itLessons(b).filter(x => x.ui === ui);
    pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${b.c1}">Unità ${ui + 1}</span><h3>${u.title}</h3><p class="muted">${u.bigQ}</p></div><div class="fp-prev">${le[0] ? itLMinicard(b, le[0], 0) : ''}${le[1] ? itLMinicard(b, le[1], 1) : ''}</div></div>`);
    pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${b.c1}">Percorso ${ui + 1} · Lessico</span><h3>${u.lessons.map(x => x.title).join(' · ')}</h3></div>${itVocabTiles(itWords(u.lessons[0].grammar.lv, u.lessons[0].vocab))}<div class="muted small" style="margin-top:8px">Grammatica: ${IT.grammar.find(g => g.id === u.lessons[0].grammar.id).title}</div></div>`);
  });
  return pages;
}
function itLMinicard(b, le, k) {
  const l = le.l, lv = l.grammar.lv;
  return `<div class="fp-lcard" onclick="state.flip=null;state.itBook=IT.books[${IT.books.indexOf(b)}];state.itLesson=itLessons(state.itBook)[${itLessons(b).indexOf(le)}];state.view='itlesson';render()"><span class="pill" style="background:${itLvColor(lv)};color:#fff">${k + 1} · ${lv}</span><b>${l.title}</b><p class="muted small">${l.aim}</p><div class="muted small">📖 ${IT.topics[l.reading].reading.title}</div></div>`;
}
function itGramPages(lv) {
  const ts = itGramTopics(lv);
  const pages = [itCoverPage({ title: 'Grammatica in Uso', subtitle: 'Esercizi di grammatica italiana · Livello ' + lv, band: [lv], c1: itLvColor(lv), c2: '#22233a', topics: ts.length }, 'GRAMMATICA'), `<div class="fp"><h3 class="fp-title">Indice · Livello ${lv}</h3><div class="fp-contents">${ts.map((g, i) => `<div class="fp-row" onclick="state.flip.i=${i * 2 + 2};render()"><span class="un">${g.part}</span><div><b>${g.title}</b><div class="muted small">${g.levels[lv].quick}</div></div><span class="go">→</span></div>`).join('')}</div></div>`];
  ts.forEach(g => pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${itLvColor(lv)}">${g.part}</span><h3>${g.title}</h3><span class="pill partpill">Livello ${lv}</span></div>${itGramCard(g, lv, IT.grammar.indexOf(g) * 7 + 3)}</div>`));
  return pages;
}
function itVocabPages(lv) {
  const units = itVocabUnits(lv); const arr = IT.vocab[lv];
  const pages = [itCoverPage({ title: 'Lessico in Uso', subtitle: 'Vocabolario illustrato · Livello ' + lv, band: [lv], c1: itLvColor(lv), c2: '#146b34', words: arr.length }, 'LESSICO'), `<div class="fp"><h3 class="fp-title">Indice · Livello ${lv}</h3><div class="fp-contents">${units.map((u, i) => `<div class="fp-row" onclick="state.flip.i=${i * 2 + 2};render()"><span class="un">${u.n}</span><div><div class="fp-emojis">${u.words.map(w => `<span>${w.pic}</span>`).join('')}</div><b>${u.words.map(w => w.word).join(' · ')}</b></div><span class="go">→</span></div>`).join('')}</div></div>`];
  units.forEach(u => pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${itLvColor(lv)}">Unità ${u.n}</span><h3>${u.words.map(w => w.pic).join(' ')}</h3></div>${itVocabTiles(u.words)}<div class="bank ex"><span class="banktag green">ESERCIZI</span>${vocabExercises(u.words, u.n * 3).map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b><select class="input"><option value="">— scegli —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Controlla</button><div class="wbfb"></div></div></div>`));
  return pages;
}
/* ---- English flip books ---- */
function enVocabPages(lv) {
  const units = vocabUnits(lv); const arr = VOCAB[lv];
  const col = ['#45a3ff', '#ef629f', '#23935f', '#e05252', '#5d50e9', '#b06a10', '#1499ce'][levels.indexOf(lv) % 7];
  const pages = [enCoverPage('Vocabulary in Use', 'Illustrated picture vocabulary · Level ' + lv, [lv], arr.length + ' words · ' + units.length + ' units · Parts A–E', col, '#22233a', 'ENGLISH'), `<div class="fp"><h3 class="fp-title">Contents · ${lv}</h3><p class="muted small">Open a unit, study the words with pictures and IPA, then try the exercises.</p><div class="fp-contents">${units.map((u, i) => `<div class="fp-row" onclick="state.flip.i=${i * 2 + 2};render()"><span class="un">${u.n}</span><div><div class="fp-emojis">${u.words.map(w => `<span>${w.pic}</span>`).join('')}</div><b>${u.words.map(w => w.word).join(' · ')}</b><div class="muted small">Part ${u.part} · ${VOCAB_PARTS[u.part].name}</div></div><span class="go">→</span></div>`).join('')}</div></div>`];
  units.forEach(u => pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${col}">Unit ${u.n}</span><span class="pill partpill">Part ${u.part} · ${VOCAB_PARTS[u.part].name}</span></div><h3 style="font:800 17px 'Plus Jakarta Sans';margin:0 0 8px;color:#23264d">${u.words.map(w => w.pic).join(' ')}</h3><div class="vtiles">${u.words.map(w => `<div class="vtile"><div class="vtile-pic">${w.pic || '🔤'}</div><div class="vtile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa || ''}</span><div class="chips"><span class="pill poschip">${w.pos || ''}</span><span class="pill catpill">${w.cat || ''}</span></div><p class="muted small">${w.meaning}</p><p class="example">“${w.example}”</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}')">🔊</button></div>`).join('')}</div><div class="bank ex"><span class="banktag green">EXERCISES</span>${vocabExercises(u.words, u.n * 3 + 1).map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b><select class="input"><option value="">— choose —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check answers</button><div class="wbfb"></div></div></div>`));
  return pages;
}
function enGramPages(lv) {
  const book = bookFor(lv); const units = bookUnits(book).filter(u => u.lv === lv);
  const pages = [enCoverPage(book.title, book.subtitle + ' · Level ' + lv, [lv], units.length + ' units · full grammar coverage', book.c1, book.c2, 'ENGLISH'), `<div class="fp"><h3 class="fp-title">Contents · ${book.title} · ${lv}</h3><div class="fp-contents">${units.map((u, i) => `<div class="fp-row" onclick="state.flip.i=${i * 2 + 2};render()"><span class="un">${u.n}</span><div><b>${u.g.title}</b><div class="muted small">Part ${partOf(u.g.id)} · ${GRAMMAR_PARTS[partOf(u.g.id)].name}</div></div><span class="go">→</span></div>`).join('')}</div></div>`];
  units.forEach(u => pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:${book.c1}">Unit ${u.n}</span><span class="pill partpill">Part ${partOf(u.g.id)}</span></div>${grammarUnitCard(u, book)}</div>`));
  return pages;
}
function enBookPages(b) {
  const pages = [enCoverPage(b.title, b.subtitle, [b.level], b.units.length + ' units · 64 lessons', '#5d50e9', '#22233a', 'ENGLISH'), `<div class="fp"><h3 class="fp-title">Contents · ${b.title}</h3><p class="muted small">${b.subtitle} — open a unit to teach it with the 60/90-minute programme.</p><div class="fp-contents">${b.units.map((u, i) => `<div class="fp-row" onclick="state.flip.i=${i * 2 + 2};render()"><span class="un">${u.number}</span><div><b>${u.title}</b><div class="muted small">Big Question: “${u.bigQ}”</div></div><span class="go">→</span></div>`).join('')}</div></div>`];
  b.units.forEach(u => {
    pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:#5d50e9">Unit ${u.number}</span><h3>${u.title}</h3></div><p class="muted small">Big Question: “${u.bigQ}” · ${u.theme}</p><div class="fp-prev">${u.lessons.map((l, li) => `<div class="fp-lcard" onclick="state.flip=null;openLesson('${l.id}')"><span class="pill" style="background:${['#5d50e9', '#1499ce'][li % 2]};color:#fff">${li + 1} · ${l.stage}</span><b>${l.title}</b><p class="muted small">${l.aim}</p><div class="muted small">📖 ${l.reading.title}</div></div>`).join('')}</div></div>`);
    pages.push(`<div class="fp"><div class="fp-unith"><span class="giu-num" style="--c:#5d50e9">Unit ${u.number} · Grammar</span><h3>${u.lessons[0].grammar.title}</h3></div>${grammarUnitCard({ g: GRAMMAR.find(x => x.id === u.lessons[0].grammar.id) || u.lessons[0].grammar, lv: b.level, n: u.number * 2 }, bookFor(b.level))}</div>`);
  });
  return pages;
}

function italian() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const totalW = levs.reduce((s, l) => s + IT.vocab[l].length, 0);
  const totalG = IT.grammar.reduce((s, g) => s + Object.keys(g.levels).length, 0);
  const totalL = IT.books.reduce((s, b) => s + b.units.reduce((a, u) => a + u.lessons.length, 0), 0);
  return `<section class="hero it-hero"><span class="pill light">ITALIANO · CORSO COMPLETO</span><h1>Impara l'italiano come un libro vero. 🇮🇹</h1><p>Una sezione completa per l'italiano, costruita come i corsi più famosi (Nuovo Espresso, Progetto Italiano): libri sfogliabili con le pagine che si girano, grammatica spiegata in modo semplice ed esteso, lessico illustrato e letture in stile IELTS. Tutto in italiano, con traduzioni per chi inizia.</p><div class="row"><button class="btn dark" onclick="openFlip('${IT.books[0].title}', itBookPages(IT.books[0]), '#2e9e4f', 'it')">📖 Sfoglia il corso A1 →</button><button class="btn light" onclick="openFlip('Grammatica in Uso · A1', itGramPages('A1'), '#2e9e4f', 'it')">📖 Grammatica (flip)</button></div>${bannerSVG('it')}</section><div class="grid"><div class="stat"><span class="muted">Parole</span><br><b>${totalW}</b></div><div class="stat"><span class="muted">Punti di grammatica</span><br><b>${totalG}</b></div><div class="stat"><span class="muted">Lezioni</span><br><b>${totalL}</b></div><div class="stat"><span class="muted">Letture IELTS</span><br><b>${IT.topics.length}</b></div></div><div class="section"><h2>Corsi · libri sfogliabili</h2><div class="gram-books">${IT.books.map(b => `<div class="gram-book" style="--c:${b.c1};--c2:${b.c2}"><div class="gb-cover"><div class="gb-ribbon">${b.series}</div><div class="gb-title">${b.title}</div><div class="gb-band">${b.band.join(' · ')}</div><div class="gb-units">${b.units.length} unità · ${b.units.reduce((s, u) => s + u.lessons.length, 0)} lezioni</div></div><div class="gb-body"><button class="btn dark gb-open" onclick="openFlip('${b.title}', itBookPages(IT.books[${IT.books.indexOf(b)}]), '${b.c1}', 'it')">📖 Sfoglia il libro →</button><button class="btn light gb-open" onclick="state.itBook=IT.books[${IT.books.indexOf(b)}];state.itLesson=null;state.view='itlesson';render()">Apri la 1ª lezione</button></div></div>`).join('')}</div></div><div class="section"><h2>Grammatica · Lessico · Lettura</h2><div class="books"><div class="card"><div class="illus">📖</div><h3>Grammatica in Uso</h3><p class="muted">41 spiegazioni a ogni livello (A1–C2): regola in una frase + spiegazione estesa, esercizi verificabili.</p><button class="btn" onclick="go('itgrammar')">Apri la grammatica</button></div><div class="card"><div class="illus">🔤</div><h3>Lessico in Uso</h3><p class="muted">180 parole illustrate con immagine, IPA e categoria — 6 libri sfogliabili, uno per livello.</p><button class="btn" onclick="go('itvocab')">Apri il lessico</button></div><div class="card"><div class="illus">📚</div><h3>Lettura · stile IELTS</h3><p class="muted">8 letture autentiche con Vero/Falso/Non indicato, completamento e scelta multipla.</p><button class="btn" onclick="go('itreading')">Apri le letture</button></div></div></div><div class="section"><h2>Risorse vere per l'italiano</h2><div class="tabs">${['Libri', 'Canali YouTube', 'Siti web'].map((t, i) => `<button class="filter ${state.itTab === t ? 'active' : ''}" onclick="state.itTab='${t}';render()">${t}</button>`).join('')}</div><div class="list">${(state.itTab === 'Libri' ? IT.resources.books : state.itTab === 'Canali YouTube' ? IT.resources.channels : IT.resources.sites).map(r => `<div class="card"><div class="row" style="justify-content:space-between"><b>${r.name}</b><span class="pill partpill">${r.lvl}</span></div>${r.who ? `<p class="muted small">${r.who}</p>` : ''}<p class="muted small">${r.note}</p></div>`).join('')}</div></div>`;
}
function itGrammar() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  const ts = itGramTopics(lv);
  return `<div class="section"><h2>Grammatica in Uso</h2><p class="muted">La grammatica italiana spiegata come nel classico "Grammar in Use": regola breve, spiegazione estesa ed esercizi con verifica immediata — oppure sfoglia il libro interattivo.</p><div class="row" style="flex-wrap:wrap;gap:10px;margin:14px 0"><div class="filters" style="margin:0">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><button class="btn dark" onclick="openFlip('Grammatica in Uso · ${lv}', itGramPages('${lv}'), '${itLvColor(lv)}', 'it')">📖 Sfoglia il libro (${ts.length} unità)</button></div><div class="giu-list">${ts.map((g, i) => itGramCard(g, lv, i * 7 + 3)).join('')}</div></div>`;
}
function itVocab() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  return `<div class="section"><h2>Lessico in Uso</h2><p class="muted">180 parole italiane illustrate — scegli il livello e sfoglia il libro a fumetti con immagini, pronuncia ed esercizi.</p><div class="vocab-books" style="margin:14px 0">${levs.map(l => `<div class="vbook" onclick="openFlip('Lessico in Uso · ${l}', itVocabPages('${l}'), '${itLvColor(l)}', 'it')"><div class="vb-cover" style="background:linear-gradient(160deg,${itLvColor(l)},${itLvColor(l)}88)"><div class="vb-lvl">${l}</div><div class="vb-words">${IT.vocab[l].length} parole</div><div class="vb-units">${itVocabUnits(l).length} unità</div></div><button class="btn light vb-open">📖 Sfoglia →</button></div>`).join('')}</div><div class="filters">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="vtiles" style="margin-top:12px">${IT.vocab[lv].map(w => `<div class="vtile"><div class="vtile-pic">${w.pic}</div><div class="vtile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa}</span><div class="chips"><span class="pill poschip">${w.pos}</span><span class="pill catpill">${w.cat}</span></div><p class="muted small">${esc(w.en)}</p><p class="example">${esc(w.example)}</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}','it-IT')">🔊</button></div>`).join('')}</div></div>`;
}
function itReading() {
  const arr = IT.topics.filter(t => state.itLevel === 'All' || t.level === state.itLevel);
  return `<div class="section"><h2>Lettura · stile IELTS</h2><p class="muted">Letture autentiche con compiti da esame: Vero / Falso / Non indicato, completamento di un riassunto e scelta multipla.</p><div class="filters" style="margin-top:16px">${['All', ...IT.levels].map(x => `<button class="filter ${state.itLevel === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="list">${arr.map(t => `<div class="card ielts-read"><div class="row" style="justify-content:space-between"><span class="pill" style="background:${itLvColor(t.level)};color:#fff">${t.level}</span><button class="btn light mini-btn" onclick="speakText(${jarg(t.reading.text)},'it-IT')">🔊 Ascolta</button></div><h3>${t.reading.title}</h3>${ieltsPassage(t.reading)}${ieltsTasks(t.reading.tasks)}</div>`).join('')}</div></div>`;
}
/* ---- Italiano · studios (Ascolto · Parlare · Scrivere) ---- */
function itAllLessons() { return IT.books.flatMap(b => itLessons(b)); }
function itListening() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  const topics = IT.topics.filter(t => t.level === lv);
  return `<div class="section"><h2>Ascolto · Listening Lab</h2><p class="muted">Ascolta il testo autentico, poi leggi il riassunto e rispondi. Premi ▶ per l'audio, poi verifica con il trascritto e le domande.</p>${bannerSVG('it')}<div class="filters" style="margin-top:16px">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="list">${topics.map((t, i) => `<div class="card"><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:10px"><span class="pill" style="background:${itLvColor(lv)};color:#fff">${lv} · ${t.reading.title}</span><div class="row" style="gap:8px"><button class="btn" onclick="speakText(${jarg(t.reading.text)},'it-IT')">▶ Ascolta</button><button class="btn" onclick="speakText(${jarg(t.reading.paras[0])},'it-IT')">▶ Par. A</button><button class="btn" onclick="speakText(${jarg(t.reading.paras[1])},'it-IT')">▶ Par. B</button><button class="btn light" onclick="document.getElementById('tr${i}').style.display='block'">Trascritto</button></div></div><p class="muted small">Compito: ascolta e identifica l'idea principale di ogni paragrafo, i dettagli chiave e il registro (formale/informale).</p><p id="tr${i}" class="answer script" style="display:none">${t.reading.text}</p><div class="q"><b>Domanda.</b> Qual è l'idea principale del testo?<button class="btn light" onclick="this.nextElementSibling.style.display='block'">Verifica</button><div class="answer" style="display:none">${t.reading.title} — ascolta di nuovo e verifica: il tema centrale e i dettagli citati nel riassunto.</div></div></div>`).join('') || '<div class="empty">Nessuna traccia per questo livello.</div>'}</div></div>`;
}
function itSpeaking() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  const sc = itAllLessons().filter(x => x.l.grammar.lv === lv);
  const cards = sc.slice(0, 12).map((x, i) => ({ title: x.l.title, task: x.l.speaking, aim: x.l.aim, idx: i }));
  return `<div class="section"><h2>Parlare · Speaking Studio</h2><p class="muted">Scenario di conversazione reale per ogni lezione: parla, registrati e controlla con la checklist. Scegli il livello per nuovi compiti.</p>${bannerSVG('it')}<div class="filters" style="margin-top:16px">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="grid">${cards.map(c => `<div class="card"><span class="pill" style="background:${itLvColor(lv)};color:#fff">Percorso ${lv} · ${c.idx + 1}</span><h3>${esc(c.title)}</h3><p class="muted small">${esc(c.aim)}</p><p><b>Compito:</b> ${esc(c.task)}</p><button class="btn light mini-btn" onclick="speakText(${jarg(c.task)},'it-IT')">🔊 Ascolta il compito</button><div class="task"><b>Checklist</b><p>☐ Ho risposto alla domanda<br>☐ Ho usato il lessico della lezione<br>☐ Ho parlato per almeno 30 secondi</p></div></div>`).join('') || '<div class="empty">Nessun compito per questo livello.</div>'}</div><div class="card"><h3>⏱ Sfida di 1 minuto</h3><div class="hero" style="text-align:center;margin:14px 0"><div id="timer" style="font:800 54px 'Plus Jakarta Sans'">01:00</div><button class="btn dark" onclick="startTimer()">Avvia il timer</button></div><p class="muted small">Scegli una domanda chiave del corso e parla per un minuto: apertura, due dettagli, chiusura.</p></div></div>`;
}
function itWriting() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  const sc = itAllLessons().filter(x => x.l.grammar.lv === lv);
  return `<div class="section"><h2>Scrivere · Writing Studio</h2><p class="muted">Compiti di scrittura guidata per ogni livello: leggi il compito, scrivi, poi controlla con la checklist.</p>${bannerSVG('it')}<div class="filters" style="margin-top:16px">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="list">${sc.slice(0, 8).map((x, i) => `<div class="card"><span class="pill" style="background:${itLvColor(lv)};color:#fff">${lv} · Scrittura ${i + 1}</span><h3>${esc(x.l.title)}</h3><p class="muted small">${esc(x.l.aim)}</p><p><b>Compito:</b> ${esc(x.l.writing)}</p><textarea class="input" rows="4" placeholder="Scrivi qui la tua bozza…"></textarea><button class="btn light mini-btn" onclick="speakText(${jarg(x.l.writing)},'it-IT')">🔊 Ascolta il compito</button><div class="task"><b>Checklist</b><p>☐ Ho risposto al compito<br>☐ Ho usato il lessico e la grammatica della lezione<br>☐ Ho controllato la punteggiatura e le maiuscole</p></div></div>`).join('') || '<div class="empty">Nessun compito per questo livello.</div>'}</div></div>`;
}

function speakText(t, lang) { if ('speechSynthesis' in window) { speechSynthesis.cancel(); let u = new SpeechSynthesisUtterance(t); u.lang = lang || 'en-US'; u.rate = .9; speechSynthesis.speak(u); } }
function startTimer() { let s = 60, el = document.getElementById('timer'); clearInterval(window.tm); window.tm = setInterval(() => { s--; el.textContent = `00:${String(s).padStart(2, '0')}`; if (s <= 0) { clearInterval(window.tm); el.textContent = 'Time!'; } }, 1000); }
function startTimer2() { let s = 30, el = document.getElementById('qtimer'); if (!el) return; el.textContent = `0:${String(s).padStart(2, '0')}`; clearInterval(window.tm2); window.tm2 = setInterval(() => { s--; if (!document.getElementById('qtimer')) { clearInterval(window.tm2); return; } el = document.getElementById('qtimer'); el.textContent = `0:${String(s).padStart(2, '0')}`; if (s <= 0) { clearInterval(window.tm2); el.textContent = 'Time! 🎉'; } }, 1000); }
function addHW(t) { state.homework.push({ text: t, done: false }); save(); toast('Homework assigned ✓'); }
function toast(t) { let x = document.getElementById('toast'); x.innerHTML = `<div class="pill" style="position:fixed;right:25px;bottom:25px;background:#22233a;color:#fff;padding:13px 16px;z-index:10">${t}</div>`; setTimeout(() => x.innerHTML = '', 1800); }
render();

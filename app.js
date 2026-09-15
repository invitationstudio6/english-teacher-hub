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
const state = { view: 'dashboard', age: 'All', level: 'All', book: null, lesson: null, minutes: 60, gunit: null, vunit: null, flip: null, itLevel: 'A1', itBook: null, itLesson: null, itTab: 'Libri', student: JSON.parse(localStorage.getItem('lf_students') || '[]'), homework: JSON.parse(localStorage.getItem('lf_homework') || '[]'), plans: JSON.parse(localStorage.getItem('lf_plans') || '[]'), flashIndex: 0, flashFlip: false };
function save() { localStorage.setItem('lf_students', JSON.stringify(state.student)); localStorage.setItem('lf_homework', JSON.stringify(state.homework)); localStorage.setItem('lf_plans', JSON.stringify(state.plans)); }

/* ---------------- Shell & navigation ---------------- */
function layout(content) {
  document.getElementById('app').innerHTML = `<div class="app"><aside class="side"><div class="brand"><span>LF</span><strong>Lingua Forge</strong></div><div class="navtitle">Teach</div>${[['dashboard', '🏠', 'Dashboard'], ['students', '👩‍🎓', 'Students'], ['planner', '📅', 'Lesson Planner'], ['progress', '📊', 'Progress']].map(x => nav(...x)).join('')}<div class="navtitle">Published Library</div>${[['textbooks', '📚', 'Coursebooks'], ['grammar', '📖', 'Grammar in Use'], ['vocabulary', '🔤', 'Vocabulary in Use'], ['workbook', '📝', 'Workbooks'], ['teacher', '👩‍🏫', 'Teacher’s Book']].map(x => nav(...x)).join('')}<div class="navtitle">Skills Lab</div>${[['reading', '📚', 'Reading Studio'], ['listening', '🎧', 'Listening Lab'], ['speaking', '🗣️', 'Speaking Studio'], ['writing', '✍️', 'Writing Studio'], ['flashcards', '🃏', 'Flashcards'], ['games', '🎮', 'Games'], ['tests', '🧪', 'Assessments'], ['homework', '🏠', 'Homework']].map(x => nav(...x)).join('')}<div class="navtitle">Tools & Strategies</div>${[['tips', '💡', 'Tips & Strategies']].map(x => nav(...x)).join('')}<div class="navtitle">Italiano 🇮🇹</div>${[['italian', '🍝', 'Italiano'], ['itgrammar', '📖', 'Grammatica'], ['itvocab', '🔤', 'Lessico'], ['itreading', '📚', 'Lettura']].map(x => nav(...x)).join('')}</aside><main class="main"><div class="top"><input class="search" placeholder="Search vocabulary, grammar, lessons…" onkeydown="if(event.key==='Enter')search(this.value)"><span class="pill">PRO · ELT Edition</span></div>${content}</main></div>`;
}
function nav(id, ico, label) { return `<button class="nav ${state.view === id ? 'active' : ''}" onclick="go('${id}')"><span>${ico}</span> ${label}</button>`; }
function go(v) { state.view = v; state.book = null; state.lesson = null; state.flip = null; render(); }
function render() {
  if (state.flip) { layout(flipView()); return; }
  const m = { dashboard: dashboard, textbooks: textbooks, book: bookPage, lesson: lessonPage, vocabulary: vocabulary, flashcards: flashcards, grammar: grammarPage, reading: reading, listening: listening, speaking: speaking, writing: writing, tests: tests, workbook: workbook, teacher: teacher, students: students, homework: homework, progress: progress, planner: planner, games: games, tips: tipsPage, italian: italian, itlesson: itLessonPage, itgrammar: itGrammar, itvocab: itVocab, itreading: itReading };
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
  return `<div class="section"><h2>Coursebook Library</h2><p class="muted">Publisher-style editions inspired by the world’s best ELT coursebooks — Big Questions, Grammar Banks, pronunciation, integrated skills and timed lesson programmes.</p><div class="filters">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';render()">${x}</button>`).join('')}${['All', 'Kids', 'Teens', 'Adults'].map(x => `<button class="filter ${state.age === x ? 'active' : ''}" onclick="state.age='${x}';render()">${x}</button>`).join('')}</div>${groups.map(([age, emoji]) => `<div class="agegroup"><h3 class="agehead">${emoji} ${age} series</h3><div class="covers">${list.filter(b => b.age === age).map(b => `<div class="coverwrap" onclick="openBook('${b.id}')"><div class="hoverc"><button class="btn dark">Open →</button></div>${coverCard(b)}</div>`).join('') || '<div class="empty">No courses for this filter.</div>'}</div></div>`).join('')}</div>`;
}
function openBook(id) { state.book = books.find(b => b.id === id); state.view = 'book'; render(); }

function bookPage() {
  let b = state.book;
  return `<div class="lesson-shell"><div class="crumb"><button class="btn light" onclick="go('textbooks')">← Coursebook Library</button></div><div class="book-hero"><div class="book-cover-lg">${coverCard(b)}</div><div class="book-meta"><span class="pill">${b.age} • ${b.level} · CEFR</span><h1>${b.title}</h1><p class="muted">${b.subtitle}. 16 thematic units, 64 lessons, integrated skills, review and assessment.</p><div class="grid" style="margin:16px 0 0"><div class="stat"><b>16</b><br><span class="muted">Units</span></div><div class="stat"><b>64</b><br><span class="muted">Lessons</span></div><div class="stat"><b>2</b><br><span class="muted">Programmes</span></div><div class="stat"><b>${VOCAB[b.level].length}</b><br><span class="muted">Words</span></div></div><div class="row" style="margin-top:16px"><button class="btn" onclick="state.minutes=60;openLesson('${b.units[0].lessons[0].id}')">Teach Unit 1 (60′) →</button><button class="btn light" onclick="state.minutes=90;openLesson('${b.units[0].lessons[0].id}')">Teach Unit 1 (90′) →</button></div></div></div><div class="section"><h2>Units</h2><div class="list">${b.units.map(u => `<div class="item unit-item"><div><b>Unit ${u.number} · ${u.title}</b><div class="muted small">Big Question: “${u.bigQ}”</div><div class="stageline">${u.lessons.map(l => `<span class="stage-chip" onclick="openLesson('${l.id}')">${l.stage}</span>`).join('')}</div></div><button class="btn light" onclick="openLesson('${u.lessons[0].id}')">Open unit →</button></div>`).join('')}</div></div></div>`;
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
  return `<div class="lesson-shell"><div class="crumb"><button class="btn light" onclick="go('book')">← Coursebook</button> <span class="muted">Unit ${l.unit.number} · ${l.stage}</span></div><div class="lesson-hero"><div class="bigq"><span>Big Question</span><h2>${l.unit.bigQ}</h2></div><div class="row" style="justify-content:space-between;margin-top:12px"><span class="pill">Unit ${l.unit.number} • ${state.book.level} • ${taskChip}</span><div class="seg"><button class="filter ${state.minutes === 60 ? 'active' : ''}" onclick="state.minutes=60;render()">60′ programme</button><button class="filter ${state.minutes === 90 ? 'active' : ''}" onclick="state.minutes=90;render()">90′ programme</button></div></div><h1>${l.title}</h1><p class="muted">${TOPICS[l.unit.number - 1].intro}</p><div class="skills"><span class="skill">Vocabulary</span><span class="skill">Grammar</span><span class="skill">Pronunciation</span><span class="skill">Reading</span><span class="skill">Listening</span><span class="skill">Speaking</span><span class="skill">Writing</span></div></div><div class="aims"><b>Lesson aim</b><p>${l.aim}</p><div class="row">${l.outcomes.map(o => `<span class="outcome">✓ ${o}</span>`).join('')}</div></div><div class="section"><h2>Class programme</h2>${planTable(l, state.minutes)}</div><div class="lesson-grid"><div class="activity"><h3><span class="num">1</span>Warm-up</h3><p>${l.warmup}</p></div><div class="activity"><h3><span class="num">2</span>Vocabulary</h3><div class="ptiles">${l.vocab.map(w => `<div class="ptile"><div class="ptile-pic">${w.pic || '🔤'}</div><div class="ptile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa || ''}</span><div class="chips"><span class="pill poschip">${w.pos || ''}</span><span class="pill catpill">${w.cat || ''}</span><span class="pill lvlpill">${w.level}</span></div><p class="muted small">${w.meaning}</p><p class="example">“${w.example}”</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}')">🔊</button></div>`).join('')}</div><button class="btn" onclick="go('vocabulary')">Vocabulary in Use →</button></div><div class="activity"><h3><span class="num">3</span>Grammar Bank</h3><div class="bank"><span class="banktag">GRAMMAR BANK</span><h4>${g.title}</h4>${tp ? `<div class="tl">${timelineSVG(tp)}</div>` : ''}<div class="gquick"><b>In one line:</b> ${g.quick || g.use}</div><p class="formula">${g.form}</p><p><b>Use.</b> ${g.use}</p><ul class="examples">${g.examples.map(e => `<li>${e}</li>`).join('')}</ul><p class="warn">⚠ ${g.error}</p><button class="btn light morebtn" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">📖 Read the extended explanation</button><div class="gmore">${g.more || ''}</div></div><button class="btn light" onclick="go('grammar')">Open Grammar in Use →</button></div><div class="activity"><h3><span class="num">4</span>Pronunciation</h3><div class="pron"><span class="big-ipa">${l.pron.ipa}</span><p><b>Listen and repeat:</b> “${l.pron.word}”</p><p class="muted small">Sound family: ${l.pron.family}</p><button class="btn" onclick="speakText('${esc(l.pron.word)}')">🔊 Hear it</button></div></div><div class="activity"><h3><span class="num">5</span>Reading · IELTS-style</h3><p class="readtitle"><b>${l.reading.title}</b> <button class="btn light mini-btn" onclick="speakText(${JSON.stringify(l.reading.text)})">🔊 Read aloud</button></p>${ieltsPassage(l.reading)}${ieltsTasks(l.reading.tasks)}<button class="btn light" onclick="this.nextElementSibling.style.display='block'">Show simple answers</button><div class="answer script">${l.questions.map((q, i) => `Q${i + 1}. ${q.q} — ${q.a}`).join('<br>')}</div></div><div class="activity"><h3><span class="num">6</span>Listening</h3><p class="readtitle"><b>${l.listening.title}</b> <button class="btn" onclick="speakText(${JSON.stringify(l.listening.script)})">▶ Play audio</button></p><p class="muted small">Listen for the situation, the relationship between speakers and the key information.</p><button class="btn light" onclick="this.nextElementSibling.style.display='block'">Show transcript</button><div class="answer script">${l.listening.script}</div></div><div class="activity"><h3><span class="num">7</span>Speaking</h3><div class="task"><b>Role play</b><p>${l.speaking.roleplay}</p></div><div class="task"><b>Discuss</b>${l.speaking.discuss.map(x => `<p>• ${x}</p>`).join('')}</div><button class="btn" onclick="go('speaking')">Speaking Studio →</button></div><div class="activity"><h3><span class="num">8</span>Writing</h3><p>${l.writing.prompt}</p><div class="task"><b>Checklist</b>${l.writing.checklist.map(x => `<p>☐ ${x}</p>`).join('')}</div><button class="btn light" onclick="go('writing')">Writing Studio →</button></div><div class="activity"><h3><span class="num">9</span>Homework</h3><p>${l.homework}</p><button class="btn" onclick="addHW('${esc(l.title)}: ${esc(l.homework)}')">Assign homework</button></div></div><div class="section"><h2>Unit review — ${l.unit.title}</h2><p class="muted">Five quick-check questions covering the unit. Score yourself before moving on.</p><div class="review-grid">${l.review.map((q, i) => `<div class="q wbq"><b>${i + 1}.</b> ${esc(q.q)}<select class="input"><option value="">— choose —</option>${shuffled(q.opts.map(o => ({ o, ok: o === q.ans })), i + 1).map(o => `<option value="${esc(o.o)}" ${o.ok ? 'data-ok="1"' : ''}>${esc(o.o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Check my score</button><div class="wbfb"></div></div></div></div>`;
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
    return `<div class="section"><h2>Grammar in Use</h2><p class="muted">A three-book reference grammar organised like the classic Cambridge “in Use” series: a contents page first, then numbered units — explanation on the left, exercises on the right, every answer checked instantly.</p>${bannerSVG('grammar')}${filterRow}<div class="gram-books">${grammarBooks.map(b => { const units = bookUnits(b); return `<div class="gram-book" style="--c:${b.c1};--c2:${b.c2}"><div class="gb-cover"><div class="gb-ribbon">${b.subtitle}</div><div class="gb-title">${b.title}</div><div class="gb-band">${b.band.join(' · ')}</div><div class="gb-units">${units.length} units</div></div><div class="gb-body"><div class="gb-levels">${b.band.map(lv => `<button class="filter" onclick="state.level='${lv}';state.gunit=null;render()">${lv}</button>`).join('')}</div><button class="btn dark gb-open" onclick="state.level='${b.band[0]}';state.gunit=null;render()">Open the book →</button></div></div>`; }).join('')}</div></div>`;
  }
  const book = bookFor(state.level);
  const units = bookUnits(book).filter(u => u.lv === state.level);
  if (state.gunit === null || state.gunit === undefined) {
    const byPart = {};
    units.forEach((u, i) => { const p = partOf(u.g.id); (byPart[p] = byPart[p] || []).push({ ...u, i }); });
    const keys = Object.keys(GRAMMAR_PARTS).filter(k => byPart[k]);
    return `<div class="section"><h2>${book.title} · Contents</h2><p class="muted">Level <b>${state.level}</b> — ${units.length} units, in the classic “in Use” order. Tap a unit to open its two-page spread (explanation + exercises).</p>${bannerSVG('grammar')}${filterRow}<div class="book-contents">${keys.map(k => `<div class="part-block"><div class="part-head"><span class="part-letter">Part ${k}</span><span>${GRAMMAR_PARTS[k].name}</span><span class="muted small">${byPart[k].length} ${byPart[k].length === 1 ? 'unit' : 'units'}</span></div>${byPart[k].map(u => `<div class="unit-row" onclick="state.gunit=${u.i};render()"><span class="un">${u.n}</span><b>${u.g.title}</b><span class="muted small range">${u.g.range.join(' – ')}</span><span class="go">→</span></div>`).join('')}</div>`).join('')}</div></div>`;
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
    return `<div class="section"><h2>Vocabulary in Use</h2><p class="muted">Seven level books in the classic series layout: contents first, then numbered units — a picture presentation of new words on one side, checkable exercises on the other. 210 words in total, each with picture, IPA, part of speech and topic category.</p>${bannerSVG('vocab')}${filterRow}<div class="vocab-books">${levels.map(lv => { const u = vocabUnits(lv); return `<div class="vbook" onclick="state.level='${lv}';state.vunit=null;render()"><div class="vb-cover"><div class="vb-lvl">${lv}</div><div class="vb-words">${VOCAB[lv].length} words</div><div class="vb-units">${u.length} units · Parts A–E</div></div><button class="btn light vb-open">Open the book →</button></div>`; }).join('')}</div></div>`;
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
  return `<div class="section"><h2>Reading Studio · IELTS-style</h2><p class="muted">Professional exam-standard passages with True / False / Not Given, Summary completion and Multiple choice tasks — read the passage, complete the tasks, then check your score.</p>${bannerSVG('reading')}<div class="filters" style="margin-top:16px">${['All', ...levels].map(x => `<button class="filter ${state.level === x ? 'active' : ''}" onclick="state.level='${x}';render()">${x}</button>`).join('')}</div><div class="list">${arr.map((t, i) => `<div class="card ielts-read"><div class="row" style="justify-content:space-between"><span class="pill">${t.level}</span><button class="btn light mini-btn" onclick="speakText(${JSON.stringify(t.reading.text)})">🔊 Read aloud</button></div><h3>${t.reading.title}</h3>${ieltsPassage(t.reading)}${ieltsTasks(t.reading.tasks)}</div>`).join('')}</div></div>`;
}
function listening() {
  const picks = [[0, 'A1'], [5, 'B1'], [13, 'C1']];
  return `<div class="section"><h2>Listening Lab</h2><p class="muted">Play the built-in audio, listen without the transcript, then check the script and complete the task.</p>${bannerSVG('listening')}<div class="list">${picks.map(([ti, lv], i) => { const t = TOPICS[ti]; return `<div class="card"><div class="row" style="justify-content:space-between"><span class="pill">${lv} · ${t.listening.title}</span><div class="row"><button class="btn" onclick="speakText(${JSON.stringify(t.listening.script)})">▶ Play</button><button class="btn light" onclick="document.getElementById('tr${i}').style.display='block'">Show transcript</button></div></div><p id="tr${i}" class="answer script">${t.listening.script}</p><div class="q"><b>Task.</b> Identify the situation, the relationship between the speakers and their main intention.<button class="btn light" onclick="this.nextElementSibling.style.display='block'">Check</button><div class="answer">Listen for who is speaking, where they are and what they want to achieve.</div></div></div>`; }).join('')}</div></div>`;
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
function games() {
  let words = ['apple', 'family', 'travel', 'teacher', 'environment', 'opportunity'];
  let w = words[Math.floor(Math.random() * words.length)];
  let scrambled = w.split('').sort(() => Math.random() - .5).join('');
  return `<div class="section"><h2>Learning Games</h2>${bannerSVG('games')}<div class="books"><div class="card"><div class="illus">🔀</div><h3>Word Scramble</h3><p class="muted">Unscramble: <b>${scrambled}</b></p><input id="ans" class="input" placeholder="Your answer"><button class="btn" style="margin-top:10px" onclick="alert(document.getElementById('ans').value.toLowerCase()==='${w}'?'Correct! 🎉':'Try again — think about the letters.')">Check</button></div><div class="card"><div class="illus">⚡</div><h3>Quick Quiz</h3><p class="muted">Build speed and accuracy with vocabulary and grammar questions.</p><button class="btn" onclick="go('tests')">Start quiz →</button></div></div></div>`;
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
  return `<div class="section"><div class="row" style="justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap"><div><span class="pill" style="background:${itLvColor(lv)};color:#fff">${lv}</span><span class="muted small"> · ${b.title} · Unità ${u.title}</span></div><div class="row" style="gap:8px"><button class="btn light" onclick="state.flip=null;state.view='italian';render()">✕ Chiudi</button></div></div><div class="book-hero" style="margin-top:14px"><div><h2>${l.title}</h2><p class="muted">${l.aim}</p></div><div style="background:${itLvColor(lv)};color:#fff;border-radius:16px;padding:16px 22px;min-width:210px"><b>Domanda chiave</b><p style="margin:6px 0 0;font-size:14px;opacity:.95">${u.bigQ}</p></div></div><div class="activity"><h3><span class="num">1</span>Lessico · Vocabolario</h3>${itVocabTiles(words)}<div class="bank ex"><span class="banktag green">ESERCIZI</span>${vocabExercises(words, idx + 1).map((x, j) => `<div class="q wbq"><b>${j + 1}. ${x.q}</b><select class="input"><option value="">— scegli —</option>${x.opts.map(o => `<option value="${esc(o)}" ${o === x.ans ? 'data-ok="1"' : ''}>${esc(o)}</option>`).join('')}</select></div>`).join('')}<button class="btn" onclick="checkWB()">Controlla</button><div class="wbfb"></div></div></div><div class="activity"><h3><span class="num">2</span>Grammatica</h3>${itGramCard(g, lv, idx * 5 + 3)}</div><div class="activity"><h3><span class="num">3</span>Lettura · IELTS</h3><p class="readtitle"><b>${reading.reading.title}</b> <button class="btn light mini-btn" onclick="speakText(${JSON.stringify(reading.reading.text)},'it-IT')">🔊 Ascolta</button></p>${ieltsPassage(reading.reading)}${ieltsTasks(reading.reading.tasks)}</div><div class="activity"><h3><span class="num">4</span>Ascolto</h3><p class="muted">Ascolta la lettura e rispondi alle domande del compito a voce. Poi ascolta di nuovo e ripeti le frasi chiave.</p><div class="row"><button class="btn" onclick="speakText(${JSON.stringify(reading.reading.paras[0])},'it-IT')">🔊 Ascolta (paragrafo A)</button><button class="btn light" onclick="speakText(${JSON.stringify(reading.reading.paras[1])},'it-IT')">🔊 Ascolta (paragrafo B)</button></div></div><div class="activity"><h3><span class="num">5</span>Parlare</h3><p class="muted">${l.speaking}</p></div><div class="activity"><h3><span class="num">6</span>Scrivere</h3><p class="muted">${l.writing}</p></div><div class="unit-nav"><button class="btn light" onclick="state.itLesson=itLessons(state.itBook)[${Math.max(0, idx - 1)}];render()">← Lezione precedente</button><button class="btn" onclick="state.itLesson=itLessons(state.itBook)[${Math.min(all.length - 1, idx + 1)}];render()">Lezione successiva →</button></div></div>`;
}
/* ---- flip book reader ---- */
function openFlip(title, pages, c) { state.flip = { title, pages, i: 0, c: c || '#5d50e9' }; render(); }
function flipView() {
  const f = state.flip; const n = f.pages.length;
  const closed = f.i >= n;
  const L = closed ? n - 1 : f.i, R = closed ? n : f.i + 1;
  const lp = f.pages[L] || '', rp = f.pages[R] || '';
  return `<div class="section flip-section"><div class="flip-top"><div><h2>${f.title}</h2><p class="muted">Sfoglia il libro — apri le pagine con i comandi sotto. (Flip the book.)</p></div><div class="row" style="gap:8px"><button class="btn light" onclick="state.flip=null;render()">✕ Chiudi</button></div></div><div class="book3d ${closed ? 'closed' : ''}" style="--bc:${f.c}" onclick="${closed ? `state.flip.i=0;render()` : ''}"><div class="bpage left">${lp}</div><div class="bspine"></div><div class="bpage right">${rp}</div></div>${closed ? `<p class="center"><button class="btn dark" onclick="state.flip.i=0;render()">📖 Apri di nuovo il libro</button></p>` : `<div class="flip-nav"><button class="btn light" ${f.i > 0 ? `onclick="state.flip.i=${Math.max(0, f.i - 2)};render()"` : 'disabled'}>◀ Indietro</button><span class="pill">${Math.floor(f.i / 2) + 1} / ${Math.ceil(n / 2)}</span><button class="btn" ${f.i + 1 < n ? `onclick="state.flip.i=${f.i + 1};render()"` : `onclick="state.flip.i=${n};render()"`}>Avanti ▶</button></div><p class="muted small center">${f.i + 1 < n ? 'Continua a sfogliare…' : 'Fine del libro — sfoglia ancora per chiuderlo.'}</p>`}</div>`;
}
function itCoverPage(b, kind) {
  return `<div class="flip-cover" style="--c:${b.c1};--c2:${b.c2}"><div class="fc-top">LINGUA FORGE ACADEMY · ${kind}</div><div class="fc-flag">🇮🇹</div><div class="fc-title">${b.title}</div><div class="fc-sub">${b.subtitle}</div><div class="fc-band">${b.band.join(' · ')}</div><div class="fc-foot">${b.units ? b.units.length + ' unità · ' + b.units.reduce((s, u) => s + u.lessons.length, 0) + ' lezioni' : ''}${b.words ? b.words + ' parole' : ''}${b.topics ? b.topics + ' punti' : ''}</div></div>`;
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
/* ---- section views ---- */
function italian() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const totalW = levs.reduce((s, l) => s + IT.vocab[l].length, 0);
  const totalG = IT.grammar.reduce((s, g) => s + Object.keys(g.levels).length, 0);
  const totalL = IT.books.reduce((s, b) => s + b.units.reduce((a, u) => a + u.lessons.length, 0), 0);
  return `<section class="hero it-hero"><span class="pill light">ITALIANO · CORSO COMPLETO</span><h1>Impara l'italiano come un libro vero. 🇮🇹</h1><p>Una sezione completa per l'italiano, costruita come i corsi più famosi (Nuovo Espresso, Progetto Italiano): libri sfogliabili con le pagine che si girano, grammatica spiegata in modo semplice ed esteso, lessico illustrato e letture in stile IELTS. Tutto in italiano, con traduzioni per chi inizia.</p><div class="row"><button class="btn dark" onclick="openFlip('${IT.books[0].title}', itBookPages(IT.books[0]), '#2e9e4f')">📖 Sfoglia il corso A1 →</button><button class="btn light" onclick="openFlip('Grammatica in Uso · A1', itGramPages('A1'), '#2e9e4f')">📖 Grammatica (flip)</button></div>${bannerSVG('it')}</section><div class="grid"><div class="stat"><span class="muted">Parole</span><br><b>${totalW}</b></div><div class="stat"><span class="muted">Punti di grammatica</span><br><b>${totalG}</b></div><div class="stat"><span class="muted">Lezioni</span><br><b>${totalL}</b></div><div class="stat"><span class="muted">Letture IELTS</span><br><b>${IT.topics.length}</b></div></div><div class="section"><h2>Corsi · libri sfogliabili</h2><div class="gram-books">${IT.books.map(b => `<div class="gram-book" style="--c:${b.c1};--c2:${b.c2}"><div class="gb-cover"><div class="gb-ribbon">${b.series}</div><div class="gb-title">${b.title}</div><div class="gb-band">${b.band.join(' · ')}</div><div class="gb-units">${b.units.length} unità · ${b.units.reduce((s, u) => s + u.lessons.length, 0)} lezioni</div></div><div class="gb-body"><button class="btn dark gb-open" onclick="openFlip('${b.title}', itBookPages(IT.books[${IT.books.indexOf(b)}]), '${b.c1}')">📖 Sfoglia il libro →</button><button class="btn light gb-open" onclick="state.itBook=IT.books[${IT.books.indexOf(b)}];state.itLesson=null;state.view='itlesson';render()">Apri la 1ª lezione</button></div></div>`).join('')}</div></div><div class="section"><h2>Grammatica · Lessico · Lettura</h2><div class="books"><div class="card"><div class="illus">📖</div><h3>Grammatica in Uso</h3><p class="muted">41 spiegazioni a ogni livello (A1–C2): regola in una frase + spiegazione estesa, esercizi verificabili.</p><button class="btn" onclick="go('itgrammar')">Apri la grammatica</button></div><div class="card"><div class="illus">🔤</div><h3>Lessico in Uso</h3><p class="muted">180 parole illustrate con immagine, IPA e categoria — 6 libri sfogliabili, uno per livello.</p><button class="btn" onclick="go('itvocab')">Apri il lessico</button></div><div class="card"><div class="illus">📚</div><h3>Lettura · stile IELTS</h3><p class="muted">8 letture autentiche con Vero/Falso/Non indicato, completamento e scelta multipla.</p><button class="btn" onclick="go('itreading')">Apri le letture</button></div></div></div><div class="section"><h2>Risorse vere per l'italiano</h2><div class="tabs">${['Libri', 'Canali YouTube', 'Siti web'].map((t, i) => `<button class="filter ${state.itTab === t ? 'active' : ''}" onclick="state.itTab='${t}';render()">${t}</button>`).join('')}</div><div class="list">${(state.itTab === 'Libri' ? IT.resources.books : state.itTab === 'Canali YouTube' ? IT.resources.channels : IT.resources.sites).map(r => `<div class="card"><div class="row" style="justify-content:space-between"><b>${r.name}</b><span class="pill partpill">${r.lvl}</span></div>${r.who ? `<p class="muted small">${r.who}</p>` : ''}<p class="muted small">${r.note}</p></div>`).join('')}</div></div>`;
}
function itGrammar() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  const ts = itGramTopics(lv);
  return `<div class="section"><h2>Grammatica in Uso</h2><p class="muted">La grammatica italiana spiegata come nel classico "Grammar in Use": regola breve, spiegazione estesa ed esercizi con verifica immediata — oppure sfoglia il libro interattivo.</p><div class="row" style="flex-wrap:wrap;gap:10px;margin:14px 0"><div class="filters" style="margin:0">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><button class="btn dark" onclick="openFlip('Grammatica in Uso · ${lv}', itGramPages('${lv}'), '${itLvColor(lv)}')">📖 Sfoglia il libro (${ts.length} unità)</button></div><div class="giu-list">${ts.map((g, i) => itGramCard(g, lv, i * 7 + 3)).join('')}</div></div>`;
}
function itVocab() {
  const levs = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const lv = levs.includes(state.itLevel) ? state.itLevel : 'A1';
  return `<div class="section"><h2>Lessico in Uso</h2><p class="muted">180 parole italiane illustrate — scegli il livello e sfoglia il libro a fumetti con immagini, pronuncia ed esercizi.</p><div class="vocab-books" style="margin:14px 0">${levs.map(l => `<div class="vbook" onclick="openFlip('Lessico in Uso · ${l}', itVocabPages('${l}'), '${itLvColor(l)}')"><div class="vb-cover" style="background:linear-gradient(160deg,${itLvColor(l)},${itLvColor(l)}88)"><div class="vb-lvl">${l}</div><div class="vb-words">${IT.vocab[l].length} parole</div><div class="vb-units">${itVocabUnits(l).length} unità</div></div><button class="btn light vb-open">📖 Sfoglia →</button></div>`).join('')}</div><div class="filters">${levs.map(x => `<button class="filter ${lv === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="vtiles" style="margin-top:12px">${IT.vocab[lv].map(w => `<div class="vtile"><div class="vtile-pic">${w.pic}</div><div class="vtile-body"><b>${w.word}</b> <span class="muted small ipa">${w.ipa}</span><div class="chips"><span class="pill poschip">${w.pos}</span><span class="pill catpill">${w.cat}</span></div><p class="muted small">${esc(w.en)}</p><p class="example">${esc(w.example)}</p></div><button class="btn light mini-btn" onclick="speakText('${esc(w.word)}','it-IT')">🔊</button></div>`).join('')}</div></div>`;
}
function itReading() {
  const arr = IT.topics.filter(t => state.itLevel === 'All' || t.level === state.itLevel);
  return `<div class="section"><h2>Lettura · stile IELTS</h2><p class="muted">Letture autentiche con compiti da esame: Vero / Falso / Non indicato, completamento di un riassunto e scelta multipla.</p><div class="filters" style="margin-top:16px">${['All', ...IT.levels].map(x => `<button class="filter ${state.itLevel === x ? 'active' : ''}" onclick="state.itLevel='${x}';render()">${x}</button>`).join('')}</div><div class="list">${arr.map(t => `<div class="card ielts-read"><div class="row" style="justify-content:space-between"><span class="pill" style="background:${itLvColor(t.level)};color:#fff">${t.level}</span><button class="btn light mini-btn" onclick="speakText(${JSON.stringify(t.reading.text)},'it-IT')">🔊 Ascolta</button></div><h3>${t.reading.title}</h3>${ieltsPassage(t.reading)}${ieltsTasks(t.reading.tasks)}</div>`).join('')}</div></div>`;
}

function speakText(t, lang) { if ('speechSynthesis' in window) { speechSynthesis.cancel(); let u = new SpeechSynthesisUtterance(t); u.lang = lang || 'en-US'; u.rate = .9; speechSynthesis.speak(u); } }
function startTimer() { let s = 60, el = document.getElementById('timer'); clearInterval(window.tm); window.tm = setInterval(() => { s--; el.textContent = `00:${String(s).padStart(2, '0')}`; if (s <= 0) { clearInterval(window.tm); el.textContent = 'Time!'; } }, 1000); }
function addHW(t) { state.homework.push({ text: t, done: false }); save(); toast('Homework assigned ✓'); }
function toast(t) { let x = document.getElementById('toast'); x.innerHTML = `<div class="pill" style="position:fixed;right:25px;bottom:25px;background:#22233a;color:#fff;padding:13px 16px;z-index:10">${t}</div>`; setTimeout(() => x.innerHTML = '', 1800); }
render();

/* ============ Vocabulary Pro — unified visual vocabulary system ============ */
const VP = Object.assign({ saved: {}, boxes: {}, fav: {}, stats: {}, days: {}, custom: [] }, JSON.parse(localStorage.getItem('lf_vpro') || '{}'));
function vpSave() { try { localStorage.setItem('lf_vpro', JSON.stringify(VP)); } catch (e) {} }
const VP_LEVELS = ['A1', 'A2', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];
const VP_POS = ['noun', 'verb', 'adjective', 'adverb', 'phrase', 'excl'];
const VP_AUD = [['All', 'All learners'], ['kids', 'Children 5–13'], ['teens', 'Teenagers'], ['adults', 'Adults']];
const VP_SOURCES = [['All', 'All libraries'], ['core', 'Coursebook vocabulary'], ['rich', 'Vocabulary Pro'], ['ielts', 'IELTS vocabulary'], ['custom', 'My added words']];
/* ---------- build the unified store: rich + legacy coursebook + IELTS + custom ---------- */
function vpSlug(w) { return String(w).toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
function vpBuild() {
  const map = {};
  const put = (e, src) => { e.src = src; e.img = e.img || ''; const k = e.word.toLowerCase(); if (map[k]) { map[k].levels = [...new Set([...(map[k].levels || [map[k].level]), e.level])]; if (src === 'custom' || (src === 'rich' && map[k].src !== 'custom') || (src === 'ielts' && map[k].src === 'core')) map[k] = Object.assign(map[k], e); } else { e.levels = [e.level]; map[k] = e; } };
  const V = Object.assign({}, window.LF_VOCAB || {});
  const extra = window.LF_VOCAB_EXTRA || {};
  for (const lv in extra) V[lv] = (V[lv] || []).concat(extra[lv]);
  const LEG = { 'Pre-A1': 'A1' };
  for (const lv in V) {
    const cefr = LEG[lv] || lv;
    (V[lv] || []).forEach(w => put({ id: vpSlug(w.word), word: w.word, level: cefr, cat: w.cat || 'People', aud: ['Pre-A1', 'A1'].includes(lv) ? 'kids' : ['A2', 'B1'].includes(lv) ? 'teens' : 'adults', pos: { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb', excl: 'excl', num: 'noun', det: 'noun', prep: 'phrase', conj: 'phrase' }[w.pos] || 'noun', ipa: w.ipa || '', itype: '', alt: '', def: w.meaning || '', az: '', ex: w.example || '', syn: [], ant: [], col: [], fam: [] }, 'core'));
  }
  (typeof IELTS_VOCAB !== 'undefined' ? IELTS_VOCAB : []).forEach(t => t.words.forEach(w => {
    const catMap = { 'Culture & Society': 'Culture' };
    put({ id: vpSlug(w.w), word: w.w, level: 'B2+', cat: catMap[t.topic] || t.topic, aud: 'adults', pos: { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb' }[w.pos] || 'noun', ipa: '', itype: '', alt: '', def: w.def, az: w.az, ex: w.ex || '', syn: w.syn ? String(w.syn).split(',').map(s => s.trim()).filter(Boolean) : [], ant: [], col: w.col ? String(w.col).split(',').map(s => s.trim()).filter(Boolean) : [], fam: [] }, 'ielts');
  }));
  (window.VP_WORDS || []).forEach(w => put(Object.assign({}, w), 'rich'));
  (VP.custom || []).forEach(w => put(Object.assign({ syn: [], ant: [], col: [], fam: [] }, w), 'custom'));
  return Object.values(map).sort((a, b) => VP_LEVELS.indexOf(a.level) - VP_LEVELS.indexOf(b.level) || a.word.localeCompare(b.word));
}
const VP_DB = vpBuild();
const VP_BY_WORD = {}; VP_DB.forEach(e => VP_BY_WORD[e.word.toLowerCase()] = e);
function vpForWord(w) { return VP_BY_WORD[String(w).toLowerCase()] || null; }
/* ---------- image system: custom image → vector art → professional placeholder ---------- */
function vpImgOf(e) { if (!e) return null; if (e.img) return { kind: 'img', src: e.img, alt: e.alt || e.word, type: e.itype || 'photo' }; const art = (window.VP_ART || {})[e.id]; if (art) return { kind: 'art', svg: art.svg, alt: e.alt || e.word, type: e.itype || art.t }; return null; }
function vpPh(cls) { return `<div class="vp-img ${cls} vp-ph"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg><span>Visual coming soon</span></div>`; }
function vpImgFail(el, cls) { const d = document.createElement('div'); d.innerHTML = vpPh(cls); el.replaceWith(d.firstElementChild); }
function vpImg(e, cls) {
  const im = vpImgOf(e);
  if (!im) return vpPh(cls);
  if (im.kind === 'img') return `<img class="vp-img ${cls}" src="${esc(im.src)}" alt="${esc(im.alt)}" loading="lazy" onerror="vpImgFail(this,'${cls}')">`;
  return `<div class="vp-img ${cls} vp-art" role="img" aria-label="${esc(im.alt)}" data-itype="${im.type}">${im.svg}</div>`;
}
/* ---------- spaced review + streak ---------- */
const VP_IV = [1, 2, 4, 8, 16];
function vpMark(word, ok) {
  const b = VP.boxes[word] || { b: 0, due: 0, seen: 0, ok: 0 };
  b.seen++; if (ok) b.ok++;
  b.b = ok ? Math.min(4, b.b + 1) : 0;
  b.due = Date.now() + VP_IV[Math.min(3, b.b)] * 864e5;
  b.last = Date.now();
  VP.boxes[word] = b; vpTouch(); vpSave();
}
function vpTouch() { const d = new Date().toISOString().slice(0, 10); VP.days[d] = (VP.days[d] || 0) + 1; }
function vpStreak() { let s = 0; const d = new Date(); for (;;) { const k = d.toISOString().slice(0, 10); if (VP.days[k]) { s++; d.setDate(d.getDate() - 1); } else break; } return s; }
function vpDueNow() { return VP_DB.filter(e => VP.saved[e.word] && (!VP.boxes[e.word] || VP.boxes[e.word].due <= Date.now())); }
function vpBoxLabel(w) { const b = VP.boxes[w]; if (!b || b.b === 0) return 'New'; return ['New', 'Review 1', 'Review 2', 'Review 3', 'Mastered'][b.b]; }
function vpStat(word, type, ok) { const s = VP.stats[type] = VP.stats[type] || { c: 0, t: 0 }; s.t++; if (ok) s.c++; VP.stats.all = VP.stats.all || { c: 0, t: 0 }; VP.stats.all.t++; if (ok) VP.stats.all.c++; vpTouch(); vpSave(); }
function vpToggleSave(word) { if (VP.saved[word]) delete VP.saved[word]; else VP.saved[word] = { date: new Date().toISOString().slice(0, 10) }; vpSave(); toast(VP.saved[word] ? 'Saved to My Vocabulary ✓' : 'Removed from My Vocabulary'); render(); }
function vpToggleFav(word) { VP.fav[word] = !VP.fav[word]; vpSave(); render(); }
/* ---------- shared card ---------- */
function vpCard(e, cls) {
  const saved = !!VP.saved[e.word], fav = !!VP.fav[e.word];
  return `<div class="vp-card ${cls || ''}">${vpImg(e, 'vp-img-card')}<div class="vp-card-b"><div class="vp-card-t"><b>${esc(e.word)}</b><span class="muted small ipa">${esc(e.ipa || '')}</span></div><div class="chips"><span class="pill poschip">${esc(e.pos)}</span><span class="pill lvlpill">${esc(e.level)}</span><span class="pill catpill">${esc(e.cat)}</span>${e.src === 'ielts' ? '<span class="pill">IELTS</span>' : ''}${e.src === 'custom' ? '<span class="pill">My word</span>' : ''}</div><p class="muted small vp-def">${esc(e.def)}</p>${e.az ? `<p class="vp-az"><b>Azərbaycan dilində:</b> ${esc(e.az)}</p>` : ''}${e.ex ? `<p class="example">“${esc(e.ex)}”</p>` : ''}${vpCardExtra(e)}<div class="row vp-act"><button class="btn light mini-btn" onclick="speakText('${esc(e.word)}')">🔊 Hear</button><button class="btn ${saved ? 'dark' : ''} mini-btn" onclick="vpToggleSave('${esc(e.word)}')">${saved ? '✓ Saved' : '+ Save'}</button><button class="btn light mini-btn" onclick="vpToggleFav('${esc(e.word)}')">${fav ? '★' : '☆'}</button></div></div></div>`;
}
function vpCardExtra(e) {
  const sec = (t, arr, c) => arr.length ? `<div class="vp-extra ${c}"><b>${t}</b>${arr.map(x => `<span class="pill">${esc(x)}</span>`).join('')}</div>` : '';
  return `<details class="vp-det"><summary>Related words · synonyms · collocations</summary>${sec('Synonyms', e.syn, 'syn')}${sec('Antonyms', e.ant, 'ant')}${sec('Collocations', e.col, 'col')}${sec('Word family', e.fam, 'fam')}</details>`;
}
/* ---------- 1 · Explorer ---------- */
const VPX = { q: '', lv: 'All', cat: 'All', pos: 'All', src: 'All', aud: 'All', view: 'grid', limit: 36 };
function vpFilter() {
  const q = VPX.q.trim().toLowerCase();
  return VP_DB.filter(e => (VPX.lv === 'All' || e.levels.includes(VPX.lv)) && (VPX.cat === 'All' || e.cat === VPX.cat) && (VPX.pos === 'All' || e.pos === VPX.pos) && (VPX.aud === 'All' || e.aud === VPX.aud) && (VPX.src === 'All' || e.src === VPX.src || (VPX.src === 'rich' && e.src === 'custom')) && (!q || e.word.toLowerCase().includes(q) || e.az.toLowerCase().includes(q) || e.def.toLowerCase().includes(q) || e.cat.toLowerCase().includes(q) || e.level.toLowerCase() === q));
}
function vpXBar() {
  const sel = (key, opts, all) => `<select class="input vp-sel" onchange="VPX.${key}=this.value;VPX.limit=36;vpXList()"><option value="All">${all}</option>${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${VPX[key] === v ? 'selected' : ''}>${esc(l)}</option>`; }).join('')}</select>`;
  return `<div class="vp-bar"><input class="input vp-search" placeholder="Search word, Azerbaijani meaning, definition, category…" value="${esc(VPX.q)}" oninput="VPX.q=this.value;VPX.limit=36;vpXList()">${sel('lv', VP_LEVELS, 'All levels')}${sel('cat', window.VP_CATS || [], 'All categories')}${sel('pos', VP_POS, 'All parts of speech')}${sel('aud', VP_AUD, 'All audiences')}${sel('src', VP_SOURCES, 'All libraries')}</div><div class="vp-toolbar"><div class="seg">${[['grid', 'Grid'], ['card', 'Cards'], ['list', 'List']].map(v => `<button class="filter ${VPX.view === v[0] ? 'active' : ''}" onclick="VPX.view='${v[0]}';vpXList()">${v[1]}</button>`).join('')}</div><span class="muted small">${vpFilter().length} words found</span></div>`;
}
function vpXList() { const el = document.getElementById('vpx-list'); if (el) el.innerHTML = vpXResults(); }
function vpXResults() {
  const arr = vpFilter().slice(0, VPX.limit);
  if (!arr.length) return `<div class="empty">No words match these filters yet. Try clearing the search or choosing another level.</div>`;
  const body = VPX.view === 'list' ? `<div class="vp-list">${arr.map(e => `<div class="vp-row" onclick="vpOpenWord('${esc(e.word)}')">${vpImg(e, 'vp-img-row')}<div class="vp-row-b"><b>${esc(e.word)}</b> <span class="muted small ipa">${esc(e.ipa || '')}</span> <span class="pill poschip">${esc(e.pos)}</span> <span class="pill lvlpill">${esc(e.level)}</span><p class="muted small">${esc(e.def)}</p>${e.az ? `<p class="vp-az small"><b>Az:</b> ${esc(e.az)}</p>` : ''}</div><button class="btn light mini-btn" onclick="event.stopPropagation();vpToggleSave('${esc(e.word)}')">${VP.saved[e.word] ? '✓' : '+'}</button></div>`).join('')}</div>` : `<div class="vp-grid ${VPX.view === 'card' ? 'vp-grid-cards' : ''}">${arr.map(e => vpCard(e, VPX.view === 'card' ? 'vp-card-lg' : '')).join('')}</div>`;
  return body + (vpFilter().length > VPX.limit ? `<div class="row" style="justify-content:center;margin-top:14px"><button class="btn light" onclick="VPX.limit+=36;vpXList()">Show more (${vpFilter().length - VPX.limit} remaining)</button></div>` : '');
}
function vpOpenWord(w) { VPX.q = w; VPX.lv = 'All'; VPX.cat = 'All'; VPX.pos = 'All'; VPX.src = 'All'; VPX.view = 'card'; state.view = 'vpx'; render(); }
function vpExplorer() { return `<div class="section"><h2>Vocabulary Explorer</h2><p class="muted">Every word in the platform — coursebook, IELTS and Vocabulary Pro — in one visual library. ${VP_DB.length} words · ${VP_DB.filter(e => vpImgOf(e)).length} with illustrations. Discover → see → understand → hear → practice → save → review → master.</p>${vpXBar()}<div id="vpx-list">${vpXResults()}</div></div>`; }
/* ---------- 2 · Flashcards ---------- */
const VP_FL = { i: 0, flip: false };
function vpFlash() {
  const arr = vpFilter();
  if (!arr.length) return `<div class="section"><h2>Flashcards</h2><p class="muted">No words match the current filters.</p><button class="btn" onclick="state.view='vpx';render()">Open Explorer →</button></div>`;
  if (VP_FL.i >= arr.length) VP_FL.i = 0;
  const e = arr[VP_FL.i], b = VP.boxes[e.word];
  return `<div class="section"><h2>Flashcard Studio</h2><p class="muted">Flip, listen, and rate yourself — spaced review schedules the next visit automatically.</p><div class="vp-prog"><i style="width:${Math.round(100 * (VP_FL.i + 1) / arr.length)}%"></i></div><p class="muted small" style="text-align:center">${VP_FL.i + 1} / ${arr.length} · status: <b>${vpBoxLabel(e.word)}</b>${b && b.due ? ` · next review ${new Date(b.due).toISOString().slice(0, 10)}` : ''}</p><div class="vp-flash ${VP_FL.flip ? 'flipped' : ''}" onclick="VP_FL.flip=!VP_FL.flip;render()">${VP_FL.flip ? `<div class="vp-flash-b"><p class="vp-flash-def">${esc(e.def)}</p>${e.az ? `<p class="vp-az"><b>Azərbaycanca:</b> ${esc(e.az)}</p>` : ''}${e.ex ? `<p class="example">“${esc(e.ex)}”</p>` : ''}${e.col.length ? `<div class="vp-extra col"><b>Collocations</b>${e.col.slice(0, 3).map(c => `<span class="pill">${esc(c)}</span>`).join('')}</div>` : ''}<button class="btn light mini-btn" onclick="event.stopPropagation();speakText('${esc(e.ex || e.word)}')">🔊 Listen</button></div>` : `${vpImg(e, 'vp-img-flash')}<div class="vp-flash-w"><div class="big">${esc(e.word)}</div><span class="pill poschip">${esc(e.pos)}</span> <span class="pill lvlpill">${esc(e.level)}</span>${e.ipa ? `<div class="muted ipa">${esc(e.ipa)}</div>` : ''}</div>`}</div><div class="row" style="justify-content:center;flex-wrap:wrap"><button class="btn light" onclick="VP_FL.i=Math.max(0,VP_FL.i-1);VP_FL.flip=false;render()">← Previous</button><button class="btn dark" onclick="vpMark('${esc(e.word)}',true);toast('Mastering — next review scheduled ✓');VP_FL.i=(VP_FL.i+1)%${arr.length};VP_FL.flip=false;render()">I know this</button><button class="btn" onclick="vpMark('${esc(e.word)}',false);toast('Saved for practice — see it again soon');VP_FL.i=(VP_FL.i+1)%${arr.length};VP_FL.flip=false;render()">Need practice</button><button class="btn light" onclick="VP_FL.i=(VP_FL.i+1)%${arr.length};VP_FL.flip=false;render()">Next →</button></div><p class="muted small" style="text-align:center;margin-top:8px">Deck follows the Explorer filters — ${arr.length} words available. Correct answers move a word: New → Review 1 → 2 → 3 → Mastered.</p></div>`;
}
/* ---------- 3 · Visual Vocabulary Lab ---------- */
const VP_VI = { mode: 'see', i: 0, reveal: false, picked: -1, score: 0, qn: 0 };
function vpImgSet() { return VP_DB.filter(e => vpImgOf(e) && (VPX.lv === 'All' || e.levels.includes(VPX.lv))); }
function vpVisual() {
  const set = vpImgSet();
  if (set.length < 4) return `<div class="section"><h2>Visual Vocabulary Lab</h2><p class="muted">Illustrations are being added — check back soon.</p></div>`;
  const head = `<div class="section"><h2>Visual Vocabulary Lab</h2><p class="muted">Two ways to train word–picture links: look and recall, or read and recognise.</p><div class="seg">${[['see', 'Image → Word ("What is this?")'], ['pick', 'Word → Image']].map(m => `<button class="filter ${VP_VI.mode === m[0] ? 'active' : ''}" onclick="VP_VI.mode='${m[0]}';VP_VI.reveal=false;VP_VI.picked=-1;VP_VI.i=0;render()">${m[1]}</button>`).join('')}</div>`;
  if (VP_VI.mode === 'see') {
    const e = set[VP_VI.i % set.length];
    return `${head}<div class="vp-see"><div class="vp-see-img">${vpImg(e, 'vp-img-see')}${VP_VI.reveal ? `<div class="vp-see-w"><div class="big">${esc(e.word)}</div><span class="pill poschip">${esc(e.pos)}</span> <span class="pill lvlpill">${esc(e.level)}</span>${e.ipa ? `<div class="ipa muted">${esc(e.ipa)}</div>` : ''}<p class="muted">${esc(e.def)}</p>${e.az ? `<p class="vp-az"><b>Azərbaycanca:</b> ${esc(e.az)}</p>` : ''}<p class="example">“${esc(e.ex)}”</p><button class="btn light mini-btn" onclick="speakText('${esc(e.word)}')">🔊 Hear it</button></div>` : `<button class="btn dark vp-reveal" onclick="VP_VI.reveal=true;vpMark('${esc(e.word)}',true);render()">What is this? — Reveal</button>`}</div><div class="row" style="justify-content:center"><button class="btn light" onclick="VP_VI.i=(VP_VI.i+set.length-1)%set.length;VP_VI.reveal=false;render()">← Previous</button><button class="btn dark" onclick="VP_VI.i=(VP_VI.i+1)%set.length;VP_VI.reveal=false;render()">Next picture →</button></div></div></div>`;
  }
  const e = set[VP_VI.qn % set.length];
  const others = shuffled(set.filter(x => x.word !== e.word), VP_VI.qn + 7).slice(0, 3);
  const opts = shuffled([e, ...others], VP_VI.qn + 3);
  const ci = opts.findIndex(x => x.word === e.word);
  return `${head}<p class="muted small" style="text-align:center">Score ${VP_VI.score}/${VP_VI.qn} in this session</p><div class="vp-pick"><div class="vp-pick-q"><span class="pill lvlpill">${esc(e.level)}</span> <span class="pill catpill">${esc(e.cat)}</span><div class="big">${esc(e.word)}</div><p class="muted small">${esc(e.def)}</p></div><div class="vp-grid vp-pick-grid">${opts.map((o, j) => `<div class="vp-pick-opt ${VP_VI.picked === j ? (j === ci ? 'good' : 'bad') : ''}" onclick="if(VP_VI.picked<0){VP_VI.picked=${j};const ok=${j}===${ci};if(ok)VP_VI.score++;vpMark('${esc(e.word)}',ok);render()}">${vpImg(o, 'vp-img-opt')}</div>`).join('')}</div>${VP_VI.picked >= 0 ? `<div class="row" style="justify-content:center"><button class="btn dark" onclick="VP_VI.qn++;VP_VI.picked=-1;render()">Next word →</button></div>` : ''}</div></div>`;
}
/* ---------- 4 · Quiz Lab — 12 exercise types ---------- */
const VP_QZ = { type: null, items: [], i: 0, done: null, matchSel: null, matchPairs: {} };
const VP_QTYPES = [
  ['img-word', '🖼️ Choose the correct image', 'See a word — pick the matching picture.', 'img'],
  ['word-img', '🔤 Choose the correct word', 'See a picture — pick the word it shows.', 'img'],
  ['match-img', '🧩 Match word to image', 'Click a word, then click its picture.', 'img'],
  ['match-def', '📖 Match word to definition', 'Click a word, then click its meaning.', 'rich'],
  ['gap', '✏️ Fill in the blank', 'Complete the example sentence with the right word.', 'all'],
  ['meaning', '💡 Choose the correct meaning', 'Pick the right definition for the word.', 'rich'],
  ['collocation', '🔗 Choose the correct collocation', 'Which word partners go with this word?', 'col'],
  ['synonym', '🔁 Choose the synonym', 'Pick the word with a similar meaning.', 'syn'],
  ['antonym', '↔️ Choose the antonym', 'Pick the word with the opposite meaning.', 'ant'],
  ['sentence', '📝 Complete the sentence', 'Complete the sentence with a natural word partnership.', 'col'],
  ['context', '🧠 Context-based vocabulary', 'Which word is being described?', 'all'],
  ['img-context', '📷 Image-based vocabulary', 'Look at the picture and complete the sentence.', 'img']
];
function vpQPool(kind) {
  if (kind === 'img') return VP_DB.filter(e => vpImgOf(e));
  if (kind === 'rich') return VP_DB.filter(e => e.def && (VPX.lv === 'All' || e.levels.includes(VPX.lv)));
  if (kind === 'col') return VP_DB.filter(e => e.col.length);
  if (kind === 'syn') return VP_DB.filter(e => e.syn.length);
  if (kind === 'ant') return VP_DB.filter(e => e.ant.length);
  return VP_DB;
}
function vpDistract(pool, e, field, n, seed) {
  const val = x => field === 'word' ? x.word : field === 'def' ? x.def : (x[field] || [])[0] || x.def;
  return shuffled(pool.filter(x => x.word !== e.word && val(x) !== val(e)), seed).slice(0, n).map(val);
}
function vpQuizStart(type) {
  const meta = VP_QTYPES.find(q => q[0] === type);
  const pool = vpQPool(meta[3]);
  if (pool.length < 4) { toast('Not enough vocabulary for this exercise yet'); return; }
  const items = [];
  const src = shuffled(pool, Date.now() % 100000).slice(0, 8);
  src.forEach((e, i) => {
    let it = null;
    if (type === 'img-word') { const o = shuffled([e, ...shuffled(pool.filter(x => x.word !== e.word), i + 3).slice(0, 3)], i + 1); it = { q: `Which picture shows “<b>${esc(e.word)}</b>”?`, imgs: o.map(x => vpImg(x, 'vp-img-opt')), a: o.indexOf(e), exp: `${e.word} — ${e.def}` }; }
    else if (type === 'word-img') { const o = shuffled([e, ...shuffled(pool.filter(x => x.word !== e.word), i + 5).slice(0, 3)], i + 2); it = { q: `Which word matches this picture?`, img: vpImg(e, 'vp-img-q'), opts: o.map(x => x.word), a: o.indexOf(e), exp: `${e.word} — ${e.def}` }; }
    else if (type === 'match-def') { it = { pair: e, key: e.word, val: e.def }; }
    else if (type === 'meaning') { const ds = vpDistract(vpQPool('rich'), e, 'def', 3, i + 4); const o = shuffled([e.def, ...ds], i + 5); it = { q: `What does “<b>${esc(e.word)}</b>” mean?`, opts: o, a: o.indexOf(e.def), exp: `${e.word} = ${e.def}${e.az ? ' (' + e.az + ')' : ''}` }; }
    else if (type === 'gap') { const g = blankWord(e.ex || '', e.word); if (g === (e.ex || '')) return; const o = shuffled([e.word, ...vpDistract(vpQPool('all'), e, 'word', 3, i + 6)], i + 7); it = { q: g, opts: o, a: o.indexOf(e.word), exp: `“${e.ex}” — ${e.word}: ${e.def}` }; }
    else if (type === 'collocation') { const ds = vpDistract(vpQPool('col'), e, 'col', 3, i + 8); const o = shuffled([e.col[0], ...ds], i + 9); it = { q: `Which is a natural collocation with “<b>${esc(e.word)}</b>”?`, opts: o, a: o.indexOf(e.col[0]), exp: `We say: ${e.col.join(' · ')}` }; }
    else if (type === 'synonym') { const ds = vpDistract(vpQPool('syn'), e, 'syn', 3, i + 10); const o = shuffled([e.syn[0], ...ds], i + 11); it = { q: `Choose the synonym of “<b>${esc(e.word)}</b>”.`, opts: o, a: o.indexOf(e.syn[0]), exp: `${e.word} ≈ ${e.syn.join(', ')}` }; }
    else if (type === 'antonym') { const ds = vpDistract(vpQPool('ant'), e, 'ant', 3, i + 12); const o = shuffled([e.ant[0], ...ds], i + 13); it = { q: `Choose the antonym of “<b>${esc(e.word)}</b>”.`, opts: o, a: o.indexOf(e.ant[0]), exp: `${e.word} ↔ ${e.ant.join(', ')}` }; }
    else if (type === 'sentence') {
      const ws = String(e.ex || '').split(' ');
      if (ws.length < 5) return;
      const tail = ws[ws.length - 2].replace(/[.,!?;:"']/g, '');
      if (!tail || /\b______\b/.test(tail)) return;
      ws[ws.length - 2] = '______';
      const o = shuffled([tail, ...vpDistract(vpQPool('all'), e, 'word', 3, i + 14).map(x => x.split(' ')[0])], i + 15);
      it = { q: `${esc(ws.join(' '))} <span class="muted small">(complete the sentence naturally)</span>`, opts: [...new Set(o)].slice(0, 4).includes(tail) ? [...new Set(o)].slice(0, 4) : [tail, ...[...new Set(o)].filter(x => x !== tail).slice(0, 3)], a: -1, exp: `“${e.ex}” — ${e.word}: ${e.def}` };
      it.a = it.opts.indexOf(tail); if (it.a < 0) return;
    }
    else if (type === 'context') { const same = VP_DB.filter(x => x.cat === e.cat && x.word !== e.word && x.def); const o = shuffled([e.word, ...shuffled(same.length >= 3 ? same : VP_DB.filter(x => x.word !== e.word), i + 16).slice(0, 3)], i + 17); it = { q: `<span class="pill catpill">${esc(e.cat)}</span> ${esc(e.def)}${e.az ? ` <span class="muted small">(${esc(e.az)})</span>` : ''}<br><b>Which word is being described?</b>`, opts: o.map(x => x.word), a: o.indexOf(e), exp: `${e.word} — ${e.def}` }; }
    else if (type === 'img-context') { const tail = (e.word.split(' ').slice(-1)[0]); const g = (e.ex || `This picture shows ______.`).replace(new RegExp(e.word, 'i'), '______').replace(new RegExp(`\\b${tail}\\b`, 'i'), '______'); const o = shuffled([tail, ...vpDistract(vpQPool('img'), e, 'word', 3, i + 18)], i + 19); it = { img: vpImg(e, 'vp-img-q'), q: g, opts: o, a: o.indexOf(tail), exp: `${e.word} — ${e.def}` }; }
    if (it) items.push(it);
  });
  if (!items.length) { toast('This exercise needs more vocabulary data — try another type'); return; }
  VP_QZ.type = type; VP_QZ.items = items; VP_QZ.i = 0; VP_QZ.done = null; VP_QZ.matchSel = null; VP_QZ.matchPairs = {};
  state.view = 'vpquiz'; render();
}
function vpMatchUI(kind) {
  const items = VP_QZ.items;
  const keys = items.map(x => x.key || x.pair.word);
  const vals = shuffled(items.map(x => x.val || x.pair.def), 5);
  return `<p class="muted small">Click a word, then its match.</p><div class="vp-match"><div class="vp-mcol">${keys.map((k, i) => `<button class="vp-mitem ${VP_QZ.matchSel === i ? 'sel' : ''} ${VP_QZ.matchPairs[i] !== undefined ? 'done' : ''}" onclick="VP_QZ.matchSel=${i};render()">${esc(kind === 'img' ? '' : k)}${kind === 'img' ? vpImg(vpDataFor(k), 'vp-img-opt') : ''}</button>`).join('')}</div><div class="vp-mcol">${vals.map(v => { const ki = items.findIndex(x => (x.val || x.pair.def) === v); const used = Object.values(VP_QZ.matchPairs).includes(ki); return `<button class="vp-mitem ${used ? 'done' : ''}" onclick="if(VP_QZ.matchSel!==null&&VP_QZ.matchPairs[VP_QZ.matchSel]===undefined){VP_QZ.matchPairs[VP_QZ.matchSel]=${ki};VP_QZ.matchSel=null;render()}">${esc(v)}</button>`; }).join('')}</div></div>`;
}
function vpDataFor(word) { return vpForWord(word) || VP_DB[0]; }
function vpQuizSubmit() {
  const items = VP_QZ.items; let c = 0; const res = [];
  items.forEach((it, i) => {
    if (it.pair) {
      const okF = VP_QZ.matchPairs[i] === i;
      if (okF) c++; res.push({ ok: okF, show: `${it.key || it.pair.word} ↔ ${it.val || it.pair.def}` });
      vpStat(it.pair.word, VP_QZ.type, okF); vpMark(it.pair.word, okF);
    } else {
      const el = document.querySelector(`input[name="vpq${i}"]:checked`);
      const ok = !!el && +el.value === it.a;
      if (ok) c++; res.push({ ok, show: it.opts ? it.opts[it.a] : '' });
      const w = String(it.exp || '').split(' — ')[0].replace(/<[^>]*>/g, '');
      if (w && vpForWord(w)) { vpStat(w, VP_QZ.type, ok); vpMark(w, ok); }
    }
  });
  VP_QZ.done = { c, n: items.length, res }; render();
}
function vpQuiz() {
  if (VP_QZ.type && VP_QZ.items.length && !VP_QZ.done) {
    const it = VP_QZ.items[VP_QZ.i], n = VP_QZ.items.length;
    return `<div class="section"><h2>Quiz Lab</h2><div class="vp-prog"><i style="width:${Math.round(100 * (VP_QZ.done ? n : VP_QZ.i + 1) / n)}%"></i></div><div class="card vp-qcard">${it.pair ? vpMatchUI(VP_QZ.type === 'match-img' ? 'img' : 'def') : `${it.img ? `<div class="vp-qimg">${it.img}</div>` : ''}<p class="vp-qq"><b>${VP_QZ.i + 1}.</b> ${it.q}</p><div class="qc-opts">${it.imgs ? it.imgs.map((im, j) => `<label class="qc-opt vp-qc-img"><input type="radio" name="vpq${VP_QZ.i}" value="${j}">${im}</label>`).join('') : it.opts.map((o, j) => `<label class="qc-opt"><input type="radio" name="vpq${VP_QZ.i}" value="${j}"> <span><b>${String.fromCharCode(65 + j)}</b> ${esc(o)}</span></label>`).join('')}</div>`}<div class="row"><button class="btn dark" onclick="if(VP_QZ.i<${n - 1}){VP_QZ.i++;render()}else{vpQuizSubmit()}">${VP_QZ.i < n - 1 ? 'Next question →' : 'Submit & score →'}</button></div></div></div>`;
  }
  if (VP_QZ.done) {
    const d = VP_QZ.done, pct = Math.round(100 * d.c / d.n);
    return `<div class="section"><h2>Quiz Lab</h2><div class="qc-results"><div class="qc-score ${pct >= 60 ? 'good' : ''}"><b>${d.c}/${d.n}</b> correct · ${pct}%</div>${d.res.map((r, i) => `<div class="qcard ${r.ok ? 'ok' : 'bad'}"><p><b>${i + 1}.</b> ${r.ok ? 'Correct' : 'Review this one'} — ${esc(r.show)}</p></div>`).join('')}</div><div class="row"><button class="btn dark" onclick="vpQuizStart(VP_QZ.type)">Try again</button><button class="btn light" onclick="VP_QZ.type=null;VP_QZ.items=[];VP_QZ.done=null;render()">Choose another exercise</button><button class="btn light" onclick="go('vpmy')">Review saved words →</button></div></div>`;
  }
  return `<div class="section"><h2>Quiz Lab</h2><p class="muted">Twelve ways to practise — every exercise type trains a different skill. Results feed your spaced review and progress.</p><div class="vp-qmenu">${VP_QTYPES.map(q => `<div class="card vp-qtype"><span class="pill">${q[2]}</span><h3>${q[1]}</h3><button class="btn dark" onclick="vpQuizStart('${q[0]}')">Start →</button></div>`).join('')}</div></div>`;
}
/* ---------- 5 · Word of the Day ---------- */
function vpWotd() {
  const rich = VP_DB.filter(e => e.def && e.az);
  const days = Math.floor(Date.now() / 864e5);
  const e = rich[days % rich.length];
  let mini = null;
  if (e.col.length) { const ds = vpDistract(vpQPool('col'), e, 'col', 3, days + 2); const o = shuffled([e.col[0], ...ds], days + 3); mini = { q: `Which collocation goes with “${e.word}”?`, opts: o, a: o.indexOf(e.col[0]) }; }
  else if (e.syn.length) { const ds = vpDistract(vpQPool('syn'), e, 'syn', 3, days + 2); const o = shuffled([e.syn[0], ...ds], days + 3); mini = { q: `Which word is a synonym of “${e.word}”?`, opts: o, a: o.indexOf(e.syn[0]) }; }
  else { const same = VP_DB.filter(x => x.cat === e.cat && x.word !== e.word); const o = shuffled([e.word, ...shuffled(same, days + 2).slice(0, 3).map(x => x.word)], days + 3); mini = { q: `Which word means: ${e.def}?`, opts: o, a: o.indexOf(e.word) }; }
  return `<div class="section"><h2>Word of the Day</h2><p class="muted">A fresh word every day — come back tomorrow to keep your streak alive. Current streak: <b>${vpStreak()} day${vpStreak() === 1 ? '' : 's'}</b>.</p><div class="vp-card vp-card-lg vp-wotd">${vpImg(e, 'vp-img-card')}<div class="vp-card-b"><span class="pill">${new Date().toDateString()}</span><div class="vp-card-t"><b style="font-size:30px">${esc(e.word)}</b><span class="muted ipa">${esc(e.ipa || '')}</span></div><div class="chips"><span class="pill poschip">${esc(e.pos)}</span><span class="pill lvlpill">${esc(e.level)}</span><span class="pill catpill">${esc(e.cat)}</span></div><p class="vp-def">${esc(e.def)}</p><p class="vp-az"><b>Azərbaycan dilində:</b> ${esc(e.az)}</p><p class="example">“${esc(e.ex)}”</p>${e.col.length ? `<div class="vp-extra col"><b>Collocations</b>${e.col.map(c => `<span class="pill">${esc(c)}</span>`).join('')}</div>` : ''}<div class="row vp-act"><button class="btn light mini-btn" onclick="speakText('${esc(e.word)}')">🔊 Hear</button><button class="btn mini-btn" onclick="vpToggleSave('${esc(e.word)}')">${VP.saved[e.word] ? '✓ Saved' : '+ Save'}</button></div></div></div>${mini ? `<div class="card" style="margin-top:14px"><h3>Mini challenge</h3><p><b>${mini.q}</b></p><div class="qc-opts">${mini.opts.map((o, j) => `<label class="qc-opt"><input type="radio" name="wotd" value="${j}"> <span>${esc(o)}</span></label>`).join('')}</div><button class="btn" onclick="const c=document.querySelector('input[name=wotd]:checked');if(!c)return toast('Choose an answer first');const ok=+c.value===${mini.a};vpStat('${esc(e.word)}','wotd',ok);toast(ok?'Correct — well done ✓':'Not quite — the answer is: ${esc(mini.opts[mini.a])}')">Check</button></div>` : ''}</div>`;
}
/* ---------- 6 · My Vocabulary + spaced review ---------- */
const VP_MY = { rev: false, i: 0, tab: 'All' };
function vpMy() {
  const savedWords = Object.keys(VP.saved);
  if (VP_MY.rev) {
    const due = vpDueNow();
    if (!due.length) { VP_MY.rev = false; return vpMy(); }
    if (VP_MY.i >= due.length) VP_MY.i = 0;
    const e = due[VP_MY.i];
    return `<div class="section"><h2>Spaced Review</h2><p class="muted">${due.length} word${due.length === 1 ? '' : 's'} due today. Rate honestly — correct answers push words further away, mistakes bring them back.</p><div class="vp-flash" onclick="VP_MY.flip=!VP_MY.flip;render()">${VP_MY.flip ? `<div class="vp-flash-b"><p class="vp-flash-def">${esc(e.def)}</p>${e.az ? `<p class="vp-az"><b>Azərbaycanca:</b> ${esc(e.az)}</p>` : ''}<p class="example">“${esc(e.ex)}”</p></div>` : `${vpImg(e, 'vp-img-flash')}<div class="vp-flash-w"><div class="big">${esc(e.word)}</div><span class="pill lvlpill">${esc(e.level)}</span></div>`}</div><div class="row" style="justify-content:center"><button class="btn dark" onclick="vpMark('${esc(e.word)}',true);VP_MY.i++;VP_MY.flip=false;render()">I knew it</button><button class="btn" onclick="vpMark('${esc(e.word)}',false);VP_MY.i++;VP_MY.flip=false;render()">Need practice</button><button class="btn light" onclick="VP_MY.rev=false;render()">End session</button></div></div>`;
  }
  const tabs = ['All', 'Learning', 'Review', 'Mastered'];
  const rows = savedWords.map(w => { const e = vpForWord(w); return { w, e, st: vpBoxLabel(w) }; }).filter(r => r.e && (VP_MY.tab === 'All' || (VP_MY.tab === 'Mastered' ? r.st === 'Mastered' : VP_MY.tab === 'Review' ? r.st.startsWith('Review') : r.st === 'New')));
  return `<div class="section"><h2>My Vocabulary</h2><p class="muted">Your personal word book — ${savedWords.length} saved · ${vpDueNow().length} due for review today. Spaced review: New → Review 1 → 2 → 3 → Mastered.</p><div class="vp-toolbar"><div class="seg">${tabs.map(t => `<button class="filter ${VP_MY.tab === t ? 'active' : ''}" onclick="VP_MY.tab='${t}';render()">${t}</button>`).join('')}</div>${vpDueNow().length ? `<button class="btn dark" onclick="VP_MY.rev=true;VP_MY.i=0;render()">Start review (${vpDueNow().length}) →</button>` : '<span class="pill">Nothing due today — well done!</span>'}</div>${rows.length ? `<div class="vp-list">${rows.map(r => `<div class="vp-row">${vpImg(r.e, 'vp-img-row')}<div class="vp-row-b"><b>${esc(r.w)}</b> <span class="pill lvlpill">${esc(r.e.level)}</span> <span class="pill ${r.st === 'Mastered' ? 'grn' : ''}">${r.st}</span><p class="muted small">${esc(r.e.def)}</p><p class="muted small">Saved ${esc(VP.saved[r.w].date)}${r.e.az ? ' · ' + esc(r.e.az) : ''}</p></div><button class="btn light mini-btn" onclick="vpToggleSave('${esc(r.w)}')">Remove</button></div>`).join('')}</div>` : `<div class="empty">No saved words here yet. Save words from the Explorer, flashcards or Word of the Day.</div>`}</div>`;
}
/* ---------- 7 · Progress ---------- */
function vpProgress() {
  const total = VP_DB.length, withImg = VP_DB.filter(e => vpImgOf(e)).length;
  const known = VP_DB.filter(e => VP.boxes[e.word] && VP.boxes[e.word].b > 0).length;
  const mastered = VP_DB.filter(e => VP.boxes[e.word] && VP.boxes[e.word].b >= 4).length;
  const practicing = known - mastered;
  const needWork = VP_DB.filter(e => VP.boxes[e.word] && VP.boxes[e.word].b === 0 && VP.boxes[e.word].seen > 0).length;
  const bar = (v, m, c) => `<div class="vp-bar-row"><span class="vp-bar-k">${m}</span><div class="vp-prog"><i style="width:${m ? Math.round(100 * v / m) : 0}%;background:${c}"></i></div><span class="muted small">${v}</span></div>`;
  const byLv = VP_LEVELS.map(lv => [lv, VP_DB.filter(e => e.levels.includes(lv) && VP.boxes[e.word] && VP.boxes[e.word].b > 0).length, VP_DB.filter(e => e.levels.includes(lv)).length]);
  const cats = [...new Set(VP_DB.map(e => e.cat))].map(c => [c, VP_DB.filter(e => e.cat === c && VP.boxes[e.word] && VP.boxes[e.word].b > 0).length, VP_DB.filter(e => e.cat === c).length]).sort((a, b) => b[2] - a[2]).slice(0, 8);
  const stat = VP.stats;
  const lvPal = { 'A1': '#22c55e', 'A2': '#10b981', 'B1': '#0ea5e9', 'B1+': '#0891b2', 'B2': '#5d50e9', 'B2+': '#7c3aed', 'C1': '#c026d3', 'C2': '#db2777' };
  return `<div class="section"><h2>Vocabulary Progress</h2><p class="muted">Your word-learning dashboard across the whole platform.</p><div class="grid"><div class="stat"><b>${known}</b><br><span class="muted">Words learning</span></div><div class="stat"><b>${mastered}</b><br><span class="muted">Mastered</span></div><div class="stat"><b>${practicing}</b><br><span class="muted">In review</span></div><div class="stat"><b>${vpStreak()}</b><br><span class="muted">Day streak</span></div></div><div class="ih-cards2" style="margin-top:14px"><div class="card"><h3>By CEFR level</h3>${byLv.map(([lv, v, m]) => bar(v, m, lvPal[lv] || '#5d50e9')).join('')}</div><div class="card"><h3>Top categories</h3>${cats.map(([c, v, m]) => bar(v, m, '#45a3e8')).join('')}</div></div><div class="ih-cards2"><div class="card"><h3>Library</h3><p class="muted small">${total} words · ${withImg} illustrated · ${Object.keys(VP.saved).length} saved to My Vocabulary · ${needWork} needing practice</p><div class="vp-extra"><b>Sources</b>${['core', 'rich', 'ielts', 'custom'].map(s => `<span class="pill">${s}: ${VP_DB.filter(e => e.src === s).length}</span>`).join('')}</div></div><div class="card"><h3>Quiz accuracy</h3>${Object.keys(stat).length ? Object.entries(stat).map(([t, s]) => `<div class="vp-bar-row"><span class="vp-bar-k">${esc(t)}</span><div class="vp-prog"><i style="width:${s.t ? Math.round(100 * s.c / s.t) : 0}%"></i></div><span class="muted small">${s.c}/${s.t}</span></div>`).join('') : '<p class="muted small">Take a quiz in the Quiz Lab to see accuracy here.</p>'}</div></div></div>`;
}
/* ---------- 8 · Admin vocabulary management ---------- */
const VP_AD = { edit: null };
function vpAdmin() {
  const e = VP_AD.edit ? VP.custom.find(c => vpSlug(c.word) === VP_AD.edit) : null;
  const f = (id, label, ph, val, type) => `<label class="vp-f"><span>${label}</span><input class="input" id="${id}" type="${type || 'text'}" placeholder="${esc(ph)}" value="${esc(val || '')}"></label>`;
  const lvOpts = VP_LEVELS.map(l => `<option ${e && e.level === l ? 'selected' : ''}>${l}</option>`).join('');
  return `<div class="section"><h2>Vocabulary Admin</h2><p class="muted">Add or edit words — custom words appear instantly in the Explorer, quizzes and flashcards. Images accept a URL or a project path such as <code>assets/vocab/word-level-category.webp</code>. Leave the image empty to use platform artwork or the placeholder.</p><div class="card"><h3>${e ? 'Edit word: ' + esc(e.word) : 'Add a new word'}</h3><div class="vp-form">${f('va-w', 'Word *', 'wander', e && e.word)}${f('va-ipa', 'Pronunciation (IPA)', '/ˈwɒndə/', e && e.ipa)}<label class="vp-f"><span>Level</span><select class="input" id="va-lv">${lvOpts}</select></label><label class="vp-f"><span>Category</span><select class="input" id="va-cat">${(window.VP_CATS || []).map(c => `<option ${e && e.cat === c ? 'selected' : ''}>${c}</option>`).join('')}</select></label><label class="vp-f"><span>Part of speech</span><select class="input" id="va-pos">${VP_POS.map(p => `<option ${e && e.pos === p ? 'selected' : ''}>${p}</option>`).join('')}</select></label><label class="vp-f"><span>Audience</span><select class="input" id="va-aud">${['kids', 'teens', 'adults'].map(a => `<option ${e && e.aud === a ? 'selected' : ''}>${a}</option>`).join('')}</select></label>${f('va-img', 'Image URL / path', 'assets/vocab/wander-b1-travel.webp', e && e.img)}${f('va-alt', 'Image description (alt)', 'A person walking through old streets', e && e.alt)}<label class="vp-f"><span>Image type</span><select class="input" id="va-itype">${['illustration', 'photo', 'diagram', 'scene'].map(t => `<option ${e && e.itype === t ? 'selected' : ''}>${t}</option>`).join('')}</select></label></div><div class="vp-form">${f('va-def', 'Simple English definition *', 'To walk around without a particular destination.', e && e.def)}${f('va-az', 'Azerbaijani meaning', 'avara gəzmək, dolaşmaq', e && e.az)}${f('va-ex', 'Example sentence', 'We wandered around the old city.', e && e.ex)}${f('va-syn', 'Synonyms (comma separated)', 'roam, stroll', e && (e.syn || []).join(', '))}${f('va-ant', 'Antonyms (comma separated)', '', e && (e.ant || []).join(', '))}${f('va-col', 'Collocations (comma separated)', 'wander around, wander off', e && (e.col || []).join(', '))}${f('va-fam', 'Word family (comma separated)', 'wanderer (n), wandering (adj)', e && (e.fam || []).join(', '))}</div><div class="row"><button class="btn dark" onclick="vpAdSave()">${e ? 'Update word' : '+ Add word'}</button>${e ? `<button class="btn light" onclick="VP_AD.edit=null;render()">Cancel</button>` : ''}</div></div><div class="card" style="margin-top:14px"><h3>My added words (${VP.custom.length})</h3>${VP.custom.length ? `<div class="vp-list">${VP.custom.map(c => `<div class="vp-row">${vpImg(c, 'vp-img-row')}<div class="vp-row-b"><b>${esc(c.word)}</b> <span class="pill lvlpill">${esc(c.level)}</span> <span class="pill catpill">${esc(c.cat)}</span><p class="muted small">${esc(c.def || '')}</p></div><button class="btn light mini-btn" onclick="vpAdEdit('${esc(vpSlug(c.word))}')">Edit</button><button class="btn light mini-btn" onclick="vpAdDel('${esc(vpSlug(c.word))}')">Delete</button></div>`).join('')}</div>` : '<p class="muted small">No custom words yet — add your first one above.</p>'}</div></div>`;
}
function vpAdSave() {
  const g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
  const w = g('va-w'); if (!w || !g('va-def')) return toast('Word and definition are required');
  const split = s => s ? s.split(',').map(x => x.trim()).filter(Boolean) : [];
  const entry = { id: vpSlug(w), word: w, level: g('va-lv') || 'A1', cat: g('va-cat') || 'People', aud: g('va-aud') || 'adults', pos: g('va-pos') || 'noun', ipa: g('va-ipa'), img: g('va-img'), alt: g('va-alt'), itype: g('va-itype'), def: g('va-def'), az: g('va-az'), ex: g('va-ex'), syn: split(g('va-syn')), ant: split(g('va-ant')), col: split(g('va-col')), fam: split(g('va-fam')) };
  const i = VP.custom.findIndex(c => vpSlug(c.word) === entry.id);
  if (i >= 0) VP.custom[i] = entry; else VP.custom.push(entry);
  VP_AD.edit = null; vpRebuild(); vpSave(); toast('Vocabulary saved ✓'); render();
}
function vpRebuild() { const db = vpBuild(); VP_DB.length = 0; db.forEach(e => VP_DB.push(e)); for (const k in VP_BY_WORD) delete VP_BY_WORD[k]; VP_DB.forEach(e => VP_BY_WORD[e.word.toLowerCase()] = e); }
function vpAdEdit(slug) { VP_AD.edit = slug; render(); }
function vpAdDel(slug) { VP.custom = VP.custom.filter(c => vpSlug(c.word) !== slug); if (VP_AD.edit === slug) VP_AD.edit = null; vpRebuild(); vpSave(); toast('Word deleted'); render(); }
/* ---------- lesson / textbook integration helpers ---------- */
function vpTileImg(word) { return vpImg(vpForWord(word) || { id: vpSlug(word), word, alt: word }, 'vp-img-tile'); }
function vpMiniArt(word) { const e = vpForWord(word); const im = e && vpImgOf(e); return im ? vpImg(e, 'vp-img-mem') : `<div class="vp-img vp-img-mem vp-mem-letter">${esc(String(word || '?')[0].toUpperCase())}</div>`; }
function vpStrip(words) { return `<div class="vp-strip">${words.slice(0, 6).map(w => vpTileImg(w.word || w)).join('')}</div>`; }

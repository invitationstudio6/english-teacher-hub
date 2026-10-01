/* Lingua Forge — shared copybook storage (Supabase-backed, called through server-side functions).
 *
 * Only two codes can reach the data, and both are typed by a person:
 *   class code   — shared with students; it only allows submitting work.
 *   teacher code — private to the teacher; it allows reading and feedback.
 * The publishable key below is public configuration. The database itself denies
 * every direct request from the browser.
 */
const LF_CLOUD = (function () {
  const BASE = 'https://supabase-api-prod.verdent.ai/p/p036b7b1bd653c78b218e';
  const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoyMTA2NTA2NTIwLCJpYXQiOjE3OTA4ODczMjAsImlzcyI6InN1cGFiYXNlIiwicHJvamVjdF9yZWYiOiJwMDM2YjdiMWJkNjUzYzc4YjIxOGUiLCJyb2xlIjoiYW5vbiJ9.Dmh_Z0ZC09E9z3mv8Hi4Yx0BTRjRefEkvFQWsAwsbYk';
  const K_TEACHER = 'lf_cloud_teacher_code';
  const K_CLASS = 'lf_cloud_class_code';

  const MESSAGES = {
    bad_class_code: 'That class code is not right. Check it with your teacher and try again.',
    bad_teacher_code: 'That teacher code is not right. Only your private code can open shared submissions.',
    bad_pin: 'That PIN does not match the one your teacher set for you.',
    no_roster: 'Your teacher has not published the class list yet. Ask her to open Student Copybooks once.',
    bad_roster: 'The class list could not be published. Check your student accounts and try again.',
    empty_feedback: 'Write your feedback before saving the review.',
    not_found: 'That entry is no longer in the shared store.',
    empty_entry: 'Nothing was sent because the entry was empty.',
    missing_student: 'Could not tell which student this work belongs to.',
    bad_status: 'That review decision is not supported.',
    server_not_configured: 'Shared storage is not fully set up yet.',
  };

  function read(key) { try { return localStorage.getItem(key) || ''; } catch (e) { return ''; } }
  function write(key, value) {
    try { if (value) localStorage.setItem(key, value); else localStorage.removeItem(key); } catch (e) {}
  }

  let teacherCode = read(K_TEACHER);
  let classCode = read(K_CLASS);

  function codeError(err) {
    const raw = String((err && err.message) || err || '');
    for (const k of Object.keys(MESSAGES)) if (raw.indexOf(k) !== -1) return k;
    if (/Failed to fetch|NetworkError|abort|timed out/i.test(raw)) return 'offline';
    return 'unknown';
  }
  function messageFor(err) {
    if (err === 'offline') return 'Shared storage could not be reached. Your work is safe on this device — try again when you are online.';
    return MESSAGES[err] || 'Shared storage returned an unexpected error.';
  }

  async function rpc(fn, args, timeoutMs) {
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), timeoutMs || 15000) : null;
    try {
      const res = await fetch(BASE + '/rest/v1/rpc/' + fn, {
        method: 'POST',
        headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(args || {}),
        signal: controller ? controller.signal : undefined,
      });
      const text = await res.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch (e) { data = null; }
      if (!res.ok) {
        const err = new Error((data && data.message) || ('HTTP ' + res.status));
        err.status = res.status;
        err.code = codeError(data && data.message);
        throw err;
      }
      return { ok: true, data };
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  return {
    base: BASE,
    get teacherCode() { return teacherCode; },
    get classCode() { return classCode; },
    setTeacherCode(value) { teacherCode = String(value || '').trim(); write(K_TEACHER, teacherCode); },
    setClassCode(value) { classCode = String(value || '').trim(); write(K_CLASS, classCode); },
    clearTeacherCode() { teacherCode = ''; write(K_TEACHER, ''); },
    clearClassCode() { classCode = ''; write(K_CLASS, ''); },
    messageFor,
    codeError,

    ping() { return rpc('copybook_ping', {}); },

    submit(entry, student) {
      return rpc('copybook_submit', {
        p_class_code: classCode,
        p_student_id: student.id,
        p_student_name: student.name,
        p_student_level: student.level,
        p_entry_id: entry.id,
        p_title: entry.title,
        p_body: entry.body,
        p_kind: entry.kind,
        p_source: entry.source,
        p_submitted_at: entry.submittedAt || new Date().toISOString(),
      });
    },

    list(filter) {
      return rpc('copybook_list', {
        p_teacher_code: teacherCode,
        p_status: (filter && filter.status) || null,
        p_student: (filter && filter.student) || null,
        p_max_rows: (filter && filter.maxRows) || 300,
      });
    },

    summary() { return rpc('copybook_summary', { p_teacher_code: teacherCode }); },

    review(studentId, entryId, status, comment, teacherName) {
      return rpc('copybook_review', {
        p_teacher_code: teacherCode,
        p_student_id: studentId,
        p_entry_id: entryId,
        p_status: status,
        p_comment: comment,
        p_teacher_name: teacherName || 'Teacher',
      });
    },

    remove(studentId, entryId) {
      return rpc('copybook_remove', { p_teacher_code: teacherCode, p_student_id: studentId, p_entry_id: entryId });
    },

    rosterSync(students) {
      return rpc('copybook_roster_sync', { p_teacher_code: teacherCode, p_students: students });
    },

    mine(studentId, pin) {
      return rpc('copybook_mine', { p_class_code: classCode, p_student_id: studentId, p_pin: pin });
    },
  };
})();

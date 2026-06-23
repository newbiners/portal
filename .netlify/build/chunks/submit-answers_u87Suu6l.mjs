const BASE_URL = "https://hrms-dev-api.webadmin.my.id/api/";
const TOKEN = "account-40441db12c729e897c67c1b77309e6246805bdae89869";
function collectionSaveUrl(collection) {
  return `${BASE_URL}collections/save/${collection}?token=${TOKEN}`;
}
async function postJson(url, payload) {
  console.log(
    "[answerService] POST application_answer payload:",
    JSON.stringify(payload)
  );
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload)
  });
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch (e) {
    console.warn("[answerService] response not JSON:", text);
  }
  if (!res.ok) {
    throw new Error(`Cockpit save failed ${res.status}: ${text}`);
  }
  console.log("[answerService] Cockpit response:", json ?? text);
  return json;
}
async function saveAnswerEntry(entry) {
  const url = collectionSaveUrl("application_answer");
  const payload = { data: entry };
  return postJson(url, payload);
}
async function saveAnswerEntries(entries = []) {
  const results = [];
  for (const e of entries) {
    try {
      const r = await saveAnswerEntry(e);
      results.push({ ok: true, response: r });
    } catch (err) {
      console.error("[answerService] save entry failed:", err.message, e);
      results.push({ ok: false, error: err.message, entry: e });
    }
  }
  return results;
}

const prerender = false;

async function POST({ request }) {
  try {
    const body = await request.json();
    const applicationId = String(body.application_id || "").trim();
    const answers = Array.isArray(body.answers) ? body.answers : [];

    if (!applicationId) {
      return new Response(
        JSON.stringify({ ok: false, error: "application_id is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (answers.length === 0) {
      return new Response(JSON.stringify({ ok: true, results: [] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Normalize entries to Cockpit format expected by application_answer collection
    const entriesToSave = answers.map((a) => {
      const qid = String(a.question_id || "").trim();
      const qname = String(a.question_name || "").trim();
      const aval = a.answer_value == null ? "" : String(a.answer_value);

      return {
        apllication_id: { _id: applicationId, link: "t_application" },
        question_id: { _id: qid, link: "job_question" },
        question_name: qname,
        answer_value: aval,
      };
    });

    console.log(
      "[submit-answers] entriesToSave:",
      JSON.stringify(entriesToSave, null, 2),
    );
    const results = await saveAnswerEntries(entriesToSave);
    console.log(
      "[submit-answers] save results:",
      JSON.stringify(results, null, 2),
    );

    // determine overall success if at least one saved ok
    const allOk = results.every((r) => r.ok === true);

    return new Response(JSON.stringify({ ok: allOk, results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[submit-answers] Error:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

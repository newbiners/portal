import { s as submitApplication } from './applicationService_DRq7a7Wh.mjs';

const prerender = false;

async function POST({ request }) {
  try {
    const formData = await request.formData();

    const formatDateOnly = (date = new Date()) =>
      date.toISOString().slice(0, 10);

    // Add required fields if not already present
    if (!formData.get("date")) {
      formData.set("date", formatDateOnly());
    }
    if (!formData.get("stage_notes")) {
      formData.set("stage_notes", "");
    }

    const result = await submitApplication(formData);

    return new Response(JSON.stringify({ ok: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[submit-application] Error:", err.message);
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

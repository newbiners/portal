import { c as createComponent } from './astro-component_7WUr-rCC.mjs';
import 'piccolore';
import { i as renderComponent, m as maybeRenderHead, r as renderTemplate, f as addAttribute } from './ssr-function_CDyZFfOe.mjs';
import { $ as $$, g as getJobById, a as $$Mainlayout, b as $$Check } from './jobService_CMEfyJ2-.mjs';
import { g as getApplicationById, a as getAllJobStagesByJobPosting } from './applicationService_DRq7a7Wh.mjs';

const $$Lock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Lock;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "lock", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4"></path> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Lock.astro", void 0);

const $$Users = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "users", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Users.astro", void 0);

const prerender = false;
const $$applicationId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$applicationId;
  const applicationId = String(Astro2.params.application_id || "").trim();
  const application = applicationId ? await getApplicationById(applicationId) : null;
  const jobPostingId = String(
    application?.job_posting?._id || application?.job_posting || application?.job_id || application?.job || ""
  ).trim();
  const job = jobPostingId ? await getJobById(jobPostingId) : null;
  const rawStages = jobPostingId ? await getAllJobStagesByJobPosting(jobPostingId) : [];
  const stages = Array.isArray(rawStages) ? rawStages : [];
  const appliedJobTitle = String(
    job?.title || application?.job_title || application?.job_name || "Tahapan Seleksi"
  );
  const applicantName = String(
    application?.candidate_name || application?.candidate || application?.full_name || application?.name || Astro2.url.searchParams.get("name") || Astro2.url.searchParams.get("candidate") || ""
  ).trim();
  const currentStageRef = application?.current_stage || application?.stage || application?.current || null;
  const REJECT_STAGE_PATTERN = /(^|\b)(reject|rejected|ditolak|failed|declined)(\b|$)/i;
  const extractStageTitle = (stage) => {
    if (!stage) return "";
    if (typeof stage === "string") return stage.trim();
    const candidates = [
      stage?.stage_name,
      stage?.name,
      stage?.title,
      stage?.label,
      stage?.stage
    ];
    for (const value of candidates) {
      if (value !== void 0 && value !== null && String(value).trim()) {
        return String(value).trim();
      }
    }
    return "";
  };
  const pickStageTitle = (stage, index) => {
    const title = extractStageTitle(stage);
    return title || `Stage ${index + 1}`;
  };
  const normalizeStageId = (stage) => {
    if (!stage) return "";
    if (typeof stage === "string") {
      const trimmed = stage.trim();
      return /^[a-f0-9]{24}$/i.test(trimmed) ? trimmed : "";
    }
    return String(stage?._id || stage?.id || stage?.stage_id || "").trim();
  };
  const normalizeStageOrder = (stage) => {
    if (!stage || typeof stage === "string") return null;
    const value = stage?.stage_order ?? stage?.order ?? stage?.sequence ?? stage?.step;
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
  };
  const normalizeStageTitle = (stage) => {
    if (!stage) return "";
    if (typeof stage === "string") {
      const trimmed = stage.trim();
      return /^[a-f0-9]{24}$/i.test(trimmed) ? "" : trimmed;
    }
    return extractStageTitle(stage) || "";
  };
  const normalizeStageStatus = (stage) => {
    if (!stage) return "";
    return String(
      stage?.status ?? stage?.stage_status ?? stage?.state ?? stage?.visibility ?? ""
    ).trim().toLowerCase();
  };
  const isRejectStage = (stage) => {
    const title = normalizeStageTitle(stage).toLowerCase();
    const status = normalizeStageStatus(stage);
    return REJECT_STAGE_PATTERN.test(title) || REJECT_STAGE_PATTERN.test(status);
  };
  const getStageActiveInfo = (stage) => {
    if (!stage || typeof stage !== "object") {
      return { hasIndicator: false, isActive: false };
    }
    const booleanCandidates = [
      stage?.is_active,
      stage?.active,
      stage?.isActive,
      stage?.enabled,
      stage?.is_enabled,
      stage?.published,
      stage?.is_published
    ];
    let hasIndicator = false;
    for (const value of booleanCandidates) {
      if (value === true) return { hasIndicator: true, isActive: true };
      if (value === false) hasIndicator = true;
    }
    const rawStatus = String(
      stage?.status ?? stage?.stage_status ?? stage?.state ?? stage?.visibility ?? ""
    ).trim().toLowerCase();
    if (rawStatus) {
      if (/(inactive|disabled|draft|archived|hidden|off)\b/.test(rawStatus)) {
        return { hasIndicator: true, isActive: false };
      }
      if (/(^|\b)(active|enabled|published|live|on)(\b|$)/.test(rawStatus)) {
        return { hasIndicator: true, isActive: true };
      }
      return { hasIndicator: true, isActive: false };
    }
    return { hasIndicator, isActive: false };
  };
  const pickStageDesc = (stage) => {
    const candidates = [
      stage?.description,
      stage?.desc,
      stage?.detail,
      stage?.notes
    ];
    for (const value of candidates) {
      if (value !== void 0 && value !== null && String(value).trim()) {
        return String(value).trim();
      }
    }
    return "";
  };
  const pickStageMeta = (stage) => {
    const candidates = [
      stage?.date,
      stage?.completed_date,
      stage?.est_completion,
      stage?.estimated_date,
      stage?.eta
    ];
    for (const value of candidates) {
      if (value !== void 0 && value !== null && String(value).trim()) {
        return String(value).trim();
      }
    }
    return "";
  };
  const currentStageId = normalizeStageId(currentStageRef);
  const currentStageOrder = normalizeStageOrder(currentStageRef);
  const currentStageName = normalizeStageTitle(currentStageRef);
  const currentStageStatus = normalizeStageStatus(currentStageRef);
  const HIRE_STAGE_PATTERN = /(^|\b)(hire|hired|accepted|accepted_offer|offer_accepted|diterima)(\b|$)/i;
  const applicationStatus = String(
    application?.status ?? application?.application_status ?? application?.journey_status ?? application?.decision_status ?? ""
  ).trim().toLowerCase();
  const isRejectedJourney = isRejectStage(currentStageRef) || REJECT_STAGE_PATTERN.test(currentStageStatus) || REJECT_STAGE_PATTERN.test(applicationStatus);
  const isHireJourney = HIRE_STAGE_PATTERN.test(applicationStatus) || HIRE_STAGE_PATTERN.test(currentStageStatus) || HIRE_STAGE_PATTERN.test(currentStageName);
  const stageEntries = stages.map((stage, originalIndex) => ({
    stage,
    originalIndex,
    activeInfo: getStageActiveInfo(stage)
  })).filter(
    ({ stage }) => isRejectedJourney ? isRejectStage(stage) : !isRejectStage(stage)
  );
  const shouldFilterActive = !isRejectedJourney && !isHireJourney && stageEntries.some(({ activeInfo }) => activeInfo.hasIndicator);
  const visibleStageEntries = shouldFilterActive ? stageEntries.filter(({ activeInfo }) => activeInfo.isActive) : stageEntries;
  const visibleStages = visibleStageEntries.map(({ stage }) => stage);
  const matchStage = (stage, index) => {
    const stageId = normalizeStageId(stage);
    if (currentStageId && stageId && stageId === currentStageId) return true;
    if (currentStageOrder !== null) {
      const stageOrder = normalizeStageOrder(stage);
      if (stageOrder !== null && stageOrder === currentStageOrder) return true;
    }
    if (currentStageName) {
      const stageName = normalizeStageTitle(stage);
      if (stageName && stageName.toLowerCase() === currentStageName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };
  isRejectedJourney ? stages.findIndex(
    (stage, index) => matchStage(stage) && isRejectStage(stage)
  ) : -1;
  const currentStageIndex = visibleStages.findIndex(matchStage);
  const currentStageItem = currentStageIndex >= 0 ? visibleStages[currentStageIndex] : null;
  const currentStageLabel = currentStageItem ? isRejectedJourney ? "" : isHireJourney ? "Accepted" : pickStageTitle(currentStageItem, currentStageIndex) : currentStageName && !currentStageId ? isRejectedJourney ? "" : isHireJourney ? "Accepted" : currentStageName : "";
  const detectStatus = (stage, index, originalIndex) => {
    if (isRejectedJourney) {
      if (index < visibleStages.length - 1) return "completed";
      if (index === visibleStages.length - 1) return "active";
      return "locked";
    }
    if (isHireJourney) {
      if (index < visibleStages.length - 1) return "completed";
      if (index === visibleStages.length - 1) return "active";
      return "locked";
    }
    if (currentStageIndex >= 0) {
      if (index < currentStageIndex) return "completed";
      if (index === currentStageIndex) return "active";
      return "locked";
    }
    if (stage?.is_current === true || stage?.current === true) return "active";
    if (stage?.is_completed === true || stage?.completed === true) {
      return "completed";
    }
    const raw = String(
      stage?.status || stage?.stage_status || stage?.state || ""
    ).toLowerCase();
    if (/(done|complete|completed|finish|passed)/.test(raw)) return "completed";
    if (/(active|progress|review|ongoing|current)/.test(raw)) return "active";
    if (/(lock|locked|pending|waiting)/.test(raw)) return "locked";
    if (index === 0) return "completed";
    if (index === 1) return "active";
    return "locked";
  };
  const stageItems = visibleStageEntries.map(
    ({ stage, originalIndex }, index) => {
      const status = detectStatus(stage, index);
      const statusLabel = status === "completed" ? "Completed" : status === "active" ? isHireJourney ? "Accepted" : "In process" : "Locked";
      const isRejectedActiveCard = isRejectedJourney && status === "active";
      const isHireActiveCard = isHireJourney && status === "active";
      const displayTitle = pickStageTitle(stage, index);
      const descriptionText = status === "completed" ? "tahapan ini telah anda lewati" : isRejectedActiveCard ? "mohon maaf lamaran anda belum lolos" : pickStageDesc(stage) || "Tahapan ini akan diinformasikan lebih lanjut oleh tim rekrutmen.";
      return {
        id: stage?._id || `stage-${originalIndex + 1}`,
        order: stage?.stage_order ?? originalIndex + 1,
        title: displayTitle,
        description: descriptionText,
        meta: pickStageMeta(stage),
        status,
        statusLabel,
        isRejectedActiveCard,
        isHireActiveCard
      };
    }
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, { "title": "Application Journey", "data-astro-cid-kdc7iubx": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="stage-hero bg-linear-to-r from-blue-500 to-blue-400 h-22.5" data-astro-cid-kdc7iubx></section>  <section class="stage-content bg-white -mt-12 rounded-t-[36px] pt-12 pb-20" data-astro-cid-kdc7iubx> <div class="w-[90%] max-w-4xl mx-auto text-center" data-astro-cid-kdc7iubx> <span class="stage-pill inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700" data-astro-cid-kdc7iubx>
Application Journey
</span> ${applicantName ? renderTemplate`<p class="stage-name mt-4 text-sm font-semibold text-slate-500" data-astro-cid-kdc7iubx> ${applicantName} </p>` : null} <h1 class="stage-title mt-3 text-3xl font-bold text-slate-900" data-astro-cid-kdc7iubx> ${appliedJobTitle} </h1> ${currentStageLabel ? renderTemplate`<p class="stage-current mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600" data-astro-cid-kdc7iubx>
Current Stage: ${currentStageLabel} </p>` : null} <p${addAttribute(currentStageLabel ? "stage-company mt-1 text-xs uppercase tracking-[0.2em] text-slate-400" : "stage-company mt-2 text-xs uppercase tracking-[0.2em] text-slate-400", "class")} data-astro-cid-kdc7iubx>
Tim Teknologi Global
</p> </div> <div class="stage-list w-[90%] max-w-3xl mx-auto mt-12" data-astro-cid-kdc7iubx> ${stageItems.length === 0 ? renderTemplate`<div class="stage-empty rounded-3xl border border-slate-100 bg-slate-50 p-10 text-center" data-astro-cid-kdc7iubx> <h2 class="text-xl font-semibold text-slate-800" data-astro-cid-kdc7iubx>
Stages belum tersedia
</h2> <p class="text-slate-500 mt-2" data-astro-cid-kdc7iubx>
Data stage untuk job ini belum diatur.
</p> <a href="/jobs" class="inline-flex items-center justify-center mt-6 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-600" data-astro-cid-kdc7iubx>
Kembali ke daftar job
</a> </div>` : renderTemplate`<div class="stage-items space-y-6" data-astro-cid-kdc7iubx> ${stageItems.map((stage, index) => {
    const isCompleted = stage.status === "completed";
    const isActive = stage.status === "active";
    const isRejectedActiveCard = stage.isRejectedActiveCard;
    const isHireActiveCard = stage.isHireActiveCard;
    const Icon = isCompleted || isHireActiveCard ? $$Check : isActive ? $$Users : $$Lock;
    const dotClass = isCompleted ? "bg-emerald-500" : isActive ? isRejectedActiveCard ? "bg-red-600" : isHireActiveCard ? "bg-emerald-600" : "bg-blue-600" : "bg-slate-300";
    const cardClass = isCompleted ? "border-slate-200 bg-white" : isActive ? isRejectedActiveCard ? "border-red-300 bg-red-50 shadow-md" : isHireActiveCard ? "border-emerald-300 bg-emerald-50 shadow-md" : "border-blue-300 bg-white shadow-md" : "border-slate-200 bg-slate-50";
    const descClass = isCompleted ? "text-slate-500" : isActive ? isRejectedActiveCard ? "text-red-700 font-semibold" : isHireActiveCard ? "text-emerald-700" : "text-blue-600" : "text-slate-400";
    const titleClass = isActive ? isRejectedActiveCard ? "text-red-800" : isHireActiveCard ? "text-emerald-800" : "text-blue-700" : "text-slate-900";
    const badgeContent = stage.meta || "";
    return renderTemplate`<div class="stage-card relative flex gap-6"${addAttribute(stage.id, "data-stage-id")}${addAttribute(`animation-delay: ${index * 110}ms;`, "style")} data-astro-cid-kdc7iubx> <div class="relative flex flex-col items-center" data-astro-cid-kdc7iubx> <div${addAttribute(`flex h-9 w-9 items-center justify-center rounded-full ${dotClass} text-white shadow-md`, "class")} data-astro-cid-kdc7iubx> ${renderComponent($$result2, "Icon", Icon, { "size": 16, "data-astro-cid-kdc7iubx": true })} </div> ${index < stageItems.length - 1 ? renderTemplate`<span class="mt-3 h-full w-px border-s border-dashed border-slate-200" data-astro-cid-kdc7iubx></span>` : null} </div> <div${addAttribute(`flex-1 rounded-2xl border px-6 py-5 ${cardClass}`, "class")} data-astro-cid-kdc7iubx> <div class="flex items-start justify-between gap-4" data-astro-cid-kdc7iubx> <div data-astro-cid-kdc7iubx> <h3${addAttribute(`text-lg font-semibold ${titleClass}`, "class")} data-astro-cid-kdc7iubx> ${stage.title} </h3> <p${addAttribute(`mt-1 text-sm ${descClass}`, "class")} data-astro-cid-kdc7iubx> ${stage.description || "Tahapan ini akan diinformasikan lebih lanjut oleh tim rekrutmen."} </p> </div> <div class="text-right shrink-0" data-astro-cid-kdc7iubx> ${isCompleted ? renderTemplate`<span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700" data-astro-cid-kdc7iubx> ${badgeContent || "Completed"} </span>` : isActive ? isRejectedActiveCard ? renderTemplate`<span class="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-[11px] font-semibold text-red-700" data-astro-cid-kdc7iubx>
Rejected
</span>` : isHireActiveCard ? renderTemplate`<span class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700" data-astro-cid-kdc7iubx>
Accepted
</span>` : renderTemplate`<div data-astro-cid-kdc7iubx> <p class="text-[10px] uppercase tracking-[0.2em] text-slate-400" data-astro-cid-kdc7iubx>
Est. Completion
</p> <p class="mt-1 text-xs font-semibold text-slate-600" data-astro-cid-kdc7iubx> ${badgeContent || "In process"} </p> </div>` : renderTemplate`<span class="text-[11px] uppercase tracking-[0.2em] text-slate-300" data-astro-cid-kdc7iubx>
Locked
</span>`} </div> </div> </div> </div>`;
  })} </div>`} </div> </section> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/src/pages/stage/[application_id].astro", void 0);

const $$file = "/Users/gufronaprilianto/Documents/code/portal_job-main/src/pages/stage/[application_id].astro";
const $$url = "/stage/[application_id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$applicationId,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

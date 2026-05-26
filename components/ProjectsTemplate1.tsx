import { concept, images } from "../lib/concept";
import { ArrowRight } from "../lib/icons";

function pickImg(...keys) {
  for (const key of keys) {
    if (images && images[key]) return images[key];
  }
  if (images) {
    for (const k of Object.keys(images)) {
      if (images[k]) return images[k];
    }
  }
  return null;
}

const FALLBACK_PROJECTS = [
  { name: "Compleet zonnesysteem", category: "Zonnepanelen" },
  { name: "Hybride warmtepomp", category: "Warmtepompen" },
  { name: "Thuisbatterij installatie", category: "Energieopslag" },
];

export default function ProjectsTemplate1() {
  const projects = (concept.projects && concept.projects.length > 0 ? concept.projects : FALLBACK_PROJECTS).slice(0, 3);
  return (
    <section id="projecten" className="bg-[var(--t1-bg)] px-6 py-16 lg:px-[130px] lg:py-[80px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[351px_1fr] lg:gap-[349px] lg:items-center">
          <div className="flex flex-col gap-3">
            <p className="font-outfit animate-fade-in-down text-[18px] font-extrabold uppercase tracking-[2.7px] text-[var(--t1-accent)]">
              Projecten
            </p>
            <h2
              className="font-outfit animate-fade-in-up text-[28px] font-semibold leading-tight text-black sm:text-[32px] lg:text-[35px]"
              style={{ animationDelay: "100ms" }}
            >
              {concept.projectsTitle || "Hen hebben wij al mogen helpen."}
            </h2>
          </div>
          <p
            className="font-outfit animate-fade-in-up text-[16px] leading-[1.9] text-black lg:max-w-[475px]"
            style={{ animationDelay: "200ms" }}
          >
            {concept.projectsIntro ||
              `Een selectie van recent afgeronde projecten waar wij trots op zijn. Van zonnepanelen op rijtjeshuizen tot complete energiesystemen voor vrijstaande woningen.`}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const img = pickImg("project-" + i, "service-" + i, "about", "hero");
            const category = p.category || p.location || "Project";
            return (
              <a
                key={i}
                href="#projecten"
                className="group relative block aspect-[380/312] animate-fade-in-up overflow-hidden rounded-[26px] bg-[var(--t1-accent)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {img && (
                  <img
                    src={img}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/55 to-90%" />
                <span className="font-outfit absolute left-[30px] top-[22px] rounded-full bg-white px-[15px] py-[6px] text-[12px] font-medium text-black">
                  {category}
                </span>
                <div className="absolute bottom-6 left-[30px] flex flex-col gap-2 text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="font-outfit text-[24px] font-semibold leading-tight">{p.name}</p>
                  <span className="font-outfit inline-flex items-center gap-1 text-[15px] underline">
                    Bekijk dit project <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

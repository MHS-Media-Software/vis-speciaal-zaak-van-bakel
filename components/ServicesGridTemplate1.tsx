import { concept, images } from "../lib/concept";
import { ArrowRight, HelpCircle } from "../lib/icons";

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

const FALLBACK_SERVICES = [
  { name: "Zonnepanelen" },
  { name: "Warmtepompen" },
  { name: "Airco's" },
  { name: "Thuisbatterijen" },
  { name: "Laadpalen" },
];

export default function ServicesGridTemplate1() {
  // Show up to 5 services + 1 "Interesse of vragen?" card in the 6th slot (per Figma)
  const services = (concept.services && concept.services.length > 0 ? concept.services : FALLBACK_SERVICES).slice(0, 5);
  return (
    <section id="diensten" className="bg-[var(--t1-bg)] px-6 py-16 lg:px-[130px] lg:py-[80px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[351px_1fr] lg:gap-[349px] lg:items-center">
          <div className="flex flex-col gap-3">
            <p className="font-outfit animate-fade-in-down text-[18px] font-extrabold uppercase tracking-[2.7px] text-[var(--t1-accent)]">
              Onze oplossingen
            </p>
            <h2
              className="font-outfit animate-fade-in-up text-[28px] font-semibold leading-tight text-black sm:text-[32px] lg:text-[35px]"
              style={{ animationDelay: "100ms" }}
            >
              {concept.servicesTitle || "Waarmee wij jou kunnen gaan helpen."}
            </h2>
          </div>
          <p
            className="font-outfit animate-fade-in-up text-[16px] leading-[1.9] text-black lg:max-w-[475px]"
            style={{ animationDelay: "200ms" }}
          >
            {concept.servicesIntro ||
              `Van zonnepanelen tot warmtepompen — wij begeleiden jou bij elke stap richting een energiezuinige, duurzame woning. Persoonlijk advies, vakkundige installatie en oplossingen die passen bij jouw situatie.`}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const img = pickImg("service-" + i, "about", "hero");
            return (
              <a
                key={i}
                href="#diensten"
                className="group relative block aspect-[380/250] animate-fade-in-up overflow-hidden rounded-[15px] bg-[var(--t1-accent)]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {img && (
                  <img
                    src={img}
                    alt={service.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black/60 to-90%" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-1 text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <p className="font-outfit text-[20px] font-semibold leading-tight">{service.name}</p>
                  <span className="font-outfit inline-flex items-center gap-1 text-[15px] underline">
                    Meer informatie <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}

          {/* "Interesse of vragen?" CTA card — fills the 6th grid slot per Figma */}
          <div
            className="group relative flex aspect-[380/250] animate-fade-in-up flex-col justify-between overflow-hidden rounded-[15px] bg-[var(--t1-accent)] p-7 text-white"
            style={{ animationDelay: `${services.length * 80}ms` }}
          >
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-outfit text-[20px] font-semibold leading-tight">Interesse of vragen?</p>
              <p className="font-outfit text-[14px] leading-[1.5] text-white/85">
                Stel direct je vraag of bespreek vrijblijvend de mogelijkheden voor jouw woning.
              </p>
              <a
                href="#contact"
                className="font-outfit mt-1 inline-flex items-center gap-1 text-[15px] font-bold text-white underline transition-transform group-hover:translate-x-1"
              >
                Contact opnemen <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <a
            href="#diensten"
            className="font-outfit inline-flex w-fit items-center gap-2 rounded-full bg-[var(--t1-accent)] px-5 py-2 text-[15.7px] font-medium text-white transition-transform hover:scale-105"
          >
            Bekijk alle diensten <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

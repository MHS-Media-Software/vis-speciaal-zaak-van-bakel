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

export default function MidCtaTemplate1() {
  const img = pickImg("cta-bg", "mid-cta", "about", "hero");
  return (
    <section className="bg-[var(--t1-bg)] px-3 py-6 sm:px-6">
      <div className="relative mx-auto max-w-[1417px] overflow-hidden rounded-[26px] bg-[var(--t1-accent)]">
        <div className="grid gap-0 lg:grid-cols-[598px_1fr]">
          <div className="relative aspect-[598/381] animate-fade-in-left lg:aspect-auto">
            {img && <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--t1-accent)]" />
          </div>
          <div className="flex flex-col justify-center gap-5 px-6 py-12 sm:px-12 sm:py-16 lg:px-[18px] lg:py-[69px]">
            <h2
              className="font-outfit max-w-[668px] animate-fade-in-up text-[28px] font-semibold leading-tight text-white sm:text-[32px] lg:text-[38px]"
              style={{ animationDelay: "100ms" }}
            >
              {concept.midCta?.title || "Klaar om jouw woning te verduurzamen?"}
            </h2>
            <p
              className="font-outfit max-w-[668px] animate-fade-in-up text-[16px] leading-[1.9] text-white lg:text-[17px]"
              style={{ animationDelay: "200ms" }}
            >
              {concept.midCta?.text ||
                `Ontvang vrijblijvend advies op maat en ontdek welke duurzame oplossingen het beste passen bij jouw woning, wensen en budget.`}
            </p>
            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <a
                href="#offerte"
                className="font-outfit inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[15.7px] font-medium text-black transition-transform hover:scale-105"
              >
                Offerte aanvragen <ArrowRight className="h-4 w-4" />
              </a>
              {concept.contact?.phone && (
                <p className="font-outfit text-[19px] text-white">
                  Of bel{" "}
                  <a href={`tel:${concept.contact.phone}`} className="font-bold underline">
                    {concept.contact.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

export default function BottomCtaTemplate1() {
  const img = pickImg("cta-bg", "team", "about", "hero", "service-0");
  return (
    <section id="contact" className="bg-[var(--t1-dark)] px-6 py-20 lg:px-[130px]">
      <div className="mx-auto max-w-[1180px] animate-fade-in-up overflow-hidden rounded-[26px] bg-[var(--t1-accent)]">
        <div className="grid gap-0 lg:grid-cols-[415px_1fr]">
          <div className="relative aspect-[415/281] lg:aspect-auto">
            {img && (
              <img
                src={img}
                alt=""
                className="absolute inset-0 h-full w-full rounded-bl-[26px] rounded-tl-[26px] object-cover transition-transform duration-700 hover:scale-105"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-7 px-6 py-12 sm:px-12 sm:py-14 lg:px-[65px]">
            <h2
              className="font-outfit max-w-[628px] animate-fade-in-up text-[30px] font-semibold leading-tight text-white sm:text-[36px] lg:text-[44px]"
              style={{ animationDelay: "100ms" }}
            >
              {concept.ctaTitle || "Benieuwd hoe wij jouw woning kunnen verduurzamen?"}
            </h2>
            <div
              className="flex flex-wrap items-center gap-6 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
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

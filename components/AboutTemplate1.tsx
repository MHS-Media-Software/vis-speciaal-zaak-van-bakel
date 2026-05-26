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

export default function AboutTemplate1() {
  const aboutImg = pickImg("about", "hero", "service-0", "team");
  return (
    <section id="over-ons" className="bg-[var(--t1-bg)] px-6 py-16 lg:px-[130px] lg:py-[100px]">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[584px_533px] lg:items-center lg:gap-[62px]">
        <div className="flex flex-col gap-5">
          <p className="font-outfit animate-fade-in-down text-[18px] font-extrabold uppercase tracking-[2.7px] text-[var(--t1-accent)]">
            Over ons
          </p>
          <h2
            className="font-outfit animate-fade-in-left text-[28px] font-semibold leading-tight text-black sm:text-[32px] lg:text-[35px]"
            style={{ animationDelay: "100ms" }}
          >
            {concept.about?.title || "Waarom wij hiermee zijn begonnen."}
          </h2>
          <p
            className="font-outfit animate-fade-in-left text-[15px] leading-[1.9] text-black"
            style={{ animationDelay: "200ms" }}
          >
            {concept.about?.text ||
              `Met meer dan 15 jaar ervaring zetten wij ons in voor een toegankelijke energietransitie. Onze missie is helder: eerlijk advies, kwalitatieve installatie en oplossingen die écht werken voor jouw woning. We geloven in lange-termijn relaties — niet in eenmalige verkopen. Daarom denken we mee, kiezen we voor duurzame materialen en zorgen we dat onze installaties jaren mee gaan. Van het eerste adviesgesprek tot de oplevering: wij maken het verschil.`}
          </p>
          <a
            href="#over-ons"
            className="font-outfit mt-2 inline-flex w-fit animate-fade-in-up items-center gap-2 rounded-full bg-[var(--t1-accent)] px-5 py-2 text-[15.7px] font-medium text-white transition-transform hover:scale-105"
            style={{ animationDelay: "300ms" }}
          >
            Lees verder <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="aspect-[533/427] animate-fade-in-right overflow-hidden rounded-[26px] bg-black/5" style={{ animationDelay: "200ms" }}>
          {aboutImg && (
            <img
              src={aboutImg}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          )}
        </div>
      </div>
    </section>
  );
}

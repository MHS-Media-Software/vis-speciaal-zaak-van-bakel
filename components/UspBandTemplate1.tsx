import { concept } from "../lib/concept";
import { Check } from "../lib/icons";

const FALLBACK_USPS = [
  { title: "Altijd transparant", description: "Eerlijk over kosten en mogelijkheden" },
  { title: "Beoordeeld met 9.5", description: "Gemiddeld door onze klanten" },
  { title: "Binnen 4 weken klaar", description: "Snelle installatie zonder gedoe" },
  { title: "Gecertificeerde monteurs", description: "Vakmanschap waar je op kunt rekenen" },
];

export default function UspBandTemplate1() {
  const usps = (concept.uspCards && concept.uspCards.length > 0 ? concept.uspCards : FALLBACK_USPS).slice(0, 4);
  return (
    <section className="bg-[var(--t1-bg)] px-3 py-6 sm:px-6">
      <div className="relative mx-auto max-w-[1417px] rounded-[26px] bg-[var(--t1-accent)] px-6 py-10 lg:px-[130px] lg:py-[55px]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="flex animate-fade-in-up flex-col gap-3 rounded-[19px] bg-white p-[22px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--t1-accent)]">
                <Check className="h-4 w-4 text-white" />
              </span>
              <p className="font-outfit text-[19px] font-semibold leading-tight text-black lg:text-[21px]">
                {usp.title}
              </p>
              {usp.description && (
                <p className="font-outfit text-[14px] leading-snug text-black/80">{usp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

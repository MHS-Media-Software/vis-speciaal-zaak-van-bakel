import { Check } from "../lib/icons";

const ITEMS = [
  { bold: "Gecertificeerd", rest: "verduurzamen" },
  { bold: "Gratis", rest: "adviesgesprek" },
  { bold: "15+ jaar", rest: "ervaring" },
  { bold: "25.000+ woningen", rest: "verduurzaamd" },
];

export default function BottomUspTemplate1() {
  return (
    <section className="bg-white px-6 py-6 lg:px-[130px]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6">
        {ITEMS.map((item, i) => (
          <div
            key={item.bold}
            className="flex animate-fade-in-up items-center gap-3"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[var(--t1-accent)]">
              <Check className="h-3.5 w-3.5 text-white" />
            </span>
            <p className="font-poppins text-[15px] text-[#282828]">
              <span className="font-bold">{item.bold}</span> {item.rest}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

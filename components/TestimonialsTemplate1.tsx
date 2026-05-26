import { concept, images } from "../lib/concept";
import { Star, Users } from "../lib/icons";

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

const FALLBACK_TESTIMONIALS = [
  { name: "Sandra Jansen", date: "12 Maart 2024", quote: "Vakkundige installatie en uitstekende communicatie. We zijn nu volledig zelfvoorzienend dankzij ons nieuwe systeem.", rating: 5 },
  { name: "Mark de Vries", date: "27 Februari 2024", quote: "Eerlijk advies en geen verrassingen. Het hele proces verliep van begin tot eind zoals beloofd. Aanrader!", rating: 5 },
  { name: "Femke Bakker", date: "8 Februari 2024", quote: "Snelle planning, nette monteurs en alles werkt perfect. Onze energierekening is bijna gehalveerd.", rating: 5 },
  { name: "Pieter van Dijk", date: "22 Januari 2024", quote: "Zeer professioneel team. Ze namen alle tijd om onze vragen te beantwoorden en kwamen met een passend voorstel.", rating: 5 },
];

function GoogleG() {
  return (
    <svg viewBox="0 0 22 21" className="h-[21px] w-[22px]" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4285F4" d="M21.6 10.74c0-.71-.06-1.4-.18-2.06H11v3.9h5.94a5.07 5.07 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.3-4.74 3.3-7.92Z" />
      <path fill="#34A853" d="M11 21c2.97 0 5.46-.98 7.3-2.66l-3.56-2.76c-.98.66-2.24 1.06-3.74 1.06-2.88 0-5.32-1.94-6.19-4.55H1.13v2.85A11 11 0 0 0 11 21Z" />
      <path fill="#FBBC05" d="M4.81 12.1A6.6 6.6 0 0 1 4.45 10.5c0-.55.1-1.09.26-1.6V6.05H1.13A11 11 0 0 0 0 10.5c0 1.78.43 3.46 1.13 4.95l3.68-2.85Z" />
      <path fill="#EA4335" d="M11 4.16c1.62 0 3.07.55 4.21 1.64l3.16-3.15C16.45 1.04 13.96 0 11 0 6.74 0 3.06 2.45 1.13 6.05l3.68 2.85C5.68 6.1 8.12 4.16 11 4.16Z" />
    </svg>
  );
}

export default function TestimonialsTemplate1() {
  const testimonials = (concept.testimonials && concept.testimonials.length > 0 ? concept.testimonials : FALLBACK_TESTIMONIALS).slice(0, 4);
  const total = (concept.testimonials && concept.testimonials.length) || 50;
  return (
    <section className="bg-[var(--t1-bg)] px-6 py-16 lg:px-[130px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => {
            const avatarImg = pickImg("testimonial-" + i, "team", "about");
            return (
              <div
                key={i}
                className="flex animate-fade-in-up flex-col gap-3 rounded-[10px] border border-[#e9e9e9] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-[37px] w-[37px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-black/10">
                      {avatarImg ? (
                        <img src={avatarImg} alt={t.name} className="h-full w-full object-cover" />
                      ) : (
                        <Users className="h-4 w-4 text-[var(--t1-accent)]" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-poppins text-[14px] font-medium leading-tight text-black">{t.name}</p>
                      <p className="font-poppins text-[10px] font-medium text-[#8e8e8e]">{t.date || "Recent"}</p>
                    </div>
                  </div>
                  <GoogleG />
                </div>
                <div className="flex gap-[3px]">
                  {Array.from({ length: t.rating || 5 }).map((_, k) => (
                    <Star key={k} className="h-[17px] w-[17px] fill-[#fbbc05] text-[#fbbc05]" />
                  ))}
                </div>
                <p className="font-outfit text-[14px] font-light leading-[1.6] text-black">{t.quote}</p>
              </div>
            );
          })}
        </div>
        <p
          className="font-opensans mt-10 animate-fade-in-up text-center text-[15px] text-black"
          style={{ animationDelay: "400ms" }}
        >
          <span className="font-bold">Google</span> waardering: <span className="font-bold">5.0</span> van 5, gebaseerd op{" "}
          <span className="font-bold">{total}</span> <span className="font-bold">recensies</span>
        </p>
      </div>
    </section>
  );
}

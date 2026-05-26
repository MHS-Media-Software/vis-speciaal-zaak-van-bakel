"use client";

import { useState } from "react";
import { concept, images } from "../lib/concept";
import { Plus } from "../lib/icons";

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

const FALLBACK_STEPS = [
  {
    title: "1. Vrijblijvende offerte aanvragen",
    description:
      "Vul het contactformulier in of bel ons direct. Binnen 24 uur nemen wij contact op voor een eerste kennismaking en inventarisatie van jouw wensen.",
  },
  {
    title: "2. Persoonlijk advies op maat",
    description:
      "Onze adviseur komt langs voor een opname van jouw woning en stelt een passende offerte op — afgestemd op jouw situatie, budget en doelstellingen.",
  },
  {
    title: "3. Vakkundige installatie binnen 4 weken",
    description:
      "Onze gecertificeerde monteurs zorgen voor een nette installatie. We werken snel, schoon en zorgvuldig zodat jij direct kunt genieten van het resultaat.",
  },
];

export default function WerkwijzeTemplate1() {
  const [open, setOpen] = useState(0);
  const steps =
    concept.steps && concept.steps.length > 0
      ? concept.steps.map((s, i) => ({
          title: `${i + 1}. ${s.title}`,
          description: s.description,
        }))
      : FALLBACK_STEPS;
  const sideImg = pickImg("werkwijze", "process", "about", "team", "hero");

  return (
    <section className="bg-[var(--t1-bg)] px-3 py-6 sm:px-6">
      <div className="relative mx-auto max-w-[1417px] rounded-[26px] bg-[var(--t1-accent)] px-6 py-12 sm:px-12 sm:py-16 lg:px-[122px] lg:py-[97px]">
        <div className="grid gap-10 lg:grid-cols-[576px_527px] lg:gap-[72px]">
          <div className="flex flex-col gap-3">
            <p className="font-outfit animate-fade-in-down text-[18px] font-extrabold uppercase tracking-[2.7px] text-white">
              Werkwijze
            </p>
            <h2
              className="font-outfit animate-fade-in-left text-[28px] font-semibold leading-tight text-white sm:text-[32px] lg:text-[35px]"
              style={{ animationDelay: "100ms" }}
            >
              {concept.stepsTitle || "Dit is hoe wij werken."}
            </h2>
            <p
              className="font-outfit max-w-[576px] animate-fade-in-left text-[15px] leading-[1.9] text-white"
              style={{ animationDelay: "200ms" }}
            >
              {concept.stepsIntro ||
                `Van eerste contact tot installatie — bij ons weet je precies wat je kunt verwachten. Helder, eerlijk en zonder verrassingen.`}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {steps.map((step, i) => {
                const isOpen = open === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="animate-fade-in-up rounded-[12px] bg-white p-5 text-left transition-all duration-300 hover:shadow-lg"
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-outfit text-[17px] font-semibold text-black lg:text-[19px]">
                        {step.title}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-[var(--t1-accent)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </div>
                    {isOpen && step.description && (
                      <p className="font-outfit mt-3 animate-fade-in-up text-[15px] leading-[1.9] text-black">
                        {step.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="aspect-[527/509] animate-fade-in-right overflow-hidden rounded-[26px]"
            style={{ animationDelay: "200ms" }}
          >
            {sideImg ? (
              <img
                src={sideImg}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="h-full w-full bg-white/10" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

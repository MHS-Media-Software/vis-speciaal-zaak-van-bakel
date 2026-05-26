"use client";

import { useState } from "react";
import { concept, images } from "../lib/concept";
import { ArrowLeft, ArrowRight, Check } from "../lib/icons";

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

export default function HeroTemplate1() {
  const heroImg = pickImg("hero", "about", "service-0");
  const checklist = (concept.uspCards || [])
    .slice(0, 2)
    .map((u) => u.title || u.description)
    .filter(Boolean);
  const trustFallback = checklist[0] || "Duizenden tevreden klanten";
  const trustSub = checklist[1] || "actief door heel Nederland";

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ voornaam: "", achternaam: "", email: "", telefoon: "", bericht: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;
  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="bg-[var(--t1-bg)] px-3 pt-3 pb-2 sm:px-6">
      <div className="relative mx-auto max-w-[1417px] overflow-hidden rounded-[26px]">
        <div className="relative aspect-[1417/590] min-h-[480px] w-full lg:aspect-auto lg:min-h-[590px]">
          {heroImg ? (
            <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[var(--t1-dark)]" />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.55)_100%)]" />

          <div className="relative z-10 grid h-full gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_474px] lg:gap-12 lg:px-[122px] lg:py-[115px]">
            <div className="flex max-w-[476px] flex-col">
              <h1
                className="font-outfit animate-fade-in-up text-[36px] leading-[1.1] font-semibold text-white sm:text-[44px] lg:text-[49px]"
                style={{ animationDelay: "100ms" }}
              >
                {concept.heroTitle || `Maak jouw woning klaar voor de toekomst.`}
              </h1>
              <p
                className="font-outfit animate-fade-in-up mt-[18px] text-[16px] leading-[1.9] text-white"
                style={{ animationDelay: "250ms" }}
              >
                {concept.heroSubtitle ||
                  `Persoonlijk advies, vakkundige installatie en duurzame oplossingen die écht werken — voor jouw woning, jouw budget, jouw situatie.`}
              </p>
              <a
                href="#diensten"
                className="font-outfit animate-fade-in-up mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--t1-accent)] px-5 py-2 text-[15.7px] font-medium text-white transition-transform hover:scale-105"
                style={{ animationDelay: "400ms" }}
              >
                {concept.heroButtonText || "Ontdek onze oplossingen"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 hidden h-[95px] w-[328px] animate-fade-in-up items-center gap-4 rounded-bl-[26px] rounded-tr-[26px] bg-black/50 pl-[51px] backdrop-blur-sm sm:flex"
            style={{ animationDelay: "550ms" }}
          >
            <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[var(--t1-accent)]">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div className="flex flex-col text-white">
              <p className="font-outfit text-[16px] font-semibold">{trustFallback}</p>
              <p className="font-outfit text-[14px]">{trustSub}</p>
            </div>
          </div>
        </div>

        {/* Multi-step offerte form */}
        <form
          id="offerte"
          onSubmit={submit}
          className="mt-6 flex animate-fade-in-right flex-col gap-[16px] rounded-[26px] bg-white p-6 shadow-xl sm:p-8 lg:absolute lg:right-[42px] lg:top-[58px] lg:mt-0 lg:h-[529px] lg:w-[391px] lg:rounded-tl-[26px] lg:rounded-tr-[26px] lg:rounded-b-none lg:p-7"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-outfit text-[24px] font-medium text-black sm:text-[26px] lg:text-[28px] lg:leading-[1.15]">
              Vrijblijvende offerte aanvragen.
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#dadada]">
                <div className="h-full bg-[var(--t1-accent)] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <span className="font-outfit text-[12px] text-black/60">Stap {step}/{totalSteps}</span>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--t1-accent)]">
                <Check className="h-6 w-6 text-white" />
              </div>
              <p className="font-outfit text-[18px] font-semibold text-black">Bedankt voor je aanvraag!</p>
              <p className="font-outfit text-[14px] text-black/70">We nemen binnen 24 uur contact met je op.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div key="s1" className="flex animate-fade-in-up flex-col gap-3">
                  {checklist.length > 0 && (
                    <ul className="flex flex-col gap-2">
                      {checklist.map((label, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--t1-accent)]">
                            <Check className="h-3 w-3 text-white" />
                          </span>
                          <span className="font-outfit text-[14px] text-black">{label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-2 grid grid-cols-2 gap-[11px]">
                    <input
                      className="h-[36px] rounded-[5px] border border-[#dadada] px-3 text-[13px] outline-none focus:border-[var(--t1-accent)]"
                      placeholder="Voornaam"
                      value={form.voornaam}
                      onChange={(e) => update("voornaam", e.target.value)}
                    />
                    <input
                      className="h-[36px] rounded-[5px] border border-[#dadada] px-3 text-[13px] outline-none focus:border-[var(--t1-accent)]"
                      placeholder="Achternaam"
                      value={form.achternaam}
                      onChange={(e) => update("achternaam", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div key="s2" className="flex animate-fade-in-up flex-col gap-3">
                  <p className="font-outfit text-[14px] text-black/70">Hoe kunnen we jou bereiken?</p>
                  <input
                    className="h-[36px] rounded-[5px] border border-[#dadada] px-3 text-[13px] outline-none focus:border-[var(--t1-accent)]"
                    placeholder="E-mailadres"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  <input
                    className="h-[36px] rounded-[5px] border border-[#dadada] px-3 text-[13px] outline-none focus:border-[var(--t1-accent)]"
                    placeholder="Telefoonnummer"
                    type="tel"
                    value={form.telefoon}
                    onChange={(e) => update("telefoon", e.target.value)}
                  />
                </div>
              )}

              {step === 3 && (
                <div key="s3" className="flex animate-fade-in-up flex-col gap-3">
                  <p className="font-outfit text-[14px] text-black/70">Vertel ons waar je over na wilt denken.</p>
                  <textarea
                    className="h-[140px] rounded-[5px] border border-[#dadada] p-3 text-[13px] outline-none focus:border-[var(--t1-accent)]"
                    placeholder="Bericht (optioneel)"
                    value={form.bericht}
                    onChange={(e) => update("bericht", e.target.value)}
                  />
                </div>
              )}

              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prev}
                    className="font-outfit inline-flex items-center gap-1 rounded-full border border-[#dadada] bg-white px-4 py-2 text-[14px] font-medium text-black transition-colors hover:bg-[#f5f5f5]"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Vorige
                  </button>
                ) : <span />}
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={next}
                    className="font-outfit inline-flex items-center gap-1 rounded-full bg-[var(--t1-accent)] px-5 py-2 text-[15.7px] font-medium text-white transition-transform hover:scale-105"
                  >
                    Volgende <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="font-outfit inline-flex items-center gap-1 rounded-full bg-[var(--t1-accent)] px-5 py-2 text-[15.7px] font-medium text-white transition-transform hover:scale-105"
                  >
                    Versturen <Check className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

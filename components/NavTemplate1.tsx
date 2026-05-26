"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { concept, logoUrl } from "../lib/concept";
import { ChevronDown, Menu, X } from "../lib/icons";

const NAV_LINKS = [
  { label: "Diensten", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over ons", href: "#over-ons" },
  { label: "Contact", href: "#contact" },
];

export default function NavTemplate1() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="relative z-40 bg-[var(--t1-bg)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 lg:px-[130px] lg:py-2">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {logoUrl ? (
            <img data-edit-key="logo" data-edit-type="image" src={logoUrl} alt={concept.companyName} className="h-[48px] w-auto object-contain" />
          ) : (
            <span data-edit-key="companyName" data-edit-type="text" className="font-outfit text-lg font-bold text-black">{concept.companyName}</span>
          )}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-[29px] lg:flex" data-edit-key="navItems" data-edit-type="navlist">
          <div className="flex items-center gap-[35px]">
            <a data-edit-key="nav.0" data-edit-type="text" href="#diensten" className="font-outfit flex cursor-pointer items-center gap-2 text-[15.7px] font-medium text-black">
              Diensten <ChevronDown className="h-3 w-3" />
            </a>
            <Link data-edit-key="nav.1" data-edit-type="text" href="#projecten" className="font-outfit text-[15.7px] font-medium text-black">Projecten</Link>
            <Link data-edit-key="nav.2" data-edit-type="text" href="#over-ons" className="font-outfit text-[15.7px] font-medium text-black">Over ons</Link>
            <Link data-edit-key="nav.3" data-edit-type="text" href="#contact" className="font-outfit text-[15.7px] font-medium text-black">Contact</Link>
          </div>
          <a href="#offerte" className="rounded-full bg-[var(--t1-accent)] px-5 py-2 transition-transform hover:scale-105">
            <span data-edit-key="ctaButtonText" data-edit-type="text" className="font-outfit text-[15.7px] font-medium text-white">Offerte aanvragen</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--t1-accent)] text-white transition-transform hover:scale-105 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-50 origin-top transform bg-[var(--t1-bg)] shadow-2xl transition-all duration-300 lg:hidden ${open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"}`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
            {logoUrl ? (
              <img data-edit-key="logo" data-edit-type="image" src={logoUrl} alt={concept.companyName} className="h-[48px] w-auto object-contain" />
            ) : (
              <span data-edit-key="companyName" data-edit-type="text" className="font-outfit text-lg font-bold text-black">{concept.companyName}</span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menu sluiten"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--t1-accent)] text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6 pb-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-outfit animate-fade-in-up border-b border-black/5 py-4 text-[20px] font-semibold text-black transition-colors hover:text-[var(--t1-accent)]`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#offerte"
            onClick={() => setOpen(false)}
            className="font-outfit mt-6 inline-flex w-fit animate-fade-in-up items-center rounded-full bg-[var(--t1-accent)] px-6 py-3 text-[15.7px] font-medium text-white"
            style={{ animationDelay: `${NAV_LINKS.length * 60}ms` }}
          >
            Offerte aanvragen
          </a>
          {concept.contact?.phone && (
            <a
              href={`tel:${concept.contact.phone}`}
              onClick={() => setOpen(false)}
              className="font-outfit mt-3 animate-fade-in-up text-[15px] text-black/70"
              style={{ animationDelay: `${(NAV_LINKS.length + 1) * 60}ms` }}
            >
              Of bel <span className="font-bold text-black underline">{concept.contact.phone}</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

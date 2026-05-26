import Link from "next/link";
import { concept, logoUrl } from "../lib/concept";
import { Facebook, Instagram } from "../lib/icons";

export default function FooterTemplate1() {
  const services = (concept.services || []).slice(0, 4);
  return (
    <footer className="bg-[var(--t1-dark)]">
      <div className="mx-auto max-w-[1440px] px-6 pt-20 pb-10 lg:px-[130px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[196px_1fr_1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-7">
            {logoUrl && <img src={logoUrl} alt="" className="h-[50px] w-auto object-contain brightness-0 invert" />}
            {concept.contact?.email && (
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[15px] text-white">Stuur ons een bericht</span>
                <a href={`mailto:${concept.contact.email}`} className="font-outfit text-[18px] font-semibold text-white underline">
                  {concept.contact.email}
                </a>
              </div>
            )}
            {concept.contact?.phone && (
              <div className="flex flex-col gap-1">
                <span className="font-outfit text-[15px] text-white">Of bel ons direct</span>
                <a href={`tel:${concept.contact.phone}`} className="font-outfit text-[22px] font-semibold text-white underline">
                  {concept.contact.phone}
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-outfit mb-2 text-[16px] font-semibold text-white">Ga snel naar</h4>
            <Link href="#diensten" className="font-outfit text-[15px] text-white">Diensten</Link>
            <Link href="#projecten" className="font-outfit text-[15px] text-white">Projecten</Link>
            <Link href="#over-ons" className="font-outfit text-[15px] text-white">Over ons</Link>
            <Link href="#contact" className="font-outfit text-[15px] text-white">Contact</Link>
            <a href="#offerte" className="font-outfit text-[15px] text-white">Offerte aanvragen</a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-outfit mb-2 text-[16px] font-semibold whitespace-nowrap text-white">Onze oplossingen</h4>
            {services.length > 0 ? services.map((s, i) => (
              <span key={i} className="font-outfit text-[15px] text-white">{s.name}</span>
            )) : ["Oplossing 1", "Oplossing 2", "Oplossing 3", "Oplossing 4"].map((label) => (
              <span key={label} className="font-outfit text-[15px] text-white">{label}</span>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-outfit mb-2 text-[16px] font-semibold whitespace-nowrap text-white">Bedrijfsgegevens</h4>
            {concept.contact?.address && <span className="font-outfit text-[15px] text-white">{concept.contact.address}</span>}
            {concept.companyInfo?.kvk && <span className="font-outfit text-[15px] text-white">KVK: {concept.companyInfo.kvk}</span>}
            {concept.companyInfo?.openingHours && <span className="font-outfit text-[15px] text-white">{concept.companyInfo.openingHours}</span>}
            {!concept.companyInfo?.kvk && !concept.contact?.address && (
              <>
                <span className="font-outfit text-[15px] text-white">Adres</span>
                <span className="font-outfit text-[15px] text-white">KVK</span>
                <span className="font-outfit text-[15px] text-white">Openingstijden</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-[130px]">
          <div className="flex flex-wrap gap-x-12 gap-y-2">
            <a href="/algemene-voorwaarden" className="font-outfit text-[15px] text-white">Algemene voorwaarden</a>
            <a href="/privacy" className="font-outfit text-[15px] text-white">Privacy statement</a>
            <a href="/cookies" className="font-outfit text-[15px] text-white">Cookie statement</a>
          </div>
          <div className="flex items-center gap-4">
            {concept.socialMedia?.facebook && (
              <a href={concept.socialMedia.facebook} className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10">
                <Facebook className="h-3.5 w-3.5 text-white" />
              </a>
            )}
            {concept.socialMedia?.instagram && (
              <a href={concept.socialMedia.instagram} className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/10">
                <Instagram className="h-3.5 w-3.5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

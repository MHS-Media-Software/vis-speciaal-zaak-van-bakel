import { concept } from "../lib/concept";

export default function TopBarTemplate1() {
  return (
    <div className="hidden h-[58px] w-full items-center justify-end gap-8 bg-black px-8 md:flex lg:px-[130px]">
      {concept.contact?.email && (
        <span className="font-outfit text-[15.682px] font-medium text-white">{concept.contact.email}</span>
      )}
      {concept.contact?.phone && (
        <span className="font-outfit text-[15.682px] font-medium text-white">{concept.contact.phone}</span>
      )}
    </div>
  );
}

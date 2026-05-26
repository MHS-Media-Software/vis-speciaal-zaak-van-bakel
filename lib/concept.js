import { concept, logoUrl, images } from "../app/data";
export { concept, logoUrl, images };

export function getColor(section, slot, fallback) {
  const o = concept.styleOverrides && concept.styleOverrides[section];
  if (o && o[slot]) return o[slot];
  return fallback;
}

export const c = concept.colors;

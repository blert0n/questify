import Values from "values.js";

export const generateShades = (
  hex: string,
  numberOfShades: number = 4,
  shadePercentage: number = 15
) => {
  const color = new Values(hex);

  const result = [
    ...new Set(color.shades(shadePercentage).map((c) => `#${c.hex}`)),
  ].slice(0, numberOfShades);

  if (result.length > 1) return result;
  return [
    ...new Set(color.tints(shadePercentage).map((c) => `#${c.hex}`)),
  ].slice(0, numberOfShades);
};

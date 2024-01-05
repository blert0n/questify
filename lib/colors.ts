import Values from "values.js";

export const generateShades = (
  hex: string,
  numberOfShades: number = 4,
  shadePercentage: number = 20
) => {
  const color = new Values(hex);

  const result = [
    ...new Set(color.tints(shadePercentage).map((c) => `#${c.hex}`)),
  ]
    .slice(0, numberOfShades)
    .reverse();

  if (result.length > 1) return result;
  return [...new Set(color.shades(5).map((c) => `#${c.hex}`))].slice(
    0,
    numberOfShades
  );
};

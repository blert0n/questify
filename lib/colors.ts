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

export const getColorBrightness = (hex: string) => {
  const color = new Values(hex);
  return color.getBrightness();
};

export const getColorShade = (hex: string, weight: number) => {
  const color = new Values(hex);
  return `#${color.shade(weight).hex}`;
};

export const getPrimaryColor = (hex: string) =>
  getColorBrightness(hex) >= 80 ? getColorShade(hex, 50) : hex;

export const pieChartPalette = [
  "#FF5733",
  "#66CC99",
  "#FFCC66",
  "#3366CC",
  "#FF6666",
  "#66FF66",
  "#9966FF",
  "#FF33CC",
  "#66CCCC",
  "#CC66FF",
  "#FF9933",
  "#3399CC",
  "#FF99CC",
  "#66FFCC",
  "#CC3399",
  "#CCFF66",
  "#9966CC",
  "#FF3366",
  "#66CCFF",
  "#CC6633",
];

export const getRandomColorFromPalette = () => {
  const randomIndex = Math.floor(Math.random() * pieChartPalette.length);
  return pieChartPalette[randomIndex];
};

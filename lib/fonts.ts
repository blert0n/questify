import {
  Alegreya,
  Barlow,
  Inter,
  Lato,
  Lobster,
  Lora,
  Merriweather,
  Nunito,
  Open_Sans,
  Oswald,
  Raleway,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Space_Mono,
} from "next/font/google";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
});
const barlow = Barlow({
  weight: "400",
  variable: "--font-barlow",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const lato = Lato({
  weight: "400",
  variable: "--font-lato",
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: ["400"],
  variable: "--font-lobster",
  subsets: ["latin"],
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});
const merriweather = Merriweather({
  weight: "400",
  variable: "--font-merriweather",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  weight: "400",
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const fontMapper = {
  Alegreya: "font-alegreya",
  Barlow: "font-barlow",
  Inter: "font-inter",
  Lato: "font-lato",
  Lobster: "font-lobster",
  Lora: "font-lora",
  Merriweather: "font-merriweather",
  Nunito: "font-nunito",
  "Open Sans": "font-open-sans",
  Oswald: "font-oswald",
  Raleway: "font-raleway",
  Roboto: "font-roboto",
  "Roboto Condensed": "font-roboto-condensed",
  "Roboto Mono": "font-roboto-mono",
  "Space Mono": "font-space-mono",
};

export const fontSizeMapper = (size: string) => `text-[${size}px]`;

export {
  alegreya,
  barlow,
  inter,
  lato,
  lobster,
  lora,
  merriweather,
  nunito,
  openSans,
  oswald,
  raleway,
  roboto,
  robotoCondensed,
  robotoMono,
  spaceMono,
};

import {
  Barlow,
  Inter,
  Lato,
  Lobster,
  Lora,
  Merriweather,
  Nunito,
  Open_Sans,
  Oswald,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Ubuntu,
} from "next/font/google";

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
const ubuntu = Ubuntu({
  weight: "400",
  variable: "--font-ubuntu",
  subsets: ["latin"],
});
export {
  barlow,
  inter,
  lato,
  lobster,
  lora,
  merriweather,
  nunito,
  openSans,
  oswald,
  roboto,
  robotoCondensed,
  robotoMono,
  ubuntu,
};

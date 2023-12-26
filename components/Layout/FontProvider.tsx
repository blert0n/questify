import {
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
  raleway,
  robotoCondensed,
  robotoMono,
  spaceMono,
  alegreya,
} from "@/lib/fonts";
const FontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-alegreya: ${alegreya.style.fontFamily};
          --font-barlow: ${barlow.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
          --font-lato: ${lato.style.fontFamily};
          --font-lora: ${lora.style.fontFamily};
          --font-lobster: ${lobster.style.fontFamily};
          --font-merriweather: ${merriweather.style.fontFamily};
          --font-nunito: ${nunito.style.fontFamily};
          --font-open-sans: ${openSans.style.fontFamily};
          --font-oswald: ${oswald.style.fontFamily};
          --font-raleway: ${raleway.style.fontFamily};
          --font-roboto: ${roboto.style.fontFamily};
          --font-roboto-condensed: ${robotoCondensed.style.fontFamily};
          --font-roboto-mono: ${robotoMono.style.fontFamily};
          --font-space-mono: ${spaceMono.style.fontFamily};
        }
      `}</style>
      {children}
    </>
  );
};

export default FontProvider;

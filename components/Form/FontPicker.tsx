import { AppSelect, type AppSelectProps } from "../controlled-inputs/select";

const fonts = [
  {
    placeholder: <div className="font-alegreya">Alegreya</div>,
    value: "Alegreya",
  },
  {
    placeholder: <div className="font-barlow">Barlow</div>,
    value: "Barlow",
  },
  {
    placeholder: <div className="font-inter">Inter</div>,
    value: "Inter",
  },
  {
    placeholder: <div className="font-lato">Lato</div>,
    value: "Lato",
  },
  {
    placeholder: <div className="font-lobster">Lobster</div>,
    value: "Lobster",
  },
  {
    placeholder: <div className="font-lora">Lora</div>,
    value: "Lora",
  },
  {
    placeholder: <div className="font-merriweather">Merriweather</div>,
    value: "Merriweather",
  },
  {
    placeholder: <div className="font-nunito">Nunito</div>,
    value: "Nunito",
  },
  {
    placeholder: <div className="font-open-sans">Open Sans</div>,
    value: "Open Sans",
  },
  {
    placeholder: <div className="font-oswald">Oswald</div>,
    value: "Oswald",
  },
  {
    placeholder: <div className="font-raleway">Raleway</div>,
    value: "Raleway",
  },
  {
    placeholder: <div className="font-roboto">Roboto</div>,
    value: "Roboto",
  },
  {
    placeholder: <div className="font-roboto-condensed">Roboto Condensed</div>,
    value: "Roboto Condensed",
  },
  {
    placeholder: <div className="font-roboto-mono">Roboto Mono</div>,
    value: "Roboto Mono",
  },
  {
    placeholder: <div className="font-space-mono">Space Mono</div>,
    value: "Space Mono",
  },
];

export const FontPicker = (props: AppSelectProps) => {
  return <AppSelect {...props} options={fonts} placeholder="Font" />;
};

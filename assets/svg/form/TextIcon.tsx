import { SVGProps } from "react";

export const TextIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={props.width ?? 40}
      height={props.height ?? 40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={props.width ?? 40}
        height={props.height ?? 40}
        transform="translate(0.5)"
        fill="transparent"
      ></rect>
      <rect
        x="5.5"
        y="5"
        width="28.1667"
        height="26"
        rx="5"
        fill="url(#paint0_linear_3931_27589)"
      ></rect>
      <path
        d="M19.5831 12.0903V23.9085"
        stroke="white"
        stroke-width="1.1"
        stroke-linecap="round"
      ></path>
      <path
        d="M17.2198 24.4995H21.9471"
        stroke="white"
        stroke-width="1.1"
        stroke-linecap="round"
      ></path>
      <path
        d="M26.0833 14.4541V12.8631C26.0833 12.11 25.4727 11.4995 24.7196 11.4995H14.4469C13.6938 11.4995 13.0833 12.11 13.0833 12.8631V14.4541"
        stroke="white"
        stroke-width="1.1"
        stroke-linecap="round"
      ></path>
      <path
        d="M31.225 23.4474C31.7046 23.1706 32.2954 23.1706 32.775 23.4474L37.7202 26.3026C38.1998 26.5794 38.4952 27.0911 38.4952 27.6449V33.3551C38.4952 33.9089 38.1998 34.4206 37.7202 34.6974L32.775 37.5526C32.2954 37.8294 31.7046 37.8294 31.225 37.5526L26.2798 34.6974C25.8002 34.4206 25.5048 33.9089 25.5048 33.3551V27.6449C25.5048 27.0911 25.8002 26.5794 26.2798 26.3026L31.225 23.4474Z"
        fill="url(#paint1_linear_3931_27589)"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.6656 23.9616C33.6586 26.136 33.6003 27.3305 33.1217 28.2699C32.6423 29.2107 31.8774 29.9756 30.9366 30.455C29.867 31 28.4669 31 25.6666 31H25.5048V27.6449C25.5048 27.0911 25.8002 26.5794 26.2798 26.3025L31.225 23.4474C31.7045 23.1705 32.2954 23.1705 32.775 23.4474L33.6656 23.9616Z"
        fill="url(#paint2_linear_3931_27589)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27589"
          x1="19.5831"
          y1="8.73119"
          x2="18.744"
          y2="30.3369"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FECA0B"></stop>
          <stop offset="1" stop-color="#FFE47C"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27589"
          x1="32"
          y1="23"
          x2="32"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27589"
          x1="32"
          y1="29.5"
          x2="28"
          y2="25.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#3968EE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

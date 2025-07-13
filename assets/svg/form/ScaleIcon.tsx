import { SVGProps } from "react";

export const ScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={props.width ?? 40}
      height={props.height ?? 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12C4 9.19974 4 7.79961 4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.79961 4 9.19974 4 12 4H27C29.8003 4 31.2004 4 32.27 4.54497C33.2108 5.02433 33.9757 5.78924 34.455 6.73005C35 7.79961 35 9.19974 35 12V22V23C35 25.8003 35 27.2004 34.455 28.27C33.9757 29.2108 33.2108 29.9757 32.27 30.455C31.2004 31 29.8003 31 27 31H24.0208H12C9.19974 31 7.79961 31 6.73005 30.455C5.78924 29.9757 5.02433 29.2108 4.54497 28.27C4 27.2004 4 25.8003 4 23V12Z"
        fill="url(#paint0_linear_4219_29611)"
      ></path>
      <path
        d="M10 11.125H13.1875"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <path
        d="M10 23.875H13.1875"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <path
        d="M21.6875 11.125L29.125 11.125"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <path
        d="M21.6875 23.875L29.125 23.875"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <path d="M10 17.5H22.75" stroke="#F1EBFC" strokeLinecap="round"></path>
      <rect
        x="15.3125"
        y="9"
        width="4.25"
        height="4.25"
        rx="1.6"
        stroke="#F1EBFC"
      ></rect>
      <rect
        x="15.3125"
        y="21.75"
        width="4.25"
        height="4.25"
        rx="1.6"
        stroke="#F1EBFC"
      ></rect>
      <rect
        x="24.875"
        y="15.375"
        width="4.25"
        height="4.25"
        rx="1.6"
        stroke="#F1EBFC"
      ></rect>
      <path
        d="M31.225 25.4474C31.7046 25.1706 32.2954 25.1706 32.775 25.4474L36.4212 27.5526C36.9007 27.8294 37.1962 28.3411 37.1962 28.8949V33.1051C37.1962 33.6589 36.9007 34.1706 36.4212 34.4474L32.775 36.5526C32.2954 36.8294 31.7046 36.8294 31.225 36.5526L27.5788 34.4474C27.0993 34.1706 26.8038 33.6589 26.8038 33.1051V28.8949C26.8038 28.3411 27.0993 27.8294 27.5788 27.5526L31.225 25.4474Z"
        fill="url(#paint1_linear_4219_29611)"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.8933 26.6705C34.8162 27.3144 34.6835 27.8213 34.4549 28.2699C33.9755 29.2107 33.2106 29.9756 32.2698 30.455C31.2003 31 29.8001 31 26.9999 31H26.8037V28.8949C26.8037 28.3411 27.0991 27.8294 27.5787 27.5525L31.2249 25.4474C31.7044 25.1705 32.2953 25.1705 32.7749 25.4474L34.8933 26.6705Z"
        fill="url(#paint2_linear_4219_29611)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_4219_29611"
          x1="19.4998"
          y1="7.8747"
          x2="19.4998"
          y2="23.8621"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F476D0"></stop>
          <stop offset="1" stop-color="#F7A1DF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_4219_29611"
          x1="32"
          y1="25"
          x2="32"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_4219_29611"
          x1="29.4999"
          y1="26"
          x2="31.9999"
          y2="30.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#3968EE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

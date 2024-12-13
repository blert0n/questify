import { SVGProps } from "react";

export const SingleChoiceIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <circle
        cx="20.5"
        cy="20"
        r="13"
        fill="url(#paint0_linear_3931_27618)"
      ></circle>
      <path
        d="M30.225 22.4474C30.7046 22.1706 31.2954 22.1706 31.775 22.4474L36.7202 25.3026C37.1998 25.5794 37.4952 26.0911 37.4952 26.6449V32.3551C37.4952 32.9089 37.1998 33.4206 36.7202 33.6974L31.775 36.5526C31.2954 36.8294 30.7046 36.8294 30.225 36.5526L25.2798 33.6974C24.8002 33.4206 24.5048 32.9089 24.5048 32.3551V26.6449C24.5048 26.0911 24.8002 25.5794 25.2798 25.3026L30.225 22.4474Z"
        fill="url(#paint1_linear_3931_27618)"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.1 23.2124C31.9991 27.5434 28.7239 31.0066 24.5048 32.3714C24.5048 32.3659 24.5048 32.3605 24.5048 32.3551V26.6449C24.5048 26.0911 24.8002 25.5794 25.2798 25.3025L30.225 22.4474C30.7045 22.1705 31.2954 22.1705 31.775 22.4474L33.1 23.2124Z"
        fill="url(#paint2_linear_3931_27618)"
      ></path>
      <circle
        cx="20.5"
        cy="20"
        r="3.4"
        stroke="#F1EBFC"
        stroke-width="1.2"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27618"
          x1="20.4998"
          y1="10.7312"
          x2="20.4998"
          y2="26.1265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F476D0"></stop>
          <stop offset="1" stop-color="#F7A1DF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27618"
          x1="31"
          y1="22"
          x2="31"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27618"
          x1="33"
          y1="31"
          x2="25"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#4873EF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

import { SVGProps } from "react";

export const DropdownIcon = (props: SVGProps<SVGSVGElement>) => {
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
        x="6.5"
        y="5"
        width="27.17"
        height="26"
        rx="5"
        fill="url(#paint0_linear_3931_27605)"
      ></rect>
      <path
        d="M14.5 15L20.5 21L26.5 15"
        stroke="#F1EBFC"
        stroke-width="1.1"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <rect
        x="26.5"
        y="25"
        width="12"
        height="12"
        rx="6"
        fill="url(#paint1_linear_3931_27605)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.6567 25.1114C33.624 26.5855 33.5118 27.511 33.125 28.27C32.6457 29.2108 31.8808 29.9757 30.94 30.455C29.9817 30.9433 28.7581 30.9941 26.5 30.9994C26.5003 27.686 29.1865 25 32.5 25C32.8957 25 33.2824 25.0383 33.6567 25.1114Z"
        fill="url(#paint2_linear_3931_27605)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27605"
          x1="20.0146"
          y1="12.377"
          x2="20.0146"
          y2="27.8962"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#69D895"></stop>
          <stop offset="1" stop-color="#A2E7BD"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27605"
          x1="32.5"
          y1="25"
          x2="32.5"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27605"
          x1="32"
          y1="30"
          x2="29.5"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#3968EE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

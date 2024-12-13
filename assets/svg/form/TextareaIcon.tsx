import { SVGProps } from "react";

export const TextareaIcon = (props: SVGProps<SVGSVGElement>) => {
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
        x="4.5"
        y="8"
        width="31.25"
        height="25"
        rx="5"
        fill="url(#paint0_linear_3931_27575)"
      ></rect>
      <path
        d="M9.70837 15.2915H20.125"
        stroke="#F1EBFC"
        stroke-linecap="round"
      ></path>
      <path
        d="M9.70837 20.5H30.5417"
        stroke="#F1EBFC"
        stroke-linecap="round"
      ></path>
      <path
        d="M9.70837 25.7085H30.5417"
        stroke="#F1EBFC"
        stroke-linecap="round"
      ></path>
      <rect
        x="25.5"
        y="2"
        width="12"
        height="12"
        rx="6"
        fill="url(#paint1_linear_3931_27575)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.6445 12.3386C34.5673 13.3679 33.1075 14 31.5 14C28.1863 14 25.5 11.3137 25.5 8H27.75C30.5503 8 31.9504 8 33.02 8.54497C33.9608 9.02433 34.7257 9.78924 35.205 10.73C35.4347 11.1808 35.5676 11.6903 35.6445 12.3386Z"
        fill="url(#paint2_linear_3931_27575)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27575"
          x1="20.125"
          y1="8"
          x2="20.125"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1FD9D5"></stop>
          <stop offset="1" stop-color="#A1F2F0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27575"
          x1="31.5"
          y1="2"
          x2="31.5"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27575"
          x1="34.5"
          y1="6"
          x2="30.5"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#3968EE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

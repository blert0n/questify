import { SVGProps } from "react";

export const ShortInputIcon = (props: SVGProps<SVGSVGElement>) => {
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
        x="3.5"
        y="13"
        width="34"
        height="22"
        rx="4"
        fill="url(#paint0_linear_3931_27563)"
      ></rect>
      <path
        d="M9.16663 18.667H17.1"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <path
        d="M9.16663 23.2002H25.0333"
        stroke="#F1EBFC"
        strokeLinecap="round"
      ></path>
      <rect
        x="24.5"
        y="5"
        width="13"
        height="13"
        rx="6.5"
        fill="url(#paint1_linear_3931_27563)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.7084 14.6113C35.6056 16.6304 33.4628 18 31 18C27.9264 18 25.3511 15.8667 24.674 13H31.1C33.3402 13 34.4603 13 35.316 13.436C35.867 13.7168 36.3427 14.12 36.7084 14.6113Z"
        fill="url(#paint2_linear_3931_27563)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27563"
          x1="9.57143"
          y1="13.3778"
          x2="20.3425"
          y2="32.2621"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E23F56"></stop>
          <stop offset="1" stop-color="#FA9CAA"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27563"
          x1="31"
          y1="5"
          x2="31"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27563"
          x1="34"
          y1="9"
          x2="32"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#162DE9"></stop>
          <stop offset="1" stop-color="#4370EF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

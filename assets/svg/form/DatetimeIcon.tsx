import { SVGProps } from "react";

export const DatetimeIcon = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        d="M7.5 14.8696C7.5 12.0694 7.5 10.6692 8.04497 9.59968C8.52433 8.65887 9.28924 7.89396 10.23 7.4146C11.2996 6.86963 12.6997 6.86963 15.5 6.86963H24.6302C27.4305 6.86963 28.8306 6.86963 29.9001 7.4146C30.841 7.89396 31.6059 8.65887 32.0852 9.59968C32.6302 10.6692 32.6302 12.0694 32.6302 14.8696V23.6231V23.9998C32.6302 26.8001 32.6302 28.2002 32.0852 29.2698C31.6059 30.2106 30.841 30.9755 29.9001 31.4549C28.8306 31.9998 27.4305 31.9998 24.6302 31.9998H23.7299H15.5C12.6997 31.9998 11.2996 31.9998 10.23 31.4549C9.28924 30.9755 8.52433 30.2106 8.04497 29.2698C7.5 28.2002 7.5 26.8001 7.5 23.9998V14.8696Z"
        fill="url(#paint0_linear_3931_27537)"
      ></path>
      <path
        d="M14.5117 5V9.48"
        stroke="url(#paint1_linear_3931_27537)"
        stroke-width="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M25.5117 5V9.48"
        stroke="url(#paint2_linear_3931_27537)"
        stroke-width="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M11.5 14H20.5H29.5"
        stroke="#F1EBFC"
        stroke-width="1.05"
        strokeLinecap="round"
        stroke-linejoin="round"
      ></path>
      <rect
        x="25.5"
        y="25"
        width="12"
        height="12"
        rx="2"
        fill="url(#paint3_linear_3931_27537)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.6291 25C32.6214 27.1501 32.5611 28.336 32.0852 29.27C31.6059 30.2108 30.841 30.9757 29.9001 31.455C28.9475 31.9404 27.7327 31.9935 25.5 31.9993V27C25.5 25.8954 26.3954 25 27.5 25H32.6291Z"
        fill="url(#paint4_linear_3931_27537)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27537"
          x1="20"
          y1="13.9998"
          x2="20"
          y2="28.9998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#69D895"></stop>
          <stop offset="1" stop-color="#A2E7BD"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27537"
          x1="15.0117"
          y1="5.64291"
          x2="15.0117"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6BDA97"></stop>
          <stop offset="1" stop-color="#7ADDA1"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27537"
          x1="26.0117"
          y1="5.64291"
          x2="26.0117"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6AD996"></stop>
          <stop offset="1" stop-color="#8BE1AD"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_3931_27537"
          x1="31.5"
          y1="25"
          x2="31.5"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_3931_27537"
          x1="32"
          y1="32.5"
          x2="27.5"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#3968EE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

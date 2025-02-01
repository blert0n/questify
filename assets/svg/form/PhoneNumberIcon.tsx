import { SVGProps } from "react";

export const PhoneNumberIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? 41}
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8592 20.6464C24.318 26.1037 25.5563 19.7902 29.0319 23.2634C32.3827 26.6132 34.3085 27.2844 30.0632 31.5286C29.5314 31.9559 26.1527 37.0974 14.2789 25.2269C2.40366 13.3549 7.54217 9.97282 7.96964 9.44119C12.2253 5.18526 12.8849 7.12231 16.2356 10.4721C19.7112 13.9468 13.4005 15.1892 18.8592 20.6464Z"
        fill="url(#paint0_linear_3931_27526)"
      ></path>
      <rect
        x="20.5"
        y="12"
        width="14.9195"
        height="14.9195"
        rx="7.45975"
        fill="url(#paint1_linear_3931_27526)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.106 22.4097C22.8396 23.3511 24.0517 22.9265 25.1622 22.5374C26.3877 22.1081 27.4895 21.7221 29.0319 23.2634C29.4437 23.6751 29.8341 24.0464 30.1941 24.3888C30.7943 24.9598 31.3103 25.4505 31.701 25.9149C30.6012 26.5537 29.3231 26.9195 27.9597 26.9195C24.8876 26.9195 22.2493 25.0625 21.106 22.4097Z"
        fill="url(#paint2_linear_3931_27526)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_3931_27526"
          x1="19.4998"
          y1="10.7312"
          x2="19.4998"
          y2="26.1265"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F476D0"></stop>
          <stop offset="1" stop-color="#F7A1DF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_3931_27526"
          x1="27.9597"
          y1="12"
          x2="27.9597"
          y2="26.9195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#256AF2"></stop>
          <stop offset="1" stop-color="#6CB5FC"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_3931_27526"
          x1="28.4999"
          y1="19"
          x2="26.9999"
          y2="26.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D34EA"></stop>
          <stop offset="1" stop-color="#4370EF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

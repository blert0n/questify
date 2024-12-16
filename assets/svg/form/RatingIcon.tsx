import { SVGProps } from "react";

export const RatingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={props.width ?? 40}
      height={props.height ?? 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(5, 0)">
        <path
          d="M20.8623 9.18887C21.753 7.44346 24.247 7.44346 25.1377 9.18886L26.9416 12.7235C27.2903 13.4069 27.9447 13.8823 28.7023 14.0028L32.6214 14.6261C34.5566 14.9339 35.3273 17.3058 33.9426 18.6923L31.1384 21.5001C30.5962 22.0429 30.3463 22.8122 30.4658 23.57L31.0841 27.4899C31.3894 29.4255 29.3717 30.8914 27.6252 30.0029L24.0882 28.2036C23.4044 27.8557 22.5956 27.8557 21.9118 28.2036L18.3748 30.0029C16.6283 30.8914 14.6106 29.4255 14.9159 27.4899L15.5342 23.57C15.6537 22.8122 15.4038 22.0429 14.8616 21.5001L12.0574 18.6923C10.6727 17.3058 11.4434 14.9339 13.3786 14.6261L17.2977 14.0028C18.0553 13.8823 18.7097 13.4069 19.0584 12.7235L20.8623 9.18887Z"
          fill="url(#paint0_linear_4219_29592)"
        ></path>
        <path
          d="M8.7517 4.97103C6.8523 4.47942 5 5.91334 5 7.87533L5 32.748C5 34.8212 7.05267 36.2695 9.00585 35.5744L18.0058 32.3714C19.2015 31.946 20 30.8142 20 29.5451L20 10.2047C20 8.8374 19.0754 7.64305 17.7517 7.30044L8.7517 4.97103Z"
          fill="url(#paint1_linear_4219_29592)"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 10.8784L19.0584 12.7234C18.7097 13.4068 18.0553 13.8822 17.2976 14.0027L13.3785 14.626C11.4433 14.9338 10.6726 17.3057 12.0574 18.6922L14.8616 21.5C15.4037 22.0428 15.6537 22.8121 15.5342 23.5699L14.9159 27.4898C14.6106 29.4254 16.6282 30.8913 18.3748 30.0028L20 29.1761L20 10.8784Z"
          fill="url(#paint2_linear_4219_29592)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_4219_29592"
            x1="22.9223"
            y1="13.5119"
            x2="22.9223"
            y2="31.4187"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#69D895"></stop>
            <stop offset="1" stop-color="#A2E7BD"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_4219_29592"
            x1="5"
            y1="20.5"
            x2="20"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#256AF2"></stop>
            <stop offset="1" stop-color="#6CB5FC"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_4219_29592"
            x1="10.9999"
            y1="19.9999"
            x2="19.9999"
            y2="19.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1D34EA"></stop>
            <stop offset="1" stop-color="#3968EE"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};

import * as React from "react";

export interface IconType {
  color?: string;
}

interface IFlagIconProps extends IconType {
  width?: string;
  height?: string;
}

const FlagIcon: React.FunctionComponent<IFlagIconProps> = ({
  color = "#5C5C5C",
  width = 32,
  height = 32,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.8667 2.6665V29.3332"
        stroke="#7E70FF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.8667 5.3335H21.8C25.4 5.3335 26.2 7.3335 23.6667 9.86683L22.0667 11.4668C21 12.5335 21 14.2668 22.0667 15.2002L23.6667 16.8002C26.2 19.3335 25.2667 21.3335 21.8 21.3335H6.8667"
        stroke="#333333"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FlagIcon;

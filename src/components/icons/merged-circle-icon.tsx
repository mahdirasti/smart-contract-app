import * as React from "react";

export interface IconType {
  color?: string;
}

interface IMergedCircleIconProps extends IconType {
  width?: string;
  height?: string;
}

const MergedCircleIcon: React.FunctionComponent<IMergedCircleIconProps> = ({
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
        d="M19.9998 21.3332C25.1545 21.3332 29.3332 17.1545 29.3332 11.9998C29.3332 6.84518 25.1545 2.6665 19.9998 2.6665C14.8452 2.6665 10.6665 6.84518 10.6665 11.9998C10.6665 17.1545 14.8452 21.3332 19.9998 21.3332Z"
        stroke="#7E70FF"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M11.9998 29.3332C17.1545 29.3332 21.3332 25.1545 21.3332 19.9998C21.3332 14.8452 17.1545 10.6665 11.9998 10.6665C6.84518 10.6665 2.6665 14.8452 2.6665 19.9998C2.6665 25.1545 6.84518 29.3332 11.9998 29.3332Z"
        stroke="#333333"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default MergedCircleIcon;

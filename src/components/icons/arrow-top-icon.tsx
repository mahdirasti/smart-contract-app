import * as React from "react";

export interface IconType {
  color?: string;
}

interface IArrowTopIconProps extends IconType {}

const ArrowTopIcon: React.FunctionComponent<IArrowTopIconProps> = ({
  color = "#6FCF97",
}) => {
  return (
    <svg
      width="11"
      height="19"
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9075 4.45L9.63874 5.525L6.43665 2.875L6.43665 19H4.62415L4.62415 2.85L1.42207 5.5L0.15332 4.45L5.5304 0L10.9075 4.45Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowTopIcon;

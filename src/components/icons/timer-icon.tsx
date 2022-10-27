import * as React from "react";

import { IconType } from "./types";

interface ITimerIconProps extends IconType {}

const TimerIcon: React.FunctionComponent<ITimerIconProps> = ({
  color = "#7B61FF",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5646 13.25C21.5646 18.08 17.6474 22 12.8209 22C7.99441 22 4.07724 18.08 4.07724 13.25C4.07724 8.42 7.99441 4.5 12.8209 4.5C17.6474 4.5 21.5646 8.42 21.5646 13.25Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8209 8V13"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.82309 2H15.8188"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TimerIcon;

import * as React from "react"

import { IconType } from "./types"

interface IMonitorIconProps extends IconType {}

const MonitorIcon: React.FunctionComponent<IMonitorIconProps> = ({
  color = "#7B61FF",
  width = 22,
  height = 22
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
        d="M7.40353 2H18.5055C22.0629 2 22.9523 2.89 22.9523 6.44V12.77C22.9523 16.33 22.0629 17.21 18.5155 17.21H7.40353C3.85609 17.22 2.96674 16.33 2.96674 12.78V6.44C2.96674 2.89 3.85609 2 7.40353 2Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9595 17.22V22"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.96674 13H22.9523"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.46277 22H17.4563"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default MonitorIcon

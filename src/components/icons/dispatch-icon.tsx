import * as React from "react"

export interface IconType {
  color?: string
}

interface IDispatchIconProps extends IconType {}

const DispatchIcon: React.FunctionComponent<IDispatchIconProps> = ({
  color = "#5C5C5C"
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.32263 19.8781L19.7516 13.1791C20.7496 12.7161 20.7496 11.2821 19.7516 10.8191L5.32263 4.12205C4.28763 3.64205 3.19263 4.66005 3.57963 5.74305L5.81263 11.9971L3.57963 18.2581C3.19263 19.3401 4.28763 20.3581 5.32263 19.8781Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.81055 12H20.5005"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default DispatchIcon

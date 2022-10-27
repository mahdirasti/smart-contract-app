import * as React from "react"

export interface IconType {
  color?: string
}

interface IShieldIconProps extends IconType {}

const ShieldIcon: React.FunctionComponent<IShieldIconProps> = ({
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
        d="M11.7346 21.855C14.0696 21.855 19.4066 19.533 19.4066 13.128C19.4066 6.724 19.6846 6.223 19.0696 5.607C18.4536 4.991 15.2436 3 11.7346 3C8.22557 3 5.01557 4.991 4.40057 5.607C3.78457 6.223 4.06257 6.724 4.06257 13.128C4.06257 19.533 9.40057 21.855 11.7346 21.855Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.13599 12.1241L11.028 14.0191L14.926 10.1191"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default ShieldIcon

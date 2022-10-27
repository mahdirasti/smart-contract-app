import * as React from "react"

export interface IconType {
  color?: string
}

interface IPrinterIconProps extends IconType {}

const ArrowDownIcon: React.FunctionComponent<IPrinterIconProps> = ({
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
        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
        fill="#1E1E1E"
      />
    </svg>
  )
}

export default ArrowDownIcon

import * as React from "react"

export interface IconType {
  color?: string
}

interface IPrinterIconProps extends IconType {}

const PrinterIcon: React.FunctionComponent<IPrinterIconProps> = ({
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
        d="M5 16C3.34 16 2 14.66 2 13L2 7L6 7L6 3L18 3L18 7L22 7L22 13C22 14.66 20.66 16 19 16L18 16L18 21L6 21L6 16L5 16ZM16 19L16 16L8 16L8 19L16 19ZM8 5L8 9L16 9L16 5L8 5ZM6 9L4 9L4 13C4 13.55 4.45 14 5 14L19 14C19.55 14 20 13.55 20 13L20 9L18 9L18 11L6 11L6 9ZM5 12.5C5 11.95 5.45 11.5 6 11.5C6.55 11.5 7 11.95 7 12.5C7 13.05 6.55 13.5 6 13.5C5.45 13.5 5 13.05 5 12.5Z"
        fill="black"
        fill-opacity="0.6"
      />
    </svg>
  )
}

export default PrinterIcon

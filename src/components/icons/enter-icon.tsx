import * as React from "react"

export interface IconType {
  color?: string
}

interface IPrinterIconProps extends IconType {}

const EnterIcon: React.FunctionComponent<IPrinterIconProps> = ({
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
        d="M9.41867 6.5906L10.9333 8.02013L8.08533 11.0403L17.8667 11.0403V5H20V13.0537L8.08533 13.0537L10.9333 15.5705L9.41867 17L4 12.047L9.41867 6.5906Z"
        fill={color}
      />
    </svg>
  )
}

export default EnterIcon

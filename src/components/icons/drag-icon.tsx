import * as React from "react"

export interface IconType {
  color?: string
}

interface IPrinterIconProps extends IconType {}

const DragIcon: React.FunctionComponent<IPrinterIconProps> = ({
  color = "#5C5C5C"
}) => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9987 7.3335V5.3335L14.6654 8.00016L11.9987 10.6668V8.66683H8.66536V12.0002H10.6654L7.9987 14.6668L5.33203 12.0002H7.33203V8.66683H3.9987L3.9987 10.6668L1.33203 8.00016L3.9987 5.3335L3.9987 7.3335L7.33203 7.3335L7.33203 4.00016L5.33203 4.00016L7.9987 1.3335L10.6654 4.00016L8.66536 4.00016V7.3335H11.9987Z"
        fill={color}
      />
    </svg>
  )
}

export default DragIcon

import * as React from "react"

export interface IconType {
  color?: string
}

interface IDirectionBoxIconProps extends IconType {
  width?: string
  height?: string
}

const DirectionBoxIcon: React.FunctionComponent<IDirectionBoxIconProps> = ({
  color = "#D4D4D4",
  width = 20,
  height = 20
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66667 8C2 8 2 9.19333 2 10.6667V11.3333C2 13.1733 2 14.6667 5.33333 14.6667H10.6667C13.3333 14.6667 14 13.1733 14 11.3333V10.6667C14 9.19333 14 8 11.3333 8C10.6667 8 10.48 8.14 10.1333 8.4L9.45333 9.12C8.66667 9.96 7.33333 9.96 6.54 9.12L5.86667 8.4C5.52 8.14 5.33333 8 4.66667 8Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6668 8.00004V4.00004C12.6668 2.52671 12.6668 1.33337 10.0002 1.33337H6.00016C3.3335 1.33337 3.3335 2.52671 3.3335 4.00004V8.00004"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.0332 6.15332H9.2532"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.47998 4.15332H9.81331"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default DirectionBoxIcon

import * as React from "react"

export interface IconType {
  color?: string
}

interface ICeloIconProps extends IconType {
  width?: string
  height?: string
}

const CeloIcon: React.FunctionComponent<ICeloIconProps> = ({
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
        d="M10.0002 10.6666C12.5775 10.6666 14.6668 8.57731 14.6668 5.99998C14.6668 3.42265 12.5775 1.33331 10.0002 1.33331C7.42283 1.33331 5.3335 3.42265 5.3335 5.99998C5.3335 8.57731 7.42283 10.6666 10.0002 10.6666Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M6.00016 14.6666C8.57749 14.6666 10.6668 12.5773 10.6668 9.99998C10.6668 7.42265 8.57749 5.33331 6.00016 5.33331C3.42283 5.33331 1.3335 7.42265 1.3335 9.99998C1.3335 12.5773 3.42283 14.6666 6.00016 14.6666Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  )
}

export default CeloIcon

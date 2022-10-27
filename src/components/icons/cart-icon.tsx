import * as React from "react"

export interface IconType {
  color?: string
}

interface ICartIconProps extends IconType {}

const CartIcon: React.FunctionComponent<ICartIconProps> = ({
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
        d="M18.0632 7H5.93524C5.40824 7 4.97224 7.408 4.93724 7.933L4.14124 19.867C4.06424 21.021 4.98024 22 6.13724 22H17.8612C19.0182 22 19.9342 21.021 19.8572 19.867L19.0612 7.933C19.0262 7.408 18.5902 7 18.0632 7Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.001 9V5V5V5C15.001 3.343 13.658 2 12.001 2H12C10.343 2 9 3.343 9 5V5V5V9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CartIcon

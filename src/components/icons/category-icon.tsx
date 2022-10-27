import * as React from "react"

export interface IconType {
  color?: string
}

interface ICategoryIconProps extends IconType {}

const CategoryIcon: React.FunctionComponent<ICategoryIconProps> = ({
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
        d="M21.001 6.6738C21.001 8.7024 19.3558 10.3476 17.3272 10.3476C15.2986 10.3476 13.6543 8.7024 13.6543 6.6738C13.6543 4.6452 15.2986 3 17.3272 3C19.3558 3 21.001 4.6452 21.001 6.6738Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.001 17.2622C21.001 19.2908 19.3558 20.9351 17.3272 20.9351C15.2986 20.9351 13.6543 19.2908 13.6543 17.2622C13.6543 15.2336 15.2986 13.5884 17.3272 13.5884C19.3558 13.5884 21.001 15.2336 21.001 17.2622Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3467 17.2622C10.3467 19.2908 8.7024 20.9351 6.6729 20.9351C4.6452 20.9351 3 19.2908 3 17.2622C3 15.2336 4.6452 13.5884 6.6729 13.5884C8.7024 13.5884 10.3467 15.2336 10.3467 17.2622Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CategoryIcon

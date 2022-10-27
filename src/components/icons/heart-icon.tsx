import * as React from "react"

export interface IconType {
  color?: string
}

interface IHeartIconProps extends IconType {}

const HeartIcon: React.FunctionComponent<IHeartIconProps> = ({
  color = "#5C5C5C"
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7 1C16.87 1 19 3.98 19 6.76C19 12.39 10.16 17 10 17C9.84 17 1 12.39 1 6.76C1 3.98 3.13 1 6.3 1C8.12 1 9.31 1.91 10 2.71C10.69 1.91 11.88 1 13.7 1Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default HeartIcon

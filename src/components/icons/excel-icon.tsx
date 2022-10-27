import * as React from "react"

export interface IconType {
  color?: string
}

interface IExcelIconProps extends IconType {}

const ExcelIcon: React.FunctionComponent<IExcelIconProps> = ({
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
      <mask
        id="mask0_2121_724"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_2121_724)">
        <path
          d="M11.25 18.375H12.75V13.95L14.6 15.8L15.65 14.725L12 11.075L8.35 14.725L9.425 15.775L11.25 13.95V18.375ZM17.7 21.5H6.3C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7L4.5 4.3C4.5 3.8 4.675 3.375 5.025 3.025C5.375 2.675 5.8 2.5 6.3 2.5L14.25 2.5L19.5 7.75V19.7C19.5 20.2 19.325 20.625 18.975 20.975C18.625 21.325 18.2 21.5 17.7 21.5ZM13.5 8.5V4L6.3 4C6.23333 4 6.16667 4.03333 6.1 4.1C6.03333 4.16667 6 4.23333 6 4.3L6 19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20H17.7C17.7667 20 17.8333 19.9667 17.9 19.9C17.9667 19.8333 18 19.7667 18 19.7V8.5L13.5 8.5ZM6 4L6 19.7L6 4.3C6 4.23333 6 4.16667 6 4.1C6 4.03333 6 4 6 4Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default ExcelIcon

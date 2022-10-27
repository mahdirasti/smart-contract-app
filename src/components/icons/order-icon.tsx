import * as React from "react"

export interface IconType {
  color?: string
}

interface IOrderIconProps extends IconType {}

const OrderIcon: React.FunctionComponent<IOrderIconProps> = ({
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
        d="M16.4139 7.32005C16.4139 4.93405 14.4799 3.00005 12.0939 3.00005C9.70788 2.98905 7.76588 4.91505 7.75488 7.30105V7.32005"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.023 11.8242H14.977"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19195 11.8242H9.14595"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0842 21.9399C5.57624 21.9399 4.82724 19.8899 3.36624 14.4729C1.90024 9.03886 4.84124 7.00586 12.0842 7.00586C19.3272 7.00586 22.2682 9.03886 20.8022 14.4729C19.3412 19.8899 18.5922 21.9399 12.0842 21.9399Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default OrderIcon

import * as React from "react"

export interface IconType {
  color?: string
}

interface ICustomerIconProps extends IconType {}

const CustomerIcon: React.FunctionComponent<ICustomerIconProps> = ({
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
        d="M12.2227 20.6185C8.98367 20.6185 6.21667 20.1285 6.21667 18.1665C6.21667 16.2045 8.96567 14.4965 12.2227 14.4965C15.4617 14.4965 18.2287 16.1885 18.2287 18.1495C18.2287 20.1105 15.4797 20.6185 12.2227 20.6185Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2227 11.699C14.3487 11.699 16.0727 9.976 16.0727 7.85C16.0727 5.724 14.3487 4 12.2227 4C10.0967 4 8.3727 5.724 8.3727 7.85C8.3667 9.968 10.0767 11.692 12.1957 11.699H12.2227Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6124 10.6419C19.8494 10.3109 20.7614 9.1829 20.7614 7.8399C20.7614 6.4389 19.7684 5.2689 18.4464 4.9989"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.1934 13.7947C20.9474 13.7947 22.4454 14.9837 22.4454 16.0457C22.4454 16.6707 21.9284 17.3517 21.1444 17.5357"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83402 10.6419C4.59602 10.3109 3.68402 9.1829 3.68402 7.8399C3.68402 6.4389 4.67802 5.2689 5.99902 4.9989"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.252 13.7947C3.498 13.7947 2 14.9837 2 16.0457C2 16.6707 2.517 17.3517 3.302 17.5357"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default CustomerIcon

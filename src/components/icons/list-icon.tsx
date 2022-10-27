import * as React from "react";

export interface IconType {
  color?: string;
}

interface IListIconProps extends IconType {}

const ListIcon: React.FunctionComponent<IListIconProps> = ({
  color = "#5C5C5C",
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
        d="M20.4972 5C20.2221 5 19.997 5.22509 20 5.50021C20 5.77532 20.2251 6.00042 20.5002 6.00042C20.7754 6.00042 21.0004 5.77532 21.0004 5.50021C21.0004 5.22509 20.7754 5 20.4972 5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.4972 9C17.2221 9 16.997 9.22509 17 9.50021C17 9.77532 17.2251 10.0004 17.5002 10.0004C17.7754 10.0004 18.0004 9.77532 18.0004 9.50021C18.0004 9.22509 17.7754 9 17.4972 9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4972 13C20.2221 13 19.997 13.2251 20 13.5002C20 13.7753 20.2251 14.0004 20.5002 14.0004C20.7754 14.0004 21.0004 13.7753 21.0004 13.5002C21.0004 13.2251 20.7754 13 20.4972 13"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.4972 17C20.2221 17 19.997 17.2251 20 17.5002C20 17.7753 20.2251 18.0004 20.5002 18.0004C20.7754 18.0004 21.0004 17.7753 21.0004 17.5002C21.0004 17.2251 20.7754 17 20.4972 17"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 9.5H14"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 5.5H17"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 13.5H17"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 17.5H17"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ListIcon;

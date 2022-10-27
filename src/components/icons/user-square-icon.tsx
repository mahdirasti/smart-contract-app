import * as React from "react";

export interface IconType {
  color?: string;
}

interface IUserSquareIconProps extends IconType {
  width?: string;
  height?: string;
}

const UserSquareIcon: React.FunctionComponent<IUserSquareIconProps> = ({
  color = "#5C5C5C",
  width = 32,
  height = 32,
}) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1868 28.8265C23.0135 29.1732 21.6268 29.3332 20.0001 29.3332H12.0001C10.3735 29.3332 8.98681 29.1732 7.81348 28.8265C8.10681 25.3598 11.6668 22.6265 16.0001 22.6265C20.3335 22.6265 23.8935 25.3598 24.1868 28.8265Z"
        stroke="#7E70FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9998 2.6665H11.9998C5.33317 2.6665 2.6665 5.33317 2.6665 11.9998V19.9998C2.6665 25.0398 4.1865 27.7998 7.81317 28.8265C8.1065 25.3598 11.6665 22.6265 15.9998 22.6265C20.3332 22.6265 23.8932 25.3598 24.1865 28.8265C27.8132 27.7998 29.3332 25.0398 29.3332 19.9998V11.9998C29.3332 5.33317 26.6665 2.6665 19.9998 2.6665ZM15.9998 18.8931C13.3598 18.8931 11.2265 16.7465 11.2265 14.1065C11.2265 11.4665 13.3598 9.33317 15.9998 9.33317C18.6398 9.33317 20.7732 11.4665 20.7732 14.1065C20.7732 16.7465 18.6398 18.8931 15.9998 18.8931Z"
        stroke="#7E70FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.7732 14.1069C20.7732 16.7469 18.6399 18.8935 15.9999 18.8935C13.3599 18.8935 11.2266 16.7469 11.2266 14.1069C11.2266 11.4669 13.3599 9.3335 15.9999 9.3335C18.6399 9.3335 20.7732 11.4669 20.7732 14.1069Z"
        stroke="#333333"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserSquareIcon;

import * as React from "react";

import { IconType } from "./types";

interface IEthereumIconProps extends IconType {}

const EthereumIcon: React.FunctionComponent<IEthereumIconProps> = ({
  color = "#7B61FF",
  width = 26,
  height = 26,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3413 3.05006L7.60396 7.71006C6.75457 8.77006 7.05436 10.1301 8.26348 10.7301L11.9908 12.6001C12.4804 12.8401 13.2799 12.8401 13.7695 12.6001L17.4968 10.7301C18.7059 10.1201 19.0057 8.76006 18.1563 7.71006L14.429 3.05006C13.5896 1.98006 12.1906 1.98006 11.3413 3.05006Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8901 2.30005V7.56005"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.69318 10.7101L12.8901 7.56006L17.0871 10.7101"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.6625 14.4301L11.2713 15.1501C12.3006 15.6101 13.4797 15.6101 14.519 15.1501L16.1278 14.4301C17.5668 13.7901 18.8958 15.5301 17.8965 16.7501L14.439 20.9801C13.5897 22.0201 12.2007 22.0201 11.3413 20.9801L7.89378 16.7501C6.88451 15.5301 8.21355 13.7901 9.6625 14.4301Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EthereumIcon;

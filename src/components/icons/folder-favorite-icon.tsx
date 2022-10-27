import * as React from "react"

export interface IconType {
  color?: string
}

interface IFolderFavoiteIconProps extends IconType {
  width?: string
  height?: string
}

const FolderFavoiteIcon: React.FunctionComponent<IFolderFavoiteIconProps> = ({
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
        d="M6.13331 9.85335L7.85331 11.36C7.93331 11.4333 8.05998 11.4333 8.13998 11.36L9.85998 9.85335C10.3066 9.46001 10.3666 8.79335 9.99331 8.32668C9.61998 7.86001 8.93998 7.77335 8.46665 8.13335L7.99998 8.49335L7.52665 8.14001C7.04665 7.78001 6.37331 7.86668 5.99998 8.33335C5.62665 8.79335 5.68665 9.46668 6.13331 9.85335Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6668 7.33334V11.3333C14.6668 14 14.0002 14.6667 11.3335 14.6667H4.66683C2.00016 14.6667 1.3335 14 1.3335 11.3333V4.66668C1.3335 2.00001 2.00016 1.33334 4.66683 1.33334H5.66683C6.66683 1.33334 6.88683 1.62668 7.26683 2.13334L8.26683 3.46668C8.52016 3.80001 8.66683 4.00001 9.3335 4.00001H11.3335C14.0002 4.00001 14.6668 4.66668 14.6668 7.33334Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  )
}

export default FolderFavoiteIcon

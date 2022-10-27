import * as React from "react"

export interface IconType {
  color?: string
}

interface IDownloadIconProps extends IconType {
  width?: string
  height?: string
}

const DownloadIcon: React.FunctionComponent<IDownloadIconProps> = ({
  color = "#979797",
  width = 24,
  height = 24
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.175L7.175 11.35L8.25 10.275L11.25 13.275V4H12.75V13.275L15.75 10.275L16.825 11.35L12 16.175ZM5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V14.925H5.5V18.5H18.5V14.925H20V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5Z"
        fill={color}
      />
    </svg>
  )
}

export default DownloadIcon

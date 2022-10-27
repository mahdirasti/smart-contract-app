import * as React from "react"

export interface IconType {
  color?: string
}

interface IBlogIconProps extends IconType {}

const BlogIcon: React.FunctionComponent<IBlogIconProps> = ({
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
        d="M12.25 3C5.313 3 3 5.313 3 12.25C3 19.187 5.313 21.5 12.25 21.5C19.187 21.5 21.5 19.187 21.5 12.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.778 4.55364V4.55364C18.785 3.67464 17.268 3.76664 16.389 4.75964C16.389 4.75964 12.02 9.69464 10.505 11.4076C8.98804 13.1196 10.1 15.4846 10.1 15.4846C10.1 15.4846 12.604 16.2776 14.098 14.5896C15.593 12.9016 19.984 7.94264 19.984 7.94264C20.863 6.94964 20.77 5.43264 19.778 4.55364Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2588 6.05078L18.8538 9.23378"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default BlogIcon

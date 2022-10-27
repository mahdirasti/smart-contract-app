import { ReactElement } from "react";
export interface ListItemWithIconProps {
  title: string;
  value?: any;
  icon?: ReactElement;
  activeIcon?: ReactElement;
  meta?: ReactElement;
  href?: string;
  isActive?: boolean;
  onClick?: Function;
  isChild?: boolean;
}

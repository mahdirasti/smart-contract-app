import { SxProps, Theme } from "@mui/material";

import { ReactElement } from "react";

export interface TableItems {
  title?: string;
  render?: (item) => ReactElement | string | number;
  hasControl?: boolean;
}

export interface MyTableProps {
  title?: string;
  moreLink?: string;
  endButton?: React.ReactElement;
  tableHeadItems?: TableItems[];
  items: any;
  sx?: SxProps<Theme>;
  selectable?: boolean;
  onChangeSelectedIds?: (items: any) => void;
  hasCollapse?: boolean;
  totalItems?: number;
  loading?: boolean;
}

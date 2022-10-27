import React from "react";
import { SxProps } from "@mui/material";

export type ModalGravity = "bottom" | "modal";

export interface FModalProps {
  open?: boolean;
  handleClose: () => void;
  headerTitle?: string;
  headerBack?: (() => void) | null;
  isShow?: boolean;
  forwardProps?: React.ReactElement[] | React.ReactElement;
  hasOverflow?: boolean;
  isLoading?: boolean;
  sx?: SxProps;
  gravity?: ModalGravity;
  parentSx?: SxProps;
  px?: number | number[];
  py?: number | number[];
}

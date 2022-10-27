import * as React from "react";

import { Box, SxProps, Theme, alpha, useTheme } from "@mui/material";

import { useTranslation } from "react-i18next";

interface IOrderStatusProps {
  status: string;
  sx?: SxProps<Theme>;
  meta?: React.ReactElement;
}

const OrderStatus: React.FunctionComponent<IOrderStatusProps> = ({
  status,
  sx = {},
  meta,
}) => {
  const { t } = useTranslation("common");

  const theme = useTheme<Theme>();

  let orderStatusBGColor = "";
  let orderStatusColor = "";
  let orderLabel = "";

  const sharpnesColor = 0.1;

  switch (status) {
    case "pending":
      orderStatusBGColor = alpha(theme.palette.warning.main, sharpnesColor);
      orderStatusColor = theme.palette.common.black;
      // orderLabel = t("order_status_pending")
      break;
    case "success":
      orderStatusBGColor = alpha(theme.palette.success.main, sharpnesColor);
      orderStatusColor = theme.palette.common.black;
      // orderLabel = t("order_status_submitted")
      break;
    case "delivered":
      orderStatusBGColor = alpha(theme.palette.success.main, sharpnesColor);
      orderStatusColor = theme.palette.common.black;
      // orderLabel = t("order_status_delivered")
      break;
    case "failed":
      orderStatusBGColor = alpha(theme.palette.error.main, sharpnesColor);
      orderStatusColor = theme.palette.common.black;
      // orderLabel = t("order_status_canceled")
      break;
    default:
      orderStatusBGColor = alpha(theme.palette.info.main, sharpnesColor);
      orderStatusColor = theme.palette.info.main;
      orderLabel = status;
  }

  return (
    <Box
      sx={{
        p: 1,
        borderRadius: "8px",
        bgcolor: orderStatusBGColor,
        color: orderStatusColor,
        ...sx,
      }}
    >
      {orderLabel}
      {Boolean(meta) && <Box> {meta}</Box>}
    </Box>
  );
};

export default OrderStatus;

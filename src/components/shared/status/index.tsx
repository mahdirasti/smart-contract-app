import * as React from "react";
import { Box, Theme, useTheme, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export type StatusVariant = "contained" | "text";

interface IStatusBoxProps {
  status: string;
  sx?: SxProps<Theme>;
}

const StatusBox: React.FunctionComponent<IStatusBoxProps> = ({
  status,
  sx = {},
}) => {
  const { t } = useTranslation();

  const theme = useTheme<Theme>();

  let orderStatusColor = "";
  let orderLabel = "";

  switch (status) {
    case "in_progress":
      orderStatusColor = theme.palette.info.light;
      orderLabel = t("in_progress");
      break;
    case "done":
      orderStatusColor = theme.palette.extended_colors.dark_green.main;
      orderLabel = t("done");
      break;
    case "accepted":
      orderStatusColor = theme.palette.extended_colors.green.main;
      orderLabel = t("accepted");
      break;
    case "waiting":
      orderStatusColor = theme.palette.warning.main;
      orderLabel = t("waiting");
      break;
    default:
      orderStatusColor = theme.palette.warning.dark;
      orderLabel = t("pending");
      break;
  }

  return (
    <Box
      sx={{
        p: 1,
        py: 0.5,
        px: 2,
        width: "auto",
        maxWidth: "100%",
        textAlign: "center",
        borderRadius: 1,
        fontSize: "12px",
        bgcolor: theme.palette.extended_colors.status.main,
        color: orderStatusColor,
        textTransform: "lowercase",
        ...sx,
      }}
    >
      {orderLabel}
    </Box>
  );
};

export default StatusBox;

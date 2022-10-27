import * as React from "react";

import { Box, Stack, Typography, alpha, SxProps, Theme } from "@mui/material";

interface ITitleValueViewerProps {
  title: string;
  value: React.ReactNode;
  sx?: SxProps<Theme>;
  icon?: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

const TitleValueViewer: React.FunctionComponent<ITitleValueViewerProps> = ({
  title,
  value,
  sx,
  icon,
  direction = "row",
}) => {
  return (
    <Stack
      direction={direction}
      spacing={1}
      justifyContent="space-between"
      sx={{
        p: 0.5,
        width: "100%",
        textTransform: "capitalize",
        ...sx,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon && icon}
        {title && (
          <Typography color={"text.secondary"} variant={"smallMedium"}>
            {title}
          </Typography>
        )}
      </Stack>
      <Box>{value}</Box>
    </Stack>
  );
};

export default TitleValueViewer;

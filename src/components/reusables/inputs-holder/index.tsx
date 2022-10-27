import * as React from "react";

import { FlexJustifyContent, StackDirection } from "@/types";
import { Stack, SxProps, Theme, Typography } from "@mui/material";

interface IInputHolderProps {
  title?: string;
  direction?: StackDirection;
  justifyContent?: FlexJustifyContent;
  sx?: SxProps<Theme>;
}

const InputHolder: React.FunctionComponent<IInputHolderProps> = ({
  children,
  title,
  direction = "column",
  justifyContent = "space-between",
  sx,
}) => {
  return (
    <Stack
      sx={{ mb: 6, width: "100%", ...sx }}
      direction={direction}
      justifyContent={justifyContent}
      alignItems="center"
    >
      <Typography component={"span"} variant="bodyLight">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

export default InputHolder;

import React from "react";
import { Box, Paper, Stack } from "@mui/material";

export const LoginWrapper: React.FC = ({ children }) => {
  return (
    <Stack
      width="100%"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Paper
        sx={{
          borderRadius: 2,
          width: ["calc(100% - 32px)", "462px"],
          maxWidth: "100%",
          height: "auto",
          position: ["relative"],
          top: [0, , "initial"],
          left: [0, , "initial"],
        }}
      >
        <Box sx={{ display: "flex", height: "100%" }}>{children}</Box>
      </Paper>
    </Stack>
  );
};

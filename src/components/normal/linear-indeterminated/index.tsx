import * as React from "react";

import { CircularProgress, Stack, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

interface ILinearIndeterminateProps {
  hasTitle?: boolean;
}

const LinearIndeterminate: React.FC<ILinearIndeterminateProps> = ({
  hasTitle = false,
}) => {
  const { t } = useTranslation(["common"]);

  return (
    <Stack
      sx={{ width: "100%" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      {hasTitle && (
        <Typography component="p" sx={{ fontSize: 20 }} color="primary">
          {t("common:is_loading")}
        </Typography>
      )}
      <CircularProgress />
    </Stack>
  );
};
export default LinearIndeterminate;

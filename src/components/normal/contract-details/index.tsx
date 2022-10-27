import { Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IContractDescriptionProps {}

const ContractDescription: React.FunctionComponent<
  IContractDescriptionProps
> = (props) => {
  const { t } = useTranslation(["sections", "common"]);
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Typography component="h1" variant={"bodyMedium"} color={"grey.A100"}>
          {t("common:contract_detail")}
        </Typography>
        <Typography component="p" color={"text.secondary"}>
          {t("sections:lorem_ipsum")}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ContractDescription;

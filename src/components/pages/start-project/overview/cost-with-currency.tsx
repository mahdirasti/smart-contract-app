import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ICostWithCurrencyProps {
  value: string;
  currency: string;
}

const CostWithCurrency: React.FunctionComponent<ICostWithCurrencyProps> = ({
  value,
  currency,
}) => {
  const { t } = useTranslation();
  return (
    <Stack direction={"row"} alignItems={"space-between"} spacing={2}>
      <Typography variant={"smallMedium"} color={"text.secondary"}>
        {value}
      </Typography>
      <Typography variant={"smallMedium"} color={"text.disabled"}>
        {currency}
      </Typography>
    </Stack>
  );
};

export default CostWithCurrency;

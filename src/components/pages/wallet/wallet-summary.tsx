import TitleValueViewer from "@/components/reusables/title-value-viewer";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IWalletSummaryProps {}

const WalletSummary: React.FunctionComponent<IWalletSummaryProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Paper>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <TitleValueViewer
          title={t("total_balance")}
          value={<Typography>0.777 USDT</Typography>}
        />
        <Divider flexItem sx={{ width: 2 }} />
        <TitleValueViewer
          title={t("available_cost")}
          value={<Typography>0.777 USDT</Typography>}
        />
      </Stack>
    </Paper>
  );
};

export default WalletSummary;

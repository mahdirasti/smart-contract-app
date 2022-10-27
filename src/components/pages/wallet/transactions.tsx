import MyTabs from "@/components/reusables/tabs";
import { TitleWithDescription } from "@/components/shared";
import { Paper, Stack } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import PaidDetails from "./paid-details";
import WithdrawalDetails from "./withdrawal-details";

interface WalletTransactionsProps {}

const WalletTransactions: React.FunctionComponent<WalletTransactionsProps> = (
  props
) => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack height={"100%"} justifyContent={"space-between"}>
        <TitleWithDescription title={t("transactions")} alignment={"left"} />
        <MyTabs
          tabId="wallet-transactions"
          items={[
            {
              label: t("paid"),
              children: <PaidDetails />,
            },
            {
              label: t("withdrawal"),
              children: <WithdrawalDetails />,
            },
          ]}
        />
      </Stack>
    </Paper>
  );
};

export default WalletTransactions;

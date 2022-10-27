import * as React from "react";
import TitleValueViewer from "@/components/reusables/title-value-viewer";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CostWithCurrency from "./cost-with-currency";

interface IInvoiceDetailsProps {
  handlePayment: Function;
}

const InvoiceDetails: React.FunctionComponent<IInvoiceDetailsProps> = ({
  handlePayment,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Stack width={"100%"} height={"100%"}>
        <Typography
          textTransform={"capitalize"}
          variant="bodyMedium"
          color={"text.secondary"}
          textAlign="center"
        >
          {t("contract_detail")}
        </Typography>
        <Stack width={"100%"} height={"100%"} spacing={1} my={2}>
          <TitleValueViewer
            title={t("contract_price")}
            value={<CostWithCurrency currency="USDT" value={"0.7770"} />}
            sx={{ justifyContent: "space-between" }}
          />
          <Divider />
          <TitleValueViewer
            title={t("platform_fee")}
            value={<CostWithCurrency currency="USDT" value={"0.7770"} />}
            sx={{ justifyContent: "space-between" }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent={"center"} height={"100%"}>
        <Button
          variant="contained"
          sx={{ minWidth: 350 }}
          onClick={() => handlePayment()}
        >
          {t("pay")}
        </Button>
      </Stack>
    </>
  );
};

export default React.memo(InvoiceDetails);

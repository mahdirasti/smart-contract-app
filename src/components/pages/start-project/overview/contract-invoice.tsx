import * as React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import InvoiceDetails from "./invoice-details";
import SuccessContractPayment from "./success-payment";

interface IContractInvoiceProps {}

const ContractInvoice: React.FunctionComponent<IContractInvoiceProps> = (
  props
) => {
  const { t } = useTranslation();
  const [isPaid, setIsPaid] = React.useState(false);

  const handlePayment = React.useCallback(() => {
    setIsPaid(true);
  }, []);

  return (
    <Stack
      height={"100%"}
      justifyContent="space-between"
      alignItems={"center"}
      spacing={3}
    >
      {!isPaid ? (
        <InvoiceDetails handlePayment={handlePayment} />
      ) : (
        <SuccessContractPayment />
      )}
    </Stack>
  );
};

export default ContractInvoice;

import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@/components/icons/done-icon";
import { useGlobalContext } from "@/contexts/g-context";
import { routeNames } from "@/navigation";
import { Button, Stack, Typography } from "@mui/material";

interface ISuccessContractPaymentProps {}

const SuccessContractPayment: React.FunctionComponent<
  ISuccessContractPaymentProps
> = (props) => {
  const { closeModal } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation(["sections", "common"]);
  return (
    <>
      <Stack spacing={2} width="100%" alignItems={"center"} py={4}>
        <DoneIcon />
        <Stack spacing={1} width="100%" alignItems={"centers"}>
          <Typography
            textAlign={"center"}
            color={"extended_colors.green.main"}
            variant={"smallMedium"}
          >
            {t("sections:success_transaction")}
          </Typography>
          <Typography
            textAlign={"center"}
            color={"text.secondary"}
            variant={"smallMedium"}
          >
            {t("sections:created_contract_view")}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent={"center"} height={"100%"}>
        <Button
          variant="contained"
          sx={{ minWidth: 350 }}
          onClick={() => {
            navigate(`/${routeNames.activities.index}`);
            closeModal();
          }}
        >
          {t("common:my_activity")}
        </Button>
      </Stack>
    </>
  );
};

export default SuccessContractPayment;

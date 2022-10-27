import { TitleWithDescription } from "@/components/shared";
import { useGlobalContext } from "@/contexts/g-context";
import { routeNames } from "@/navigation";
import { Button, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FreezeBalanceModal from "./freez-balance-modal";

interface IFreezeBalanceProps {}

const FreezeBalance: React.FunctionComponent<IFreezeBalanceProps> = (props) => {
  const { showModal, closeModal } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation(["sections", "common"]);
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack spacing={2} height={"100%"} justifyContent={"space-between"}>
        <TitleWithDescription
          parentDir="row"
          sxProps={{ justifyContent: "space-between" }}
          title={t("common:freeze_balance")}
          headerVariant={"smallMedium"}
          descriptionVariant={"smallMedium"}
          description={"0.07799 USDT"}
        />
        <Typography color={"text.disabled"}>
          {t("sections:lorem_ipsum")}
        </Typography>
        <Button
          variant="text"
          onClick={() =>
            showModal(
              <FreezeBalanceModal
                onClose={closeModal}
                onSubmit={() => navigate(`${routeNames.activities.index}`)}
              />,
              { "& .content-parent": { width: 500, px: 2 } }
            )
          }
        >
          {t("common:unfreez")}
        </Button>
      </Stack>
    </Paper>
  );
};

export default FreezeBalance;

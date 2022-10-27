import { Paper, Stack } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ContractInfo from "./contract-info";
import SocialAvatar from "./social-avatar";

interface IContractDetailsSidebarProps {}

const ContractDetailsSidebar: React.FunctionComponent<
  IContractDetailsSidebarProps
> = (props) => {
  //Getting translation object
  const { t } = useTranslation();
  return (
    <Paper sx={{ p: 2, height: "100%", py: 4 }}>
      <Stack spacing={3} alignItems="center">
        <SocialAvatar />
        <ContractInfo title={t("expired_date")} value={"2022/11/03"} />
        <ContractInfo title={t("AD_type")} value={"instagram story"} />
      </Stack>
    </Paper>
  );
};

export default ContractDetailsSidebar;

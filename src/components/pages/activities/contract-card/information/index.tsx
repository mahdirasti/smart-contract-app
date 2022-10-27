//Built-in import
import * as React from "react";
//External import
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
//Internal import
import EthereumIcon from "@/components/icons/ethereum-icon";
import MonitorIcon from "@/components/icons/monitor-icon";
import TimerIcon from "@/components/icons/timer-icon";
import ContractInfoCard from "./card-holder";
import { IContractInfoCard } from "@/types/contract";

const contractCardInfo: IContractInfoCard = {
  id: 1,
  ad_type: "instagram",
  cost: "0.003",
  expires_at: "2022/11/12",
};

interface IContractCardInformationProps {}

const ContractCardInformation: React.FunctionComponent<
  IContractCardInformationProps
> = (props) => {
  const { t } = useTranslation();
  return (
    <Stack direction="row" spacing={1} justifyContent={"space-between"}>
      <ContractInfoCard
        title={t("AD_type")}
        icon={<MonitorIcon />}
        value={contractCardInfo.ad_type}
      />
      <ContractInfoCard
        icon={<EthereumIcon />}
        title={t("cost")}
        value={contractCardInfo.cost}
      />
      <ContractInfoCard
        icon={<TimerIcon />}
        title={t("expires_at")}
        value={contractCardInfo.expires_at}
      />
    </Stack>
  );
};

export default ContractCardInformation;

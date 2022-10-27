import EthereumIcon from "@/components/icons/ethereum-icon";
import MonitorIcon from "@/components/icons/monitor-icon";
import TimerIcon from "@/components/icons/timer-icon";
import DetailsBoxWithIcon from "@/components/reusables/details-box-with-icon";
import { ContractStatus } from "@/components/reusables/status/contract-status";
import { Button, Divider, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IContractCardProps {}

const ContractCard: React.FunctionComponent<IContractCardProps> = (props) => {
  const { t } = useTranslation(["common", "sections"]);

  return (
    <Stack
      p={2}
      pb={1}
      justifyContent="space-between"
      width={"100%"}
      borderRadius={2}
      height={300}
      bgcolor={(t) => t.palette.secondary.dark}
      maxWidth={"100%"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography variant="smallRegular" color="text.secondary">
          {t("common:instagram")}
        </Typography>
        <ContractStatus status={"in_progress"} />
      </Stack>
      <Stack mt={1}>
        <Typography variant="smallRegular" color="grey.800">
          {t("sections:find_project_card")}
        </Typography>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Stack
        direction="row"
        spacing={1}
        justifyContent={"space-between"}
        sx={{
          ["& p"]: {
            fontSize: "10px",
            fontWeight: 500,
          },
        }}
      >
        <DetailsBoxWithIcon
          icon={<MonitorIcon />}
          title={t("common:AD_type")}
          value={t("common:instagram")}
        />
        <DetailsBoxWithIcon
          icon={<EthereumIcon />}
          title={t("common:cost")}
          value={"0.004"}
        />
        <DetailsBoxWithIcon
          icon={<TimerIcon />}
          title={t("common:expires_at")}
          value={"2022/02/01"}
        />
      </Stack>
      <Stack
        alignItems={"center"}
        mt={1}
        py={1}
        direction="row"
        width="100%"
        justifyContent="center"
      >
        <Link to={"contract/1"}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              width: 130,
              display: "flex",
              alignItems: "end",
              height: 36,
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            {t("common:details")}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default ContractCard;

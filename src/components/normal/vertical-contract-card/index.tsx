import EthereumIcon from "@/components/icons/ethereum-icon"
import MonitorIcon from "@/components/icons/monitor-icon"
import TimerIcon from "@/components/icons/timer-icon"
import DetailsBoxWithIcon from "@/components/reusables/details-box-with-icon"
import { ContractStatus } from "@/components/reusables/status/contract-status"
import { alpha, Button, Divider, Stack, Typography } from "@mui/material"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

interface IVerticalContractCardProps {}

const VerticalContractCard: React.FunctionComponent<
  IVerticalContractCardProps
> = (props) => {
  const { t } = useTranslation(["common", "sections"])

  return (
    <Stack
      p={2}
      py={3}
      pb={1}
      justifyContent="space-between"
      width={"100%"}
      borderRadius={2}
      height={"100%"}
      bgcolor={(t) => t.palette.secondary.dark}
      maxWidth={"100%"}
    >
      <Stack alignItems={"center"} justifyContent="space-between" spacing={1}>
        <Typography variant="bodyMedium" color="grey.200">
          {t("common:instagram")}
        </Typography>
        <ContractStatus status={"in_progress"} />
      </Stack>
      <Stack mt={2}>
        <Typography
          variant="subtitleMedium"
          sx={{
            position: "relative",
            "&:before": {
              content: "''",
              width: "100%",
              height: "100%",
              position: "absolute",
              background: (t) =>
                `linear-gradient(180deg,${alpha(
                  t.palette.secondary.dark,
                  0.2
                )},${t.palette.secondary.dark} 100%)`
            }
          }}
        >
          {t("sections:find_project_card")}
        </Typography>
      </Stack>
      <Stack
        alignItems={"center"}
        py={1}
        direction="row"
        width="100%"
        justifyContent="center"
      >
        <Link to={"#"}>
          <Button
            variant="text"
            disableRipple
            sx={{
              "&:hover": {
                bgcolor: "transparent"
              },
              borderRadius: "8px",
              width: 130,
              display: "flex",
              alignItems: "end",
              height: 36,
              fontSize: "12px",
              textTransform: "capitalize"
            }}
          >
            {t("common:see_more")}
          </Button>
        </Link>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        justifyContent={"space-between"}
        mb={1}
      >
        <DetailsBoxWithIcon
          isVertical={false}
          icon={<MonitorIcon />}
          title={t("common:AD_type")}
          value={t("common:instagram")}
        />
        <DetailsBoxWithIcon
          isVertical={false}
          icon={<EthereumIcon />}
          title={t("common:cost")}
          value={"0.004"}
        />
        <DetailsBoxWithIcon
          isVertical={false}
          icon={<TimerIcon />}
          title={t("common:expires_at")}
          value={"2022/02/01"}
        />
      </Stack>
    </Stack>
  )
}

export default VerticalContractCard

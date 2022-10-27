import { ContractStatus } from "@/components/reusables/status/contract-status";
import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContractCardInformation from "./information";

interface IContractCardProps {}

const ContractCard: React.FunctionComponent<IContractCardProps> = (props) => {
  const { t } = useTranslation(["common", "sections"]);

  return (
    <Paper sx={{ p: 2 }}>
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
        <Typography variant="xsmallRegular" color="grey.800">
          {t("sections:find_project_card")}
        </Typography>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <ContractCardInformation />
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
    </Paper>
  );
};

export default ContractCard;

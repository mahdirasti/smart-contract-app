import { TitleWithDescription } from "@/components/shared";
import { Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IContractDescriptionProps {}

const ContractDescription: React.FunctionComponent<
  IContractDescriptionProps
> = (props) => {
  const { t } = useTranslation(["sections", "common"]);
  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <TitleWithDescription
        parentDir="column"
        parentSpacing={2}
        title={t("common:contract_detail")}
        headerVariant={"subtitleMedium"}
        descriptionVariant={"bodyRegular"}
        description={t("sections:lorem_ipsum")}
      />
    </Paper>
  );
};

export default ContractDescription;

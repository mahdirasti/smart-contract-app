import ArrowTopIcon from "@/components/icons/arrow-top-icon";
import TitleValueViewer from "@/components/reusables/title-value-viewer";
import { TitleWithDescription } from "@/components/shared";
import { Box, Divider, Stack } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IWithdrawalDetailsProps {}

const WithdrawalDetails: React.FunctionComponent<IWithdrawalDetailsProps> = (
  prop
) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: (t) => t.palette.extended_colors.status.main,
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TitleValueViewer
        direction="row-reverse"
        title={t("withdrawal")}
        value={<ArrowTopIcon />}
      />
      <Divider />
      <Stack width="100%" spacing={3} my={2}>
        <TitleWithDescription
          sxProps={{ justifyContent: "space-between", width: "100%" }}
          direction="row"
          title={t("price")}
          headerColor={"text.primary"}
          description={"0.000343434"}
          descriptionVariant={"smallMedium"}
        />
        <TitleWithDescription
          sxProps={{ justifyContent: "space-between", width: "100%" }}
          direction="row"
          title={t("request_date")}
          headerColor={"text.primary"}
          description={"2022.06.04"}
          descriptionVariant={"smallMedium"}
        />
        <TitleWithDescription
          sxProps={{ justifyContent: "space-between", width: "100%" }}
          direction="row"
          title={t("refer")}
          headerColor={"text.primary"}
          description={"XXX"}
          descriptionVariant={"smallMedium"}
        />
        <TitleWithDescription
          sxProps={{ justifyContent: "space-between", width: "100%" }}
          direction="row"
          title={t("transaction_code")}
          headerColor={"text.primary"}
          description={"77007077070"}
          descriptionVariant={"smallMedium"}
        />
      </Stack>
    </Box>
  );
};

export default WithdrawalDetails;

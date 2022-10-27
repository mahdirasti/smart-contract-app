import TitleValueViewer from "@/components/reusables/title-value-viewer";
import { StatusBox } from "@/components/shared";
import { IClaimCard } from "@/types/claims";
import { Button, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IClaimCardProps extends Omit<IClaimCard, "id"> {}

const ClaimCard: React.FunctionComponent<IClaimCardProps> = (props) => {
  //deconstract items from props
  const { amount, nickName, status } = props;

  //Getting translation object
  const { t } = useTranslation();
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack
        width="100%"
        py={1}
        justifyContent="space-between"
        spacing={1}
        borderBottom={"1px solid"}
        borderColor={(t) => t.palette.divider}
      >
        <TitleValueViewer
          title={nickName}
          value={<StatusBox status={status} />}
        />
        <TitleValueViewer
          title={t("amount")}
          value={
            <Typography variant="smallMedium" color={"text.secondary"}>
              {amount}
            </Typography>
          }
        />
      </Stack>
      <Stack direction="row" justifyContent={"center"} mt={2}>
        <Button variant="outlined">{t("details")}</Button>
      </Stack>
    </Paper>
  );
};

export default ClaimCard;

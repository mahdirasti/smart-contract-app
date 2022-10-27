import PropmptBox from "@/components/reusables/propmt-box";
import { TitleWithDescription } from "@/components/shared";
import { Stack } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IFreezeBalanceModalProps {
  onClose: Function;
  onSubmit: Function;
}

const FreezeBalanceModal: React.FunctionComponent<IFreezeBalanceModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const { t } = useTranslation(["sections", "common"]);
  return (
    <Stack alignItems={"center"} spacing={2}>
      <TitleWithDescription
        sxProps={{ p: 2 }}
        parentDir="column"
        parentSpacing={1}
        title={t("common:freeze_balance")}
        alignment={"center"}
        description={t("sections:lorem_ipsum")}
        headerVariant={"bodyMedium"}
        descriptionColor={"text.disabled"}
        descriptionVariant={"smallRegular"}
      />
      <PropmptBox
        onClose={() => onClose()}
        onSubmit={() => onSubmit()}
        acceptButtonText={t("common:yes_im_sure")}
        cancelButtonText={t("common:back")}
      />
    </Stack>
  );
};

export default FreezeBalanceModal;

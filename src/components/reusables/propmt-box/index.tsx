import * as React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";

interface IPropmptBoxProps {
  title?: string;
  onSubmit: () => void;
  onClose: () => void;
  cancelButtonText?: string;
  acceptButtonText?: string;
  loadingSubmit?: boolean;
}

const PropmptBox: React.FunctionComponent<IPropmptBoxProps> = ({
  title,
  onSubmit,
  onClose,
  cancelButtonText,
  acceptButtonText,
  loadingSubmit = false,
}) => {
  const { t } = useTranslation("common");

  return (
    <Stack direction="column" sx={{ p: 1 }} spacing={3}>
      {Boolean(title) && <Typography component={"strong"}>{title}</Typography>}
      <Stack direction="row" spacing={1}>
        <Button onClick={onClose} variant="outlined" color="error">
          {cancelButtonText || t("cancel")}
        </Button>
        <LoadingButton
          loading={loadingSubmit}
          onClick={onSubmit}
          variant="contained"
          sx={{
            width: 120,
            maxWidth: "100%",
            bgcolor: (t) => t.palette.extended_colors.light_red.main,
          }}
        >
          {acceptButtonText || t("submit")}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default PropmptBox;

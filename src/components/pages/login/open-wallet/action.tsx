//Built-in import
import * as React from "react";
//External import
import { LoadingButton } from "@mui/lab";
import { Button, Stack, alpha } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface IOpenWalletActionsProps {
  handleOpenWallet: Function;
  loading: boolean;
  title: string;
}

const OpenWalletActions: React.FunctionComponent<IOpenWalletActionsProps> = ({
  loading,
  handleOpenWallet,
  title,
}) => {
  //Getting translation object
  const { t } = useTranslation(["common"]);
  //Getting react navigator
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      mt={3}
      spacing={1}
      sx={{ "& button": { fontSize: "12px" } }}
    >
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{
          py: "12px",
          bgcolor: (t) => alpha(t.palette.secondary.main, 0.2),
          "&:hover": {
            bgcolor: (t) => alpha(t.palette.secondary.main, 0.2),
          },
          px: 3,
        }}
      >
        {t("common:back")}
      </Button>
      <LoadingButton
        loading={loading}
        variant="contained"
        color="primary"
        onClick={() => handleOpenWallet()}
        fullWidth
      >
        {title}
      </LoadingButton>
    </Stack>
  );
};

export default OpenWalletActions;

//Built-in import
import * as React from "react";
//External import
import { LoadingButton } from "@mui/lab";
import { Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ISelectWalletActionProps {
  loading?: boolean;
  handleSubmitWallet?: Function;
}

const SelectWalletAction: React.FunctionComponent<ISelectWalletActionProps> = ({
  loading = false,
  handleSubmitWallet,
}) => {
  //Getting translation object
  const { t } = useTranslation(["common", "sections"]);
  return (
    <Stack
      width="100%"
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        "& a": {
          textDecoration: "none",
          textAlign: "center",
        },
        "& hr": {
          width: "100%",
          my: 1,
          mt: 2,
          bgcolor: (t) => t.palette.primary.main,
        },
      }}
    >
      <LoadingButton
        loading={loading}
        variant="contained"
        color="primary"
        onClick={() => handleSubmitWallet()}
        fullWidth
      >
        {t("common:continue")}
      </LoadingButton>
      <Divider />
      <Link to="#">
        <a>
          <Typography variant="xsmallMedium" color={"text.secondary"}>
            {t("sections:what_is_a_wallet")}
          </Typography>
        </a>
      </Link>
    </Stack>
  );
};

export default React.memo(SelectWalletAction);

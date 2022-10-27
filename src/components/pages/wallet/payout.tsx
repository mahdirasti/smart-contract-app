import InputHolder from "@/components/reusables/inputs-holder";
import {
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IWalletPayoutProps {}

const WalletPayout: React.FunctionComponent<IWalletPayoutProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ height: "100%" }}>
      <Stack
        height="100%"
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography textAlign={"left"} width={"100%"}>
          {t("payout")}
        </Typography>
        <InputHolder
          sx={{
            my: 2,
            "& span": {
              width: "100%",
              textAlign: "left",
              my: 0.5,
              fontSize: "12px",
              color: (t) => t.palette.primary.main,
            },
          }}
          title={t("price")}
          justifyContent={"flex-start"}
        >
          <TextField
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{t("usdt")}</InputAdornment>
              ),
            }}
          />
        </InputHolder>
        <Stack width={["100%", , 300]} maxWidth={"100%"} mt={2}>
          <Button variant="contained">{t("confirm")}</Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default WalletPayout;

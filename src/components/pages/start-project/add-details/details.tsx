import { EContractDetails } from "@/types/contract";
import {
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IAddDetailsProps {
  setStep?: Function;
}

const AddDetails: React.FunctionComponent<IAddDetailsProps> = ({ setStep }) => {
  const { t } = useTranslation();
  return (
    <Paper sx={{ height: "100%", p: 5 }}>
      <Container maxWidth={"sm"}>
        <Stack spacing={5} height={"100%"}>
          <Typography color={"text.secondary"}>{t("add_details")}</Typography>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography variant="xsmallMedium" color={"text.secondary"}>
                {t("amount")}
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {t("usdt")}
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <TextField
              variant="outlined"
              placeholder={t("description")}
              multiline
              rows={4}
            />
          </Stack>
          <Stack width={["100%", , 300]} maxWidth={"100%"}>
            <Button
              onClick={() => setStep(EContractDetails.addAttachment)}
              variant="contained"
            >
              {t("apply")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
};

export default AddDetails;

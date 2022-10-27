import * as React from "react";
import {
  Button,
  Container,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LinkIcon from "@/components/icons/link-icon";
import AttachmentBox from "@/components/normal/attachment-box";
import { useGlobalContext } from "@/contexts/g-context";
import ContractInvoice from "./contract-invoice";

interface IOverviewProps {}

const Overview: React.FunctionComponent<IOverviewProps> = (props) => {
  const { t } = useTranslation();
  const { showModal } = useGlobalContext();

  return (
    <Paper sx={{ height: "100%", p: 3 }}>
      <Stack height="100%" alignItems={"center"}>
        <Stack
          direction="row"
          height="100%"
          justifyContent={"space-between"}
          width="100%"
        >
          <Container maxWidth={"xs"}>
            <Stack spacing={5} width={"100%"}>
              <Typography color={"text.secondary"}>
                {t("add_details")}
              </Typography>
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
            </Stack>
          </Container>
          <Stack
            borderLeft={"2px solid"}
            borderColor={(t) => t.palette.secondary.main}
            spacing={2}
            px={2}
            alignItems="start"
            overflow="auto"
            width={"auto"}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <LinkIcon />
              <Typography textTransform="capitalize" color="grey.A100">
                {t("attachment")}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              width={"100%"}
              maxWidth="100%"
              flexWrap={"wrap"}
              sx={{ "& > div": { mt: 1, mr: 1 } }}
            >
              {[1, 2, 4, 5, 6].map((item, index) => {
                return (
                  <AttachmentBox key={index} title="new project 4343443" />
                );
              })}
            </Stack>
          </Stack>
        </Stack>
        <Stack width={["100%", , 300]} maxWidth={"100%"} mt={2}>
          <Button
            variant="contained"
            onClick={() => showModal(<ContractInvoice />)}
          >
            {t("confirm")}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Overview;

import LinkIcon from "@/components/icons/link-icon";
import ProfileCircle from "@/components/icons/profile-circle";
import AppliedPeopleBox from "@/components/normal/applied-people";
import AttachmentBox from "@/components/normal/attachment-box";
import ContractCard from "@/components/normal/contract-card";
import VerticalContractCard from "@/components/normal/vertical-contract-card";
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb";
import ContractWrapper from "@/containers/contract-wrapper";
import PageWrapper from "@/containers/page-wrapper";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface ISingleActivityProps {}

const SingleActivity: React.FunctionComponent<ISingleActivityProps> = ({}) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <ContractWrapper>
      <Paper sx={{ height: "500px", p: 3 }}>
        <Stack
          direction="row"
          height="100%"
          justifyContent={"space-between"}
          width="100%"
        >
          <Stack
            borderRight={"2px solid"}
            borderColor={(t) => t.palette.secondary.main}
            spacing={2}
            alignItems="start"
            overflow="auto"
            width={"100%"}
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
          <Stack width="100%" pl={2} overflow="auto">
            <Stack
              direction="row"
              justifyContent={"space-between"}
              width="100%"
            >
              <Typography
                color="text.secondary"
                textTransform={"capitalize"}
                variant="bodyMedium"
              >
                {t("applied_people", { count: 2 })}
              </Typography>
              <RouterLink to={""}>
                <Link underline="none">
                  <Typography component="span" color="secondary.main">
                    {t("view_all")}
                  </Typography>
                </Link>
              </RouterLink>
            </Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              my={2}
              sx={{ "& > div": { mt: 1, mr: 1 } }}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                return <AppliedPeopleBox key={index} />;
              })}
            </Stack>
            <Stack spacing={2}>
              <Typography
                color="text.secondary"
                variant={"bodyMedium"}
                textTransform="capitalize"
              >
                {t("claim_history")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </ContractWrapper>
  );
};

export default SingleActivity;

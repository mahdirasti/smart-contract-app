import Overview from "@/components/pages/start-project/overview";
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb";
import ContractSidebar from "@/components/shared/contract-sidebar";
import PageWrapper from "@/containers/page-wrapper";
import { routeNames } from "@/navigation";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface IContractOverviewProps {}

const ContractOverview: React.FunctionComponent<
  IContractOverviewProps
> = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <PageWrapper metaData={<PageBreadcrumb pathId={Number(id)} />}>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={9}>
            <Overview />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ContractSidebar />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default ContractOverview;

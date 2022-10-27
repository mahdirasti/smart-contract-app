import { ContractDescription } from "@/components/pages/start-project";
import ContractDetailsSidebar from "@/components/pages/start-project/contract-details/sidebar";
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb";
import ContractSidebar from "@/components/shared/contract-sidebar";
import PageWrapper from "@/containers/page-wrapper";
import { routeNames } from "@/navigation";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface IContractDetailsProps {}

const ContractDetails: React.FunctionComponent<
  IContractDetailsProps
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
            <ContractDescription />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ContractSidebar />
          </Grid>
        </Grid>
      </Box>
      <Stack width={["100%", , 300]} maxWidth={"100%"}>
        <Button
          variant="contained"
          onClick={() =>
            navigate(
              `/${routeNames.startProject.index}/contract-detail/${id}/${routeNames.startProject.detail.add.index}`
            )
          }
        >
          {t("apply")}
        </Button>
      </Stack>
    </PageWrapper>
  );
};

export default ContractDetails;

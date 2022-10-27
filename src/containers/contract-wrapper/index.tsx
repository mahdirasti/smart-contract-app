import ContractDetailsSidebar from "@/components/pages/start-project/contract-details/sidebar";
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb";
import ContractSidebar from "@/components/shared/contract-sidebar";
import { Box, Grid } from "@mui/material";
import * as React from "react";
import PageWrapper from "../page-wrapper";

interface IContractWrapperProps {
  children: React.ReactNode;
  pathId?: number;
}

const ContractWrapper: React.FunctionComponent<IContractWrapperProps> = ({
  children,
  pathId,
}) => {
  return (
    <PageWrapper metaData={<PageBreadcrumb pathId={pathId ? pathId : null} />}>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={9}>
            {children}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ContractSidebar />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default ContractWrapper;

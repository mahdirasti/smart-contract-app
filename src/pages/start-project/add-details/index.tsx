import { ContractDescription } from "@/components/pages/start-project";
import ContractAttachments from "@/components/pages/start-project/add-details/attachment";
import AddDetails from "@/components/pages/start-project/add-details/details";
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb";
import ContractSidebar from "@/components/shared/contract-sidebar";
import PageWrapper from "@/containers/page-wrapper";
import { EContractDetails } from "@/types/contract";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

interface IAddContractDetailsProps {}

const AddContractDetails: React.FunctionComponent<
  IAddContractDetailsProps
> = ({}) => {
  const [step, setStep] = React.useState(EContractDetails.addDetails);
  const { id } = useParams();
  const { t } = useTranslation();
  const theme = useTheme();

  const RenderContent = () => {
    switch (step) {
      case EContractDetails.addDetails:
        return <AddDetails setStep={setStep} />;
      case EContractDetails.addAttachment:
        return <ContractAttachments pathId={+id} />;
      default:
        <>not found</>;
        break;
    }
  };

  return (
    <PageWrapper metaData={<PageBreadcrumb pathId={Number(id)} />}>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={9}>
            <RenderContent />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ContractSidebar />
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default AddContractDetails;

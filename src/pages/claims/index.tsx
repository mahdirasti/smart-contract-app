import * as React from "react";
import { useTheme } from "@mui/material";
import PageWrapperWithNavigators from "@/containers/page-wrapper-breadcrumb";
import { authSelectors } from "@/redux/auth";
import { useAppSelector } from "@/redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sidebarItemsCreatorHolder } from "@/hooks";
import ClaimsCards from "@/components/pages/claims";

interface IClaimsPageProps {}

const ClaimsPage: React.FunctionComponent<IClaimsPageProps> = (props) => {
  const { t } = useTranslation(["common", "routes"]);

  const location = useLocation();
  const theme = useTheme();
  const userPermissions = useAppSelector(authSelectors.userPermissionsSelector);

  return (
    <PageWrapperWithNavigators
      title={""}
      sidebarItems={sidebarItemsCreatorHolder(
        t,
        location.pathname,
        userPermissions,
        theme
      )}
    >
      <ClaimsCards />
    </PageWrapperWithNavigators>
  );
};

export default ClaimsPage;

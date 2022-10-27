//Built-in import
import * as React from "react";
//External import
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
//Internal import
import PageWrapperWithNavigators from "@/containers/page-wrapper-breadcrumb";
import { authSelectors } from "@/redux/auth";
import { useAppSelector } from "@/redux";
import { sidebarItemsCreatorHolder } from "@/hooks";
import Activities from "@/components/pages/activities";

interface IDashboardPageProps {}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
  const { t } = useTranslation(["common", "routes"]);
  //access to environment location
  const location = useLocation();
  //Getting mui theme
  const theme = useTheme();
  //get user Permissions
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
      <Activities />
    </PageWrapperWithNavigators>
  );
};

export default DashboardPage;

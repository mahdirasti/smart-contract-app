import * as React from "react";
import { useTheme } from "@mui/material";
import PageWrapperWithNavigators from "@/containers/page-wrapper-breadcrumb";
import { authSelectors } from "@/redux/auth";
import { useAppSelector } from "@/redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sidebarItemsCreatorHolder } from "@/hooks";
import Wallet from "@/components/pages/wallet";

interface IWalletPageProps {}

const WalletPage: React.FunctionComponent<IWalletPageProps> = (props) => {
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
      <Wallet />
    </PageWrapperWithNavigators>
  );
};

export default WalletPage;

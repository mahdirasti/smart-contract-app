//External import
import { TFunction } from "react-i18next";
import { Theme } from "@mui/material";
//Internal import
import CeloIcon from "@/components/icons/celo-icon";
import DirectionBoxIcon from "@/components/icons/direction-box";
import FolderFavoiteIcon from "@/components/icons/folder-favorite-icon";
import WalletIcon from "@/components/icons/wallet-icon";
import { routeNames } from "@/navigation";
import sidebarItemsCreator from "@/utils/sidebarItemsCreator";

const sidebarItemsCreatorHolder = (
  t: TFunction<["routes", "common", "sections"]>,
  location: string,
  permissions: string[],
  theme: Theme
) =>
  sidebarItemsCreator(
    [
      {
        title: t("routes:activities"),
        href: routeNames.activities.index,
        permission: "admin",
        icon: <DirectionBoxIcon />,
        activeIcon: <DirectionBoxIcon color={theme.palette.primary.main} />,
      },
      {
        title: t("routes:start_project"),
        href: routeNames.startProject.index,
        permission: "users",
        icon: <CeloIcon />,
        activeIcon: <CeloIcon color={theme.palette.primary.main} />,
      },
      {
        title: t("routes:claims"),
        href: routeNames.claims.index,
        permission: "users",
        icon: <FolderFavoiteIcon />,
        activeIcon: <FolderFavoiteIcon color={theme.palette.primary.main} />,
      },
      {
        title: t("routes:wallet"),
        href: routeNames.wallet.index,
        permission: "users",
        icon: <WalletIcon />,
        activeIcon: <WalletIcon color={theme.palette.primary.main} />,
      },
    ],
    location,
    permissions
  );

export default sidebarItemsCreatorHolder;

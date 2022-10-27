import { TFunction } from "i18next";

export interface absolutePath {
  path: string;
  title: string;
}

const absoluteRoutes = (t: TFunction): absolutePath[] => [
  {
    path: "/my-activity",
    title: t("routes:activities"),
  },
  {
    path: "/my-activity/contract",
    title: t("routes:my_contract"),
  },
  {
    path: "/start-project",
    title: t("routes:start_project"),
  },
  {
    path: "/start-project/contract-detail",
    title: t("common:contract_detail"),
  },
  {
    path: "/start-project/contract-detail/[parameter]/add-detail",
    title: t("common:add_detail"),
  },
  {
    path: "/claims",
    title: t("routes:claims"),
  },
  {
    path: "/wallet",
    title: t("routes:wallet"),
  },
];

export default absoluteRoutes;

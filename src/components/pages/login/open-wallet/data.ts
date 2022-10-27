import { t } from "i18next";
import { ASSETS_PATH } from "@/consistants";
import { IWallet } from "@/types/wallet";

export const walletData: IWallet = {
  id: 1,
  title: t("metamask"),
  src: `${ASSETS_PATH}/fox.png`,
};

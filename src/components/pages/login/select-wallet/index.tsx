//Built-in import
import * as React from "react";
//External import
import { Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
//Internal import
import { loginStepManager } from "@/types/login";
import MiniContainer from "@/containers/holders/miniContainer";
import WalletIcon from "@/components/icons/wallet-icon";
import SelectWalletAction from "./action";
import TitleWithDescription from "@/components/shared/title-with-description";
import WalletCard from "./wallet-card";
import { walletItems } from "../data";

interface ILoginSelectWalletProps {
  setStep?: (value: loginStepManager) => void;
}

const LoginSelectWallet: React.FunctionComponent<ILoginSelectWalletProps> = ({
  setStep,
}) => {
  const [loading, setLoading] = React.useState(false);

  //Getting mui theme
  const theme = useTheme();

  //Getting translation object
  const { t } = useTranslation(["inputValidations", "common", "sections"]);

  //to submit wallet
  const handleSubmitWallet = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setStep(loginStepManager.submitWallet);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MiniContainer>
      <Stack
        direction="column"
        alignItems="center"
        height={"auto"}
        spacing={3}
        justifyContent={"space-between"}
      >
        <TitleWithDescription
          direction="column"
          description={t("sections:select_wallet_section")}
          title={t("common:select_a_wallet")}
          icon={<WalletIcon color={theme.palette.primary.light} />}
        />
        <Stack width={"100%"} spacing={1} my={3}>
          {walletItems.map((item, index) => {
            return (
              <WalletCard key={item.id} src={item.src} title={item.title} />
            );
          })}
        </Stack>
        <SelectWalletAction
          loading={loading}
          handleSubmitWallet={handleSubmitWallet}
        />
      </Stack>
    </MiniContainer>
  );
};

export default LoginSelectWallet;

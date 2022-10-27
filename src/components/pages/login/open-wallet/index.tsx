//Built-in import
import * as React from "react";
//External import
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
//Internal import
import MiniContainer from "@/containers/holders/miniContainer";
import { loginStepManager } from "@/types/login";
import { walletData } from "./data";
import TitleWithDescription from "@/components/shared/title-with-description";
import FoxIcon from "@/components/icons/fox-icon";
import OpenWalletActions from "./action";
interface ILoginSubmitWalletProps {
  setStep?: (value: loginStepManager) => void;
}

const LoginSubmitWallet: React.FunctionComponent<ILoginSubmitWalletProps> = ({
  setStep,
}) => {
  //Getting translation object
  const { t } = useTranslation(["inputValidations", "common", "sections"]);

  //Check loading for loading button
  const [loading, setLoading] = React.useState(false);

  //to open wallet and submit profile
  const handleOpenWallet = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setStep(loginStepManager.selectRole);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MiniContainer>
      <Stack
        direction="column"
        height={"100%"}
        justifyContent={"space-between"}
      >
        <Stack spacing={5} alignItems="center">
          <TitleWithDescription
            direction="column"
            title={t("common:metamask")}
            icon={<FoxIcon width={40} height={40} />}
          />
          <Typography
            textAlign={"center"}
            variant="smallRegular"
            color={"text.secondary"}
          >
            {t("sections:submit_wallet_description")}
          </Typography>
        </Stack>
        <OpenWalletActions
          loading={loading}
          handleOpenWallet={handleOpenWallet}
          title={walletData.title}
        />
      </Stack>
    </MiniContainer>
  );
};

export default LoginSubmitWallet;

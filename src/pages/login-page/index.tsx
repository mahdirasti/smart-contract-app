//Built-in import
import * as React from "react";
//Internal import
import { LoginWrapper } from "@/containers/login-wrapper";
import { LoginOpenWallet } from "@/components/pages/login";
import { LoginSubmitProfile } from "@/components/pages/login";
import { loginStepManager } from "@/types/login";
import { LoginSelectWallet } from "@/components/pages/login";
import { SelectUserRole } from "@/components/pages/login";

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  //Shared states
  const [step, setStep] = React.useState(loginStepManager.selectWallet);

  /**
   * Render login steps based on currentStep
   */
  const RenderSteps = () => {
    switch (step) {
      case loginStepManager.selectWallet:
        return <LoginSelectWallet setStep={setStep} />;
      case loginStepManager.submitWallet:
        return <LoginOpenWallet setStep={setStep} />;
      case loginStepManager.selectRole:
        return <SelectUserRole setStep={setStep} />;
      case loginStepManager.submitProfile:
        return <LoginSubmitProfile />;
    }
  };

  return (
    <LoginWrapper>
      <RenderSteps />
    </LoginWrapper>
  );
};

export default LoginPage;

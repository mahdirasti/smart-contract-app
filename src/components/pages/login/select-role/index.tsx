//Built-in import
import * as React from "react";
//External import
import { Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
//Internal import
import UserOctagonIcon from "@/components/icons/user-octagon";
import TitleWithDescription from "@/components/shared/title-with-description";
import { loginStepManager } from "@/types/login";

import UserRoles from "./roles";
import { LoadingButton } from "@mui/lab";

interface ISelectUserRoleProps {
  setStep?: (value: loginStepManager) => void;
}

const SelectUserRole: React.FunctionComponent<ISelectUserRoleProps> = ({
  setStep,
}) => {
  //Getting mui theme
  const theme = useTheme();
  //Getting translation object
  const { t } = useTranslation(["common"]);
  //set role value into state
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmitValue = React.useCallback((value: any) => {
    setValue(value);
  }, []);

  return (
    <Stack alignItems={"center"} width={"100%"} p={2}>
      <TitleWithDescription
        direction="column"
        title={t("common:select_your_role")}
        icon={
          <UserOctagonIcon
            color={theme.palette.primary.main}
            width={30}
            height={30}
          />
        }
      />
      <UserRoles value={value} handleChangeValue={handleSubmitValue} />
      <LoadingButton
        fullWidth
        disabled={!value.length}
        loading={loading}
        variant="contained"
        color="primary"
        onClick={() => setStep(loginStepManager.submitProfile)}
      >
        {t("common:next")}
      </LoadingButton>
    </Stack>
  );
};

export default SelectUserRole;

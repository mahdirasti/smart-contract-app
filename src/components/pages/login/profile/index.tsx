//Built-in import
import * as React from "react";
//External import
import * as Yup from "yup";
import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
//Internal import
import MiniContainer from "@/containers/holders/miniContainer";
import ProfileAvatar from "./profile-avatar";
import { routeNames } from "@/navigation";

interface ILoginSubmitProfileProps {}

interface IFormikValues {
  nickname: string;
}

const LoginSubmitProfile: React.FunctionComponent<ILoginSubmitProfileProps> = (
  props
) => {
  const { t } = useTranslation(["inputValidations", "common", "sections"]);

  const { activities } = routeNames;
  //Getting react router navigation
  const navigate = useNavigate();

  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik<IFormikValues>({
    validationSchema: Yup.object().shape({
      nickname: Yup.string().required(
        t("inputValidations:this_field_is_required")
      ),
    }),
    initialValues: {
      nickname: "",
    },
    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
      setTimeout(() => {
        navigate(`/${activities.index}`);
        actions.setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <MiniContainer>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent={"space-between"}
        height="100%"
        spacing={3}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Stack spacing={3} alignItems="center" width={"100%"}>
          <ProfileAvatar />
          <TextField
            fullWidth
            variant="filled"
            placeholder={t("common:add_your_nickname")}
            name="nickname"
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched["nickname"] && errors["nickname"])}
            helperText={touched["nickname"] && errors["nickname"]}
          />
          <Typography
            variant="smallMedium"
            color="text.secondary"
            width={"100%"}
          >
            {t("sections:nickname_visibility")}
          </Typography>
        </Stack>
        <LoadingButton
          loading={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%", fontSize: "12px", py: "12px" }}
        >
          {t("common:continue")}
        </LoadingButton>
      </Stack>
    </MiniContainer>
  );
};

export default LoginSubmitProfile;

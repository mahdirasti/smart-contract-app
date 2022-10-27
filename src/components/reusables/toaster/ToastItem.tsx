import { IconButton, Stack, Typography, styled } from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ToastContentProps } from "react-toastify";

type Props = {
  type: "success" | "info" | "danger" | "warning";
};

const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

/**
 * Custom Toast message body.
 * Accepts type and children props
 * @param props
 * @returns
 */

const ToastItem: React.FC<Partial<ToastContentProps> & Props> = (props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton>
        <CloseRoundedIcon />
      </IconButton>
      <Typography
        variant="subtitleMedium"
        color={`toast.${props.type}.text`}
        sx={{ fontFamily: "Epilogue" }}
      >
        {props.children}
      </Typography>
    </Stack>
  );
};

export default ToastItem;

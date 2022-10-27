import {
  Box,
  IconButton,
  LinearProgress,
  Modal,
  Typography,
  alpha,
  Paper,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseIcon from "@mui/icons-material/Close";
import { FModalProps } from "./interface";

export const FModal: React.FC<FModalProps> = ({
  children,
  open = false,
  handleClose,
  headerTitle,
  isShow,
  sx = {},
  px = 2,
  py = 2,
  forwardProps,
  headerBack,
  hasOverflow = true,
  parentSx = {},
  isLoading = false,
  gravity = "modal",
}) => {
  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus
      open={open}
      onClose={handleClose}
      sx={parentSx}
    >
      <Box
        className="content-parent"
        sx={{
          position: ["absolute"],
          top: [gravity === "modal" ? "0" : "initial", , "50%"],
          left: ["0", , "50%"],
          bottom: ["0", , "initial"],
          right: ["0", , "initial"],
          transform: ["none", , "translate(-50%, -50%)"],
          borderBottomRightRadius: [0, , "12px"],
          borderBottomLeftRadius: [0, , "12px"],
          borderTopRightRadius: [gravity === "modal" ? 0 : "12px", , "12px"],
          borderTopLeftRadius: [gravity === "modal" ? 0 : "12px", , "12px"],
          bgcolor: (t) => t.palette.secondary.dark,
          width: headerTitle ? ["100%", , 500] : ["auto", , "400px"],
          maxWidth: "100%",
          maxHeight: ["100%", , "90%"],
          overflowY: hasOverflow ? "auto" : "hidden",
          pt: 0,
          pb: 1,
          px: 0,
          ...sx,
        }}
      >
        {isLoading && (
          <Box>
            <LinearProgress />
          </Box>
        )}

        <Box
          sx={{
            opacity: isLoading ? 0.5 : 1,
            pointerEvents: isLoading ? "none" : "initial",
          }}
        >
          {headerTitle && (
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid",
                justifyContent: "space-between",
                borderColor: (t) => alpha(t.palette.common.black, 0.12),
                bgcolor: (t) => t.palette.common.white,
                position: "sticky",
                top: 0,
                zIndex: 11,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {headerBack ? (
                  <IconButton sx={{ mr: 1 }} onClick={headerBack}>
                    <ArrowBackRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton sx={{ mr: 1 }} onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                )}
                <Typography
                  component="h2"
                  variant="h6"
                  sx={{ fontWeight: "500" }}
                >
                  {headerTitle}
                </Typography>
              </Box>
              {forwardProps && forwardProps}
            </Box>
          )}
          <Box
            sx={{
              p: 2,
              px,
              py,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

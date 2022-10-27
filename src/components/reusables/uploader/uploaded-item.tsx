import { Box, IconButton, Typography, alpha } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { VideoUploadItemProps } from "./interface";

export const UploadedItem: React.FC<VideoUploadItemProps> = ({
  file,
  fileName = "",
  handleClose,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        pr: 0,
        pl: 2,
        justifyContent: "space-between",
      }}
    >
      <IconButton
        onClick={(e) => {
          if (handleClose && typeof handleClose === "function") {
            e.stopPropagation();
            e.preventDefault();
            handleClose();
          }
        }}
        sx={{
          mr: 1,
          bgcolor: (t) => `${alpha(t.palette.common.white, 0.5)} !important`,
          [`&:hover`]: {
            bgcolor: (t) => `${t.palette.common.white} !important`,
          },
        }}
        size="small"
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

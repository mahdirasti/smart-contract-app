import { Box } from "@mui/material";
import * as React from "react";
import GalleryAddIcon from "@/components/icons/gallery-add";

interface IProfileAvatarProps {}

const ProfileAvatar: React.FunctionComponent<IProfileAvatarProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 110,
        height: 110,
        bgcolor: (t) => t.palette.divider,
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <GalleryAddIcon />
    </Box>
  );
};

export default ProfileAvatar;

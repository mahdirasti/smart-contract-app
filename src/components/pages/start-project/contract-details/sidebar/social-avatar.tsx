import { ASSETS_PATH } from "@/consistants";
import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";

interface ISocialAvatarProps {}

const SocialAvatar: React.FunctionComponent<ISocialAvatarProps> = (props) => {
  return (
    <Stack spacing={1} alignItems="center">
      <Box
        sx={{
          width: "100%",
          height: "100",
          "& img": { borderRadius: "8px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          width={50}
          height={50}
          src={`${ASSETS_PATH}/projects/simon-lee.png`}
          alt={"social-contract"}
        />
      </Box>
    </Stack>
  );
};

export default SocialAvatar;

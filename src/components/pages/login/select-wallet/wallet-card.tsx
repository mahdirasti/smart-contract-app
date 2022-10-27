//Built-in import
import * as React from "react";
//External import
import { Box, Stack, Typography } from "@mui/material";

interface IWalletCardProps {
  src: string;
  title: string;
}

const WalletCard: React.FunctionComponent<IWalletCardProps> = ({
  src,
  title,
}) => {
  return (
    <Stack
      bgcolor={(t) => t.palette.divider}
      borderRadius={2}
      direction="row"
      width="100%"
      p={1}
      alignItems="center"
      justifyContent={"start"}
      spacing={2}
      sx={{
        cursor: "pointer",
        "& p": { color: (t) => t.palette.common.white },
      }}
    >
      <Box
        sx={{
          width: 45,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          bgcolor: (t) => t.palette.extended_colors.wallet_card.main,
        }}
      >
        <img width={30} height={30} src={src} alt={title} />
      </Box>
      <Typography variant="xsmallMedium" color="text.secondary">
        {title}
      </Typography>
    </Stack>
  );
};

export default WalletCard;

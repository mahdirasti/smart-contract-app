import { Box, Typography, Stack, SxProps, Theme } from "@mui/material";

interface ShowDetailsProps {
  title: string;
  value: string;
  sx?: SxProps<Theme>;
}

const ShowDetailsBox: React.FunctionComponent<ShowDetailsProps> = ({
  title,
  value,
  sx = {},
}) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      borderRadius={2}
      p={2}
      alignItems="center"
      sx={sx}
    >
      <Typography variant="subtitleRegular" sx={{ color: "rgba(0,0,0,0.6)" }}>
        {title}
      </Typography>
      <Typography variant="subtitleMedium" color="common.black">
        {value}
      </Typography>
    </Stack>
  );
};

export default ShowDetailsBox;

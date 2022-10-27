import ProfileCircle from "@/components/icons/profile-circle"
import { Box, Stack, Typography, useTheme } from "@mui/material"
import * as React from "react"

interface IAppliedPeopleBoxProps {
  title?: string
  status?: string
}

const AppliedPeopleBox: React.FunctionComponent<IAppliedPeopleBoxProps> = ({
  title = "username",
  status = "inprogress"
}) => {
  const theme = useTheme()
  return (
    <Stack
      direction="row"
      spacing={1}
      width={145}
      height={52}
      alignItems="center"
      borderRadius={2}
      px={1}
      bgcolor={(t) => t.palette.extended_colors.status.main}
      justifyContent={"start"}
    >
      <Box
        sx={{
          borderRadius: "50%",
          display: "flex",
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          bgcolor: (t) => t.palette.divider
        }}
      >
        <ProfileCircle color={theme.palette.text.disabled} />
      </Box>
      <Stack>
        <Typography variant="smallMedium" color="grey.A100">
          {title}
        </Typography>
        <Typography
          variant="smallMedium"
          sx={{ mt: 0.1 }}
          color="text.disabled"
        >
          {status}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default AppliedPeopleBox

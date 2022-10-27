import DownloadIcon from "@/components/icons/download-icon"
import { Box, Stack, Typography } from "@mui/material"
import * as React from "react"

interface IAttachmentBoxProps {
  title?: string
}

const AttachmentBox: React.FunctionComponent<IAttachmentBoxProps> = ({
  title = "new project"
}) => {
  return (
    <Box
      sx={{
        width: 91,
        height: 91,
        bgcolor: (t) => t.palette.extended_colors.status.main,
        borderRadius: 2,
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      <Stack alignItems="center" width={"100%"} spacing={1}>
        <DownloadIcon />
        <Typography
          variant="smallMedium"
          whiteSpace="nowrap"
          width={70}
          textOverflow="ellipsis"
          overflow={"hidden"}
          color={"text.disabled"}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  )
}

export default AttachmentBox

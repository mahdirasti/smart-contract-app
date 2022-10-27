import * as React from "react"

import {
  Box,
  Breakpoint,
  Container,
  IconButton,
  Stack,
  Typography,
  alpha,
  Avatar,
  Badge
} from "@mui/material"

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import IconButtonWithPopover from "@/components/reusables/icon-button-with-popover"
import CalenderIcon from "@/components/icons/calender-icon"

interface IPageHeadingProps {
  metaData?: React.ReactElement
  container?: Breakpoint
  role?: string
}

const PageHeading: React.FunctionComponent<IPageHeadingProps> = ({
  metaData,
  container = "xl",
  role = "employer"
}) => {
  return (
    <Box sx={{ bgcolor: (t) => alpha(t.palette.secondary.dark, 0.5) }}>
      <Container maxWidth={container} sx={{ px: [3, , 0] }}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
          px={4}
          py={1}
        >
          {Boolean(metaData) && <Box>{metaData}</Box>}
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButtonWithPopover
              sx={{ "& .MuiIconButton-root": { p: 0 } }}
              hasBadge={true}
              label={<CalenderIcon />}
            />
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar />
              <Stack
                sx={{
                  ["& p"]: {
                    fontSize: "14px",
                    display: "flex"
                  }
                }}
              >
                <Typography textTransform={"capitalize"}>userName</Typography>
                <Box
                  sx={{
                    bgcolor: (t) => t.palette.primary.main,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 0.4
                  }}
                >
                  <Typography>{role}</Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default PageHeading

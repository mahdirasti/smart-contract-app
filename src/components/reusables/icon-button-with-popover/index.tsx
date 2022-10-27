import * as React from "react"

import { Badge, Box, IconButton, Popover, SxProps, Theme } from "@mui/material"

interface IIconButtonWithPopoverProps {
  label: React.ReactElement
  loading?: boolean
  buttonId?: string
  buttonColor?:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
  width?: number | number[]
  sx?: SxProps<Theme>
  hasBadge?: boolean
}

const IconButtonWithPopover: React.FunctionComponent<
  IIconButtonWithPopoverProps
> = ({
  label,
  loading = false,
  buttonId = "button-popover",
  children,
  buttonColor = "inherit",
  width = 230,
  sx = {},
  hasBadge = false
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? buttonId : undefined

  return (
    <Box sx={sx}>
      {hasBadge ? (
        <Badge
          variant="dot"
          invisible={!hasBadge}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <IconButton
            aria-describedby={id}
            onClick={handleClick}
            color={buttonColor}
          >
            {label}
          </IconButton>
        </Badge>
      ) : (
        <IconButton
          aria-describedby={id}
          onClick={handleClick}
          color={buttonColor}
        >
          {label}
        </IconButton>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        sx={{
          [`& .MuiPaper-root`]: {
            px: "0 !important"
          }
        }}
      >
        <Box sx={{ width, maxWidth: "100%" }}>{children}</Box>
      </Popover>
    </Box>
  )
}

export default IconButtonWithPopover

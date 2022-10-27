import * as React from "react"

import { Box, IconButton, Popover, SxProps, Theme, Button } from "@mui/material"

interface IButtonWithPopoverProps {
  icon: React.ReactNode
  label: string
  loading?: boolean
  buttonId?: string
  buttonColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
  width?: number | number[]
  sx?: SxProps<Theme>
  sxBox?: SxProps<Theme>
}

const ButtonWithPopover: React.FunctionComponent<IButtonWithPopoverProps> = ({
  label = "",
  icon,
  loading = false,
  buttonId = "button-popover",
  children,
  buttonColor = "primary",
  width = 230,
  sx = {},
  sxBox = {}
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
    <>
      <Button
        variant="outlined"
        color={buttonColor}
        sx={{
          color: (t) => t.palette.grey[900],
          px: 2,
          bgcolor: (t) => t.palette.grey["A100"],
          borderColor: (t) => t.palette.grey[500],
          ["&:hover"]: {
            borderColor: (t) => t.palette.grey[500]
          }
        }}
        onClick={handleClick}
        {...(icon && {
          startIcon: icon
        })}
      >
        {label}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        sx={{
          [`& .MuiPaper-root`]: {
            bgcolor: (t) => t.palette.grey[500],

            px: "0 !important"
          },
          ...sx
        }}
      >
        <Box
          sx={{
            width,
            maxWidth: "100%",
            p: 2,
            bgcolor: "transparent",
            ...sxBox
          }}
        >
          {children}
        </Box>
      </Popover>
    </>
  )
}

export default ButtonWithPopover

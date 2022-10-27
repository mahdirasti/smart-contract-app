import * as React from "react"

import { Box, Stack, Switch, Typography, alpha } from "@mui/material"
import { INestedItemComponent, INestedItemProps } from "./interfaces/item"

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

interface IRendererNestedItemProps {
  item: INestedItemProps
  isActive?: boolean
  onClick?: (item: INestedItemComponent) => void
}

export const nonClickableComponent = ["switch"]

const RendererNestedItem: React.FunctionComponent<IRendererNestedItemProps> = ({
  item,
  isActive = false,
  onClick
}) => {
  const RenderContent = () => {
    switch (item.type) {
      case "component":
        return (
          <Stack direction="row" justifyContent="space-between">
            <Typography component="span">{item.label}</Typography>
            <ChevronLeftIcon />
          </Stack>
        )
      case "switch":
        return (
          <Stack direction="row" justifyContent="space-between">
            <Typography component="span">{item.label}</Typography>
            <Switch
              defaultChecked={item.checked}
              onChange={item.onChange}
            ></Switch>
          </Stack>
        )
      default:
        return <div></div>
    }
  }

  const isNonClickable = nonClickableComponent.includes(item.type)

  return (
    <Box
      sx={{
        p: 1.5,
        transition: "0.2s all",
        cursor: "pointer",
        [`&:hover, &.active`]: {
          bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
          color: (t) => t.palette.primary.main,
          borderRadius: 2
        },
        [`&:not(.non-clickable)`]: {
          bgcolor: "transparent",
          color: (t) => t.palette.common.black
        }
      }}
      onClick={() => {
        if (onClick && typeof onClick === "function" && !isNonClickable)
          onClick(item as INestedItemComponent)
      }}
      className={`${isActive ? "active" : ""} ${
        !isNonClickable ? "non-clickable" : "clickable"
      }`}
    >
      <RenderContent />
    </Box>
  )
}

export default RendererNestedItem

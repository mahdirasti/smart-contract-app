import { Stack, SxProps, Theme, Typography } from "@mui/material"
import * as React from "react"

interface IDetailsBoxWithIconProps {
  icon: React.ReactNode
  title: string
  value: string
  sx?: SxProps<Theme>
  isVertical?: boolean
}

const DetailsBoxWithIcon: React.FunctionComponent<IDetailsBoxWithIconProps> = ({
  icon,
  title,
  value,
  isVertical = true,
  sx
}) => {
  const Vertical = (
    <Stack
      alignItems="center"
      justifyContent={"start"}
      spacing={1}
      p={1}
      sx={{
        borderRadius: "6px",
        width: ["100%", , , 90],
        height: 83,
        bgcolor: (t) => t.palette.extended_colors.status.main,
        ...sx
      }}
    >
      {icon}
      <Typography variant="smallMedium" color={"grey.600"}>
        {title}
      </Typography>
      <Typography variant="smallMedium" color={"text.secondary"}>
        {value}
      </Typography>
    </Stack>
  )
  const Horizontal = (
    <Stack
      alignItems="center"
      justifyContent={"space-between"}
      flexDirection="row"
      p={2}
      sx={{
        borderRadius: "6px",
        width: "100%",
        bgcolor: (t) => t.palette.extended_colors.status.main,
        ...sx
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {icon}
        <Typography variant="subtitleMedium" color={"text.secondary"}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="subtitleMedium" color={"text.secondary"}>
        {value}
      </Typography>
    </Stack>
  )
  return <>{isVertical ? Vertical : Horizontal}</>
}

export default DetailsBoxWithIcon

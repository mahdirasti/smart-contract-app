import * as React from "react"
import Slider, { SliderThumb } from "@mui/material/Slider"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 4,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 17,
    width: 17,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey["A100"]}`,
    borderRadius: "4px",
    "&:hover": {
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.grey["A100"]}`
    },
    "&:before": {
      boxShadow: "none"
    },
    "& .MuiSlider-valueLabel": {
      transform: "translateY(100%) scale(1)",
      backgroundColor: "transparent",
      color: theme.palette.primary.main
    }
  },
  "& .MuiSlider-track": {
    height: 5
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3
  }
}))

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props
  return <SliderThumb {...other}>{children}</SliderThumb>
}

const RangeSlider = () => {
  return (
    <Box>
      <CustomSlider
        components={{ Thumb: AirbnbThumbComponent }}
        valueLabelDisplay="on"
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[20, 80]}
      />
    </Box>
  )
}
export default RangeSlider

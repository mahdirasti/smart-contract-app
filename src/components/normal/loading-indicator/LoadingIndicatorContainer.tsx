import { Backdrop, CircularProgress, LinearProgress } from "@mui/material"

type Props = {
  fullScreen?: boolean
  type?: "linear" | "circular"
}

const LoadingIndicatorContainer = ({
  fullScreen = false,
  type = "circular"
}: Props) => {
  const indicator =
    type === "circular" ? (
      <CircularProgress color="primary" />
    ) : (
      <LinearProgress color="primary" />
    )
  return fullScreen ? (
    <Backdrop
      open
      sx={{ bgcolor: (t) => t.palette.common.white, opacity: 0.6 }}
    >
      {indicator}
    </Backdrop>
  ) : (
    indicator
  )
}

export default LoadingIndicatorContainer

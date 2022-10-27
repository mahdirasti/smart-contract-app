import { Box, alpha } from "@mui/material"
import * as React from "react"
import { useTranslation } from "react-i18next"

interface ISeeMoreBoxProps {}

const SeeMoreBox: React.FunctionComponent<ISeeMoreBoxProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        p: 0.5,
        width: 85,
        display: "flex",
        justifyContent: "center",
        borderRadius: 2,
        cursor: "pointer",
        textAlign: "center",
        bgcolor: (t) => alpha(t.palette.common.black, 0.1),
        color: (t) => t.palette.common.black
      }}
    >
      {t("see_more")}
    </Box>
  )
}

export default SeeMoreBox

import { ASSETS_PATH } from "@/consistants"
import { Box } from "@mui/material"

const Logo: React.FC = () => {
  return (
    <Box
      component="a"
      sx={{
        cursor: "pointer",
        [`& img`]: {
          width: [37, , 60],
          height: 40
        }
      }}
    >
      <img src={`${ASSETS_PATH}/logo.png`} alt="" width={200} height={306} />
    </Box>
  )
}

export default Logo

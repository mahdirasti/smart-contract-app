import Desktop from "./desktop"
// import Mobile from "./mobile";
import { getPaths } from "@/utils"
import { useLocation } from "react-router-dom"
import { useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"

interface IPageBreadCrumbsProps {
  pathId?: number
}

const PageBreadcrumb: React.FunctionComponent<IPageBreadCrumbsProps> = ({
  pathId
}): React.ReactElement => {
  const theme = useTheme()
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation()
  const location = useLocation()
  const paths = getPaths(location.pathname, t)

  // const currentTitle = (paths.length && paths[paths.length - 1].title) || "";

  return <Desktop items={paths} pathId={pathId} />

  // return isDesktop ? (
  //   <Desktop items={paths} />
  // ) : (
  //   <Mobile
  //     currentTitle={currentTitle}
  //     previousLink={paths[paths.length - 2]?.path}
  //   />
  // );
}

export default PageBreadcrumb

import * as React from "react"

import { Box, List, Stack, alpha, SxProps, Theme } from "@mui/material"
import { ListItemWithIcon } from "@/components/reusables/ListItemWithicon"
import { SidebarNavigatorItem } from "@/types"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"

interface INavigationSidebarProps {
  items: SidebarNavigatorItem[]
  sxParent?: SxProps<Theme>
}

const NavigationSidebar: React.FunctionComponent<INavigationSidebarProps> = ({
  items = [],
  sxParent = {}
}) => {
  const location = useLocation()

  const { t } = useTranslation()
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{
        bgcolor: (t) => t.palette.secondary.dark,
        borderRadius: 2,
        position: ["relative", , , "sticky"],
        height: 530,
        maxHeight: "100%",
        top: ["initial", , , 24],
        ...sxParent
      }}
    >
      <List
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          pt: 2,
          pb: 7,
          top: [0, , 16]
        }}
      >
        {items.map((item) => {
          return (
            <Box
              className="box-container"
              sx={{
                mx: 2,
                position: "relative"
              }}
              onClick={() => {
                if (typeof item?.onClick === "function") item?.onClick()
              }}
            >
              <ListItemWithIcon
                key={item.href}
                {...item}
                href={item.type === "js" ? undefined : `${item.href}`}
              />
              {Boolean(item?.notificationCount) && (
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: (t) => alpha(t.palette.primary.main, 0.12),
                    color: (t) => t.palette.primary.main,
                    width: 28,
                    height: 28,
                    position: "absolute",
                    top: "50%",
                    right: 8,
                    transform: "translateY(-50%)",
                    borderRadius: "50px"
                  }}
                >
                  {item.notificationCount}
                </Stack>
              )}
            </Box>
          )
        })}
      </List>
    </Stack>
  )
}

export default React.memo(NavigationSidebar, (prevProps, nextProps) => {
  if (prevProps.items.length !== nextProps.items.length) {
    return false
  } else {
    return true
  }
})

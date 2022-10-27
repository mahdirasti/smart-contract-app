import * as React from "react"

import { Box, SxProps, Tab, Tabs, Theme, alpha } from "@mui/material"

interface ITab {
  label: string
  children: React.ReactElement
  tabIcon?: string | null
}

interface IMyTabsProps {
  tabId: string
  items: ITab[]
  onChange?: (activeTab: number) => void
  sx?: SxProps<Theme>
}

interface IMyTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
  tabId: string
}

/**
 * Reusable tabs component, dynamic tab with our unique styles!
 */

/**
 * Add id and ... by index number
 */
function addSomeMetaToTab(tabId: string = "single-tab", index: number) {
  return {
    id: `${tabId}-${index}`,
    "aria-controls": `${tabId}-${index}`
  }
}

/**
 * Tab Panel, holder of each tab's children!
 */
function TabPanel(props: IMyTabPanelProps) {
  const { children, value, index, tabId, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabId}-${index}`}
      aria-labelledby={`${tabId}-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  )
}

const MyTabs: React.FunctionComponent<IMyTabsProps> = (props) => {
  const { tabId, items = [], onChange, sx = {} } = props

  const [activeTab, setActiveTab] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    if (onChange && typeof onChange === "function") {
      onChange(newValue)
    }
  }

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label={tabId}
        sx={{
          px: 2,
          borderBottom: 1,
          borderColor: (t) => alpha(t.palette.common.black, 0.12),
          [`& .MuiTab-root`]: {
            maxWidth: "initial",
            minHeight: "initial",
            display: "flex",
            alignItems: "center",
            py: 2,
            fontWeight: "500",
            fontSize: 16
          },
          ...sx
        }}
      >
        {items.map((item, key) => {
          const activeIcon = activeTab === key
          return (
            <Tab
              label={item.label}
              {...addSomeMetaToTab(tabId, 0)}
              icon={item.tabIcon ? item.tabIcon : <></>}
              iconPosition={"start"}
              key={key}
            />
          )
        })}
      </Tabs>
      {items.map((item, key) => {
        return (
          <TabPanel tabId={tabId} key={key} value={activeTab} index={key}>
            {item.children}
          </TabPanel>
        )
      })}
    </Box>
  )
}

export default MyTabs

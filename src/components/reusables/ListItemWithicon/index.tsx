import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  alpha,
  ListItemIcon
} from "@mui/material"

import { Link } from "react-router-dom"
import { ListItemWithIconProps } from "./interface"

export const ListItemWithIcon: React.FC<ListItemWithIconProps> = ({
  title,
  value,
  href,
  isActive = false,
  onClick,
  icon,
  activeIcon,
  meta = null,
  isChild = false
}) => {
  const handleClick = () => {
    if (onClick) onClick(value || title)
  }

  const Inner = (
    <ListItemButton
      onClick={handleClick}
      disableRipple
      sx={{
        borderRadius: 2
      }}
    >
      {icon && (
        <ListItemIcon
          className={isActive ? "active" : ""}
          sx={{ minWidth: "32px !important", mb: 0.5 }}
        >
          {isActive ? activeIcon : icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={title}
        sx={{
          color: (t) =>
            isActive
              ? `${t.palette.primary.main} !important`
              : alpha(t.palette.common.white, 0.88),
          textTransform: "capitalize"
        }}
      />
    </ListItemButton>
  )

  return (
    <ListItem
      disablePadding
      sx={{
        whiteSpace: "nowrap",
        borderColor: (t) => alpha(t.palette.divider, 0.1),
        [`& a`]: {
          width: "100%",
          textDecoration: "none"
        },
        ["&:before"]: {
          content: '""',
          width: 4,
          height: 32,
          position: "absolute",
          bgcolor: (t) => t.palette.primary.main,
          left: isChild ? -24 : -16,
          top: "50%",
          transform: "translateY(-50%)",
          display: isActive ? "block" : "none",
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4
        }
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: "100%",
          [`& a`]: {
            width: "100%"
          }
        }}
      >
        {href ? (
          <Link to={href}>
            <Box
              sx={{
                width: "100%"
              }}
            >
              {Inner}
            </Box>
          </Link>
        ) : (
          Inner
        )}
        {meta && <Box>{meta}</Box>}
      </Stack>
    </ListItem>
  )
}

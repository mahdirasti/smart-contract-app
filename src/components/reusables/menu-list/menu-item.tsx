import * as React from "react";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  alpha,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export interface IMenuListItemProps {
  icon?: React.ReactElement;
  title: string;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const MenuListItem: React.FunctionComponent<IMenuListItemProps> = (props) => {
  const navigate = useNavigate();

  const {
    icon,
    title,
    onClick,
    href,
    isActive = false,
    isDisabled = false,
  } = props;

  //Handle click on list item button
  const handleClickOnItem = () => {
    if (href) {
      navigate(href);
    } else if (onClick && typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <ListItem
      disablePadding
      sx={{
        mb: 1,
        [`&:last-child`]: {
          mb: 0,
        },
      }}
    >
      <ListItemButton
        onClick={handleClickOnItem}
        sx={{
          backgroundColor: (t) =>
            isActive ? alpha(t.palette.primary.main, 0.12) : "transparent",
          color: (t) =>
            isActive ? t.palette.primary.main : t.palette.common.black,
          borderRadius: 2,
        }}
        disabled={isDisabled}
      >
        {Boolean(icon) && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuListItem;

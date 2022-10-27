import { SidebarNavigatorItem } from "@/types";

import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type SidebarItemType = "parent" | "item" | "js";

export interface sidebarItem {
  title: string;
  href?: string;
  type?: SidebarItemType;
  onClick?: Function;
  notifcationCount?: number;
  permission?: string;
  icon: ReactJSXElement;
  activeIcon: ReactJSXElement;
  children?: sidebarItem[];
}

const sidebarItemsCreator = (
  items: sidebarItem[],
  pathname: string,
  permissions: string[] = []
): SidebarNavigatorItem[] => {
  return items
    .filter((item) => {
      if (item.permission && permissions.length) {
        if (!permissions.includes(item.permission)) {
          return false;
        }
      }
      return true;
    })
    .map((item) => {
      return {
        title: item.title,
        href: item.href ? `/${item.href}` : "/",
        isActive: item.href ? pathname === `/${item.href}` : true,
        type: item.type || "item",
        icon: item.icon,
        activeIcon: item.activeIcon,
        notificationCount: item.notifcationCount,
        onClick: item.onClick,
        children: item.children,
      };
    });
};

export default sidebarItemsCreator;

import { sidebarItem, SidebarItemType } from "@/utils/sidebarItemsCreator";
import { ReactElement } from "react";
export type InputVariant = "outlined" | "filled" | "standard";

export type StackDirection = "column" | "row";
export type FlexJustifyContent =
  | "space-between"
  | "flex-start"
  | "flex-end"
  | "center";

//Category
export interface Category {
  children: Category[];
  created_at: string;
  deleted_at: string | null;
  description: string | null;
  group: string; //Todo - Group types
  id: number;
  name: string;
  parent_id: number | null;
  slug: string;
  updated_at: string;
  _lft: number;
  _rgt: number;
}

//Tag
export interface Tag {
  created_at: string;
  description: any;
  group: string;
  id: number;
  name: string;
  name_en: any;
  slug: string;
  updated_at: string;
}

//Attribute
export type AttributeType =
  | "multiple-options"
  | "binary"
  | "long-text"
  | "short-text"
  | "country"
  | "date"
  | "numerical";

export type AttributeSelectionOptionState =
  | "multiple-selection"
  | "single-selection";

export interface AttributeSelectorOption {
  title: string;
  value: string;
}

export interface Attribute {
  title: string;
  type: AttributeType;
  selectionOptionState: AttributeSelectionOptionState;
  selectorOptions: AttributeSelectorOption[];
}

export interface ApiAttribute {
  created_at: string;
  id: number;
  name: string;
  type: AttributeType;
  meta: string[];
  updated_at: string;
}

//Sidebar item
export interface SidebarNavigatorItem {
  title: string;
  href: string;
  isActive?: boolean;
  type?: SidebarItemType;
  onClick?: Function;
  icon: ReactElement;
  activeIcon: ReactElement;
  notificationCount?: number;
  permission?: string;
  children?: sidebarItem[];
}
//filter items
export interface IListingPageWithFilters {
  loading?: boolean;
  filterData?: any;
  setFilterData?: any;
  search?: (filterData: any) => void;
}

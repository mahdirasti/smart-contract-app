import { ReactNode } from "react";

export type INestedItemType = "component" | "switch";

export interface INestedItem {
  id?: number | string;
  label: string;
  type: INestedItemType;
}

export interface INestedItemComponent extends INestedItem {
  children: ReactNode;
  type: "component";
  onClick?: (item: INestedItemProps) => void;
}

export interface INestedItemSwitch extends INestedItem {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  type: "switch";
}

export type INestedItemProps = INestedItemComponent | INestedItemSwitch;

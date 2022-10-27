import * as React from "react";

import MenuListItem, { IMenuListItemProps } from "./menu-item";

interface IonClickOnItem extends IMenuListItemProps {
  index: number;
}

interface IMenuListItemsProps {
  ariaLabel?: string;
  items: IMenuListItemProps[];
  onClickOnItem?: (item: IonClickOnItem) => void;
}

const MenuListItems: React.FunctionComponent<IMenuListItemsProps> = ({
  ariaLabel,
  items,
  onClickOnItem,
}) => {
  const handleClickOnEachItem = (
    item: IMenuListItemProps,
    index: number,
    onClick?: () => void
  ) => {
    if (onClick && typeof onClick == "function") {
      onClick();
    }
    if (onClickOnItem && typeof onClickOnItem === "function") {
      onClickOnItem({ ...item, index });
    }
  };

  return (
    <nav aria-label={ariaLabel}>
      {items.map((item, key) => (
        <MenuListItem
          onClick={() => handleClickOnEachItem(item, key, item?.onClick)}
          key={key}
          {...item}
        />
      ))}
    </nav>
  );
};

export default MenuListItems;

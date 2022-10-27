import * as React from "react";
import { Box, Grid } from "@mui/material";
import { INestedItemComponent, INestedItemProps } from "./interfaces/item";
import RendererNestedItem from "./item-renderer";

interface INestedComponentProps {
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  items?: INestedItemProps[];
}

const NestedComponent: React.FunctionComponent<INestedComponentProps> = ({
  lg = 6,
  md = 6,
  sm = 12,
  xs = 12,
  items = [],
}) => {
  const [selectedItem, setSelectedItem] = React.useState<
    INestedItemComponent | undefined | null
  >(null);
  const handleSelectItem = (item: INestedItemComponent) => {
    setSelectedItem((prevItem: INestedItemComponent | undefined | null) => {
      if (prevItem) {
        if (prevItem.id === item.id) {
          return null;
        }
        return item;
      } else {
        return item;
      }
    });
  };

  //Active Item Component
  const activeItemComponent =
    selectedItem &&
    Boolean(items.length) &&
    (items.filter(
      (item) => item.id === selectedItem.id
    )[0] as INestedItemComponent);

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item lg={lg} md={md} sm={sm} xs={xs}>
          {items.map((item) => {
            return (
              <RendererNestedItem
                key={item.id}
                item={item}
                isActive={selectedItem ? item.id === selectedItem.id : false}
                onClick={(item) => {
                  handleSelectItem(item);
                }}
              />
            );
          })}
        </Grid>
        {selectedItem && activeItemComponent && (
          <Grid item lg={lg} md={md} sm={sm} xs={xs}>
            {activeItemComponent.children}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default NestedComponent;

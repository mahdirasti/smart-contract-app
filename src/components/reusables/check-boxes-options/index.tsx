import * as React from "react";

import { Checkbox, FormControlLabel, Stack } from "@mui/material";

interface ICheckBoxesOptionsProps {
  id: string;
  value: string[];
  items?: Option[];
  onChange?: (items: string[]) => void;
}

export interface Option {
  title: string;
  value: string;
  meta?: React.ReactNode;
}

const CheckBoxesOptions: React.FunctionComponent<ICheckBoxesOptionsProps> = ({
  items = [],
  id,
  value = [],
  onChange,
}) => {
  const [selected, setSelected] = React.useState<string[]>(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((crt) => {
      const values = crt.includes(e.target.name)
        ? crt.filter((item) => item !== e.target.name)
        : [...crt, e.target.name];
      if (onChange && typeof onChange === "function") {
        onChange(values);
      }
      return values;
    });
  };

  return items.length ? (
    <Stack direction="column" spacing={2} id={id}>
      {items.map((item) => {
        const isActive = selected.includes(item.value);
        return (
          <FormControlLabel
            sx={{ ml: 0, mt: "0 !important" }}
            control={
              <Checkbox
                checked={isActive}
                onChange={handleChange}
                name={item.value}
              />
            }
            label={item.title}
          />
        );
      })}
    </Stack>
  ) : null;
};

export default CheckBoxesOptions;

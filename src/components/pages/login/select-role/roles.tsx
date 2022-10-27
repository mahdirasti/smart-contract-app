//Built-in import
import * as React from "react";
//External import
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
//Internal import
import { roleItems } from "./data";

interface IUserRolesProps {
  value: string;
  handleChangeValue?: Function;
}

const UserRoles: React.FunctionComponent<IUserRolesProps> = ({
  value,
  handleChangeValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeValue((e.target as HTMLInputElement).value);
  };
  return (
    <Stack my={6} width={"100%"}>
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Stack spacing={2}>
            {roleItems.map((item, index) => {
              return (
                <Stack
                  bgcolor={(t) => t.palette.divider}
                  p={2}
                  borderRadius={3}
                  width={"100%"}
                >
                  <FormControlLabel
                    key={item.id}
                    value={item.title}
                    control={<Radio />}
                    label={item.title}
                  />
                </Stack>
              );
            })}
          </Stack>
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default React.memo(UserRoles);

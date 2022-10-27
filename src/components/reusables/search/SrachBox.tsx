import { Button, InputBase, Paper } from "@mui/material";
import * as React from "react";

interface ISearchBoxProps {
  placeholder?: string;
  btnTitle?: string;
  onChange?: (val: string) => void;
  onEnter?: (val: string) => void;
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({
  placeholder = "search a nickname or transaction",
  btnTitle = "search",
  onChange,
  onEnter,
}) => {
  const [val, setVal] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    if (onChange && typeof onChange === "function") {
      onChange(newValue);
    }
  };

  const clickOnSearch = () => {
    if (onEnter && typeof onEnter === "function" && val) {
      onEnter(val);
      setVal("");
    }
  };

  const handleKeyUp = (data: any) => {
    if (data.keyCode === 13) {
      clickOnSearch();
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 2,
        bgcolor: (t) => t.palette.divider,
        p: 0.7,
        display: "flex",
        alignItems: "center",
        width: 335,
      }}
    >
      <InputBase
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        sx={{
          mr: 1,
          flex: 1,

          ["& input"]: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: (t) => t.palette.common.black,
            ml: 1,
          },
        }}
        placeholder={placeholder}
        inputProps={{ "aria-label": `${placeholder}` }}
      />
      <Button
        variant="contained"
        sx={{
          bgcolor: (t) => t.palette.common.white,
          color: (t) => t.palette.common.black,
          ["&:hover"]: {
            bgcolor: (t) => t.palette.common.white,
          },
        }}
      >
        {btnTitle}
      </Button>
    </Paper>
  );
};

export default SearchBox;

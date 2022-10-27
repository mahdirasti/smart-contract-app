import * as React from "react";

import {
  Box,
  CircularProgress,
  IconButton,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { InputVariant } from "@/types";

interface IInputWithIconProps {
  placeholder?: string;
  onChange?: (val: string) => void;
  onClick?: (val: string) => void;
  inputFocused?: () => void;
  inputBlured?: () => void;
  icon?: React.ReactNode;
  sx?: SxProps<Theme>;
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  loading?: boolean;
  inner?: React.ReactNode;
}

var timeout: NodeJS.Timeout;

const InputWithIcon = React.forwardRef<HTMLInputElement, IInputWithIconProps>(
  (
    {
      placeholder = "",
      label = "",
      onChange,
      onClick,
      inputFocused,
      inputBlured,
      icon = <SearchIcon />,
      variant = "outlined",
      sx,
      loading = false,
      inner,
      ...rest
    },
    ref
  ) => {
    const [val, setVal] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);

      const newValue = e.target.value;

      setVal(newValue);
      if (onChange && typeof onChange === "function") {
        timeout = setTimeout(() => {
          onChange(newValue);
        }, 1000);
      }
    };

    const clickOnSearch = () => {
      if (onClick && typeof onClick === "function") {
        onClick(val);
      }
    };

    const handleKeyUp = (data: any) => {
      if (data.keyCode === 13) {
        clickOnSearch();
      }
    };

    return (
      <Box sx={{ position: "relative", maxWidth: "100%", ...sx }}>
        <TextField
          {...rest}
          variant={variant}
          placeholder={placeholder}
          label={label}
          onKeyUp={handleKeyUp}
          value={val}
          onChange={handleChange}
          inputProps={{
            ref,
            onFocus: () => {
              if (inputFocused && typeof inputFocused === "function") {
                inputFocused();
              }
            },
            onBlur: () => {
              if (inputBlured && typeof inputBlured === "function") {
                inputBlured();
              }
            },
          }}
        />
        <IconButton
          disabled={loading}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          onClick={clickOnSearch}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : icon}
        </IconButton>
        {inner && <Box sx={{ width: "100%", mt: 1 }}>{inner}</Box>}
      </Box>
    );
  }
);

export default InputWithIcon;

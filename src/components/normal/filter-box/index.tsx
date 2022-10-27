import { Button, InputBase, Paper } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface IFilterBoxProps {
  placeholder?: string;
  btnText?: string;
}

const FilterBox: React.FunctionComponent<IFilterBoxProps> = ({
  placeholder = "search a nickname",
  btnText,
}) => {
  const { t } = useTranslation(["common", "sections"]);
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 2,
        p: 1,
        py: 0.5,
        display: "flex",
        alignItems: "center",
        width: 300,
        maxWidth: "100%",
      }}
    >
      <InputBase
        sx={{
          mr: 1,
          flex: 1,
          ["& input"]: {
            color: (t) => t.palette.common.black,
          },
        }}
        placeholder={t("sections:search_a_nickname_or_transaction")}
        inputProps={{
          "aria-label": t("sections:search_a_nickname_or_transaction"),
        }}
      />
      <Button
        variant="contained"
        color="inherit"
        sx={{ width: 75, height: 32 }}
      >
        {btnText}
      </Button>
    </Paper>
  );
};

export default FilterBox;

import { Stack, Typography } from "@mui/material";
import * as React from "react";

interface IContractInfoProps {
  title: string;
  value: string;
}

const ContractInfo: React.FunctionComponent<IContractInfoProps> = ({
  title,
  value,
}) => {
  return (
    <Stack
      direction="row"
      width={"100%"}
      justifyContent="space-between"
      borderRadius={2}
      padding={3}
      bgcolor={(t) => t.palette.extended_colors.status.main}
    >
      <Typography
        variant="smallMedium"
        color={"text.secondary"}
        textTransform={"capitalize"}
      >
        {title}
      </Typography>
      <Typography variant="smallMedium" color={"common.white"}>
        {value}
      </Typography>
    </Stack>
  );
};

export default ContractInfo;

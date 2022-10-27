import { TitleWithDescription } from "@/components/shared";
import { Stack } from "@mui/material";
import * as React from "react";

interface IContractInfoCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
}

const ContractInfoCard: React.FunctionComponent<IContractInfoCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <Stack
      alignItems="center"
      justifyContent={"start"}
      spacing={1}
      p={1}
      sx={{
        borderRadius: "6px",
        width: ["100%"],
        height: "auto",
        bgcolor: (t) => t.palette.extended_colors.status.main,
      }}
    >
      <TitleWithDescription
        parentDir="column"
        headerVariant="xsmallBold"
        direction={"column"}
        title={title}
        description={value}
        icon={icon}
      />
    </Stack>
  );
};

export default ContractInfoCard;

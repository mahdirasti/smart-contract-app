//Built-in import
import * as React from "react";
//External import
import { Stack, SxProps, Theme, Typography } from "@mui/material";
//Internal import
import { AllVariants } from "@/mui/theme/declarations";

interface ITitleWithDescriptionProps {
  title: string;
  description?: string;
  //import AllVariant Types
  headerVariant?: AllVariants;
  descriptionVariant?: AllVariants;
  headerColor?: string;
  descriptionColor?: string;
  alignment?: "center" | "right" | "left" | ("left" | "right" | "center")[];
  sxProps?: SxProps<Theme>;
  icon?: any;
  direction?: "row" | "column";
  childSpacing?: number;
  parentSpacing?: number;
  parentDir?: "row" | "column";
}

const TitleWithDescription: React.FunctionComponent<
  ITitleWithDescriptionProps
> = ({
  title = "",
  description = "",
  headerVariant = "smallRegular",
  descriptionVariant = "xsmallRegular",
  headerColor = "text.secondary",
  descriptionColor = "text.secondary",
  alignment = "left",
  direction = "row",
  sxProps = {},
  parentDir = "row",
  icon,
  childSpacing = 1,
  parentSpacing = 0.5,
}) => {
  return (
    <Stack sx={sxProps} spacing={parentSpacing} direction={parentDir}>
      <Stack
        direction={direction}
        spacing={childSpacing}
        alignItems="center"
        justifyContent={alignment}
      >
        {(Boolean(icon) && <>{icon}</>) || null}
        <Typography
          variant={headerVariant}
          color={headerColor}
          sx={{ textAlign: alignment }}
        >
          {title}
        </Typography>
      </Stack>
      {Boolean(description) && (
        <Typography
          variant={descriptionVariant}
          color={descriptionColor}
          component={"p"}
          sx={{ textAlign: alignment }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default TitleWithDescription;

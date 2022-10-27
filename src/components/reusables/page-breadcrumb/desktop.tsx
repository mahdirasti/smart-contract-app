import { Box, Link, Stack, Typography, alpha, styled } from "@mui/material";
import PageBreadcrumbSearchHeader from "./search";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { absolutePath } from "@/navigation/absoluteRoutes";

const Desktop = ({
  items,
  pathId,
}: {
  items: absolutePath[];
  pathId: number;
}) => {
  const lastIndex = items.length - 1;

  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2 }}>
      <Stack direction="column">
        <Stack direction="row" alignItems="center">
          {items.map(({ path, title }, index) => {
            const lastOne = index === lastIndex;

            return (
              <React.Fragment key={index}>
                <RouterLink
                  to={
                    items.length !== 1 && lastOne ? `${path}/${pathId}` : path
                  }
                >
                  <Link
                    variant={`small${index === lastIndex ? "Medium" : "Light"}`}
                    color="typographyGray.main"
                    underline="none"
                    marginRight={1}
                  >
                    <Typography
                      component="span"
                      sx={{
                        textTransform: "capitalize",
                        color: (t) =>
                          lastOne
                            ? t.palette.text.secondary
                            : t.palette.primary.main,

                        bgcolor: "transparent",
                        borderRadius: 2,
                        py: 0.2,
                        px: 1,
                      }}
                    >
                      {title}
                    </Typography>
                  </Link>
                </RouterLink>
                {!lastOne && (
                  <Box
                    marginRight={1}
                    sx={{
                      position: "relative",
                      display: "flex",
                      top: 1,
                    }}
                  >
                    <Typography variant={"bodyMedium"} color="text.secondary">
                      /
                    </Typography>
                  </Box>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Desktop;

import { ContractCard } from "./contract-card";
import { Box, Grid } from "@mui/material";
import * as React from "react";

interface IActivitiesProps {}

const Activities: React.FunctionComponent<IActivitiesProps> = (props) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <ContractCard />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Activities;

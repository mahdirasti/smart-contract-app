import { routeNames } from "@/navigation";
import { Box, Grid } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import ClaimCard from "./claim-card";
import { claimsitems } from "./data";

interface IClaimsCardsProps {}

const ClaimsCards: React.FunctionComponent<IClaimsCardsProps> = (props) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {claimsitems.map((claim, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={claim.id}>
              <Link to={`/${routeNames.claims.index}/details/2`}>
                <a>
                  <ClaimCard {...claim} />
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ClaimsCards;

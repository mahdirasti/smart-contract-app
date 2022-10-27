import { Box, Grid } from "@mui/material";
import * as React from "react";
import FreezeBalance from "./freeze-balance";
import WalletPayout from "./payout";
import WalletTransactions from "./transactions";
import WalletSummary from "./wallet-summary";

interface IWalletProps {}

const Wallet: React.FunctionComponent<IWalletProps> = (props) => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <WalletSummary />
        </Grid>
        <Grid item container spacing={1}>
          <Grid item container xs={12} md={6} spacing={1}>
            <Grid item xs={12}>
              <FreezeBalance />
            </Grid>
            <Grid item xs={12}>
              <WalletPayout />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <WalletTransactions />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wallet;

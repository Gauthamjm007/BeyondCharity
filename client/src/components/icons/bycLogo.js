import React from "react";
import Grid from "@material-ui/core/Grid";
import { ReactSVG } from "react-svg";
import Logo from "./iconbc.svg";
export default function BycLogo() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3} justify="flex-end">
          <ReactSVG src={Logo} />
        </Grid>
      </Grid>
    </div>
  );
}

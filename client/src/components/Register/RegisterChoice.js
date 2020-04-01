import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import NgoIcon from "./ngo.png";
import PersonIcon from "./person.png";

const ChoiceTitle = styled.h3`
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 95px;
  /* identical to box height */

  letter-spacing: -1.5px;

  color: #05386b;

  mix-blend-mode: normal;
`;
const ChoiceText = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -1.5px;

  color: #05386b;
`;

export default function RegisterChoice() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <ChoiceTitle>You want to regsiter for ?</ChoiceTitle>{" "}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            {" "}
            <img src={NgoIcon}></img>
            <ChoiceText>NGO</ChoiceText>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="center" spacing={1}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <img src={PersonIcon}></img>
              <ChoiceText>INDIVIDUAL</ChoiceText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const DetailsText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.15px;
`;

const TimeText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: #05386b;
`;

const RoundButton = styled.div`
  height: 70px;
  width: 70px;
  background: #5cdb95;
  display: flex;
  justify-content: center;
  position: absoulte;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  align-items: center;
  color: white;
  text-decorator: none;
  border-radius: 50%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
`;

export default function EventAll() {
  return (
    <>
      <br />
      <br />
      <br />

      <Grid container spacing={3} justify="center">
        <Grid container item xs={12}>
          <Grid container direction="row" justify="center">
            <DetailsText>22nd March 2020</DetailsText>
          </Grid>
        </Grid>
        <Card variant="outlined" style={{ width: 700, borderRadius: "20px" }}>
          <CardContent>
            <Grid container item xs={12}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <TimeText>10:00 PM</TimeText>
                <DetailsText> Word of the Day</DetailsText>
                <RoundButton>2 hrs</RoundButton>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container item xs={12}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <TimeText>10:00 PM</TimeText>
                <DetailsText> Word of the Day</DetailsText>
                <RoundButton>2 hrs</RoundButton>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container item xs={12}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <TimeText>10:00 PM</TimeText>
                <DetailsText> Word of the Day</DetailsText>
                <RoundButton>2 hrs</RoundButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

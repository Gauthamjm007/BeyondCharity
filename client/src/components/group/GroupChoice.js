import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import GroupIcon from "./group.png";
import VoulentIcon from "./voulent.png";

const GroupTitle = styled.h3`
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
const GroupText = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -1.5px;

  color: #05386b;
`;

export default function GroupChoice() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <GroupTitle>Would you like to?</GroupTitle>{" "}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <img src={GroupIcon}></img>
            <GroupText>Create your own group</GroupText>
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
              <img src={VoulentIcon}></img>
              <GroupText>Volunteer </GroupText>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

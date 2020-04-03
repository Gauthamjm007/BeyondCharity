import React from "react";
import { Grid } from "@material-ui/core";
import {
  InfoBox,
  Widget,
  SimpleTable,
  SimpleLineChart,
  SimpleRandarChart,
  SimpleBarChart
} from "../../components";
import useStyles from "./styles";
import GroupIcon from "@material-ui/icons/Group";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CancelIcon from "@material-ui/icons/Cancel";
const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Members"
            value="128"
            icon={<GroupIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Completed Events"
            value="8"
            icon={<EventAvailableIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Cancelled Events"
            value="2"
            icon={<CancelIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Attended People"
            value="400"
            icon={<EmojiPeopleIcon style={{ width: 60, height: 60 }} />}
          />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Registered v/s Attended">
            <SimpleLineChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="Event success">
            <SimpleRandarChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="New Members vs Old">
            <SimpleBarChart />
          </Widget>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Members">
            <SimpleTable />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { PageTitle } from "../../components";
import useStyles from "./styles";

const Typography = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageTitle title="All Events" />
    </div>
  );
};

export default Typography;

import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Register.css";
import RegisterForm from "./RegisterForm";
export default function Register(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <h3 className="register-title">Welcome,</h3>
          <dl className="register-msg">
            <dt>{props.msg}</dt>
            {props.msglist.map((ele, i) => (
              <dd
                key={i}
                className="register-msglist"
                style={{ fontSize: "28px" }}
              >
                - {ele}
              </dd>
            ))}
          </dl>
        </Grid>
        <Grid item xs={5}>
          <div className="register-seperator"></div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="register-type">Register</h3>
          <RegisterForm />
        </Grid>
      </Grid>
    </div>
  );
}

{
  /* <Register
msg="As an NGO/Group you can do the following activities"
msglist={[
  "Organize events",
  "Get volunteers",
  "Raise funds",
  "Spread awareness",
  "Share Happiness"
]}
/> */
}

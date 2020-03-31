import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import LoginForm from "./LoginForm";
export default function Login() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <h3 className="login-title">Welcome Back,</h3>
          <h3 className="login-msg">
            Thanks for all the work you are doing , please donate us for the
            website , to help us run it{" "}
          </h3>
        </Grid>
        <Grid item xs={5}>
          <div className="login-seperator"></div>
        </Grid>
        <Grid item xs={5}>
          <h3 className="login-type">Login</h3>
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
}

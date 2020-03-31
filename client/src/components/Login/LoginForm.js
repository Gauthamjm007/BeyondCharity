import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import "./LoginForm.css";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#05386B" },
    secondary: { main: "#5CDB95" }
  },
  status: {
    danger: "orange"
  }
});

function LoginForm() {
  return (
    <MuiThemeProvider theme={theme}>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              className="login-form-email"
              component={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
            />
            <br />
            <Field
              className="login-form-password"
              component={TextField}
              type="password"
              label="Password"
              name="password"
              variant="outlined"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <div className="login-form-button">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                style={{ background: "#05386B", borderRadius: "200px" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </MuiThemeProvider>
  );
}

export default LoginForm;

import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  Radio,
  FormControlLabel
} from "@material-ui/core";
import { TextField, RadioGroup } from "formik-material-ui";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from "@material-ui/icons/Phone";

const UserTitle = styled.h3`
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  color: #05386b;
`;

const UserSubtitle = styled.h5`
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: rgba(5, 56, 107, 0.5);
`;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#05386B" },
    secondary: { main: "#5CDB95" }
  },
  status: {
    danger: "orange"
  }
});
export default function UserDetailsForm() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center">
            <UserTitle>Hi,Username</UserTitle>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <UserSubtitle>can you please share few more details</UserSubtitle>
          </Grid>
        </Grid>
      </Grid>

      <MuiThemeProvider theme={theme}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            interest: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, interest }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container justify="center">
                    <Field
                      component={TextField}
                      type="text"
                      label="Phone"
                      name="phone"
                      style={{ width: "400px" }}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PhoneIcon color="primary" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>

                {isSubmitting && <LinearProgress />}

                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <FormControl
                      style={{ margin: 1, minWidth: 400 }}
                      variant="outlined"
                      value={interest}
                    >
                      <InputLabel htmlFor="grouped-select">Category</InputLabel>
                      <Select defaultValue="" name="jobTitle">
                        <MenuItem value="Front-End Developer">
                          Front-End Developer
                        </MenuItem>
                        <MenuItem value="Node.js Developer">
                          Node.js Developer
                        </MenuItem>
                        <MenuItem value="MEAN Stack Developer">
                          MEAN Stack Developer
                        </MenuItem>
                        <MenuItem value="FULL Stack Developer">
                          FULL Stack Developer
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Field component={RadioGroup} name="activity" row>
                      <FormControlLabel
                        value="painting"
                        control={
                          <Radio disabled={isSubmitting} color="primary" />
                        }
                        label="Male"
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value="drawing"
                        control={
                          <Radio disabled={isSubmitting} color="primary" />
                        }
                        label="Female"
                        disabled={isSubmitting}
                      />
                      <FormControlLabel
                        value="none"
                        control={
                          <Radio disabled={isSubmitting} color="primary" />
                        }
                        label="Other"
                        disabled={isSubmitting}
                      />
                    </Field>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Field
                      component={TextField}
                      type="text"
                      label="Description"
                      name="description"
                      variant="outlined"
                      multiline
                      rows="4"
                      style={{ width: "400px" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                      style={{
                        background: "#05386B",
                        borderRadius: "200px",
                        width: "300px",
                        height: "40px"
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </MuiThemeProvider>
    </>
  );
}

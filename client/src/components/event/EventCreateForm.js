import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import WebIcon from "@material-ui/icons/Web";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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

const theme = createMuiTheme({
  palette: {
    primary: { main: "#05386B" },
    secondary: { main: "#5CDB95" }
  },
  status: {
    danger: "orange"
  }
});
export default function EventCreateForm() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <ChoiceTitle>Create Group</ChoiceTitle>
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
              <Grid container spacing={3} justify="center">
                <Grid item xs="auto">
                  <Field
                    component={TextField}
                    name="name"
                    type="text"
                    label="Group Name"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <DomainOutlinedIcon color="primary" />
                        </InputAdornment>
                      )
                    }}
                  />{" "}
                </Grid>
                <Grid item xs="auto">
                  <Field
                    component={TextField}
                    type="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon color="primary" />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Field
                    component={TextField}
                    type="text"
                    label="Phone"
                    name="phone"
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
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Field
                      component={TextField}
                      type="text"
                      label="Get current Location"
                      name="phone"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <GpsFixedIcon color="primary" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>

                {isSubmitting && <LinearProgress />}
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Field
                      component={TextField}
                      type="text"
                      label="Address"
                      name="address"
                      variant="outlined"
                      multiline
                      rows="4"
                      style={{ width: "260px" }}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <FormControl
                      style={{ margin: 1, minWidth: 260 }}
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
                    <Field
                      component={TextField}
                      type="text"
                      label="Description"
                      name="description"
                      variant="outlined"
                      multiline
                      rows="4"
                      style={{ width: "260px" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Field
                      component={TextField}
                      type="text"
                      label="Website url"
                      name="phone"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <WebIcon color="primary" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<CloudUploadIcon />}
                    >
                      Upload Image
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                      style={{ background: "#05386B", borderRadius: "200px" }}
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

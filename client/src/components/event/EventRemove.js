import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
const RoundButton = styled.div`
  height: 50px;
  width: 50px;
  background: #05386b;
  display: flex;
  justify-content: center;
  position: absoulte;
  align-items: center;
  color: white;
  text-decorator: none;
  border-radius: 50%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
`;

const DetailsText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.15px;
`;
export default function EventRemove() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container spacing={3} justify="center">
        <Card
          variant="outlined"
          style={{
            width: 600,
            borderRadius: "20px",
            boxShadow:
              "0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
            borderRadius: "20px"
          }}
        >
          <CardContent>
            <Grid container item xs={12}>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <DetailsText> 22-March-2019</DetailsText>
                <DetailsText>
                  {" "}
                  <b>Word of the Day</b>
                </DetailsText>

                <RoundButton>
                  <CloseIcon />
                </RoundButton>
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
                <DetailsText> 22-March-2019</DetailsText>
                <DetailsText>
                  <b>Word of the Day</b>
                </DetailsText>
                <RoundButton>
                  <CloseIcon />
                </RoundButton>
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
                <DetailsText> 22-March-2019</DetailsText>
                <DetailsText>
                  <b>Word of the Day</b>{" "}
                </DetailsText>
                <RoundButton>
                  <CloseIcon />
                </RoundButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

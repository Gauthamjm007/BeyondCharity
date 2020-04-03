import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const EventBox = styled.div`
  background: #05386b;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.14);
  border-radius: 0px;
  height: 95px;
  width: 100%;
  position: fixed;
  top: 80px;
`;

const EventSubtext = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  position: fixed;
  letter-spacing: 1.25px;
  right: ${(props) => props.right}px;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  color: #${(props) => props.color};
`;

const EventTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.fontSize}px;
  line-height: 13px;
  position: fixed;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  color: #ffffff;
`;
export default function UserDetails() {
  return (
    <div>
      <>
        <EventBox>
          <EventTitle left={40} top={100} fontSize={24}>
            Goutham JM
          </EventTitle>
        </EventBox>
        <EventSubtext left={40} top={130} fontSize={11} color={"ffffff"}>
          j.mgautham15@gmail.com
        </EventSubtext>
        <EventSubtext left={40} top={155} fontSize={11} color={"ffffff"}>
          +917019042803
        </EventSubtext>
      </>

      <div style={{ marginTop: "200px", marginLeft: "50px" }}>
        {" "}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <h3>
              Bio:Pacifist , Vegan and Protect the mother earth
              <br />
              Gender: Male
              <br />
              <h6>Tags:Animal,Forest</h6>
            </h3>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Edit Details
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

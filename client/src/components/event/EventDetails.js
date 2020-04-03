import React from "react";
import styled from "styled-components";
import AppBar from "../appbar/appbar";
import PetsIcon from "@material-ui/icons/Pets";
import MapContainer from "./EventMap";
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
const OrgBox = styled.div`
  background: #ffffff;
  width: 210px;
  height: ${(props) => props.height}px;
  position: fixed;
  right: ${(props) => props.right}px;
  top: ${(props) => props.top}px;
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
`;
const RoundButton = styled.div`
  height: 60px;
  width: 60px;
  background: #05386b;
  display: flex;
  justify-content: center;
  position: absoulte;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  align-items: center;
  color: white;
  margin-top: 20px;
  margin-left: 13px;
  text-decorator: none;
  border-radius: 50%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
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
export default function EventDetails() {
  return (
    <div>
      <AppBar />
      <>
        <EventBox>
          <EventSubtext left={40} top={85} fontSize={14} color={"ffffff"}>
            Sunday,22-March-2020
          </EventSubtext>
          <EventTitle left={40} top={110} fontSize={24}>
            Stray Puppies Adoption
          </EventTitle>
        </EventBox>
        <EventSubtext left={40} top={140} fontSize={11} color={"ffffff"}>
          Organized by
        </EventSubtext>
        <EventSubtext
          left={40}
          top={155}
          fontSize={14}
          fontWeight="bold"
          color={"ffffff"}
        >
          Goutham JM
        </EventSubtext>
      </>
      <>
        <OrgBox height={100} right={20} top={200}>
          <EventSubtext right={65} top={230} fontSize={9} color={"000000"}>
            ORGANIZED BY
          </EventSubtext>
          <EventSubtext
            right={30}
            top={260}
            fontSize={15}
            color={"000000"}
            fontWeight="bold"
          >
            PAW HELPERS
          </EventSubtext>
          <RoundButton>
            <PetsIcon />
          </RoundButton>
        </OrgBox>
      </>
      <>
        <OrgBox height={300} right={20} top={310}>
          <EventSubtext
            right={35}
            top={340}
            fontSize={10}
            color={"000000"}
            fontWeight="bold"
          >
            Saturday, April 11, 2020 8:30 AM <br />
            to
            <br /> Sunday, April 12, 2020, 5:00 PM
          </EventSubtext>
          <div
            style={{
              width: "705px",
              height: "50px",
              position: "fixed",
              right: "0px",
              left: "1135px",
              top: "390px"
            }}
          >
            <MapContainer />
          </div>
        </OrgBox>
      </>
      <div style={{ marginTop: "200px", marginLeft: "50px" }}>
        {" "}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>Details</h1>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h3>
              We are joining together to rescue some stray dogs and puppies
              ,treat them for any illness and find a foster home for them
              <br />
              <br />
              Address: <br />
              <h6>
                We are joining together to rescue some stray dogs and puppies
                ,treat them for any illness and find a foster home for them
              </h6>
            </h3>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Voulenteer
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import PetsIcon from "@material-ui/icons/Pets";
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

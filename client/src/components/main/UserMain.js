import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const GroupName = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const GroupNameFloat = styled.h6`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  align-items: center;
  text-align: center;
  position: fixed;
  color: #ffffff;
  left: ${(props) => props.left}px;
  margin-top: ${(props) => props.marginTop}px;
`;

const DetailBox = styled.div`
  width: 247px;
  height: 261px;
  background: #379683;
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24);
  border-radius: 0px 20px 20px 0px;
  position: fixed;
  left: 0px;
  top: 390px;
`;

const EventsBox = styled.div`
  width: 247px;
  height: 201px;
  background: #379683;
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24);
  border-radius: 10px 0px 0px 10px;
  position: fixed;
  right: 0px;
  top: 130px;
`;
const GroupBox = styled.div`
  width: 142px;
  height: 205px;
  box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24);
  border-radius: 0px 20px 20px 0px;
  background: #379683;
  position: fixed;
  left: 0px;
  top: 130px;
`;

const CalendarDiv = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  right: 0px;
  top: 390px;
`;
const RoundButton = styled.div`
  height: 70px;
  width: 70px;
  background: #5cdb95;
  position: fixed;
  display: flex;
  justify-content: center;
  position: absoulte;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  align-items: center;
  color: white;
  left: ${(props) => props.left}px;
  margin-top: ${(props) => props.marginTop}px;
  text-decorator: none;
  border-radius: 50%;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
`;
export default function UserMain() {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <>
        <GroupBox>
          <GroupName>your groups</GroupName>

          <GroupName>popular groups</GroupName>

          <GroupName>all groups</GroupName>
        </GroupBox>
        <DetailBox>
          <GroupNameFloat left={45} marginTop={10}>
            Hours Voulenteered
          </GroupNameFloat>
          <RoundButton left={85} marginTop={40}>
            7
          </RoundButton>
          <RoundButton left={144} marginTop={130}>
            1.5K
          </RoundButton>
          <GroupNameFloat left={144} marginTop={210}>
            Donated ₹
          </GroupNameFloat>
          <RoundButton left={26} marginTop={130}>
            10
          </RoundButton>
          <GroupNameFloat left={26} marginTop={210}>
            Events <br />
            Attended
          </GroupNameFloat>
        </DetailBox>
      </>
      <>
        <EventsBox>
          <GroupName>events you are attending</GroupName>
          <GroupName>events from your groups</GroupName>
          <GroupName>saved events</GroupName>
        </EventsBox>
      </>
      <CalendarDiv>
        <Calendar onChange={onChange} value={new Date()} />
      </CalendarDiv>
    </div>
  );
}

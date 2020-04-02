import React from "react";
import Footer from "./components/footer/Footer";
import BycLogo from "./components/icons/bycLogo";
import EventCreateForm from "./components/event/EventCreateForm";
// import MarkMap from "./components/map/MarkMap";
import GroupCreate from "./components/group/GroupCreate";

function App() {
  // const getData = (lat, lng, address) => {
  //   console.log(lat, lng, address, "values");
  // };

  return (
    <div>
      <BycLogo />
      <EventCreateForm />
      {/* <MarkMap sendData={getData} /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

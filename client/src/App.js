import React from "react";
import MainAppBar from "./components/appbar/appbar";
import UserMain from "./components/main/UserMain";
import EventAll from "./components/event/EventAll";
function App() {
  return (
    <div>
      <MainAppBar />
      <UserMain />
      <EventAll />
    </div>
  );
}

export default App;

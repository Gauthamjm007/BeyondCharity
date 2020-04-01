import React from "react";
import Footer from "./components/footer/Footer";
import MainAppBar from "./components/appbar/appbar";
import GroupChoice from "./components/group/GroupChoice";

function App() {
  return (
    <div>
      <MainAppBar />
      <GroupChoice />
      <Footer></Footer>
    </div>
  );
}

export default App;

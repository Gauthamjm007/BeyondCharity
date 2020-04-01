import React from "react";
import Footer from "./components/footer/Footer";
import BycLogo from "./components/icons/bycLogo";
import GroupCreate from "./components/group/GroupCreate";
function App() {
  return (
    <div>
      <BycLogo />
      <GroupCreate />
      <Footer></Footer>
    </div>
  );
}

export default App;

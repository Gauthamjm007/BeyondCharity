import React from "react";
import Footer from "./components/footer/Footer";
import BycLogo from "./components/icons/bycLogo";
import MainAppBar from "./components/appbar/appbar";
function App() {
  return (
    <div>
      <BycLogo />
      <MainAppBar />
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from "react";
import Footer from "./components/footer/Footer";
import BycLogo from "./components/icons/bycLogo";

import MarkMap from "./MarkMap";

function App() {
  console.log(process.env.REACT_APP_BASE_URL, "code");
  return (
    <div align="center">
      <BycLogo />
      <MarkMap />
      <Footer></Footer>
    </div>
  );
}

export default App;

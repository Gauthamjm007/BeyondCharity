import React from "react";
import Footer from "./components/footer/Footer";
import MainAppBar from "./components/appbar/appbar";
import RegisterChoice from "./components/Register/RegisterChoice";

function App() {
  return (
    <div>
      <MainAppBar />
      <RegisterChoice />
      <Footer></Footer>
    </div>
  );
}

export default App;

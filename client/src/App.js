import React from "react";
import Footer from "./components/footer/Footer";
import BycLogo from "./components/icons/bycLogo";
import UserDetailsForm from "./components/user/userDetailsForm";
function App() {
  return (
    <div>
      <BycLogo />
      <UserDetailsForm />
      <Footer></Footer>
    </div>
  );
}

export default App;

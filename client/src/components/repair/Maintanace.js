import React from "react";
import dolphin from "./dolphin.png";
import "./Maintanace.css";

export default function Maintanace() {
  return (
    <div>
      <img src={dolphin} className="dolphin"></img>
      <h3 className="maintanace">Site under maintanace</h3>
      <h2 className="fixing">We will be fixing it soon....</h2>
    </div>
  );
}

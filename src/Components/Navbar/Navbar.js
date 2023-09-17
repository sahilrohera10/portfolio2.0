import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="namediv">
        <p className="myname">
          {" "}
          <span style={{ color: "rgb(136 78 255)", fontSize: "25px" }}>
            &lt;
          </span>{" "}
          Sahil{" "}
          <span style={{ color: "rgb(136 78 255)", fontSize: "25px" }}>
            {" "}
            /&gt;{" "}
          </span>
        </p>
      </div>
      <div className="navflex">
        <p>Start</p>
        <p>About</p>
        <p>WorkLab</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

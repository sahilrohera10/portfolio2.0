import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Timeline from "../TImeline/Timeline";

export default function Header() {
  const timelineData = [
    {
      date: "2023-09-01",
      description: "Started working on my portfolio website.",
    },
    {
      date: "2023-09-10",
      description: "Designed the user interface for the portfolio.",
    },
    // Add more timeline items here
  ];
  return (
    <div className="head">
      <div style={{ width: "85%", margin: "auto" }}>
        <Navbar />
      </div>

      <p className="intro">INTRO</p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ width: "85%", margin: "auto", marginTop: "1 0vw" }} y>
        <Timeline timelineData={timelineData} />
      </div>
    </div>
  );
}

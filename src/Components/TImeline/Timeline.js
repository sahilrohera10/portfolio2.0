import React from "react";
import "./Timeline.css";
import proj1 from "../../assets/campuskart.png";
import proj2 from "../../assets/codevila.png";
import proj3 from "../../assets/devmania.png";

const Timeline = ({ timelineData }) => {
  return (
    <div className="timeline">
      {/* {timelineData.map((item, index) => ( */}

      <div className="timeline-item">
        <div className="timeline-content">
          <h2 style={{ color: "white", fontSize: "35px" }}>
            Hey! I'm{" "}
            <span style={{ color: "rgb(136 78 255)", fontSize: "40px" }}>
              Sahil Rohera
            </span>
          </h2>
          <p style={{ color: "white", fontSize: "20px", marginBottom: "5px" }}>
            Innovative coder with a vision for progress
          </p>
          <p
            style={{
              color: "#884EFF",
              fontSize: "20px",
              marginTop: "2px",
              fontWeight: "500",
            }}
          >
            I build applications and innovative software solutions
          </p>

          <br />
          <br />
          <p style={{ color: "white", fontSize: "20px", marginBottom: "5px" }}>
            Let me show you &gt;&gt;&gt;&gt;{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="timeline-item">
        <div className="timeline-content">
          {/* <p
            style={{
              color: "white",
              fontSize: "20px",
              marginTop: "2px",
              fontWeight: "500",
            }}
          >
            My Work Lab
          </p> */}
          <br />
          <br />
          <div className="proj1">
            <p
              style={{
                fontSize: "30px",
                color: "rgb(136 78 255)",
                fontWeight: "700",
                marginTop: "0px",
              }}
            >
              Campus Kart /-
            </p>
            <a href="https://campus-kart.vercel.app/">
              <img className="campus" src={proj1} alt="" />
            </a>
          </div>

          <div className="projectdiv">
            <div className="projs">
              <p
                style={{
                  fontSize: "30px",
                  color: "rgb(136 78 255)",
                  fontWeight: "700",
                  marginTop: "0px",
                }}
              >
                Code Vila /-
              </p>
              <a href="https://codevila.vercel.app/">
                <img className="campus" src={proj2} alt="" />
              </a>
            </div>
            <div className="projs" style={{ marginLeft: "15vw" }}>
              <p
                style={{
                  fontSize: "30px",
                  color: "rgb(136 78 255)",
                  fontWeight: "700",
                  marginTop: "0px",
                }}
              >
                Dev-Mania /-
              </p>
              <a href="https://dev-mania.vercel.app/">
                <img className="campus" src={proj3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="timeline-item">
        <div className="timeline-content">
          <br />
          <br />
          <div className="proj1">
            <p
              style={{
                fontSize: "30px",
                color: "rgb(136 78 255)",
                fontWeight: "700",
                marginTop: "0px",
              }}
            >
              Campus Kart /-
            </p>
            <a href="https://campus-kart.vercel.app/">
              <img className="campus" src={proj1} alt="" />
            </a>
          </div>

          <div className="projectdiv">
            <div className="projs">
              <p
                style={{
                  fontSize: "30px",
                  color: "rgb(136 78 255)",
                  fontWeight: "700",
                  marginTop: "0px",
                }}
              >
                Code Vila /-
              </p>
              <a href="https://codevila.vercel.app/">
                <img className="campus" src={proj2} alt="" />
              </a>
            </div>
            <div className="projs" style={{ marginLeft: "15vw" }}>
              <p
                style={{
                  fontSize: "30px",
                  color: "rgb(136 78 255)",
                  fontWeight: "700",
                  marginTop: "0px",
                }}
              >
                Dev-Mania /-
              </p>
              <a href="https://dev-mania.vercel.app/">
                <img className="campus" src={proj3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ))} */}
    </div>
  );
};

export default Timeline;

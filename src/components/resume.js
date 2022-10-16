import React from "react";
import "../assests/work.css";
export default function Resume() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <span className="position">Digital Marketing Coordinator</span>
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">SAGE Group</span>
            <span className="year-finished">2022-present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Digital Marketing Coordinator</span>
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Teamgage</span>
            <span className="year-finished">2021-2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Marketing Coordinator</span>
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Ellvee Consulting & Flinders Gin</span>
            <span className="year-finished">2020-2021</span>
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import "../assests/styles/education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">University of Adelaide</span>
            <span className="university-degree">
                Masters of Media: Strategic Communication
            </span>
          </div>
          <div>
            <span className="year-finished">2021-current</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">University of Adelaide</span>
            <span className="university-degree">
                Coding Bootcamp: Full Stack Web Development
            </span>
          </div>
          <div>
            <span className="year-finished">2022</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Flinders University</span>
            <span className="university-degree">
                Bachelor of Creative Arts: Creative Writing
            </span>
          </div>
          <div>
            <span className="year-finished">2018-2021</span>
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import { useState } from "react";
import ResumeItem from "./ResumeItem";
import { edu } from "../data/education";
import { exp } from "../data/experience";

function Resume() {
  const [education] = useState(edu);
  const [experience] = useState(exp);
  return (
    <>
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Education and Experience</h2>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              {education.map((item, i) => (
                <ResumeItem item={item} key={"edu" + i} />
              ))}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              {experience.map((item, i) => (
                <ResumeItem item={item} key={"exp" + i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;

import React from "react";
import { useState } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

function Skills() {
  const [skillSet] = useState(skills);
  return (
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="skill-item pb-0">
            <div className="row pb-2">
              {skillSet.map((s, i) => (
                <SkillCard icon={s.icon} name={s.name} key={i + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

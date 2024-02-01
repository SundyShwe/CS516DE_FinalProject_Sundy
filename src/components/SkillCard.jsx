import React from "react";
function SkillCard(props) {
  const { icon, name } = props;
  return (
    <>
      <div className="col-3 col-md-1 card m-1" data-aos="fade-up">
        <img src={"img/skills/" + icon} className="mx-auto d-block" />
        <div className="skill-name">
          <b>{name}</b>
        </div>
      </div>
    </>
  );
}

export default SkillCard;

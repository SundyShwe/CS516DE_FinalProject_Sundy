import React from "react";
function ResumeItem({ item }) {
  return (
    <>
      <div className="resume-item">
        <h4>{item.title}</h4>
        <h5>{item.year}</h5>
        <p>
          <em>{item.place}</em>
        </p>
        {item.note && <p>({item.note})</p>}
      </div>
    </>
  );
}

export default ResumeItem;

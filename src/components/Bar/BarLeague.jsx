import React from "react";

const BarLeague = () => {
  const skillsBar = [
    {
      id: "javascript",
      name: "Javascript",
      value: 25,
      tier: "Beginer",
    },
  ];
  return (
    <>
      <div className="row p-4">
        {skillsBar.map((skill) => (
          <div className="col-sm-6 col-12 mt-2">
            <div className="d-flex justify-content-between">
              <h4>{skill.name}</h4>
              <h5>{skill.tier}</h5>
            </div>
            <div class="bar-skill">
              <div class={`skills ${skill.id}`}>{`${skill.tier}`}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BarLeague;

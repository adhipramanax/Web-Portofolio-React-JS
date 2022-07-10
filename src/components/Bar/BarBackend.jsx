import React from "react";

const BarBackend = () => {
    const skillsBar = [
        {
            id: "express",
            name: "Express JS",
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
                            <div class={`skills ${skill.id}`}>{`${skill.value}%`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BarBackend;

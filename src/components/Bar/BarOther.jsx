import React from "react";

const BarOther = () => {
    const skillsBar = [
        {
            id: "git",
            name: "Git",
            value: 80,
        },
        {
            id: "scrum",
            name: "SCRUM",
            value: 80,
        },
    ];
    return (
        <>
            <div className="row p-4">
                {skillsBar.map((skill) => (
                    <div className="col-6 mt-2">
                        <h4>{skill.name}</h4>
                        <div class="bar-skill">
                            <div class={`skills ${skill.id}`}>{`${skill.value}%`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BarOther;

import React from "react";

const BarBackend = () => {
    const skillsBar = [
        {
            id: "express",
            name: "Express JS",
            value: 30,
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

export default BarBackend;

import React from "react";

const SkillBar = () => {
    const skillsBar = [
        {
            id: "html",
            name: "HTML",
            value: 80,
        },
        {
            id: "css",
            name: "CSS",
            value: 75,
        },
        {
            id: "react",
            name: "React JS",
            value: 65,
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            value: 80,
        },
        {
            id: "laravel",
            name: "Laravel",
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

export default SkillBar;

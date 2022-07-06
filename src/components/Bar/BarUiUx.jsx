import React from "react";

const BarUiUx = () => {
    const skillsBar = [
        {
            id: "figma",
            name: "Figma",
            value: 75,
        },
        {
            id: "corel",
            name: "Corel Draw",
            value: 50,
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

export default BarUiUx;

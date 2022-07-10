import React from "react";
import "../../assets/css/skill.css";
import CardSkill from "../Card/CardSkill";

const Skill = React.forwardRef((props, ref) => {
    const skills = [
        {
            name: "UI/UX",
            percent: 50,
            tier: "Beginner",
        },
        {
            name: "Frontend",
            percent: 75,
            tier: "Beginner",
        },
        {
            name: "Backend",
            percent: 25,
            tier: "Beginner",
        },
        {
            name: "Git",
            percent: 75,
            tier: "Beginner",
        },
    ];

    return (
        <>
            <div className="container-fluid bg-black pt-5 pb-4" id="skills" ref={ref}>
                <div className="container-sm">
                    <h2 className="text-light pt-4">Skils</h2>
                    <p class="btn-bottom pt-2 pb-2" />
                    {/* <!--  progresses  --> */}
                    <div className="d-flex justify-content-center">
                        <ul className="progresses ">
                            {skills.map((skill) => (
                                // <li className="fs-4" data-name={skill.name} data-percent={`${skill.tier}`}>
                                <li className="fs-4" data-name={skill.name} data-percent={`${skill.percent}%`}>
                                    <svg viewBox="-10 -10 229 229">
                                        <g fill="none" strokeWidth="6" transform="translate(100,100)">
                                            <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#grad)" />
                                            <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#grad)" />
                                            <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#grad)" />
                                            <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#grad)" />
                                            <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#grad)" />
                                            <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#grad)" />
                                        </g>
                                    </svg>
                                    <svg viewBox="-10 -10 220 220">
                                        <path
                                            d="M200,100 C200,
                                        40 155,0 100,0 C45,
                                        0 0,50 4,98 C0,
                                        140 50,195 100,190 C155,
                                        190 200,150 200,100 Z"
                                            strokeDashoffset={(629 / 100) * skill.percent}
                                        ></path>
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* card */}
                    <CardSkill />
                    {/* <!--  Defining Angle Gradient Colors  --> */}
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="grad" gradientUnits="objectBoundingBox" x1="0.3" y1="0" x2="0.7" y2="1">
                                <stop offset="0%" stop-color="#ef6817" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
});

export default Skill;

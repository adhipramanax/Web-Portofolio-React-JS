import React from "react";
import BarBackend from "../Bar/BarBackend";
import BarLeague from "../Bar/BarLeague";
import BarOther from "../Bar/BarOther";
import BarUiUx from "../Bar/BarUiUx";
import SkillBar from "../Bar/SkillBar";

const CardSkill = () => {
    const skills = [
        {
            id: "uiux",
            name: "UI/UX",
        },
        {
            id: "frontend",
            name: "Frontend",
        },
        {
            id: "backend",
            name: "Backend",
        },
        {
            id: "league",
            name: "League",
        },
        {
            id: "other",
            name: "Other",
        },
    ];
    return (
        <>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    {skills.map((skillList) => (
                        <button class="nav-link nav-link-bar" data-bs-toggle="tab" data-bs-target={`#${skillList.id}`} type="button" role="tab">
                            {skillList.name}
                        </button>
                    ))}
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show bg-light" id="uiux" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <BarUiUx />
                </div>
                <div class="tab-pane fade show bg-light h-100" id="frontend" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <SkillBar />
                </div>
                <div class="tab-pane fade show bg-light" id="backend" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <BarBackend />
                </div>
                <div class="tab-pane fade show bg-light" id="league" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <BarLeague />
                </div>
                <div class="tab-pane fade show bg-light" id="other" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <BarOther />
                </div>
            </div>
        </>
    );
};

export default CardSkill;
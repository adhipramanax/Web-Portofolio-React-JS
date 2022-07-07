import React from "react";
import "../../assets/css/project.css";
import CardProject from "../Card/CardProject";
// const Skill = React.forwardRef((props, ref) =>

const Project = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="container-fluid pb-5" id="project" ref={ref}>
                <div className="container-sm container-project pt-5 pb-5">
                    <h2 className="text-dark pt-5">Project</h2>
                    <p class="btn-bottom pt-2 pb-2" />
                    <div class="row-a row">
                        <CardProject />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Project;

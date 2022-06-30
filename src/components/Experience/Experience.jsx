import React from "react";
import CardExperience from "../Card/CardExperience";

const Experience = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="container-fluid bg-minimalist" id="experience" ref={ref}>
                <div className="container-sm p-5 ">
                    <h2 className="text-dark pt-4">Experience</h2>
                    <p class="btn-bottom-dark pt-2 pb-2" />
                    <CardExperience />
                </div>
            </div>
        </>
    );
});

export default Experience;

import React from "react";
import CardAcademy from "../Card/CardAcademy";

const About = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="container-fluid bg-black pt-4" id="about" ref={ref}>
                <div className="container-sm p-5">
                    <h2 className="text-light ">About</h2>
                    <p class="btn-bottom pt-2 pb-2" />
                    <p className="text-light">
                        I am a Web Developer. I currently study at the State University of Surabaya majoring in Informatics Engineering. My expertise is in Frontend Web Developer with React JS
                        Framework and Laravel, I also learn Backend Web Developer using Express JS, besides that I also like to play games and I like to learn new things especially in technology.
                        other than that I can use GIT and can do manangent using SCRUM.
                    </p>
                    <CardAcademy />
                </div>
            </div>
        </>
    );
});

export default About;

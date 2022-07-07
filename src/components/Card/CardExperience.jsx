import React from "react";

const CardExperience = () => {
    const experience = [
        {
            title: "DICODING",
            pt: "PT Dicoding Akademi Indonesia",
            desc: "Scholarships given by Indosat Ooredoo are in the form of Basic Web Programming courses.",
            view: "https://www.dicoding.com",
            logo: "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657168710/Web%20Fortofolio/dicoding.png",
            Certificate: "https://www.dicoding.com/certificates/1RXY4WKNKPVM",
        },
        {
            title: "BINAR ACADEMY",
            pt: "PT Lenterang Bangsa Banderang",
            desc: "Studies facilitated by the government are independent campuses to study outside campus for one full semester learning about Full stack web Developer.",
            view: "https://www.binaracademy.com",
            logo: "https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656570573/Web%20Fortofolio/binar.jpg",
            Certificate: "https://www.dicoding.com/certificates/1RXY4WKNKPVM",
        },
    ];
    return (
        <>
            <div class="card">
                <div class="card-header">Course Academy</div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0 d-flex row gap-2">
                        {experience.map((exp) => {
                            return (
                                <div class="card col-12">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-3">
                                                <img className="w-100" src={`${exp.logo}`} alt="" />
                                            </div>
                                            <div className="col-9">
                                                <h1 class="card-title m-0">{exp.title}</h1>
                                                <span>{exp.pt}</span>
                                                <div className="btn-link-desk">
                                                    <p className="btn-bottom-dark"></p>

                                                    <p class="card-text">{exp.desc}</p>
                                                    <div className="d-flex gap-2">
                                                        <a href={`${exp.view}`} target="_blank" class="btn btn-dark">
                                                            View Site
                                                        </a>
                                                        <a href={`${exp.Certificate}`} target="_blank" class="btn btn-dark">
                                                            View Certificate
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="btn-link-mob">
                                                <p className="btn-bottom-dark"></p>
                                                <p class="card-text">{exp.desc}</p>
                                                <div className="d-flex gap-2 ">
                                                    <a href={`${exp.view}`} target="_blank" class="btn btn-dark w-100">
                                                        View Site
                                                    </a>
                                                    <a href={`${exp.Certificate}`} target="_blank" class="btn btn-dark w-100">
                                                        View Certificate
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default CardExperience;

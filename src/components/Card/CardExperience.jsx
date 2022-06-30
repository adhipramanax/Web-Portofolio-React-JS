import React from "react";

const CardExperience = () => {
    return (
        <>
            <div class="card">
                <div class="card-header">Course Academy</div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0 d-flex row gap-2">
                        {/* dicoding */}
                        <div class="card col-12">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img className="w-100" src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656570573/Web%20Fortofolio/dicoding.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h1 class="card-title m-0">DICODING</h1>
                                        <span className="">PT Dicoding Akademi Indonesia</span>
                                        <p className="btn-bottom-dark"></p>
                                        <div>
                                            <span className="">HTML</span>
                                            <span>CSS</span>
                                            <span>JavaScript</span>
                                        </div>
                                        <p class="card-text">Scholarships given by Indosat Ooredoo are in the form of Basic Web Programming courses.</p>
                                        <div className="d-flex gap-2">
                                            <a href="https://www.dicoding.com" target="_blank" class="btn btn-dark">
                                                View Site
                                            </a>
                                            <a href="#" target="_blank" class="btn btn-dark">
                                                View Certificate
                                            </a>
                                            <a href="#" target="_blank" class="btn btn-dark">
                                                Repository
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* binar academy */}
                        <div class="card col-12">
                            <div class="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img className="w-100" src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656570573/Web%20Fortofolio/binar.jpg" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h1 class="card-title m-0">BINAR ACADEMY</h1>
                                        <span className="">PT Dicoding Akademi Indonesia</span>
                                        <p className="btn-bottom-dark"></p>
                                        <p class="card-text">
                                            Studies facilitated by the government are independent campuses to study outside campus for one full semester learning about Full stack web Developer.
                                        </p>
                                        <div className="d-flex gap-2">
                                            <a href="#" class="btn btn-dark">
                                                View Site
                                            </a>
                                            <a href="#" class="btn btn-dark">
                                                View Certificate
                                            </a>
                                            <a href="#" class="btn btn-dark">
                                                Repository
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </>
    );
};

export default CardExperience;

import React from "react";

const CardAcademy = () => {
    return (
        <>
            <div class="row pt-4 ">
                <div class="col-sm-6 pt-2">
                    <div class="card p-3 h-100">
                        <div className="row">
                            <div className="about-img col-2 p-2">
                                <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656564295/Web%20Fortofolio/kemenag.png" alt="" />
                                <p className="text-desk text-center col-12 m-0">2016-2019</p>
                            </div>
                            <div class="card-body col-9 p-2">
                                <h5 class="card-title fw-bold ">
                                    MAN 1 BERAU
                                    <span className="text-mob fs-6 fst-italic">(2016-2019)</span>
                                </h5>
                                <h2 className="btn-bottom"></h2>
                                <p class="card-text">My last education was at MAN 1 BERAU which is in Berau, East Kalimantan-Indonesia, majoring in science.</p>
                            </div>
                            <div className="btn-link">
                                <a href="http://portal.manberau-isthebest.sch.id" class="btn btn-dark mt-2 w-100" target="_blank">
                                    View WebSite
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 pt-2">
                    <div class="card p-3 h-100">
                        <div className="row">
                            <div className="about-img col-2 p-2">
                                <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656564297/Web%20Fortofolio/Unesa.png" alt="" />
                                <p className="text-desk text-center col-12 m-0">2019-Present</p>
                            </div>
                            <div class="card-body col-9 p-2">
                                <h5 class="card-title fw-bold ">
                                    SURABAYA STATE UNIVERSITY
                                    <span className="text-mob fs-6 fst-italic">(2019-Present)</span>
                                </h5>
                                <h2 className="btn-bottom"></h2>
                                <p class="card-text">The education I am currently doing is at SURABAYA STATE UNIVERSITY majoring in Bachelor of Applied Science - Informatics Engineering</p>
                            </div>
                            <div className="btn-link">
                                <a href="https://www.unesa.ac.id" class="btn btn-dark mt-2 w-100" target="_blank">
                                    View WebSite
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardAcademy;

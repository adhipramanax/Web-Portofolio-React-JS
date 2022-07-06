import React from "react";

const Jumbotron = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="container-fluid bg-minimalist ">
                <div className="container-sm" id="home" ref={ref}>
                    <div class="jumbotron  d-flex align-items-center flex-direction-column ">
                        <div className="col-8 jumbotron-desc">
                            <div className="mobile-img">
                                <img className="img-fluid" src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656559962/Web%20Fortofolio/doto.jpg" alt="" srcset="" />
                            </div>
                            <h1 class="">Hello I’m</h1>
                            <h1 className="display-4 p-0 m-0">Panji Adhipramana Sariyono</h1>
                            <p class="lead">Frontend Web Developer | Full Stack Web Developer | Gamers </p>
                            <hr class="my-4" />
                            <div class="w-100 d-flex gap-2">
                                <a class="btn btn-dark w-100 link-sosmed text-link-mini" href="https://www.instagram.com/panji_adhipramana" target="_blank">
                                    <i class="bi bi-instagram"></i> Instagram
                                </a>
                                <a class="btn btn-dark w-100 text-link-mini" href="https://github.com/adhipramanax" target="_blank">
                                    <i class="bi bi-github"></i> Github
                                </a>
                                <a class="btn btn-dark w-100 text-link-mini" href="https://www.linkedin.com/in/panji-adhipramana" target="_blank">
                                    <i class="bi bi-linkedin"></i> Linkedin
                                </a>
                                <a class="btn btn-dark w-100 text-link-mini" href="https://steamcommunity.com/profiles/76561198278470136" target="_blank">
                                    <i class="bi bi-steam"></i>&nbsp; Steam
                                </a>
                            </div>
                        </div>
                        <div className="col-4 jumbotron-img  d-flex justify-content-end">
                            <img className="img-fluid" src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656559962/Web%20Fortofolio/doto.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Jumbotron;

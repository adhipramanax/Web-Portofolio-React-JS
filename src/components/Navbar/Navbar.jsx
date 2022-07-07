import React from "react";

const Navbar = (props) => {
    const navbars = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Experience",
            link: "#experience",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Project",
            link: "#project",
        },
        {
            name: "Other",
            link: "#other",
        },
    ];

    return (
        <>
            <div className="cpntainer-fluid bg-black fixed-top">
                <div className="container-sm">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid d-flex justify-content-between ">
                            <div className="navbar-img ">
                                <img className="img-fluid" src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1656559962/Web%20Fortofolio/doto.jpg" alt="" srcset="" />
                                <a className="navbar-brand text-light p-2 btn-bottom" href="#Home">
                                    Panji Adhipramana
                                </a>
                            </div>
                            <div className="btn-burger">
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="text-light bi bi-list"></span>
                                </button>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg">
                            <div class="collapse navbar-collapse menu-mobile" id="navbarNavDropdown">
                                {navbars.map((navbar, index) => {
                                    return (
                                        <a className={"nav-link text-light text-center " + (props.navbarPosition === index ? " btn-bottom" : "")} href={navbar.link} key={index}>
                                            {navbar.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;

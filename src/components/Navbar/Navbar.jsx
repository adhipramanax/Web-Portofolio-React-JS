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
                            <div className="navbar-nav">
                                {navbars.map((navbar, index) => {
                                    return (
                                        <a className={"nav-link text-light" + (props.navbarPosition === index ? " btn-bottom" : "")} href={navbar.link} key={index}>
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

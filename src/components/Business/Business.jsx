import React from "react";

const Business = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="container-sm border">
                    <div className="p-2">
                        <h2 className="text-dark pt-4">Business</h2>
                        <p class="btn-bottom pt-2 pb-2" />
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-2 business-img p-3">
                                <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657204128/Web%20Fortofolio/logo-basinang.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-10">
                                <div class="card-body pb-0">
                                    <h1 class="card-title">Rumah Kemas Basinang</h1>
                                    <h5 class="card-text">
                                        Rumah Kemas Basinang is a family business that sells souvenirs in the form of food, clothes, accessories, bags and other souvenirs typical of the district of
                                        Besau, East Kalimantan.
                                    </h5>
                                    <p class="btn-bottom-dark p-0 m-0" />
                                </div>
                                <div className="row flex-direction-row justify-content-center m-0 p-2">
                                    <div className="col btn-store btn border col-sm-6 mb-2 btn-dark">
                                        <a href="https://www.tokopedia.com/basinang" target="_blank">
                                            <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657212951/Web%20Fortofolio/tokped2.png" alt="logo-tokopedia" />
                                        </a>
                                    </div>
                                    <div className="col btn-store btn border col-sm-6 mb-2 btn-dark">
                                        <a href="https://shopee.co.id/adhipramanax" target="_blank">
                                            <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657212951/Web%20Fortofolio/shopee2.png" alt="logo-shopee" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="g-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.4968327952297!2d117.46492892354351!3d2.156102395995278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320df5f076bc4c89%3A0xf072a9f6eb4b2bd0!2sBASINANG%2C%20TOKO%20OLEH%20-%20OLEH%20DAN%20KERAJINAN%20BETON!5e0!3m2!1sid!2sid!4v1657211072381!5m2!1sid!2sid"
                                    // style={{ width: "100%", height: "300px", border: "0" }}
                                    loading="lazy"
                                    allowfullscreen=""
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Business;

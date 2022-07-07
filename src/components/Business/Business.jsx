import React from "react";

const Business = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container-sm">
                    <h2 className="text-dark pt-4">Business</h2>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-2 business-img p-3">
                                <img src="https://res.cloudinary.com/dhuvbrmgg/image/upload/v1657204128/Web%20Fortofolio/logo-basinang.png" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-10">
                                <div class="card-body">
                                    <h2 class="card-title">Rumah Kemas Basinang</h2>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Business;

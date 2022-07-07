import React from "react";
import Business from "../Business/Business";
import "../../assets/css/other.css";
const Other = React.forwardRef((props, ref) => {
    return (
        <>
            <div className="container-fluid" id="other" ref={ref}>
                <div className="container-sm container-project pt-5">
                    <h2 className="text-dark pt-4">Other</h2>
                    <p class="btn-bottom pt-2 pb-2" />
                    <div class="row-a row">
                        <Business />
                    </div>
                </div>
            </div>
        </>
    );
});

export default Other;

import React from 'react';

function Slider() {
    return (
        <div className="promo-block">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 sm-margin-b-60">
                        <div className="margin-b-30">
                            <h1 className="promo-block-title">Alisa <br /> Portman</h1>
                            <p className="promo-block-text">Web &amp; UI/UX Designer</p>
                        </div>
                        <ul className="list-inline">
                            <li><a href="#" className="social-icons"><i className="icon-social-facebook"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-twitter"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-dribbble"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-behance"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="promo-block-img-wrap">
                            <img className="promo-block-img img-responsive" src="img/mockup/avatar-01.png" align="Avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Slider;
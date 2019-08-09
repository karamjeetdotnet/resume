import React from 'react';

function Contact() {
    return (<div id="contact">
        <div className="bg-color-sky-light">
            <div className="container content-lg">
                <div className="row margin-b-40">
                    <div className="col-sm-6">
                        <h2>Contact Me</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-xs-6 md-margin-b-30">
                        <h4>Location</h4>
                        <a href="#">Brookyln, New York</a>
                    </div>
                    <div className="col-md-3 col-xs-6 md-margin-b-30">
                        <h4>Phone</h4>
                        <a href="#">+77 234 548 00 00</a>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <h4>Email</h4>
                        <a href="mailto:#">alex.teseira@gmail.com</a>
                    </div>
                    <div className="col-md-3 col-xs-6">
                        <h4>Web</h4>
                        <a href="#">alex.teseira.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;
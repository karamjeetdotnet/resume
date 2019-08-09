import React from 'react';

function About() {
    return (<div id="about">
        <div className="container content-lg">
            <div className="row">
                <div className="col-sm-5 sm-margin-b-60">
                    <img className="full-width img-responsive" src="img/500x700/01.jpg" alt="Image" />
                </div>
                <div className="col-sm-7">
                    <div className="section-seperator margin-b-50">
                        <div className="margin-b-50">
                            <div className="margin-b-30">
                                <h2>About Me</h2>
                                <p>I'm Alisa Portman, orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <a href="#" className="btn-theme btn-theme-md btn-default-bg text-uppercase">Download my CV</a>
                        </div>
                    </div>

                    <h2>My Skills</h2>
                    <div className="progress-box">
                        <h5>Adobe Illustrator <span className="color-heading pull-right">87%</span></h5>
                        <div className="progress">
                            <div className="progress-bar bg-color-base" role="progressbar" data-width="87"></div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <h5>Adobe Photoshop <span className="color-heading pull-right">96%</span></h5>
                        <div className="progress">
                            <div className="progress-bar bg-color-base" role="progressbar" data-width="96"></div>
                        </div>
                    </div>
                    <div className="progress-box">
                        <h5>Graphic Design <span className="color-heading pull-right">77%</span></h5>
                        <div className="progress">
                            <div className="progress-bar bg-color-base" role="progressbar" data-width="77"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;
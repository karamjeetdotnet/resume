import React from 'react';
import data from './data';
const Header = ({ title }) => {
    return (
        // <header className="header navbar-fixed-top">
        //     <nav className="navbar" role="navigation">
        //         <div className="container">
        //             <div className="menu-container js_nav-item">
        //                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
        //                     <span className="sr-only">Toggle navigation</span>
        //                     <span className="toggle-icon"></span>
        //                 </button>
        //                 <div className="logo">
        //                     <a className="logo-wrap" href="#body">
        //                         <img className="logo-img" src="img/logo.png" alt="Asentus Logo"/>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="collapse navbar-collapse nav-collapse">
        //                 <div className="menu-container">
        //                     <ul className="nav navbar-nav navbar-nav-right">
        //                         <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#body">Home</a></li>
        //                         <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#about">About</a></li>
        //                         <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Experience</a></li>
        //                         <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Work</a></li>
        //                         <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </header>
        <header className="header fixed-top">
            
            <nav className="navbar navbar-expand-md custom-navbar" role="navigation">
            <div className="container">
            
                            {/* <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon "></span>
                            </button> */}
                            {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="toggle-icon"></span>
                        </button> */}

                        <div class="menu-container js_nav-item">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                        <span className="float-left"><i className="fas fa-file fa-7x"></i> Resume</span>
                        <div class="logo">
                            <a class="logo-wrap" href="#body">
                            
                            </a>
                        </div>
                    </div>

                              <div className="collapse navbar-collapse " id="collapsibleNavbar">
                                  <ul className="navbar-nav ml-auto ">
                                      {
                                          data.menuItems.map(mi=> <li key={mi.id} className={"nav-item js_nav-item" + (mi.id===1 ? " active":"")}>
                                          <a className="nav-item-child nav-item-hover" href={mi.connector}>{mi.text}</a>
                                        </li>)
                                      } 
                                  </ul>
                              </div> 
            </div>
                          
</nav>
            

        </header>


                                );
                            }
                            
export default Header;
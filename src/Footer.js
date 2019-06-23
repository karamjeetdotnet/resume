import React from 'react';

const Footer = ({text, onMailClick}) => {
    return (
        <div className="fixed-bottom text-center"><ul className="social-network social-circle">
        <li><span onClick={onMailClick}><a href="#" className="icoMail" title="Mail"><i className="fas fa-envelope"></i></a></span></li>
        <li><a href="https://www.facebook.com/karamjeet.harji" target="_default" className="icoFacebook" title="Facebook"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/karamjeetdotnet" target="_default" className="icoGithub" title="Github"><i className="fab fa-github"></i></a></li>
        <li><a href="https://stackoverflow.com/users/4361743/karman" target="_default" className="icoStackoverflow" title="StackOverflow"><i class="fab fa-stack-overflow"></i></a></li>
        <li><a href="https://www.linkedin.com/in/karamjeet-singh-2b552743/" target="_default" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
      </ul>
      </div>
    );
}

export default Footer;
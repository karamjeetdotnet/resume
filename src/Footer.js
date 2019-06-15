import React from 'react';

const Footer = ({text}) => {
    return (
        <div className="fixed-bottom text-center"><ul className="social-network social-circle">
        <li><a href="#" className="icoMail" title="Mail"><i className="fas fa-envelope"></i></a></li>
        <li><a href="https://www.facebook.com/karamjeet.harji" target="_default" className="icoFacebook" title="Facebook"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/karamjeetdotnet" target="_default" className="icoGithub" title="Github"><i className="fab fa-github"></i></a></li>
        <li><a href="#" className="icoStackoverflow" title="StackOverflow"><i class="fab fa-stack-overflow"></i></a></li>
        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
      </ul>
      <a href="https://stackoverflow.com/users/4361743/karman"><img src="https://stackoverflow.com/users/flair/4361743.png" width="208" height="58" alt="profile for karman at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for karman at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/></a>
      </div>
    );
}

export default Footer;
import React from 'react';

const Header = ({title}) => {
    return (
        <div className="fixed-top text-center"><h1>{title}</h1></div>
    );
}

export default Header;
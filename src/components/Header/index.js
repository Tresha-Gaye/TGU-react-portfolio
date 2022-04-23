import React from 'react';
import Navigation from '../Navigation'; // only imported into header, conditionally rendered

function Header(){
    return(
        <div>
            <Navigation />
        </div>
    )
}


export default Header;
import React from 'react';
import Navigation from '../Navigation'; // only imported into header, conditionally rendered

function Header(){
    return(
        <div>
            <h1>Header</h1>
            <Navigation />
        </div>
    )
}


export default Header;
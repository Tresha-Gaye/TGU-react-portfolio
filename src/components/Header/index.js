import React from 'react';
import Navigation from '../Navigation'; // only imported into header, conditionally rendered

function Header(props){

    return(
        <div>
            <h1>Tresha-Gaye Ustanny</h1>
            <Navigation 
            pageChanger = {
                props.pageChanger}
            />
        </div>
    )
}


export default Header;
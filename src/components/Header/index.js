import React from 'react';
import Navigation from '../Navigation'; // only imported into header, conditionally rendered
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props){

    return(
        <header>
            <h1>Tresha-Gaye Ustanny</h1>
            <Navigation 
            pageChanger = {
                props.pageChanger}
            />
        </header>
    )
}


export default Header;
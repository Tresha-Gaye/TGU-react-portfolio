import React from 'react';

function Navigation(props) {

      
    return (
    <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.pageChanger("about")}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact" onClick={() => props.pageChanger("contact")}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio" onClick={() => props.pageChanger("portfolio")}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => props.pageChanger("resume")}>
              Resume
            </a>
          </li>
         
        </ul>
    </nav>
     
  );
}

export default Navigation;
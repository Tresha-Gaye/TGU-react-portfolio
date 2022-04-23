import React from 'react';

function Navigation(props) {
    const {
        navItems = [],
        contactSelected,
        setContactSelected,
      } = props;
    return (
    <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
                <li>
                    <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                </li>
                <li>
                    <span>Resume</span>
                </li>
         
        </ul>
    </nav>
     
  );
}

export default Navigation;
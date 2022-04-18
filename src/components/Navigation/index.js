import React from 'react';

function Navigation() {
    
    return (
    <header>
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
            
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about">
                        About me
                    </a>                    
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                        className="mx-1"
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header> 
  );
}

export default Navigation;
import React from 'react';

function About() {

    return(
        <section>
            <div>
                <img id="photo" src={process.env.PUBLIC_URL + "/assets/tresha.jpg"} alt="Tresha-Gaye Ustanny" />

            <hr></hr>
                <p>
                Enthusiastic Full Stack Web Developer. 
                </p>
                <p>
                Strong Project Management and leadership background.
                </p>
            </div>
        </section>
    )
}

export default About;
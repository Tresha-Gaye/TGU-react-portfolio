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
                Innovative and proactive. 
                Capable of successfully developing elegant, groundbreaking web and command line applications. 
                </p>
                <p>
                Certified in project management, experienced in team leadership and independent problem-solving.
                </p>
                <p>
                Highly-organized multitasker with expertise in scheduling projects, enhancing designs and verifying code.
                </p>
            </div>

            <br />

            
        </section>
    )
}

export default About;
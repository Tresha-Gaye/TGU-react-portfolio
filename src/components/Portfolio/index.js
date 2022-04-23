import React from 'react'; 
import Project from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Portfolio</h2>
            <hr></hr>
          </div>

          <div className="wrapper" id="card-data">
            {portfolio.map((project) => (
              <Project key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </div>
        </section>
    
    );
  }

export default Portfolio;
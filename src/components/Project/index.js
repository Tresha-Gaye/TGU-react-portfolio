import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
function Project(props) {
  console.log(props);
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={process.env.PUBLIC_URL + props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">

       
             
             </p>
              <p class="topics">
                    ({props.topics})
              </p>
              <a target="_blank" rel="noreferrer" href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
              <a target="_blank" rel="noreferrer" href={props.deploy}><img src="https://img.icons8.com/ios/50/000000/domain.png" alt="Deployed application" className="icon"/></a>
        </div>
      </div>
    );
}
  
  export default Project;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/tresha-gaye-ustanny/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a 
            target="_blank" rel="noreferrer"
            href="https://docdro.id/XQO595y"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Technologies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs,<br />
            React, GraphQL,
            </li>
          </ul>
        </div>
      </div>
      <br />
    </section>
  );
}

export default Resume;
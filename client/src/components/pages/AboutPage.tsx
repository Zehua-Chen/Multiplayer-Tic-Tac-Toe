import React from 'react';

import "./AboutPage.css";

/**
 * A page that shows with what dependencies the game is made.
 */
class AboutPage extends React.Component {
  render() {
    return (
      <div className="container-fluid aboutpage-content-height bg-light">
        <div className="container">
        
          <div className="row">
            <div className="col mt-3">
              <h1>About</h1>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <h2>Dependencies</h2>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <h3>Client Side</h3>
              <ul>
                <li><a href="https://reactjs.org/">ReactJS</a></li>
                <li><a href="https://socket.io/">Socket.io Client</a></li>
                <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
                <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
                <li><a href="https://github.com/axios/axios">AxiosJS</a></li>
              </ul>
            </div>
            
            <div className="col">
              <h3>Server Side</h3>
              <ul>
                <li><a href="https://expressjs.com/">ExpressJS</a></li>
                <li><a href="https://socket.io/">Socket.io</a></li>
                <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
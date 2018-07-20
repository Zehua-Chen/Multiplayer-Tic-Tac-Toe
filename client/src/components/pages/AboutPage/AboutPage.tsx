import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './AboutPage.css';

/**
 * A page that shows with what dependencies the game is made.
 */
class AboutPage extends React.Component {
  
  render() {
    
    return (
      <div className={`container-fluid ${styles.fullHeight} bg-light`}>
        <div className="container">
        
          <div className="row">
            <div className="col mt-3">
              <h1 className="display-4">About</h1>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <h2>Dependencies</h2>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <h3>Client Side</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <a href="https://reactjs.org/">ReactJS</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://socket.io/">Socket.io Client</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://getbootstrap.com/">Bootstrap</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://www.typescriptlang.org/">Typescript</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://github.com/axios/axios">AxiosJS</a>
                </li>
              </ul>
            </div>
            
            <div className="col-md-6">
              <h3>Server Side</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-light">
                  <a href="https://expressjs.com/">ExpressJS</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://socket.io/">Socket.io</a>
                </li>
                <li className="list-group-item bg-light">
                  <a href="https://www.typescriptlang.org/">Typescript</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="row mt-4">
            <div className="col">
              <Link className="btn btn-outline-dark" to="/">Back to the Game</Link>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default AboutPage;
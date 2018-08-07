import React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './AboutPage.css';

const linkToGithub = "https://github.com/Zehua-Chen/Multiplayer-Tic-Tac-Toe/";

/**
 * A page that shows with what dependencies the game is made.
 */
class AboutPage extends React.Component {

  render() {

    return (
      <div className={`${styles.fullHeight} bg-light`}>
        {/* 
        Has to use navbar-expand to force navitems to be put horizontally
        no matter the size of the view port
         */}
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
          <a className="navbar-brand" href="#!">Multiplayer Tic Tac Toe</a>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Game</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#!">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={linkToGithub}>Github Repository</a>
            </li>
          </ul>
        </nav>

        <div className="container">

          <div className="row mt-3">
            <div className="col text-center">
              <h1>About</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>The project is hosted on Github</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AboutPage;
import React from "react";
import { Link } from "react-router-dom";
import withStyles from "react-jss";

const linkToGithub = "https://github.com/Zehua-Chen/Multiplayer-Tic-Tac-Toe/";

const style = {
  fullHeight: {
    minHeight: "100vh"
  },

  steps: {
    listStyleType: "decimal"
  }
};

/**
 * A page that shows with what dependencies the game is made.
 */
class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.fullHeight} bg-light`}>
        {/* 
        Has to use navbar-expand to force navitems to be put horizontally
        no matter the size of the view port
         */}
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="#!">
            Multiplayer Tic Tac Toe
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Game
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#!">
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="row mt-3">
            <div className="col text-center">
              <h3>About</h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p>
                This game allows two players to play Tic Tac Toe and more
                viewers to view the game <b>on their own machines</b>.
              </p>

              <ul>
                <li>
                  The server is built on top of <code>Node.JS</code>, for a full
                  list of dependencies, go to <code>./server/project.json</code>
                </li>
                <li>
                  The client is built on top of <code>React.JS</code>, for a
                  full list of dependencies, go to{" "}
                  <code>./client/project.json</code>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              <h3>Installation</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className={classes.steps}>
                <li>
                  Download Repository (<code>MIT License</code>)
                </li>
                <li>
                  Navigate to <code>./server</code> folder and run{" "}
                  <code>npm install</code>;
                </li>
                <li>
                  Navigate to <code>./client</code> folder and run{" "}
                  <code>npm install</code>;
                </li>
                <li>
                  Navigate to <code>./scripts</code> folder;
                </li>
                <li>
                  Run <code>build.js</code> to build the entire project:
                </li>
                <li>
                  A folder named <code>build</code> should appear at the root of
                  the project, containing both scripts for the server and the
                  client.
                </li>
                <li>
                  Navigate to <code>./build</code> folder and run{" "}
                  <code>npm start</code> to start the server;
                </li>
              </ul>

              <a className="btn btn-outline-dark btn-block" href={linkToGithub}>
                Download Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(AboutPage);

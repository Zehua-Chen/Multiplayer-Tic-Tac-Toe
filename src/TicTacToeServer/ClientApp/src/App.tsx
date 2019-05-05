import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { withTheme, WithTheme } from "@material-ui/core/styles";
import WelcomeMenu from "./components/pages/WelcomeMenu";
import CreateGame from "./components/pages/CreateGame";
import JoinGame from "./components/pages/JoinGame";
import About from "./components/pages/About";

class App extends Component<WithTheme> {
  componentDidMount() {
    document.body.style.background = this.props.theme.palette.background.default;
  }

  componentWillUnmount() {
    document.body.style.background = "";
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/app/about" component={About} />
          <Route path="/app/create_game" component={CreateGame} />
          <Route path="/app/join_game" component={JoinGame} />
          <Route path="/app" component={WelcomeMenu} />
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/app" />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withTheme()(App);

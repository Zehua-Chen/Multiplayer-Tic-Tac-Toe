import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { withTheme, WithTheme } from "@material-ui/core/styles";
import WelcomeMenu from "./components/pages/WelcomeMenu";
import CreateGame from "./components/pages/CreateGame";

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
          <Route path="/app/create_game" component={CreateGame} />
          <Route path="/app" component={WelcomeMenu} />
          <Route path="/" exact render={() => {
            return <Redirect to="/app" />
          }} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withTheme()(App);

import * as React from 'react';

// import logo from './logo.svg';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, AboutPage } from './components/pages';

class App extends React.Component {

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

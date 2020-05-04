import React from 'react';
import HeaderContainer from './HeaderContainer';
import Page1 from './Page1';
import Page2 from './Page2';
import HomeContainer from './HomeContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{

  render() {
    return (
      <Router>
        <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/Page1" exact component={Page1} />
          <Route path="/Page2" exact component={Page2} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
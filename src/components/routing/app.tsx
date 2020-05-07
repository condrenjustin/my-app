import React from 'react';
import HeaderContainer from '../header/headerContainer';
import Page1 from '../../page1';
import Page2 from '../../page2';
import HomeContainer from '../home/homeContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
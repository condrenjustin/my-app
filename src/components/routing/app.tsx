import React from 'react';
import HeaderContainer from '../header/headerContainer';
import HomeContainer from '../home/homeContainer';
import AboutContainer from '../about/aboutContainer';
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
          <Route path="/About" exact component={AboutContainer} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
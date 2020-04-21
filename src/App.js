import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { Toolbar, AppBar, Snackbar, Grid} from '@material-ui/core';

class App extends React.Component{

  constructor(props){
  super(props)
  this.state = {countOne: 0, countTwo: 0, countThree: 0}
}

incrementVariableOne = () => {
  this.setState({
  countOne: this.state.countOne + 1
  })
}

incrementVariableTwo = () => {
  this.setState({
  countTwo: this.state.countTwo + 1
  })
}

incrementVariableThree = () => {
  this.setState({
  countThree: this.state.countThree + 1
  })
}

  render(){
  return (
  <AppBar position = "static">
  <Toolbar>
      <Grid
    container
    direction = "row"
    justify="space-between"
    alignItems="center">
          <Grid item >
      <Button 
              color = "secondary" 
              variant="outlined" 
              size="small" 
              onClick={this.incrementVariableOne} 
              disabled={this.state.countOne === 10}>
                  Increment Me
                  <br></br>
                  {this.state.countOne}
      </Button>
          </Grid>
          <Grid item >
      <Button 
              color = "secondary" 
              variant="outlined" 
              size="small" 
              onClick={this.incrementVariableTwo} 
              disabled={this.state.countTwo === 10}>
                  Increment Me
                  <br></br>
                  {this.state.countTwo}
      </Button>
          </Grid>
          <Grid item >
      <Button 
              color = "secondary" 
              variant="outlined" 
              size="small" 
              onClick={this.incrementVariableThree} 
              disabled={this.state.countThree === 10}>
                  Increment Me
                  <br></br>
                  {this.state.countThree}
      </Button>
          </Grid>
      </Grid>
      <Snackbar 
    open={this.state.countOne === 10 && this.state.countTwo === 10 && this.state.countThree === 10} 
    message="You have reached ten clicks on each button!"/>
  </Toolbar>
  </AppBar>
  );
}
}

export default App;

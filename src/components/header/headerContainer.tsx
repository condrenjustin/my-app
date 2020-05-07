import React from 'react';
// import { connect } from 'react-redux';
import Header from '../header/header';

enum Buttons {
  Button1,
  Button2,
  Button3,
}

export interface HeaderContainerProps {
  // dispatch: (action:any) => any;
}

export interface HeaderContainerState {
  button1: number,
  button2: number,
  button3: number,
  open: boolean;
}

class HeaderContainer extends React.Component<
  HeaderContainerProps, HeaderContainerState
> {

  constructor(props:HeaderContainerProps) {
    super(props);
    this.state = {
      button1: 0,
      button2: 0,
      button3: 0,
      open: false,
    }
    this.incrementVariable = this.incrementVariable.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
  }

  handleDrawerToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  handleDrawerClose = () => {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false });
    }
  }

  handleDrawerClick = () => {
  }

  incrementVariable = (whichButton:Buttons) => {
    const {
      button1,
      button2,
      button3,
    } = this.state;
    switch (whichButton) {
      case Buttons.Button1:
        this.setState({
          button1: button1 + 1
        });
        break;
      case Buttons.Button2:
        this.setState({
          button2: button2 + 1
        });
        break;
      case Buttons.Button3:
        this.setState({
          button3: button3 + 1
        });
        break;
      default:
        return;
    }
  }

  render() {
    const { open, button1, button2, button3 } = this.state;
    return (
      <div>
        <Header
          open={open}
          button1={button1}
          button2={button2}
          button3={button3}
          handleDrawerToggle={this.handleDrawerToggle}
          handleDrawerClose={this.handleDrawerClose}
          handleDrawerClick={this.handleDrawerClick}
          incrementVariable={this.incrementVariable}
        />
      </div>
    );
  }
}

export default HeaderContainer;
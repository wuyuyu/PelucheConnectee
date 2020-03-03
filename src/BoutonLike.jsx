import React, { Component } from "react";

export default class BoutonLike extends Component {
  constructor(props) {
    super(props);
    this.state = {like: true};

    // This binding is necessary to make `this` work in the callback
  }

  handleClick=()=> {
    this.setState(prevState => ({
      like: !prevState.like
    }));
  }

  render() {
    return (
      <button style= {this.state.like ?{color:"black"}:{color:"red"}} onClick={this.handleClick}>
        {this.state.like ? 'Like' : 'Liked'}
      </button>
    );
  }
}

import React, { Component } from "react";

function FormattedDate(props) {
    return <h2>Il  est {props.date.toLocaleTimeString()}.</h2>;
  }
  
 export default class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
        <div id="Horloge">
          <FormattedDate date={this.state.date} />
        </div>
        </div>
      );
    }
  }
  
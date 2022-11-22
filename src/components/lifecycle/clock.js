import React from "react";
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
     // We want to set up a timer whenever the Clock
     // is rendered to the DOM for the first time
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    //We also want to clear that timer whenever the DOM
    // produced by the Clock is removed
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
          <h1>CLock</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
 export default Clock   
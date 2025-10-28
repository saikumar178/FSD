import React, { Component } from "react";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("M1 constructor : constructor called");
    this.state = {
      message: "hello world!",
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("M2/UP1 getDerivedStateFromProps : getDerivedStateFromProps called");
    return null;
  }

  componentDidMount() {
    console.log("M4 componentDidMount : componentDidMount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("UP2 shouldComponentUpdate : shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UP4 getSnapshotBeforeUpdate : getSnapshotBeforeUpdate called");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("UP5 componentDidUpdate : componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("UM-1 componentWillUnmount : componentWillUnmount called");
  }

  changeMessage = () => {
    this.setState({
      message: "Welcome to React Lifecycle Methods!",
    });
  };

  render() {
    console.log("M3/UP3 render : render called");
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifeCycleExample;

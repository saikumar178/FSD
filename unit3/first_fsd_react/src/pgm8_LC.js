import React, { Component } from 'react';

class CityChanger extends Component {
  // 1. MOUNTING: Constructor is called first
  constructor(props) {
    super(props);
    this.state = { city: "Mysore" };
    console.log("1. Constructor: State initialized");
  }

  // 2. MOUNTING & UPDATING: Syncs state to props (rarely used)
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps: Syncing data");
    return null;
  }

  // 3. MOUNTING: Component is now visible in the DOM
  componentDidMount() {
    console.log("3. componentDidMount: Component is on screen");
    
    // Triggering the Update phase after 2 seconds
    setTimeout(() => {
      this.setState({ city: "Bangalore" });
    }, 2000);
  }

  // 4. UPDATING: Determines if the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log("4. shouldComponentUpdate: Deciding whether to update");
    return true; // Return true to allow the change
  }

  // 5. UPDATING: Captures info from the DOM before it changes
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("5. getSnapshotBeforeUpdate: Capturing scroll position or state");
    return "Snapshot Data";
  }

  // 6. UPDATING: Called after the DOM has been updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("6. componentDidUpdate: DOM is now updated");
    console.log("Snapshot received:", snapshot);
  }

  // RENDER: Called in both phases
  render() {
    console.log("Render: Drawing the UI");
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Current City: {this.state.city}</h1>
        <p>Check the console to see the lifecycle order!</p>
      </div>
    );
  }
}

export default CityChanger;
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'App.jsx'
    };
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    );
  }
}

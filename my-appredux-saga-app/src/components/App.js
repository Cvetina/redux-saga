import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actions from "../reducers/reducer";


class App extends Component {
  componentDidMount() {
    this.getUsers()
  }

  getUsers = async () => {
    return await this.props.dispatch(actions.getUsers());
  }

  render() {
    const { user, error } = this.props;
    console.log(user, error);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
    error: state.reducer.error
  };
};

export default connect(mapStateToProps)(App);
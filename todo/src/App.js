import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTitle } from './components/actions';
import TodoList from './components/TodoList';
import Title from './components/Title';


class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        

        <Title />
        <TodoList />

      </div>
    );
  }
}

// This function states what part of the state tree should be exposed to this 
// component.
const mapStateToProps = (state) => {
  return {
      ...state
  };
};

// HOC that makes this component aware of the rest of the redux architecture.
// Without this, this component is only a dumb react component.
// We pass in all the functions that are reliant on Redux along with the 
// component itself, so that redux makes itself known to this component.
export default connect(mapStateToProps, {updateTitle})(App);

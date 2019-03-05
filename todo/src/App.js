import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, clearTodo } from './components/actions';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='brand-title'>Todo list</h1>


      </div>
    );
  }
}

// This function states what part of the state tree should be exposed to this 
// component.
const mapStateToProps = (state) => {
  return {
      todoList: state
  };
};

// HOC that makes this component aware of the rest of the redux architecture.
// Without this, this component is only a dumb react component.
// We pass in all the functions that are reliant on Redux along with the 
// component itself, so that redux makes itself known to this component.
export default connect(mapStateToProps, {addTodo, completeTodo, clearTodo})(App);

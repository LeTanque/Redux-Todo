import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {markTaskComplete, clearCompleted, addTask} from './actions'


class TodoList extends Component {
    state = {
        // newMember:'',
        taskInput:''
    };


    markTaskComplete = id => {
        this.props.markTaskComplete(id);
    }

    clearCompleted = () => {
        this.props.clearCompleted();
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskInput);
        this.setState({taskInput:''});
    }


    handleInput = event => {
        this.setState({ taskInput: event.target.value });
    };

    render() {
        console.log(this.props);
        
        return (
            <Fragment>

                <section  className='todo-form'>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type='text'
                            name='newTask'
                            placeholder='New task...'
                            value={this.state.taskInput}
                            onChange={this.handleInput}
                        />
                    </form>
                </section>

                <ul className='todo-list'>

                    {this.props.todoList.map(item => (

                        <Fragment key={item.id} >
                            <li 
                                onClick={() => this.markTaskComplete(item.id)} 
                                className={`task ${item.completed ? "completed" : ""}`}
                            >

                                {item.todoItem}

                            </li>
                        </Fragment>

                    ))}

                </ul>

                <button 
                    className="btn-danger"
                    onClick={this.clearCompleted}
                >
                    clear
                </button>
    
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todoList
})


export default connect(
    mapStateToProps,
    {markTaskComplete, clearCompleted, addTask}
)(TodoList);
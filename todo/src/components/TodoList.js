import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { IoMdClose } from 'react-icons/io';

import {markTaskComplete, clearCompleted, addTask, removeTask} from './actions'


// Yes, yes, I know, this is one BIG component with ALL my redux crammed into it!
// But, my argument here is, Redux is already a whole lot more typing. I can break these
// into individual components, that's actually trivial at this point.
// And I will definitely do that when we move into groups or on production sites.
// But for this demo/learning tool, etc, it's MUCH simpler to just keep most functionality
// in one file. Easier to reference, easier to see what's going on, and I think easier
// to learn with. 
class TodoList extends Component {
    state = {
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

    removeTask = (id) => {
        this.props.removeTask(id);
    }

    render() {
        return (
            <Fragment>

                <section  className='todo-form'>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type='text'
                            name='newTask'
                            placeholder='Your new task here... (enter to submit)'
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
                                <span 
                                    className="close-btn"
                                ><IoMdClose onClick={()=>this.removeTask(item.id)}/></span>
                            </li>
                        </Fragment>

                    ))}

                </ul>

                {/* Button only shows if there are tasks in the todoList props state store array */}
                <button     
                    className={`btn-danger ${this.props.todoList.length ? "" : "display-none"}`}
                    onClick={this.clearCompleted}
                >
                    clear
                </button>
    
            </Fragment>
        )
    }
}

// This does exactly what the variable describes. Maps state to props.
const mapStateToProps = state => ({
    todoList: state.todoList
})

// This clever little redux jewel pipes the map in with the actions and wraps em around the component
export default connect(
    mapStateToProps,
    {markTaskComplete, clearCompleted, addTask, removeTask}
)(TodoList);
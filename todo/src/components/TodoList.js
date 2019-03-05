import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {markTaskComplete, clearCompleted} from './actions'


class TodoList extends Component {
    state = {
        newMember: ''
    };


    markTaskComplete = id => {
        this.props.markTaskComplete(id);
    }

    clearCompleted = () => {
        // console.log('clear completed has been pressed');
        this.props.clearCompleted();

    }

    render() {
        console.log(this.props);
        
        return (
            <Fragment>

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
    {markTaskComplete, clearCompleted}
)(TodoList);
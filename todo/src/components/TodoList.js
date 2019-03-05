import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {markTaskComplete} from './actions'


class TodoList extends Component {
    state = {
        newMember: ''
    };


    markTaskComplete = id => {
        this.props.markTaskComplete(id);
    }

    taskStyle = () => {
        return " complete "
    }

    render() {
        console.log(this.props);
        
        return (
            <Fragment>
    
                <div>
                    <ul>

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
                </div>
    
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todoList
})


export default connect(
    mapStateToProps,
    {markTaskComplete}
)(TodoList);
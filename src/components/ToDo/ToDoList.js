import React, {Component} from 'react';
import ToDo from './ToDo';
import {connect} from 'react-redux';
import {deleteToDo, toggleToDo} from '../../actions/index.js';

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleOnToggle = this.handleOnToggle.bind(this);
    }

    handleTaskDelete(taskId) {
        this.props.deleteToDo(taskId);
    }

    handleOnToggle(taskId) {
        this.props.toggleToDo(taskId);
    }

    render() {
        const toDoItems = this.props.todos.map((todo) => {
            return (
                <ToDo
                    key={todo.id}
                    taskId={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onTaskDelete={this.handleTaskDelete}
                    onToggle={this.handleOnToggle}
                />

            )
        });

        return (
            <ul>
                {toDoItems}
            </ul>
        )
    }
}

function getVisibleToDoS(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;

        case 'ACTIVE':
            return todos.filter(todo => !todo.completed);

        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);

        default:
            return todos;
    }
}

const mapStateToProps = function (state) {
    return {
        todos: getVisibleToDoS(state.todos, state.filter)
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        deleteToDo: function (id) {
            return (
                dispatch(deleteToDo(id))
            )
        },
        toggleToDo: function (id) {
            return (
                dispatch(toggleToDo(id))
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
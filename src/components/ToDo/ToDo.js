import React, {Component} from 'react';

export default class ToDo extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete() {
        this.props.onTaskDelete(this.props.taskId);
    }

    handleToggle() {
        this.props.onToggle(this.props.taskId);
    }

    render() {

        return (
            <li>
                <input type="checkbox" name="test" id="test" onChange={this.handleToggle} />
                <span className={this.props.completed ? "taskCompleted" : "taskNotCompleted"}>{this.props.text}</span>
                <button className="delete-button" onClick={this.handleDelete}>X</button>
            </li>
        )
    }
};


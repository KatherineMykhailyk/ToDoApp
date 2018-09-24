import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addToDo } from '../../actions/index.js';
const ENTER_KEY = 13;

class AddToDo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {

        this.setState({
            value: event.target.value
        });

    }

    handleKeyDown(event) {
        if (event.keyCode === ENTER_KEY) {
            this.props.addToDo(this.state.value);
            event.preventDefault();
            this.setState({ value: "" });
        }
    }

    render() {
        return (
            <form className="add-new-task" autoComplete="off">
                <input type="text"
                       name="new-task"
                       placeholder="What needs to be done?"
                       value={this.state.value}
                       onChange={this.handleChange}
                       onKeyDown={this.handleKeyDown}
                />
            </form>
        )
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        addToDo: function (text) {
            return (
                dispatch( addToDo (text))
            )
        }
    }
};

export default connect(undefined, mapDispatchToProps)(AddToDo);


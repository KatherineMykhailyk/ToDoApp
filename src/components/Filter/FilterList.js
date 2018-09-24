import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../../actions/index.js';

class FilterList extends Component {

    constructor (props) {
        super (props);
    }

    render() {

        const {setFilter, children} = this.props;

        return (
            <span className="show-all" onClick={setFilter} > {children} </span>
        )
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {

    return {
        setFilter: function () {
            return (
                dispatch(setFilter(ownProps.filter))
            )
        }
    }
}

export default connect(undefined, mapDispatchToProps)(FilterList);
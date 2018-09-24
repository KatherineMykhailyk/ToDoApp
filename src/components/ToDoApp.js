import React, {Component} from 'react';
import AddToDo from '../components/ToDo/AddToDo.js';
import ToDoList from '../components/ToDo/ToDoList.js';
import FilterList from "./Filter/FilterList.js";


export default class ToDoApp extends Component {
    render() {
        return (
            <div className="wrap">
                <AddToDo/>
                <div className="task-list">
                    <ToDoList/>
                </div>
                <div className="filter-list">
                    <FilterList filter="SHOW_ALL"> All </FilterList>
                    <FilterList filter="SHOW_COMPLETED"> Completed </FilterList>
                </div>
            </div>
        )
    }
}
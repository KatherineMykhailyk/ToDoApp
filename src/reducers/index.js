import { combineReducers } from 'redux';

import todos from '../reducers/todoreducer.js';
import filter from '../reducers/filterreducer.js';

export const rootReducer = combineReducers ({ todos, filter });

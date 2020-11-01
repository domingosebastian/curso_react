import { combineReducers } from 'redux'
import misContactosReducer from './misContactosReducer';
import formReducer from './formReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers(
    {
        // estados que forman el store - reducer que lo gestiona
        formState : formReducer,
        contactsState: misContactosReducer,
        filterState: filterReducer
    }
);

export default rootReducer;
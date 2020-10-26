import { combineReducers } from 'redux'
import misContactosReducer from './misContactosReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers(
    {
        formState : formReducer,
        contactsState: misContactosReducer
    }
);

export default rootReducer;
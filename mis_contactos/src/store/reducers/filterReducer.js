let initialState = '';

const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_FILTER':
            return action.payload.search;
        default:
            return state;
    }
}

export default filterReducer;
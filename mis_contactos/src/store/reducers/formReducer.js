let initial = false;

const formReducer = (state = initial, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state;
    }
}

export  default formReducer;
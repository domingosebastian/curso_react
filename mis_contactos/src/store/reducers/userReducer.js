const initialState = {
    fetching: false,
    token: null, // gestionado asinc
    error: null, // async
    logged: false // async
}

export function userReducer (state = initialState, action) {

    switch(action.type) {
        case 'API_CALL_REQUEST':
            return {
                ... state,
                fetching: true,
                error: null,
                logged: false
            };

            case 'API_CALL_SUCCESS':
                return {
                    ... state,
                    fetching: false,
                    error: null,
                    logged: true,
                    token: action.token.
                }
    
        default:
            break;    
    }
}
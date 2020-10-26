
// Funcion que devuelve una accion paara la gestion de asincronia en el store
export function login(email, pass) {

    return {
        type: 'API_CALL_REQUEST',
        payload: {
            // configuracion para axios en el worker saga
            request: {
                method: 'post',
                url: 'https://reqres.in/apilogin',
                data: {
                    email: email,
                    password:pass
                }
            },
            // acciones que despachara elworker saga
            okAction: 'API_CALL_SUCCESS',
            failAction: 'API_CALL_FAILURE'
        }
    }

}
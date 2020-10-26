// Archivo donde especifivar watcher sagas i worker sagas

// el watcher saga :
//   Funcion generadora que escucha un tipo de acciones asincronas
//   Cuando recibe una, pone a trabajar un worker saga

// El worker saga
//   Funcion generadora que recibe la accion con su type y su payload
//   y se encarga de ejecutar el proceso asincrono una vez 

import { takeLatest, call, put } from 'redux-saga/effects';
//7 takeLatest -> escuchar la ultima accion de un tipo concreto
// call -> llamar a una funcion desde el worker saga
// put -> despachar una accion nueva desde el worker saga

import axios from 'axios';
// axios: llibreria pararealizar peticions http

// funcio que no te per que acabar
export function* watcherSaga() {
    // pone a trabajar el worker saga cuanda escuche unaaccion del tipo API_CALL_REQUEST
    yield takeLatest('API_CALL_REQUEST', workerSaga);
}

export function* workerSaga(action) {
    try {
        console.table(action);
        // obtener respuesta 
        const response = yield call(fetchHTTP(action.payload.request));
        // obtenemos el token
        const token = response.data.token;
        // despachamos una accion que viene determinada en la accion
        // anteior, concretamente la okAction
        yield put({
            type: action.payload.okAction,
            payload: token
        });
    } catch (error) {
        yield put({
            type: action.payload.failaction,
            payload: error
        });       
    }
}

function fetchHTTP(request) {
    return function() {
        return axios(request);
    }
}
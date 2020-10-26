/*
 * Un reducer centraliza el control del estado de la aplicacion.
 *
 * Tiene dos partes principales:
 *  - Cual es el estado inicial de la aplicacion
 *  - Como se modifica el estado como resulado de las acciones notificadas por los componentes
 */

let initialState = [
    {id: 1, nombre: 'Al', apellidos: 'Capone', email: 'capo@cosanostra.com', telefono: '546454654', 
    empresa: 'Cosa Nostra SL', sector: 'Alimentación'},
    {id: 2, nombre: 'Darth', apellidos: 'Vader', email: 'darthi@imperio.imp', telefono: '69988524',
    empresa: 'Imperio', sector: 'Tecnológico'},
    {id: 3, nombre: 'Adolf', apellidos: 'Hitler', email: 'hitler@ss.de', telefono: '666888555',
    empresa: 'Tu Raich en casa', sector: 'Finanzas'},
    {id: 4, nombre: 'Rocco', apellidos: 'Torrebruno', email: 'torre@bruno.com', telefono: '55545545',
    empresa: 'Circ du Sol', sector: 'Finanzas'}
];

export {initialState};

// Catalogo de acciones
const misContactosReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    id: action.payload.id,
                    nombre: action.payload.nombre,
                    apellidos: action.payload.apellidos,
                    email: action.payload.email,
                    telefono: action.payload.telefono,
                    empresa: action.payload.empresa,
                    sector: action.payload.sector
                }
            ]
        case 'REMOVE_CONTACT': 
            return state.filter ( (contact) => contact.id !== action.payload.id);
        default:
            return state;
    }
}

export  default misContactosReducer;
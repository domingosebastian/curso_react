

/*
 * Las acciones son el recurso de los componentes para actuar sobre el store
 *
 * Se presentan como funciones que generan objetos action (type + payload)
 */ 
export const addContact = (nombre, apellidos, email, telefono, empresa, sector) => {
    return {
        type: 'ADD_CONTACT',
        payload: {
            nombre,
            apellidos,
            email,
            telefono,
            empresa,
            sector
        }
    }
};


export const removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: {
            id
        }
    }
};

export const toggleForm = () => {
    return {
        type: 'TOGGLE',
        payload: {}
    }
}


export const filter = (search) => {
    return {
        type: 'SET_FILTER',
        payload: {
            search
        }
    }
}
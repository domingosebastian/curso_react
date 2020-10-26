import { connect } from 'react-redux';

import ContactList from '../components/ContactList';

import { removeContact } from '../store/actions/actions.js'

/*
 * Un container conecta el componente React (ContactList) al store (state.contactsState)
 *
 * nombre: MapStateToProps -> datos
 */
const mapStateToContacts = (state) => {
    return {
        contacts: state.contactsState
    }
}

/*
 * Catalogo de eventos asignados a los componentes
 * 
 * Correspondencia:
 *  - funcion -> dispatch ( generador accion )
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => {
            dispatch( removeContact(id) );
        }    
    }
}

/*
 * A partir de este momento :
 *   - la propiedad contacts de ContactList hace referencia al contactsStore del storage
 *   - la funcion onContactClick -> addContact -> genera accion ADD_CONTACT
 */
const ContactsContainer = connect(mapStateToContacts, mapDispatchToProps)(ContactList)

export default ContactsContainer;

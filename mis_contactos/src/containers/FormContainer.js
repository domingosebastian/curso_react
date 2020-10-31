import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

import NewContactComponent from '../components/NewContactComponent';

const mapStateToProps = (state) => {
    return {
        visible: state.formState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (nombre, apellidos, telefono, email, empresa, sector) => {
            dispatch(actions.addContact(nombre, apellidos, telefono, email, empresa, sector)); 
        },
        toggleForm: () => {
            dispatch (actions.toggleForm());
        }

    }
}

const ContactFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewContactComponent)

export default ContactFormContainer 

import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

// javascript:
//   {contacts, onContactClick} == { contacts: contacts, onContactClick: onContactClick }

const ContactList = ({ contacts, onRemove }) => {

    return (
        <div>
            <h1>Lista de villanos</h1>

            <ul>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        onClickRemove = {
                            () => onRemove( contact.id )
                        }
                        contact = {contact} // javascript -> ... operator  -> expande el objeto
                    />
                ))}
            </ul>
        </div>
    )

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape(
            {
                nombre: PropTypes.string.isRequired,
                apellidos: PropTypes.string
            }
        ).isRequired
    ).isRequired,
    onRemove: PropTypes.func.isRequired
}

export default ContactList;
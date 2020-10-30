import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Ficha from './Ficha'

// sintaxis const Tipo = () => {}   
//    funcion que genera un objeto (parte derecha) a partir de unos parametros (parte izquierda)

// en parentesis: props que recibe el componente :
//   se puede expresar de forma generica  ( props )
//   o expresar los props en forma de objeto explicito

// Estas propiedades son pasadas por el componente padre (ContactList)


const color = (sector) => {
    return (
    sector === 'Finanzas'? 'lightblue':
    sector === 'Tecnológico' ? 'yellow': 
    sector === 'Alimentación' ? 'green' : 'white');

}

const style = (over, sector) => {
    return {
        color: color(sector),  
        textAlign: 'left',
        backgroundColor: over? 'lightgray': 'black'
        }
}


const Contact = ( {  onClickRemove , contact} ) => {

    const [over, setOver] = useState (false);
    const [mostra, setMostra] = useState (false);

    return (

        <li
            onClick = { () => {setMostra(!mostra);} } // funcion {} asignada a evento nativo
            onMouseOver = { () => { setOver(true);  }}
            onMouseOut = { () => { setOver(false); } }
            style = {
                style(over, contact.sector)
            }
            >
            {contact.nombre} {contact.apellidos} 
            &nbsp;<button onClick = { onClickRemove }>Matar</button>
            {mostra? 
            <Ficha 
                contact={contact}
            />
            : ''}
        </li>
    );


};


// informacion del tipo
Contact.propTypes = {
    onClickRemove: PropTypes.func.isRequired,
    contact: PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                nombre: PropTypes.string.isRequired,
                email: PropTypes.string,
                apellidos: PropTypes.string,
                telefono: PropTypes.string,
                empresa: PropTypes.string,
                sector: PropTypes.string
            }
        ).isRequired
}



export default Contact;

import React from 'react';

const Ficha = ( { contact } ) => {


    return (
        <p style= { 
            {
                backgroundColor: 'black'
            }
        }>
            Nombre: {contact.nombre}<br />
            Apellidos: {contact.apellidos} <br />
            Email: {contact.email} <br />
            Empresa: {contact.empresa}<br />
            Sector: {contact.sector}

        </p>
    );


};

export default Ficha;
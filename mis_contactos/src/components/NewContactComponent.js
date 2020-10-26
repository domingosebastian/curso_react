import React from 'react';

import ContactForm from './ContactForm';


const NewContactComponent = ({ visible, submit, toggleForm } ) => {
    return visible ? 
        ( 
            <div>
                <h1>Dime quien es ...</h1>
                <ContactForm
                visible = {visible}
                submit = {submit}
                />
                <button type='button' onClick = {toggleForm} >¡Escondete!</button>
            </div>
        ) :
        ( <div><button type='button' onClick = {toggleForm} >Nuevo Villano</button></div>)
}


export default NewContactComponent;
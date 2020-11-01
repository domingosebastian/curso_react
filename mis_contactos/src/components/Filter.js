import React, { useRef } from 'react';

const Filter = ({ filter }) => {
    
    const valor =  useRef('');

    return (
        <div>
            <input text='text' ref={valor}></input>
            <button onClick={() => filter(valor.current.value)} >Buscar</button>
        </div>
    )
}



export default Filter;
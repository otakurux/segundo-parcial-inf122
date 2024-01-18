import React from 'react';
import '../styles/Input.css'


function Input({ add}) {
    return (
        <div className='input-container'>
            <h1 className='title'>Mis metas</h1>
            <div className='input-button'>
                <input type="text" className='input' id='text'></input>
                <button className='button' onClick={add}>Agregar</button>
            </div>
        </div>
    );
}

export default Input;

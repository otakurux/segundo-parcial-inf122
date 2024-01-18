import React from "react";

import LogoA from '../imagenes/logoA.svg';
import IconB from '../imagenes/iconB.svg';

import '../styles/Meta.css';

function Meta({ meta, delet, tachar }) {
    return (
        <div className="meta-container">
            <div className='contenedor-nota'>
                <p className='nota'>{meta}</p>
                <div className="button-container">
                    <button className='boton' onClick={delet}><img src={IconB}></img></button>
                    <button className='boton' onClick={tachar}><img src={LogoA}></img></button>
                </div>
            </div>
        </div>
    )
}

export default Meta;
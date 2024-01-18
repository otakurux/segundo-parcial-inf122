import './App.css';

import Meta from './conponentes/Meta';
import Input from './conponentes/Input.js';

import React, { useState } from 'react';

function App() {
  const [metas, setMetas] = useState([]);
  const [complet, setComplet] = useState(0);
  const [pendig, setPendig] = useState(0);

  function delet() {
    setMetas("");
    setPendig(pendig === 0 ? pendig : pendig - 1);
  }

  function tachar() {
    setComplet(complet + 1);
    setPendig(pendig === 0 ? pendig : pendig - 1);
  }

  function agregarTarea() {
    const meta = document.querySelector("");
    setMetas(...metas, crearMeta(meta));

    setPendig(pendig + 1);
  }

  function crearMeta(meta) {
    return (
      <Meta
        meta={meta}
        delet={delet}
        tachar={tachar}
      />
    )
  }


  function generarLista() {
    return (
      <div>
        {
          metas.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </div>
    )
  }
  return (
    <div className="App">
      <Input add={agregarTarea} />
      <div className='text-container'>
        <p className='text'>Completadas: {complet}</p>
        <p className='text'>pendientes: {pendig}</p>
      </div>
      <div className='metas-container'>
        <Meta
          meta={metas}
          delet={delet}
          tachar={tachar}
        />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';

import "../styles.css";

export const IngresarCooperativa = () => {

  const [estado, setEstado] = useState(false);
  const [coop, setCoop] = useState(
    {
      nombre_cooperativa: " ",
      rut_cooperativa: " "
    }
  );

  useEffect(() => {

    if(estado){
      setEstado(false)
      formuliarioCoop.reset()};
  }, [estado]);

  const {nombre, rut} = coop;

  const handleChange = (e) => {
    setCoop({
        ...coop,
        [e.target.name] : e.target.value
    }) 
  };


  const handleSubmit = (e) => {

    e.preventDefault();

      //validacion
    if (!coop.nombre_cooperativa || !coop.rut_cooperativa) {
        alert("los campos son obligatorios")
      return
    };

    //-------//
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(coop) 
    }
  
    fetch('http://localhost:9000/api/coop', requestInit)
    .then(res => res.json() )
    .then( res => { 
        setCoop(res)
        alert("miembro del polo registrado correctamente")
        setEstado(true) 
        setCoop({
          nombre_cooperativa: " ",
          rut_cooperativa: " "
        })
    }) 
    .catch(error => console.error('Error en el proceso:', error)); 
  };


  return (
    <div className='fondo'>
      <h1>Registro de Cooperativas</h1>
      <form className="formulario" onSubmit={handleSubmit} id="formuliarioCoop">
            <div className="gridContainer">
              <label>
                Nombre del Miembro del Polo: 
                <input 
                    className="inputs" 
                    type = "text" 
                    name="nombre_cooperativa" 
                    placeholder="Ingresa nombre de la Cooperativa" 
                    value={nombre}
                    onChange={handleChange}
                />
              </label>
            </div>
            <div className="gridContainer">
              <label>
                RUT del Miembro del Polo:
                <input 
                  className="inputs" 
                  type = "text" 
                  name="rut_cooperativa" 
                  placeholder="Ingresa el RUT de la Cooperativa "
                  value={rut}
                  onChange={handleChange}
                />     
              </label>       
            </div>
          
            <div>
              <button className="boton" type="submit">
                Ingresar
              </button>
            </div>

        </form>
    </div>
  )
} 

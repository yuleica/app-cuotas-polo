import React,{useState, useEffect} from 'react';
import Select from 'react-select';

import "../styles.css";
import { descripcion } from '../Helper/data_list';


export const ReporteInfoPagos = () => {

  const [lista, setLista] = useState([]);
  const [estado, setEstado] = useState(false);

  const [cuota, setCuota] = useState(
    {
      id_cooperativa: 0,
      nro_comprobante: 0,
      banco_pago: " ",
      fecha_pago: " ",
      monto_pagado: 0,
      descripcion_pago: " "
    }
  );

  
  useEffect(() => {
    if (estado){
      setEstado(false)
      formularioCuotas.reset()}; 
  }, [estado]);
  
 
  let {comprobante, banco, fecha, monto, id_cooperativa, descripcion_pago} = cuota;
  
  const {data_lista} = descripcion();

 //carga de data
  fetch('http://localhost:9000/api/coop')
  .then(res => res.json())
  .then( res => {
    setLista(res)
  }) 
  .catch(error => console.error('Error en el proceso:', error)); 
 

  //actualización de estados
  const handleChange = (e) => {
    setCuota({
        ...cuota,
        [e.target.name] : e.target.value
    }); };

  const handleSelectOption = (e) => {
    setCuota({
      ...cuota,
      id_cooperativa: (e.value)
    })  

  };

  const handleSelectDescripOption = (e) => {
    setCuota({
      ...cuota,
      descripcion_pago: (e.value)
    })
  };

  // // manipulación de data
  const handleSubmit = (e) => {

    e.preventDefault();

    //validacion
    
    if (cuota.monto_pagado < 20000) {
      alert("monto mínimo de pago permitido es de 20.000 pesos")
      return
    };

    if (!cuota.descripcion_pago || !cuota.fecha_pago) {
      alert("los campos descripción del pago y fecha de pago son obligatorios")
      return
    };
    
  
    //actualización
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cuota) 
    }

    fetch('http://localhost:9000/api/cuota', requestInit)
    .then(res => res.json() )
    .then( res=> {
        setCuota(res)
        alert("pago registrado correctamente")
        setEstado(true)
        setCuota({
          id_cooperativa: 0,
          nro_comprobante: 0,
          banco_pago: " ",
          fecha_pago: " ",
          monto_pagado: 0,
          descripcion_pago: " "
        }) } )
    .catch(error => console.error('Error en el proceso:', error));
  };

  return (
    <div className='fondo'>
        <h1>Registro de Cuotas</h1>
        <div>
          <label>
            Miembro del Polo:
            <Select 
              options={lista.map(item =>({label: item.nombre_cooperativa, value: item.id_cooperativa }))}
              onChange={handleSelectOption}
          />
          </label>
        </div>
        <form className="formulario" id="formularioCuotas" onSubmit={handleSubmit}>
 
            <div className="gridContainer">
              <label>
                Monto Pagado:
                <input 
                  className="inputs" 
                  type = "number" 
                  name="monto_pagado" 
                  placeholder="Ingresa el Monto Pagado"
                  data-validate="Por Favor ingresa monto mayor o igual a 20.000" 
                  value={monto}
                  onChange={handleChange} />
              </label>
            </div>
            <div className="gridContainer">
              <label>
                Nro. de Comprobante Bancario:
                <input 
                  className="inputs" 
                  type = "number" 
                  name="nro_comprobante" 
                  placeholder="Ingresa el Nro. del Comprobante "
                  data-validate="Por Favor ingresa un número de comprobante" 
                  value={comprobante}
                  onChange={handleChange}/>     
              </label>         
            </div>
            <div className="gridContainer">
              <label>
                Nombre del Banco:
                <input 
                  className="inputs" 
                  type = "text" 
                  name="banco_pago" 
                  data-validate="Por Favor ingresa el nombre del banco donde depositaste o transferiste" 
                  placeholder="Ingresa el Nombre del Banco "
                  value={banco}
                  onChange={handleChange}/> 
              </label>  
            </div>
            <div className="gridContainer">
              <label>
                Fecha del Pago:
                <input 
                  className="inputs" 
                  type = "date" 
                  name="fecha_pago" 
                  placeholder="Ingresa la Fecha de la Transacción "
                  data-validate="Por Favor ingresa la fecha del depósito o transferencia" 
                  value={fecha}
                  onChange={handleChange}/>
              </label>
            </div>        
            <div>
              <label>
                Descripción del Pago:
                <Select 
                  options={data_lista}
                  onChange={handleSelectDescripOption}
                  className="listas"
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
};
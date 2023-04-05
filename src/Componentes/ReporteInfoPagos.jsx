import React,{useState} from 'react';
import Select from 'react-select';
import csvDownload from 'json-to-csv-export';

import "../styles.css";


export const ReporteInfoPagos = () => {

  const [lista, setLista] = useState([]);
  const [dataselected, setDataselected] = useState({});

  let {id_listado, desc_listado} = dataselected;


 //carga de data
  fetch('http://localhost:9000/api/coop')
  .then(res => res.json())
  .then( res => {
    setLista(res)
  }) 
  .catch(error => console.error('Error en el proceso:', error)); 
 
  //actualización de estados
  const handleSelectOption = (e) => {
    setDataselected({
      id_listado: e.value});
  };

  // // manipulación de data
  const handleSubmit = (e) => {

    e.preventDefault();

    //creación de archivo
    fetch(`http://localhost:9000/api/reporteCuotas/${id_listado}`)
    .then(res => res.json() )
    .then( res=> {
      console.log(res)
        const dataToConvert = {
          data: res,
          filename: 'reporte_pago_cuotas_miembros_polo',
          delimiter: ',',
          headers: ["registro","id_cooperativa", "nro. comprobante", "banco", "fecha de pago", "monto pagado", "motivo del pago"]
        };
        console.log(dataToConvert)
        csvDownload(dataToConvert);
        alert("reporte generado en archivo .csv, y descargado correctamente")
         } )
    .catch(error => {
        console.error('Error en el proceso:', error)
        alert("error en la descarga. Reporte no generado")  });
  };

  return (
    <div className='fondo'>
        <h1>Reporte Pago de Cuotas</h1>
        <div>
          <label>
            Miembro del Polo:
            <Select 
              options={lista.map(item =>({label: item.nombre_cooperativa, value: item.id_cooperativa }))}
              onChange={handleSelectOption}
          />
          </label>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div>
            <button className="boton" type="submit">
                Generar Reporte
            </button>
          </div>
        </form>
    </div>
  ) 
};
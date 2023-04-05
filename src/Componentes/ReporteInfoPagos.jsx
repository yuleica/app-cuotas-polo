import React,{useState} from 'react';
import Select from 'react-select';
import csvDownload from 'json-to-csv-export';

import "../styles.css";



export const ReporteInfoPagos = () => {

  const [lista, setLista] = useState([]);
  const [datas, setDatas] = useState({});


 //carga de data
  fetch('http://localhost:9000/api/coop')
  .then(res => res.json())
  .then( res => {
    setLista(res)
  }) 
  .catch(error => console.error('Error en el proceso:', error)); 
 
  //actualización de estados
  const handleSelectOption = (e) => {
      console.log(e)
      const id_listado=(e.value)
    return id_listado
  };

  // // manipulación de data
  const handleSubmit = (e) => {

    e.preventDefault();

    //actualización
    console.log("soy id_listado", id_listado)
    fetch('http://localhost:9000/api/reporteCuotas/:id_listado', requestInit)
    .then(res => res.json() )
    .then( res=> {
        setDatas(res)
        alert("reporte generado en archivo .csv, y descargado correctamente")
         } )
    .catch(error => console.error('Error en el proceso:', error));

    csvDownload(dataToConvert);
  };

  const dataToConvert = {
    data: datas,
    filename: 'reporte_pago_cuotas_miembros_polo',
    delimiter: ',',
    headers: ['id_listado', "id_cooperativa", "nro. comprobante", "banco", "fecha de pago", "monto pagado", "motivo del pago"]
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
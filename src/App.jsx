import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import { Navbar } from './Componentes/Navbar';
import { IngresarCooperativa } from './Componentes/IngresarCooperativa';
import { IngresarCuotas } from './Componentes/IngresarCuotas';
import { ReporteInfoPagos } from './Componentes/ReporteInfoPagos';




function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Navbar />} >
            <Route exact path='cuotas' element={<IngresarCuotas />}></Route>
            <Route exact path='cooperativas' element={<IngresarCooperativa />}></Route>
            <Route exact path='reporteCuotas' element={<ReporteInfoPagos />}></Route>
            <Route path='*' element={<Navigate replace to='/' />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App

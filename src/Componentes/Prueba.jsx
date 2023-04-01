import React from "react";



// const sample = {
//   name: "Pluralsight",
//   number: 1,
//   address: "India",
//   website: "https://www.pluralsight.com/"
// };


const sample = [
 
  {
    id_cooperativa: 1,
    nombre_cooperativa: "Cooperativa de Trabajo Origami LTDA",
    rut_cooperativa: "65205598-2"
  },
  {
    id_cooperativa: 2,
    nombre_cooperativa: "CIBV",
    rut_cooperativa: "2"
  },
  {
    id_cooperativa: 5,
    nombre_cooperativa: "Pewen Lab",
    rut_cooperativa: "2"
  },
  {
    id_cooperativa: 6,
    nombre_cooperativa: "Cooperativa de Trabajo  Hub Isprirare LTDA",
    rut_cooperativa: "76509617-0"
  },
  {
    id_cooperativa: 7,
    nombre_cooperativa: "DIMAI",
    rut_cooperativa: "2"
  }];



export const Prueba = () => {

  return (
    <div>
      {sample.map((item, key) => (
        <p key={item}>
          <span>Key Name: {key}</span>
          <span>Value: {sample[key]}</span>
        </p>
      ))}
    </div>
  );
}
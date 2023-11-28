import React from 'react'
import './FeriadoContainer.css'
import Feriado from '../Feriado/Feriado'

const FeriadoContainer = ({feriadosData}) => {
  console.log(feriadosData)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const proximosFeriados = feriadosData.filter((feriado) => {
      const fechaFeriado = new Date(feriado.date);
      return fechaFeriado >= today;
    });
  
    proximosFeriados.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    let proximoFeriado = null;

    if (proximosFeriados.length > 0) {
      proximoFeriado = proximosFeriados[0];
    }

    console.log(proximoFeriado)



  return (
    <>
        <div className="feriado-container">
            <h2>Lista de feriados</h2>
            <ul>
                {feriadosData.map((feriado, index) => {
                    return (
                        <Feriado key={index} feriado={feriado} proximoFeriado={proximoFeriado}/>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default FeriadoContainer
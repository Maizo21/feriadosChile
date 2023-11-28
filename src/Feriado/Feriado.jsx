import React from 'react'
import './Feriado.css'

const Feriado = ({feriado, index, proximoFeriado = null}) => {
  let styleProximoFeriado = {
    color: 'green',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }

  let styleIrrenunciable = {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }

  return (
    <>
      <li key={index} className='feriado-item' style={proximoFeriado && proximoFeriado.nombre === feriado.nombre ? styleProximoFeriado : null}>
        <p>{feriado.nombre}</p>
        <p>{feriado.fecha}</p>
        <p>{feriado.tipo} <span>{feriado.tipo ==='Civil' ? '⚖' : '⛪'}</span></p>
        <p style={feriado.irrenunciable === '1' ? styleIrrenunciable : null}>{feriado.irrenunciable === '1' ? 'Irrenunciable📣' : null }</p>
      </li>
    </>
  )
}

export default Feriado
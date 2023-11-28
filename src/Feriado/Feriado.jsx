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
      <li key={index} className='feriado-item' style={proximoFeriado && proximoFeriado.title === feriado.title ? styleProximoFeriado : null}>
        <p>{feriado.title}</p>
        <p>{feriado.date}</p>
        <p>{feriado.type} <span>{feriado.type ==='Civil' ? '⚖' : '⛪'}</span></p>
        {feriado.extra.includes('Irrenunciable') ? <p style={styleIrrenunciable}>Irrenunciable 📣</p> : null}
      </li>
    </>
  )
}

export default Feriado
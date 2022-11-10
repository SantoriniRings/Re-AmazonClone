import React, {useState} from 'react'
import "./FormContacto.css"
import img from "./img/amazon.jpg"
import Swal from "sweetalert2"

const FormContacto = () => {

  const Swal = require('sweetalert2')

  const [nombre, setNombre] = useState(false)

  const nombRegex = /^(?:[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙ][a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+(?:\s+[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]+)+)$/
  
  /*const valNombre = (validarNombre) => {
    if (validarNombre.trim()) {
      if (nombRegex.test(validarNombre)) {
        setNombre(true)
      }
    }
  } */

  const enviar = (e) => {
    e.preventDefault()
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Formulado Enviado!',
        showConfirmButton: false,
        timer: 1500
      
    })

  }

  return (
    <div className='principal'>
      <div className='part1'>
        <form className='form-container' onSubmit={e => enviar(e)}>
          <label htmlFor="name">
            Nombre: 
          </label>
          <input type="text" name="name" />
          <label htmlFor="email">
            Email: 
          </label>
          <input type="email" name="email"/>

          <label htmlFor="message">
            Message:
          </label>
          <textarea name="message" cols="55" rows="8"></textarea>

          <button type='submit'>Enviar</button>
        </form>
      </div>

      <div className='part2'>
        <img src={img} alt="Amazon" />
      </div>

    </div>
  )
}

export default FormContacto
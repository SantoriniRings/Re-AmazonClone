import React from 'react'
import "./ErrorPage.css"
import ErrorImage from "./img/error404.svg"

const ErrorPage = () => {
  return (
    <div className="container-principal">
        <div className='error-container'>
            <h1>Ups Nosotros también esperabamos algo aquí</h1> 
            <img src={ErrorImage} alt="Error404" />
        </div>
        
    </div>
  )
}

export default ErrorPage
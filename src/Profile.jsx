import React, {useState} from 'react'
import "./Profile.css"

const Profile = () => {

    const [input, setInput] = useState()
    const [nombre, setNombre] = useState("")
    const [phone, setPhone] = useState("")
    const [profilepic, setProfilepic] = useState("")
    const [documents, setDocuments] = useState("")
    const [email, setEmail] = useState("")


    const handleChangeNombre = (e) => {
        e.preventDefault()

        const name = e.target.name
        const value = e.target.value
        setInput(values => ({...values, [name]: value}))
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleChangeProfile = (e) => {
        setProfilepic(e.target.value)
    }

    const handleChangeDocuments = (e) => {
        setDocuments(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setInput({nombre:nombre, email:email, phone:phone, profilepic:profilepic,documents:documents})
        console.log(input)
    }

  return (
    <div className='container-profile'>
        <section className='datos-basicos'>
            <form className='form-profile' onSubmit={handleSubmit}>
                <h1>Datos de Usuario</h1>
                <label htmlFor="profilepic">
                    Sube tu Foto de Perfil:
                </label>
                <input type="file" name="profilepic" value={input?.profilepic} onChange={handleChangeProfile} />

                <label htmlFor="nombre">
                    Nombre: 
                </label>
                <input type="text" name='nombre' value={input?.nombre} onChange={handleChangeNombre}/>

                <label htmlFor="documentats">
                    Documents: 
                </label>
                <input type="text" name='documents' value={input?.documents} onChange={handleChangeDocuments}/>

                <label htmlFor="phone">
                    Teléfono:
                </label>
                <input type="number" name='phone' value={input?.phone} onChange={handleChangePhone}/>

                <label htmlFor="email">
                    Email: 
                </label>
                <input type="eamil" name='email' value={input?.email} onChange={handleChangeEmail} />
                <button type='submit'>Guardar</button>
            </form>

            <img src={input?.profilepic} alt="" />
            <h2>Nombre: {input?.nombre} </h2>
            <h2>Documento: {input?.documents} </h2>
            <h2>Email: {input?.email} </h2> 
            <h2>Teléfono: {input?.phone} </h2>
        </section>
        <section className='configuracion'>
            <div className='sectores'>Privacidad</div>
            <div className='sectores'>Seguridad</div>
            <div className='sectores'>Beneficios</div>
            <div className='sectores'>Servicios</div>
        </section>
    </div>
  )
}

export default Profile
import { useState, useEffect } from "react"
import Alerta from "./Alerta"
import usePacientes from "../hooks/usePacientes"


const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
        if(paciente?.nombre) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)
        }

    }, [paciente])


    const handleSubmit = e =>{
        e.preventDefault()
        
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });

            return
        }

        guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
        setAlerta({
            msg: "Guardado correctamente"
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }

    const { msg } = alerta

  return (
    <>
        <h2 className="font-black text-3xl text-center">Agregar  pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
             Añade tus pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

        

        <form 
        action=""
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label 
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold"
                >Nombre Mascota</label>
                <input 
                id="nombre"
                type="text"
                placeholder="Nombre de la mascota" 
                className="w-full border-2 p-2 mt-2 placeholder:gray-400 rounded-md"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="propietario"
                className="text-gray-700 uppercase font-bold"
                >Propietario</label>
                <input 
                id="propietario"
                type="text"
                placeholder="Nombre del propietario" 
                className="w-full border-2 p-2 mt-2 placeholder:gray-400 rounded-md"
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="email"
                className="text-gray-700 uppercase font-bold"
                >Email</label>
                <input 
                id="email"
                type="text"
                placeholder="Email del propietario" 
                className="w-full border-2 p-2 mt-2 placeholder:gray-400 rounded-md"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="fecha"
                className="text-gray-700 uppercase font-bold"
                >Fecha de Alta</label>
                <input 
                id="fecha"
                type="date"
                className="w-full border-2 p-2 mt-2 placeholder:gray-400 rounded-md"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                htmlFor="sintomas"
                className="text-gray-700 uppercase font-bold"
                >Sintomas</label>
                <textarea 
                id="sintomas"
                placeholder="Describe los Sintomas" 
                className="w-full border-2 p-2 mt-2 placeholder:gray-400 rounded-md"
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
                />
            </div>

            <input 
            type="submit" 
            value={id ? "Guardar Cambios" : "Agregar Paciente"}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-lg cursor-pointer transition-colors" 
            />
        </form>

        {msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario
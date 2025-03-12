import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"

import { useState } from "react"

const AdministradorPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)


  return (

    <div className="flex flex-col md:flex-row">
      <button
      type="button"
      className="bg-indigo-600 p-3 mb-10 text-white uppercase font-bold hover:bg-indigo-800 rounded-lg cursor-pointer transition-colors md:hidden"
      onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario' }
      </button>
      <div className={`${mostrarFormulario ? "block" : 'hidden'} md:block md:w-1/2 lg:w2/5`}>
        <Formulario />
      </div>


      <div className="md:w-1/2 lg:w3/5">
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default AdministradorPacientes
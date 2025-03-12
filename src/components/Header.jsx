import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const {cerrarSesion} = useAuth()

  return (
    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de Pacientes de {" "} 
                <span className="text-white font-black">Veterinaria</span>
            </h1>

            <nav className="flex flex-col items-center gap-4 lg:flex-row mt-5 lg:mt-0">
                <Link to="/admin" className="uppercase font-bold text-white text-sm">Pacientes</Link>
                <Link to="/admin/perfil" className="uppercase font-bold text-white text-sm">Perfil</Link>

                <button
                type="button" className="uppercase font-bold text-white text-sm"
                onClick={cerrarSesion}
                >
                    Cerrar sesión
                </button>
            </nav>

        </div>
    </header>
  )
}

export default Header
import React from "react";
import { Link } from "react-router-dom";


const Header =() =>{

    return (
            <nav className=" w-full z-40 items-center fixed p-3 bg-white shadow-md">
                    <div  className=" mx-auto flex items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600"><Link  to="/"><img className="w-[120px]" src="https://textycon.com/wp-content/uploads/Logo-Gallery-Colores.png" alt="" /></Link> </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-800 font-normal  hover:text-orange-600">Inicio</a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">Próximos eventos</a>
                        <a href="#" className="text-gray-800 font-normal hover:text-orange-600">Reservas</a>
                    </div>
                    <div>
                    <a href="#" className="text-white bg-orange-500 w-[150px] p-4 rounded hover:bg-orange-600">Cómo llegar</a>
                    </div>
            </div>
        </nav>  
    )

}

export default Header
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header =({scrollToRoomSectionEvent}) =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
            <nav className=" w-full z-40 items-center fixed p-3 bg-white shadow-md">
                    <div  className="  mx-auto flex items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600">
                    <Link to="/">
                        <img 
                        className="w-[100px]" 
                        src="https://raw.githubusercontent.com/rolandoto/image-pms/main/Logos/Hotel%20Natural-03.png" 
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        />
                    </Link>
                    </div>

                    <div className=" hidden lg:block   space-x-4">
                        <Link to="/" className="text-black cursor-pointer text-[16px] font-normal  hover:text-black"  >Inicio</Link>
                        <Link to="/Events" className="text-black cursor-pointer text-[16px] font-normal hover:text-black"   >Próximos eventos</Link>
                        <Link to="/Accomodation" className="text-black  cursor-pointer text-[16px] font-normal hover:text-black"  >Reservas</Link>
                    </div>
                    <div className="hidden lg:block " >
                        <a 
                         target="_blank"
                         href="https://www.google.com/maps?ll=6.247562,-75.564675&z=16&t=m&hl=es&gl=CO&mapclient=embed&cid=8506320743423922893"
                        className="text-white bg-green-700 w-[150px] p-4 rounded hover:bg-green-700">Cómo llegar</a>
                    </div>

                    <div className="lg:hidden" >
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                    </div>

                  
            </div>

           {menuOpen &&  <div className="lg:hidden flex flex-col mt-4 space-y-2">
                            <Link to="/" className="text-black text-[16px] font-normal  hover:text-blakc" >
                                Inicio
                            </Link>
                            <Link to="/Events" className="text-black text-[16px] font-normal  hover:text-green-700"  >
                                Próximos eventos
                            </Link>
                            <Link  to="/Accomodation" className="text-black text-[16px] font-normal  hover:text-green-700" >
                                Reservas
                            </Link>
                            <a  target="_blank"
                                href="https://www.google.com/maps?ll=6.247562,-75.564675&z=16&t=m&hl=es&gl=CO&mapclient=embed&cid=8506320743423922893"
                                className="text-white bg-green-700 w-full p-4 rounded hover:bg-green-700"   
                            >
                                Cómo llegar
                            </a>
                        </div>
                }
        </nav>  
    )

}

export default Header
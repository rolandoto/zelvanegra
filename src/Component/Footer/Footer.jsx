import React from "react"
import { IconCiFacebook, IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube } from "../Icons/Icons"


const Footer =() =>{

    return (
            <footer className="bg-black   text-white py-8">
                <div className="container  mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img src="https://textycon.com/wp-content/uploads/logo-blanco.png" alt="Gallery Hotel" className=" w-[220px] mb-4" /> {/* Adjust the path accordingly */}
                    <ul className="space-y-2">
                    <li className="flex items-center"> <IconFaWhatsapp /> +57 315 223 44 83</li>
                    <li className="flex items-center">  <IconCiFacebook /> reservas@galleryhotel.co</li>
                    <li className="flex items-center"> <IconFaMapMarkerAlt/>  Cl. 47 #41 - 55, Medellín, Colombia</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                    <IconFaInstagram />
                    <IconFaFacebookF />
                    <IconFaYoutube />
                    </div>
                </div>
                
                    <div className="md:w-1/3 ">
                    <h2 className="text-lg mb-4">PAGOS</h2>
                    <div className="flex space-x-4">
                    <img src="https://textycon.com/wp-content/uploads/payment.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-white mt-8">
                    Copyright © 2024 – All Rights Reserved Gallery Hotel
                </div>
            </footer>
    )

}

export default Footer
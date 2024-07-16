import React from "react"

const HeaderCheckout =() =>{

    return ( <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp)` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-normal">Gallery Hotel</h1>
                    <p className="mt-4 text-lg md:text-2xl font-normal">Gestiona tu reserva</p>
                </div>
            </div>)

}

export default HeaderCheckout
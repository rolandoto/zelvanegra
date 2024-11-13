import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-[260px] lg:mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://grupo-hoteles.com/storage/app/23/rooms/682184610-84-rooms-slider-1-IMG_9576.JPG"
                    alt="Room"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                    </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-black mb-4 font-lora text-[30px] text-center "> THE NATURAL  PLACE IS YOUR HOME</h2>
                <p className="text-gray-700 text-justify	 mb-4">
                El Hotel Zelva Negra, ubicado en una posición privilegiada en el Parque del Poblado de Medellín, es un oasis de confort en el corazón de la ciudad. Rodeado de vibrantes restaurantes y locales nocturnos, ofrece lo mejor de la cultura y la vida nocturna de Medellín en un ambiente tranquilo y seguro.  
Las modernas habitaciones están equipadas con cama doble, escritorio, Smart TV, nevera, aire acondicionado, Wi-Fi gratuito, desayuno incluido y demás implementos necesarios para su estancia. Los huéspedes pueden disfrutar de un chapuzón en la piscina interior o relajarse en la terraza. El restaurante del hotel deleita con comida Fingers food, mientras que el bar ofrece una amplia selección de cócteles y bebidas. Es la opción ideal para aquellos que buscan una experiencia de alojamiento confortable, elegante y llena de experiencias en Medellín. 
                </p>
               
                </div>
            </div>)

}

export default TitleWelcome
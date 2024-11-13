import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#bfbbbb99] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-black-700 text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                    Nuestras habitaciones ofrecen distintas opciones que se adaptan a cada huésped. Desde la acogedora Habitación Sencilla, ideal para quienes buscan tranquilidad, hasta la lujosa Habitación VIP, con balcón, jacuzzi privado y vistas espectaculares de la ciudad, cada espacio está equipado con cama doble, escritorio, smart TV, nevera, aire acondicionado y Wi-Fi gratuito. Cada mañana podrás disfrutar de un desayuno incluido, y para momentos de relajación, contamos con una piscina interior y una terraza perfecta para desconectar. 
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                    En el Hotel Zelva Negra, el confort, el diseño moderno y la tranquilidad se unen para brindarte una experiencia única en el corazón de Medellín. 
                    </p>
                    <button onClick={HandNext}  className="text-white bg-black mt-4  w-[200px] p-3 rounded hover:bg-black"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://grupo-hoteles.com/storage/app/23/rooms/1286426263-85-rooms-slider-1-IMG_9866.JPG" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-lg shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion
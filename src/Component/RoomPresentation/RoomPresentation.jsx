import React from "react";

const RoomPresentaion =() =>{

    return (  <div className="bg-orange-100  py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-orange-600 ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 mb-4">
                    Nuestras habitaciones están diseñadas para ofrecer comodidad y estilo, a la vez que te sumergen en la vibrante escena artística de Medellín. Cada habitación está decorada con obras de artistas locales, creando un ambiente único e inspirador.
                    </p>
                    <p className="text-gray-700 mb-4">
                    Gallery Hotel está ubicado en el corazón del centro de Medellín, a solo unos pasos de las principales atracciones turísticas, restaurantes y bares. La ubicación perfecta para explorar la ciudad y descubrir todo lo que tiene para ofrecer.
                    </p>
                    <button className="text-white bg-orange-500  p-4 rounded hover:bg-orange-600">Ver habitaciones</button>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src={"https://textycon.com/wp-content/uploads/MG_8585-scaled.jpg"} alt="Reservation" className="w-full rounded-lg shadow-lg" />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion
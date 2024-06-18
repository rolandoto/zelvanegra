import React from "react"
import moment from "moment";

const CardCheckout =({ID,room_image,title,Price,cantidad,nights,person,Room,end,start,Price_nigth}) =>{

    
    const dateStart=  moment(start).format('YYYY-MM-DD');
    const dateEnd=  moment(end).format('YYYY-MM-DD');
    

    return ( <div>
                <div className="mb-4 flex  justify-between items-end">
                    <div className="text-gray-700  mt-3 text-sm">
                            <p className="text-sm  font-semibold">{title}</p>
                            <p>ENTRADA: <span className="font-normal">{dateStart}</span></p>
                            <p>SALIDA: <span className="font-normal">{dateEnd}</span></p>
                            <p>RÉGIMEN / PLAN: <span className="font-normal">Alojamiento y Desayuno</span></p>
                            <p>OCUPACIÓN: <span className="font-normal">{person} Adulto</span></p>
                            <p>NOCHE: <span className="font-normal">{nights} </span></p>
                    </div>
                    <div className=" text-right">
                            <span className="text-2xl font-bold">{parseInt(Price).toLocaleString()} COP</span>
                    </div>
                </div>
                <div className="bg-black   text-white p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                    <img 
                        src={room_image}
                        alt="Standard Doble" 
                        className="w-24 h-24 object-cover mr-4 rounded-lg"
                    />
                    <div>
                        <p>{title}</p>
                        <p className="font-bold">{parseInt(Price_nigth).toLocaleString()} COP  más por noche.</p>
                    </div>
                    </div>
                    <button className="bg-white text-black font-bold py-2 px-4 rounded-full">
                    MEJORAR HABITACIÓN
                    </button>
                    
 
                </div>
                    <div className="border-b mt-4 space-y-5 border-x-black">
                    </div>
               
                 </div>
    )

}

export default CardCheckout
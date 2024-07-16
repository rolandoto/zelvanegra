import React from "react"
import moment from "moment";

const CardCheckout =({room_image,title,Price,nights,person,end,start,Price_nigth}) =>{

    
    const dateStart=  moment(start).format('YYYY-MM-DD');
    const dateEnd=  moment(end).format('YYYY-MM-DD');
    

    return ( <div className="border-b border-y-black" >
                <div className="  mb-4 flex  justify-between items-end">
                    <div className="text-gray-700  mt-3 text-sm">
                            <p className="text-sm  font-semibold">{title}</p>
                            <p className="font-normal text-[13px]" >Entrada: <span className="font-normal text-[13px]">{dateStart}</span></p>
                            <p className="font-normal text-[13px]" >Salida: <span className="font-normal text-[13px]">{dateEnd}</span></p>
                            <p className="font-normal text-[13px]" >Regimen/plan: <span className="font-normal text-[13px]">Alojamiento y desayuno</span></p>
                            <p className="font-normal text-[13px]">ocupación: <span className="font-normal text-[13px]">{person} Adultos</span></p>
                            <p className="font-normal text-[13px]">Noches: <span className="font-normal text-[13px]">{nights} </span></p>
                    </div>
                    <div className=" text-right">
                            <span className="text-2xl font-bold">{parseInt(Price).toLocaleString()} COP</span>
                    </div>
                </div>
                <div className="   text-black rounded-lg">
                    <div className="flex items-center mb-4">
                    <img 
                        src={room_image}
                        alt="Standard Doble" 
                        className="w-24 h-24 object-cover mr-4 rounded-lg"
                    />
                    <div>
                        <p>{title}</p>
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default CardCheckout
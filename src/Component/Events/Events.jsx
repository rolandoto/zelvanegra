import React from "react";
import CardEvents from "../CardEvents/CardEventjs";

const Events =()  =>{


    return (
        <>
         <div  id="page-2"    className="   mx-auto max-w-7xl p-6" >
                <h1 className="text-[30px] text-center text-orange-500  font-lora  mb-6">Próximos eventos en Medellín</h1>
                <div className="grid sm:grid-cols-1  gap-5   md:grid-cols-2 ">  
                      {[2,2].map((item,e ) => (
                         <CardEvents />
                      ))}
              </div>
            </div>
        </>
    )

}

export default Events
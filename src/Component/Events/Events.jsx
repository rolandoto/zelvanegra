import React from "react";
import CardEvents from "../CardEvents/CardEventjs";

const Events =()  =>{

    return (
        <>
         <div className=" mx-auto max-w-7xl p-6">
                <h1 className="text-3xl font-normal text-center text-orange-500  mb-6">Próximos eventos en Medellín</h1>
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
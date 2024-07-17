import React from "react"
import CardCheckout from "../CardCheckout/CardCheckout"
import FormValues from "../FormValues/FormValues"

const FormCheckout=({Country,handleSubmit,loading,formErrors,handleChange,formValues,cart,subtotal}) =>{

    return (<div className= "bg-gray-100 " >
                <div className="flex justify-center   min-h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-xl font-semibold mb-4">Datos del Huésped</h2>
                            <FormValues
                                loading={loading}
                                handleSubmit={handleSubmit}
                                formErrors={formErrors}
                                handleChange={handleChange}
                                formValues={formValues}
                                Country={Country}
                            />

                        </div>
                
                        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
                            <div className="p-6 border border-gray-300 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Resumen de tu reserva</h2>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold">Hotel Gallery Medellín</h3>
                                        <p className="text-gray-600">Cra. 37 #10A 29 - Medellín</p>
                                    </div>
                                    {cart.map((itemCardRoom,e) =>(
                                    <CardCheckout key={e}   {...itemCardRoom} />
                                ))}
                                <div className=" border-gray-300 rounded-lg">
                                <div className="text-right items-center">
                                    <p className="text-sm text-gray-600 mb-1">Total de la reserva</p>
                                    <p className="text-2xl font-bold mb-2">${parseInt(subtotal).toLocaleString('es-CO')} cop</p>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                    </div>
                    </div>
            </div>)

}

export default FormCheckout
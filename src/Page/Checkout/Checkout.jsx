import React from "react"
import Layout from "../../Component/Layout/Layout"

const Checkout  =() =>{

    return (<>
    <Layout>
            <div className="bg-gray-100" >
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-xl font-semibold mb-4">Datos del Huésped</h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Nombre" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Apellido</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Apellido" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Número de teléfono" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">País</label>
                                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                <option>Antártida</option>
                            
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Requerimientos especiales</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Requerimientos especiales"/>
                            </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-4">
                            Al completar esta reserva, acuerdo que he leído y aceptado las <a href="#" className="text-blue-500">Políticas de Propiedad</a>.
                            </p>
                            <button type="button" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
                            Ir a Finalizar compra
                            </button>
                        </form>
                        </div>
                
                        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Resumen De La Reserva</h2>
                        <div className="flex">
                            <img src="https://grupo-hoteles.com/storage/app/23/rooms/1904843090-83-rooms-slider-2-IMG_5980.jpeg" alt="Imagen de la habitación" className="w-1/3 rounded-md" />
                            <div className="ml-4">
                            <p className="font-semibold">Encantador estudio en Bocagrande</p>
                            <p className="text-gray-600">May 27-30, 2024</p>
                            <p className="text-gray-600">N° de noches: 3</p>
                            <p className="text-gray-600">Huéspedes: 1 Adultos</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between text-gray-700">
                            <span>Encantador estudio en Bocagrande</span>
                            <span>$195</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                            <span>Cleaning</span>
                            <span>$50</span>
                            </div>
                            <div className="flex justify-between font-semibold text-gray-800 mt-2">
                            <span>Subtotal</span>
                            <span>$245</span>
                            </div>
                            <div className="flex justify-between font-semibold text-gray-800 mt-2">
                            <span>Impuestos (0%)</span>
                            <span>$0</span>
                            </div>
                            <div className="flex items-center mt-4">
                            <input type="text" placeholder="Código del cupón" className="flex-grow border border-gray-300 rounded-md shadow-sm p-2"/>
                            <button className="ml-2 bg-blue-600 text-white py-2 px-4 rounded-md">Aplicar</button>
                            </div>
                            <div className="flex justify-between font-semibold text-gray-800 mt-4">
                            <span>Total</span>
                            <span>$245</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </Layout>
            </>)

}

export default Checkout
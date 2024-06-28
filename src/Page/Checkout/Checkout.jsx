import React, { useEffect, useRef ,useCallback} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import CardCheckout from "../../Component/CardCheckout/CardCheckout"

const Checkout  =() =>{

    const {cart,getCartSubtotal,getCartTotalCount} = UseCart()
    const subtotal = getCartSubtotal()
    const totalCount = getCartTotalCount()

    const scriptRef = useRef(null);


    const appendScript = useCallback(() => {
        if (scriptRef.current) {
          scriptRef.current.innerHTML = '';
        }
    
        const script = document.createElement('script');
        script.src = "https://checkout.wompi.co/widget.js";
        script.async = true;
        script.dataset.render = "button";
        script.dataset.publicKey = "pub_prod_GlPKJMtPAgxDIMX3ht392orLWYa5bQLJ";
        script.dataset.currency = "COP";
        script.dataset.amountInCents = `${subtotal}00`;
        script.dataset.reference = `sdas`;
        if (scriptRef.current) {
          scriptRef.current.appendChild(script);
        }
      }, []);

      
    
      useEffect(() => {
        appendScript();
        return () => {
          if (scriptRef.current) {
            scriptRef.current.innerHTML = '';
          }
        };
      }, [appendScript]);
    /* <form className="w-full flex justify-center bg-orange-500 text-white py-2 px-4 rounded-md mt-4">
        <div className=" bg-orange-500" ref={scriptRef}></div>
        </form>
    */
    return (<>
        <Header />
         <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://textycon.com/wp-content/uploads/MG_8648-scaled.jpg)` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                      <h1 className="text-4xl md:text-6xl font-normal">Gallery Hotel</h1>
                      <p className="mt-4 text-lg md:text-2xl font-normal">Termina de buscar tu habitacion</p>
                    </div>
                   
            </div>
            <div className= "bg-gray-100 " >
                <div className="flex justify-center   min-h-screen">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
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
                            Al completar esta reserva, acuerdo que he leído y aceptado las <a href="#" className="text-orange-500">Políticas de Propiedad</a>.
                            </p>
                            <button type="button" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md mt-4">
                            Ir a Finalizar compra
                            </button>
                           
                        </form>
                        </div>
                
                        <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
                            <div className="p-6 border border-gray-300 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">RESUMEN DE TU RESERVA</h2>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold">Hotel gallery Medellín</h3>
                                        <p className="text-gray-600">Cra. 37 #10A 29 - Medellín</p>
                                    </div>
                                    {cart.map((itemCardRoom) =>(
                                    <CardCheckout  {...itemCardRoom} />
                                ))}
                                 <div className=" border-gray-300 rounded-lg">
                                <div className="text-right items-center">
                                    <p className="text-sm text-gray-600 mb-1">Total de la reserva</p>
                                    <p className="text-2xl font-bold mb-2">{parseInt(subtotal).toLocaleString()} COP</p>
                                   
                                </div>
                            </div>
                        </div>
                               
                        </div>
                    </div>
                    </div>
                </div>

                
                </div>
            </>)

}

export default Checkout
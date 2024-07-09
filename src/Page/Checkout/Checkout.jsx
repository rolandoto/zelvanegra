import React, { useEffect,useState} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import CardCheckout from "../../Component/CardCheckout/CardCheckout"
import useReservationCreate from '../../Actions/useReservationCreate';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import {Button} from "@nextui-org/react";
import moment from 'moment';
import EmpyCart from '../../Component/EmpyCart/EmpyCart';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingCreateReserva';
import useFormValues from '../../Hooks/useFormValues';
import useFetchData from '../../Hooks/useFetchData';
import useValidation from '../../Hooks/ValidateFormValues';

const Checkout  =() =>{
    useFetchData();
    const [formErrors, setFormErrors] = useState({});
    const [formValues, handleChange] = useFormValues();
    const {cart,getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const {PostCreateHotel} =useReservationCreate()
    const {Country,loading,error}= useSelector(state => state.Reservation);
    const cardNumberArray = formValues.cardNumber.split(" ");
    const cardNumberString = cardNumberArray.join("");
    const now = moment().format('YYYY-MM-DD');
    const validate = useValidation();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
          await PostCreateHotel({ cart,
                                  name:formValues.name,
                                  apellido:formValues.apellido,
                                  email:formValues.email,
                                  city:formValues.city,
                                  country:formValues.country,
                                  fecha:now,
                                  number:cardNumberString,
                                  exp_month:formValues.expiryMonth,
                                  exp_year:formValues.expiryYear,
                                  cvc:formValues.cvc,
                                  card_holder:formValues.cardName,
                                  subtotal
                                  })
        
       
        } 
    };

   


    const FillContent =() =>{
        if(!subtotal > 0){
            return (  <EmpyCart title={"Carrito vacio"} />)
        }else{
            return ( <div className= "bg-gray-100 " >
            <div className="flex justify-center   min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-7xl">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-semibold mb-4">Datos del Huésped</h2>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        name="name"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Nombre"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Apellido</label>
                    <input
                        name="apellido"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Apellido"
                        value={formValues.apellido}
                        onChange={handleChange}
                    />
                    {formErrors.apellido && <p className="text-red-500 text-xs">{formErrors.apellido}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        name="email"
                      
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                    <input
                        name="phone"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Número de teléfono"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Direccion</label>
                    <input
                        name="address"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Direccion"
                        value={formValues.address}
                        onChange={handleChange}
                    />
                    {formErrors.address && <p className="text-red-500 text-xs">{formErrors.address}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ciudad</label>
                    <input
                        name="city"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Ciudad"
                        value={formValues.city}
                        onChange={handleChange}
                    />
                    {formErrors.city && <p className="text-red-500 text-xs">{formErrors.city}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">País</label>
                    <select
                        name="country"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={formValues.country}
                        onChange={handleChange}
                >
                    {Country.map((itemCountry) => (
                        <option key={itemCountry.ID} value={itemCountry.ID}>
                            {itemCountry.nombre}
                        </option>
                    ))}
                    </select>
                    {formErrors.country && <p className="text-red-500 text-xs">{formErrors.country}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Requerimientos especiales</label>
                    <input
                        name="specialReq"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Requerimientos especiales"
                        value={formValues.specialReq}
                        onChange={handleChange}
                    />
                </div>
            </div>
           <div>
            </div>
              
              
              <div className=" mx-auto  rounded-md ">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">Método de Pago</h2>
                  <div className="bg-orange-400 p-3 mt-3 rounded-md">
                    <p className="text-white font-medium">Prepago</p>
                    <p className="text-white">El hotel te cargará el importe de la reserva antes de la entrada al hotel</p>
                  </div>
                  </div>
              
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Titular de la tarjeta (obligatorio)
                      </label>
                      <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="cardName"
                        value={formValues.cardName}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Titular de la tarjeta (obligatorio)" 
                      />
                       {formErrors.cardName && <p className="text-red-500 text-xs">{formErrors.cardName}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Número de la tarjeta (obligatorio)
                      </label>
                      <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        name="cardNumber"
                        value={formValues.cardNumber}
                        onChange={handleChange}
                        type="text" 
                        placeholder="5306 9172 2567 9369" 
                      />
                        {formErrors.cardNumber && <p className="text-red-500 text-xs">{formErrors.cardNumber}</p>}
                    </div>
                    <div className="flex space-x-2 mb-4">
                      <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Expira el
                        </label>
                        <select 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          name="expiryMonth"
                          value={formValues.expiryMonth}
                          onChange={handleChange}
                          >
                          <option value={""} >Mes</option>
                          {[...Array(12).keys()].map(month => {
                          const monthValue = (month + 1).toString().padStart(2, '0');
                          return (
                            <option key={monthValue} value={monthValue}>
                              {monthValue}
                            </option>
                          );
                        })}
                        </select>
                        {formErrors.expiryMonth && <p className="text-red-500 text-xs">{formErrors.expiryMonth}</p>}
                      </div>
                      <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                          Año
                        </label>
                        <select 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          name='expiryYear'
                          value={formValues.expiryYear}
                          onChange={handleChange}
                        >
                             <option value={""} >Año</option>
                             {[...Array(13).keys()].map(year => {
                            const yearValue = 23 + year; // Años del 2024 al 2036
                            return (
                              <option key={`year-${yearValue}`} value={yearValue}>
                                {yearValue}
                              </option>
                            );
                        })}

                        </select>
                        {formErrors.expiryYear && <p className="text-red-500 text-xs">{formErrors.expiryYear}</p>}
                      </div>

                      <div className="w-1/3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                          CVC
                        </label>
                        <input 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          type="text" 
                          name='cvc'
                          value={formValues.cvc}
                          onChange={handleChange}
                          placeholder="123" 
                        />
                           {formErrors.cvc && <p className="text-red-500 text-xs">{formErrors.cvc}</p>}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input 
                         name='termsAccepted'
                         value={formValues.termsAccepted}
                         onChange={handleChange}
                         type="checkbox" 
                      
                        className="form-checkbox h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-700">He leído y acepto las <a href="#" className="text-orange-500">condiciones generales</a> (*)</span>
                      </label>
                      {formErrors.termsAccepted && <p className="text-red-500 text-xs">{formErrors.termsAccepted}</p>}
                    </div>
                    <div className="mb-4">
                      <label className="flex items-center">
                        <input 
                          name='siteTermsAccepted'
                          value={formValues.siteTermsAccepted}
                          onChange={handleChange}
                          type="checkbox" 
                          className="form-checkbox h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-700">He leído y acepto los <a href="#" className="text-orange-500">Términos y Condiciones del sitio web</a> (*)</span>
                      </label>
                      {formErrors.siteTermsAccepted && <p className="text-red-500 text-xs">{formErrors.siteTermsAccepted}</p>}
                    </div>
                    <Button 
                      disabled={loading} 
                      type="submit" 
                      className={`w-full text-white py-2 bg-black px-4 rounded hover:bg-gray-800`} 
                    >
                     {loading ? "Cargando reserva" : " CONFIRMAR RESERVA" } 
                    </Button>
                    <p className=" text-xs text-gray-500 mt-4">
                    Al completar esta reserva, acuerdo que he leído y aceptado las <a href="#" className="text-orange-500">Políticas de Propiedad</a>.
                </p>
            </div>
             </form>
                    </div>
            
                    <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-lg">
                        <div className="p-6 border border-gray-300 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">Resumen de tu reserva</h2>
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold">Hotel gallery Medellín</h3>
                                    <p className="text-gray-600">Cra. 37 #10A 29 - Medellín</p>
                                </div>
                                {cart.map((itemCardRoom,e) =>(
                                <CardCheckout key={e}   {...itemCardRoom} />
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
            </div>)
        }
    }


    return (<>
        <Header />
        

        {loading && <LoadingOverlay />}  
         <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://grupo-hoteles.com/storage/app/4/page/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.png)` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                      <h1 className="text-4xl md:text-6xl font-normal">Gallery Hotel</h1>
                      <p className="mt-4 text-lg md:text-2xl font-normal">Termina de buscar tu habitacion</p>
                    </div>
                
         <Toaster position="bottom-right"  richColors   />  
        </div>
            {FillContent()}
           
            </>)

}

export default Checkout
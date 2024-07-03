import React, { useEffect, useRef ,useCallback, useState} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import CardCheckout from "../../Component/CardCheckout/CardCheckout"
import useReservationCreate from '../../Actions/useReservationCreate';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import {Button, Spinner} from "@nextui-org/react";
import useCartActions from '../../Actions/useCartActions';
import moment from 'moment';
import { IconCiShoppingCart } from '../../Component/Icons/Icons';
import EmpyCart from '../../Component/EmpyCart/EmpyCart';


const LoadingOverlay = () => {
    return (
      <div className="loading-opacity ">
        <h1 className="text-4xl md:text-5xl font-normal text-white">Creando reserva...</h1>
      </div>
    );
  };


const Checkout  =() =>{

    /**
     * 
     *   //
     * 
     * 
     * 
     
     
   
*/

const [formValues, setFormValues] = useState({
    name: '',
    apellido: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    specialReq: ''
});

const scriptRef = useRef(null);
const [paymentStatus, setPaymentStatus] = useState('');


const appendScript = useCallback(async () => {
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formValues);

      // Clear existing script if present
      if (scriptRef.current) {
        while (scriptRef.current.firstChild) {
          scriptRef.current.removeChild(scriptRef.current.firstChild);
        }
      }

      // Create and append new script
      const script = document.createElement('script');
      script.src = "https://checkout.wompi.co/widget.js";
      script.async = true;
      script.dataset.render = "button";
      script.dataset.publicKey = "pub_prod_GlPKJMtPAgxDIMX3ht392orLWYa5bQLJ";
      script.dataset.currency = "COP";
      script.dataset.amountInCents = `100`; // Example amount
      script.dataset.reference = `sadsasasd`;

      script.onload = () => {
        console.log("Wompi script loaded");

        // Check if the Wompi object is available
        if (window.Wompi) {
          console.log("Wompi object found");
          window.Wompi.setCallback(async (result) => {
            console.log("Payment result:", result); // Log the full result object
            if (result.status === 'APPROVED') {
              await PostCreateHotel({
                cart,
                name: formValues.name,
                apellido: formValues.apellido,
                email: formValues.email,
                city: formValues.city,
                country: formValues.country,
                fecha: now
              });
              setResult('ok');
              RemoveCartAll();
              setFormValues({
                name: '',
                apellido: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                country: '',
                specialReq: ''
              });
              setPaymentStatus('Payment Successful');
            } else {
              setPaymentStatus('Payment Failed');
            }
          });
        } else {
          console.log("Wompi object not found");
        }
      };

      script.onerror = () => {
        console.error("Failed to load Wompi script");
      };

      if (scriptRef.current) {
        scriptRef.current.appendChild(script);
      }
    } else {
      setPaymentStatus('Form validation failed');
    }
  }, [formValues]);

  useEffect(() => {
    appendScript();
    return () => {
      if (scriptRef.current) {
        while (scriptRef.current.firstChild) {
          scriptRef.current.removeChild(scriptRef.current.firstChild);
        }
      }
    };
  }, [appendScript]);

  const handleSubmit = (e) => {
    e.preventDefault();
    appendScript();
  };
console.log(paymentStatus)
    const {cart,getCartSubtotal,getCartTotalCount} = UseCart()
    const subtotal = getCartSubtotal()
    const totalCount = getCartTotalCount()
    const {PostCreateHotel,getCountry} =useReservationCreate()
    const [result, setResult] = useState("ok" | "ko" | null)
    const [value, setValue] = React.useState(0);
    const {loadingCart} = useSelector(state => state.Cart);
    const {Country,loading,error}= useSelector(state => state.Reservation);
    const {RemoveCartAll } =useCartActions()
   
    const GetFetchDate =async() =>{
        await  getCountry()
    }

    const now = moment().format('YYYY-MM-DD');
    
    useEffect(() =>{
        GetFetchDate()
    },[])

    
    const [formErrors, setFormErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    /*const handleSubmit = async(e) => {
   
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log(formValues)
           await PostCreateHotel({ cart,
                                    name:formValues.name,
                                    apellido:formValues.apellido,
                                    email:formValues.email,
                                    city:formValues.city,
                                    country:formValues.country,
                                    fecha:now})
           
        setResult('ok');
        RemoveCartAll()
        setFormValues({
            name: '',
            apellido: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            specialReq: ''
        })
        } else {
            setResult('ko');
        }
    };*/

    const validate = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Nombre es requerido';
        if (!values.apellido) errors.apellido = 'Apellido es requerido';
        if (!values.email) {
            errors.email = 'Email es requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email no es válido';
        }
        if (!values.phone) errors.phone = 'Número de teléfono es requerido';
        if (!values.address) errors.address = 'Direccion es requerido';
        if (!values.city) errors.city = 'Ciudad es requerida';
        if (!values.country) errors.country = 'País es requerido';
        return errors;
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
            <p className="text-xs text-gray-500 mt-4">
                Al completar esta reserva, acuerdo que he leído y aceptado las <a href="#" className="text-orange-500">Políticas de Propiedad</a>.
            </p>
            <Button  ref={scriptRef}  disabled={loading}  type="submit">
                Ir a Finalizar compra
            </Button>
            <div>
           
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
        

        {loadingCart && <LoadingOverlay />}  
         <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://textycon.com/wp-content/uploads/MG_8648-scaled.jpg)` }}>
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
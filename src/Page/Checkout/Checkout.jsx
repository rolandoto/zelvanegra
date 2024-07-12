import React, {useState} from 'react';
import Header from "../../Component/Header/Header"
import UseCart from "../../Hooks/UseCart"
import useReservationCreate from '../../Actions/useReservationCreate';
import { useSelector } from 'react-redux';
import { Toaster } from 'sonner';
import moment from 'moment';
import EmpyCart from '../../Component/EmpyCart/EmpyCart';
import LoadingOverlay from '../../Component/LoadingCreateReserva/LoadingOverlay';
import useFormValues from '../../Hooks/useFormValues';
import useFetchData from '../../Hooks/useFetchData';
import useValidation from '../../Hooks/ValidateFormValues';
import HeaderCheckout from '../../Component/HeaderCheckout/HeaderCheckout';
import FormCheckout from '../../Component/FormCheckout/FormCheckout';
import Footer from '../../Component/Footer/Footer';

const Checkout  =() =>{
    useFetchData();
    const [formErrors, setFormErrors] = useState({});
    const [formValues, handleChange] = useFormValues();
    const {cart,getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    const {PostCreateHotel} =useReservationCreate()
    const {Country,loading}= useSelector(state => state.Reservation);
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
            return <FormCheckout 
                      Country={Country}
                      loading={loading}
                      handleSubmit={handleSubmit}
                      formErrors={formErrors}
                      handleChange={handleChange}
                      formValues={formValues}
                      cart={cart}
                      subtotal={subtotal}
                />
        }
    }


    return (<>
        <Header />
        {loading && <LoadingOverlay title={"Creando reserva..."} />}  
        <HeaderCheckout />
        <Toaster position="bottom-right"  richColors   />  
            {FillContent()}
            <Footer />
            </>)

}

export default Checkout
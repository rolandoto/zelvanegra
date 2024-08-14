import { useAppDispatch } from "../Hooks/Redux"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import { setCreateReservation, setError,loading, loadingCountry,setCountry,setErrorCountry} from "../reducers/ApiCreateByidHotel"
import useCartActions from "./useCartActions"

const useReservationCreate =() =>{
    const {RemoveCartAll } =useCartActions()

    const dispatch =  useAppDispatch()

    const PostCreateHotel =async({  propertyID,
                                    token,
                                    startDate,
                                    endDate,
                                    guestFirstName,
                                    guestLastName,
                                    guestEmail,
                                    guestPhone,
                                    rooms,
                                    adults,
                                    children,
                                    dateCreated,
                                    number,
                                    exp_month,
                                    exp_year,
                                    cvc,
                                    card_holder,
                                    subtotal}) =>{
        dispatch(loading())
        try {
            const response  = await HttpClient.PostpostReservation({propertyID,
                                                                    token,
                                                                    startDate,
                                                                    endDate,
                                                                    guestFirstName,
                                                                    guestLastName,
                                                                    guestEmail,
                                                                    guestPhone,
                                                                    rooms,
                                                                    adults,
                                                                    children,
                                                                    dateCreated,
                                                                    number,
                                                                    exp_month,
                                                                    exp_year,
                                                                    cvc,
                                                                    card_holder,
                                                                    subtotal})
            if(response){
                dispatch(setCreateReservation(response)) 
                RemoveCartAll()
                toast.success(`Exitoso`)
            }else{
                dispatch(setError("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setError("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    const getCountry =async() =>{
        dispatch(loadingCountry())
        try {
            const response  = await HttpClient.GetCountry()
            if(response){
                dispatch(setCountry(response)) 
                toast.success(`Exitoso`)
            }else{
                dispatch(setErrorCountry("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setErrorCountry("no found")) 
            toast.error(`error en el servicio  ${error}` )
        }
    }

    return {
        PostCreateHotel,
        getCountry
    }

}

export default useReservationCreate
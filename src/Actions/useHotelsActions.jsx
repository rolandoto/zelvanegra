import { useAppDispatch } from "../Hooks/Redux"
import { loading,setHotel,setError } from "../reducers/ApiHotelByIdReduccers"
import HttpClient from "../HttpClient"
import {toast} from "sonner"

const UseHotelActions =() =>{

    const dispatch =  useAppDispatch()

    const getHotel =async({id,desde,hasta,counPeople}) =>{
        dispatch(loading())
        try {
            const response  = await   HttpClient.PostHotelByIdHotel({id,desde,hasta,counPeople})
            if(response){
                dispatch(setHotel(response)) 
                toast.success(`Exitoso`)
            }else{
                dispatch(setError("no found")) 
                toast.error(`error en el servicio`)
            }
        } catch (error) {
            dispatch(setError("no found")) 
            toast.error(`Rango de fecha no disponible` )
        }
    }
    return {
        getHotel
    }

}

export default UseHotelActions
import { useAppDispatch } from "../Hooks/Redux"
import { loading,setHotel,setError } from "../reducers/ApiHotelByIdReduccers"
import HttpClient from "../HttpClient"
import {toast} from "sonner"
import  AutoProvider  from "../UseContext/UseContext"
import { useContext } from "react"

const UseHotelActions =() =>{

    const dispatch =  useAppDispatch()

    const { 
        setContextMenuPosition,
        } = useContext(AutoProvider)

    const getHotel =async({id,desde,hasta,counPeople}) =>{
        dispatch(loading())
        try {
            const response  = await   HttpClient.PostHotelByIdHotel({id,desde,hasta,counPeople})
            if(response){
                dispatch(setHotel(response)) 
            }else{
                dispatch(setError("no found")) 
            }
        } catch (error) {
            dispatch(setError("no found")) 
         
        }
    }
    
    return {
        getHotel
    }

}

export default UseHotelActions
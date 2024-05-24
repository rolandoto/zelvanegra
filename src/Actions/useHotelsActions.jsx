import React from "react"
import { useAppDispatch } from "../Hooks/Redux"
import { loading,setHotel,setError } from "../reducers/ApiHotelByIdReduccers"
import HttpClient from "../HttpClient"
import {toast} from "sonner"

const UseHotelActions =() =>{

    const dispatch =  useAppDispatch()

    const getHotel =async({id,desde,hasta}) =>{
        dispatch(loading())
        try {
            const response  = await   HttpClient.PostHotelByIdHotel({id,desde,hasta})
            if(response){
                dispatch(setHotel(response)) 
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
    
    return {
        getHotel
    }

}

export default UseHotelActions
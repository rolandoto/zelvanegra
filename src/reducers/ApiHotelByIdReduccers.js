import {createSlice} from "@reduxjs/toolkit"

export const initialState ={
    hotel:[],
    loading:false,
    error:null
}

export const ApiHotelByIdReduccers = createSlice({
    name:"Tarifas",
    initialState,
    reducers:{
        loading:(state) =>{
            state.loading=true
            state.error= null
        },
        setHotel:(state,action) =>{
            state.hotel = action.payload
            state.loading= false
        },
        setError:(state) =>{
            state.loading = false
            state.error = true
        }
    }
})

export const {loading,setHotel,setError} = ApiHotelByIdReduccers.actions

export default  ApiHotelByIdReduccers.reducer
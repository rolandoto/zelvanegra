import {createSlice} from "@reduxjs/toolkit"

export const initialState ={
    cart:[],
    loadingCart:false,
    errorCart:null
}
export const CartReduccers = createSlice({
    name:"CartRoom",
    initialState,
    reducers:{
        loadingCart:(state) =>{
            state.loadingCart=true
            state.errorCart= null
        },
        setErrorCart:(state) =>{
            state.loadingCart = true
            state.errorCart = "false"
        },
        addItemToCart:(state,action) =>{
            const {id} = action.payload
            state.cart.push(action.payload);
            state.loadingCart= false
        }
       
    }
})

export const {loadingCart,addItemToCart,setErrorCart} = CartReduccers.actions

export default  CartReduccers.reducers
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
            state.cart.push(action.payload);
            state.loadingCart= false
        },
        removetoCart: (state, action) => {
            const { roomByID } = action.payload;
            state.cart = state.cart.filter((item) => item.roomByID !== roomByID);
            state.loadingCart = false;
        }
    }
})

export const {loadingCart,addItemToCart,setErrorCart,removetoCart} = CartReduccers.actions

export default  CartReduccers.reducers
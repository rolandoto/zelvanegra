

import React from "react"
import { addItemToCart, loadingCart, removetoCart } from "../reducers/CartReduccers"
import { useDispatch } from "react-redux"

const useCartActions =() =>{

    const dispatch =  useDispatch()

    const AddCart = async(product) =>{
        dispatch(loadingCart())
        setTimeout(() => {
            dispatch(addItemToCart(product));
          }, 1000); // Simulate a loading delay
    }


    const RemoveCart = async(product) =>{
        console.log(product)
        dispatch(loadingCart())
        setTimeout(() => {
            dispatch(removetoCart(product));
          }, 1000); // Simulate a loading delay
    }

    return {
        AddCart,
        RemoveCart
    }

}

export default useCartActions
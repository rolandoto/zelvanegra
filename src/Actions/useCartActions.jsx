

import React from "react"
import { addItemToCart, loadingCart } from "../reducers/CartReduccers"
import { useDispatch } from "react-redux"

const useCartActions =() =>{

    const dispatch =  useDispatch()

    const AddCart = async(product) =>{
        dispatch(loadingCart())
        setTimeout(() => {
            dispatch(addItemToCart(product));
          }, 1000); // Simulate a loading delay
    }

    return {
        AddCart
    }

}

export default useCartActions
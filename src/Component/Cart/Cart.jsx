import React, { Fragment, useState } from "react"
import RoomItem from "../RoomItem/RoomItem";
import { IconRiCloseLargeLine } from "../Icons/Icons";
import UseCart from "../../Hooks/UseCart";
import EmpyCart from "../EmpyCart/EmpyCart";
import { useSelector } from "react-redux";

const Cart = () => {

    const {removeRoom,totalCost,getCartSize} = UseCart()
    const numOfProductsInCart =  getCartSize()

    const {cart} = useSelector(state => state.Cart);

    const getCartSubtotal = () => {
        let subtotal = 0    
        Object.values(cart)
          .forEach(({ quantity, Price }) => {
            subtotal += Price
          })
    
        return subtotal
    }

    const subtotal = getCartSubtotal()

    //{numOfProductsInCart ==0 ? <EmpyCart title={"Tu carrito esta vacio"}  /> 
    return (
      <div className=" fixed top-20 z-50 let-0 right-0 bg-white  border rounded-md shadow-md w-80 mx-auto mt-10">
        <div className="absolute right-0 top-2">
            <IconRiCloseLargeLine />
        </div>
            <Fragment>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Hotel gallery</h2>
                    <div className="space-y-4">
                        {cart.map(cartItem => (
                            <RoomItem key={cartItem.id}  {...cartItem} removeRoom={removeRoom} />
                        ))}
                    </div>
                </div>
               
                <div className="w-full  bg-gray-100 pt-4">
                    <div className="p-4">
                        <h3 className="text-lg   font-normal">Total de la Reserva</h3>
                        <p className="text-black text-[30px] ">{subtotal.toLocaleString('es-CO')} COP</p>
                        <p className="text-sm text-black ">NO INCLUYE: 19% de IVA y Seguro hotelero ($17,000 COP por persona/por noche)</p>
                        <button className="mt-4 w-full px-4 py-2 items-center bg-orange-500 text-white rounded-md">Continuar</button>
                    </div>
                  
                </div>
            </Fragment>
      </div>
    );
  };
  export default Cart
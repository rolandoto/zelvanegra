import React from "react";

const  EmpyCart =({title}) =>{

    return (<div className= " justify-center flex mx-auto   max-w-5xl">
               <div className="text-center">
                    <div className="justify-center flex mx-auto max-w-5xl">
                    <object id="cart-svg" type="image/svg+xml" data="https://m.media-amazon.com/images/G/30/cart/empty/animated/rolling-cart-desaturated._CB405720532_.svg" width="160" height="160">
                        <img alt="Carrito vacío" src="https://m.media-amazon.com/images/G/30/cart/empty/animated/cart-fallback-desaturated._CB405720532_.svg" height="160" width="160" />
                    </object>
                    </div>
                    <p className="mt-4 text-lg text-gray-700">{title}</p>
                </div>
            </div> )

}

export default EmpyCart
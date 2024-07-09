import React from "react"

const CardEvents =() =>{

    return ( <div  className="flex flex-col md:flex-row  p-3 ease-in duration-300  hover:bg-white hover:shadow items-start
        bg-gray-100	  	rounded-lg  ">
            
            <div className="p-4">
                <img
                     width="100" 
                     height="100"
                    src={"https://github.com/rolandoto/image-pms/blob/main/blog-img1.jpg?raw=true"}
                    alt="Room"
                    className="w-48 h-auto rounded-lg shadow-lg"
                />
            </div>
                <div className="md:w-1/2">
                        <h2 className="text-[25px] font-mono text-black mb-4">Expo Artesano La Memoria</h2>
                        <p className="text-gray-500 mb-4 ">
                        Del 5 al 14 de julio del 2024
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                        </p>
                </div>
            </div>
    )

}

export default CardEvents
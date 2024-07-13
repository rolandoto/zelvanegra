import React  from "react"
import { Link } from "react-router-dom";

const CardEvents =({id, highlights,imageUrl,description,title,hotelDetails}) =>{


    return ( <Link 
        to={`DetailEvents/${id}`}
     
        className="flex  cursor-pointer items-center flex-col md:flex-row p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-white hover:shadow-lg transition ease-in duration-300 "
           >
            <div className="md:w-1/3">
            <img
                src={imageUrl}
                alt="Room"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            </div>
            <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-2xl  font-lora text-black mb-4">{title}</h2>
            <p className="text-gray-500 mb-4">{description}</p>
            
            </div>
  </Link>
    )

}

export default CardEvents
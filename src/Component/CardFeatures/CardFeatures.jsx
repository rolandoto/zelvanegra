import React from "react";

const CardFeatures =({icon,title,description,index}) =>{

    return (<div  className="bg-gray-100 p-6 rounded-lg ">
                <div className="flex items-center ">
                    <div className="text-4xl ">{icon}</div>
                    <div> <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <div>
                        {description && <p className="text-gray-700">{description}</p>}
                    </div></div>        
                </div>
            </div>)
}

export default CardFeatures
import React from "react";

const  EmpyCart =({title}) =>{

    return ( <div className="flex   items-center justify-center ">
              <div className=" max-w-6xl p-8  g">
                <div className="flex justify-center mb-6">
                  
                </div>
                <p className="bg-green-100 rounded-lg text-2xl font-lora text-center text-green-600">
                  {title}
                </p>
              </div>
        </div> )
}
export default EmpyCart
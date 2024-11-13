import React from "react"
import CardFeatures from "../CardFeatures/CardFeatures"

const Features =({features}) =>{

    return  (<div className="my-12 text-center mx-auto max-w-7xl">
                
                    <div className="grid grid-cols-1 p-6 md:p-6 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <CardFeatures   
                                {...feature} 
                                key={index}
                    />
                    ))}
                    </div>
            </div>
    )

}
export default Features 
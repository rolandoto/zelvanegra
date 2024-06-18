import React, { useState } from "react"
import { IconBsArrowDownShort, IconRiDeleteBinLine, IconsBsArrowUpShort } from "../Icons/Icons";
import moment from "moment";
import useCartActions from "../../Actions/useCartActions";

const RoomItem = ({ title,Price,person,start,end,roomByID }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dateStart=  moment(start).format('YYYY-MM-DD');
    const dateEnd=  moment(end).format('YYYY-MM-DD');

    const {RemoveCart} = useCartActions()

    const handletoRemoveCart =() =>{
        RemoveCart({roomByID})
    }
 
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const Open = isOpen ?  <IconsBsArrowUpShort />   :<IconBsArrowDownShort />

    return (
      <div className="border-b border-y-black	 ">
        <div className="flex justify-between">
            <h4 className="font-medium" >{title}</h4>
            <button 
           
            className="text-red-500 hover:text-red-200"
            >
                <IconRiDeleteBinLine   handSubmit={handletoRemoveCart}  />
            </button>  
                
        </div>
        <button className="flex items-center " onClick={toggleAccordion} >
            <span className="text-normal text-[10px]">VER DETALLES  </span>
            {Open}
        </button>

        {isOpen &&  ( <div className="flex justify-between  flex-col  ">
                        <div className="flex justify-between items-center ">
                            <span className="font-normal text-[10px] ">ENTRADA:</span>
                            <span>{dateStart}</span>
                        </div>
                        <div className="flex justify-between  items-center ">
                            <span className="font-normal text-[10px] ">SALIDA:</span>
                            <span>{dateEnd}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-normal text-[10px]   ">RÉGIMEN/PLAN:</span>
                            <span>Alojamiento y Desayuno</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-normal text-[10px]   ">OCUPACIÓN:</span>
                            <span>{person} adultos</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-normal text-[10px]   ">PRECIO:</span>
                            <span>${parseInt(Price).toLocaleString()}</span>
                        </div>
                    </div>
        ) }
      </div>
    );
};

export default RoomItem
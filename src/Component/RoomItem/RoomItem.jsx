import React, { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri";
import { IconBsArrowDownShort, IconRiDeleteBinLine, IconsBsArrowUpShort } from "../Icons/Icons";

const RoomItem = ({ ID,title, removeRoom,Price,person }) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const Open = isOpen ?  <IconsBsArrowUpShort />   :<IconBsArrowDownShort />

    return (
      <div className="   border-b border-y-black	 ">
        <div className="flex justify-between">
            <h4 className="font-medium" >{title}</h4>
                <button 
                onClick={() => removeRoom(ID)}
                className="text-red-500 hover:text-red-700"
                >
                </button>  
                <IconRiDeleteBinLine />
        </div>
        <button className="flex items-center " onClick={toggleAccordion} >
            <span className="text-normal text-[10px]">VER DETALLES  </span>
            {Open}
        </button>

        {isOpen &&  ( <div className="flex justify-between  flex-col  ">
                        <div className="flex justify-between items-center ">
                            <span className="font-normal text-[10px] ">ENTRADA:</span>
                            <span>14/06/2024</span>
                        </div>
                        <div className="flex justify-between  items-center ">
                            <span className="font-normal text-[10px] ">SALIDA:</span>
                            <span>15/06/2024</span>
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
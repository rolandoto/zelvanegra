import { TextWidth } from "../../Ui/Style/GeneralStyle"
import IconAccomodation from "../IconAccomodation/IconAccomodation"



const DescripctionAccomodation =({title,cantidad,description}) =>{

   /* const Cuantity =  cantidad == 1 ?   <span className="bg-red-500  rounded-sm text-[11px]   p-1 text-white">¡ultima habitacion!</span> :
    <span className="bg-orange-500  text-[11px] rounded-sm font-normal	 p-1  text-white">quedan {cantidad}  Habitaciones </span>
*/
    return (  <div className="p-2" >  
                <TextWidth>
                <h2 className="text-lg font-normal ">{title}</h2>
                </TextWidth>
                <div className="text-sm text-gray-600 "></div>
                    <TextWidth >
                        <p className="text-[12px] text-gray-600  text-justify" > {description}</p>
                    </TextWidth>
                    <div>
                  
                    </div>
                  <IconAccomodation/>
            </div>
)

}

export default DescripctionAccomodation
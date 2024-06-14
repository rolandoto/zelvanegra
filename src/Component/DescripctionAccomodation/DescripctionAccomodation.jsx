import { RangeCalendar } from "@nextui-org/react"
import { TextWidth } from "../../Ui/Style/GeneralStyle"
import IconAccomodation from "../IconAccomodation/IconAccomodation"



const DescripctionAccomodation =({title,cantidad}) =>{

    const Cuantity =  cantidad == 1 ?   <span className="bg-red-500  rounded-sm text-[11px]   p-1 text-white">¡ultima habitacion!</span> :
    <span className="bg-orange-500  text-[11px] rounded-sm font-normal	 p-1  text-white">quedan {cantidad}  Habitaciones </span>

    return (  <div className="p-2" >  
                <TextWidth>
                <h2 className="text-lg font-normal mb-2">{title}</h2>
                </TextWidth>
                <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                    <TextWidth >
                        <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                    </TextWidth>
                    <div>
                    {Cuantity}
                    </div>
                  <IconAccomodation/>
            </div>
)

}

export default DescripctionAccomodation
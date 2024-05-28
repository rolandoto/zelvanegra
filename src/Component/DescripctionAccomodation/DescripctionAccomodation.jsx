import { TextWidth } from "../../Ui/Style/GeneralStyle"
import IconAccomodation from "../IconAccomodation/IconAccomodation"



const DescripctionAccomodation =({title,cantidad}) =>{

    const Cuantity =  cantidad == 1 ?   <span className="bg-red-300  rounded-full text-[10px]  p-1 text-white">¡ÚLTIMA HABITACIÓN!</span> :
    <span className="bg-green-300  text-[10px] rounded-full	 p-1  text-white">QUEDAN {cantidad}  HABITACIONES </span>

    return (  <div className="p-2" >
               
                <TextWidth>
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
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
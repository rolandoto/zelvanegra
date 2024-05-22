import { TextWidth } from "../../Ui/Style/GeneralStyle"
import IconAccomodation from "../IconAccomodation/IconAccomodation"



const DescripctionAccomodation =() =>{

    return (  <div className="p-2" >
                <TextWidth>
                <h2 className="text-lg font-semibold mb-2">Room sencilla</h2>
                </TextWidth>
                <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                    <div>
                    <span className="text-green-300 font-semibold">10.0 - Exelente  <span >(200)</span></span>
                        
                    </div>
                    <TextWidth >
                        <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                    </TextWidth>
                  <IconAccomodation/>
            </div>
)

}

export default DescripctionAccomodation
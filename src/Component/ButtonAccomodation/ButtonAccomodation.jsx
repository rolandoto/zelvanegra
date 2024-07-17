import { ContaineButton } from "../../Ui/Style/GeneralStyle"

const ButtonAccomodation =({price,nights,person,handleAddToCart})=>{
        return (
            <ContaineButton >
                <div className="p-2" >
                    <h2 className="text-1xl font-normal mb-2">{nights} noches  {person}  adultos</h2>
                    <h2 className="text-[20px] font-normal mb-2" >{parseInt(price).toLocaleString('es-CO')} COP</h2>
                    <h2  className="text-1xl font-semibold mb-2"></h2>
                </div>
                <button onClick={handleAddToCart} className="  w-full md:w-[150px]   Button-Search bg-orange-500 text-white py-4  rounded hover:bg-orange-600 transition duration-200">
                    Reservar 
                </button>
        </ContaineButton>
        )
}

export default ButtonAccomodation
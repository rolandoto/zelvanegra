import { ContaineButton } from "../../Ui/Style/GeneralStyle"

const ButtonAccomodation =({price,nights,person,handleAddToCart})=>{
        return (
            <ContaineButton >
                <div className="p-2" >
                    <h2     className="text-1xl font-normal mb-2">{nights} noche  {person}  adulto</h2>
                    <h2 className="text-2xl font-normal mb-2" >${parseInt(price).toLocaleString()}</h2>
                    <h2  className="text-1xl font-semibold mb-2"></h2>
                </div>
                <button onClick={handleAddToCart} className=" Button-Search w-[150px] bg-orange-500 text-white py-4  rounded hover:bg-orange-600 transition duration-200">
                    Añadir 
                </button>
        </ContaineButton>
        )
}

export default ButtonAccomodation
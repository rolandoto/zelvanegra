import { ContaineButton } from "../../Ui/Style/GeneralStyle"


const ButtonAccomodation =()=>{
        return (
            <ContaineButton >
            <div className="p-2" >
                <h2 className="text-2xl font-semibold mb-2" >$70.0000</h2>
                <h2  className="text-1xl font-semibold mb-2">por noche</h2>
            </div>
            <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                            Reservas ahora
            </button>
        
        </ContaineButton>
        )
}

export default ButtonAccomodation
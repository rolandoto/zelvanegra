import { useSelector } from "react-redux"
import UseHotelActions from "../../Actions/useHotelsActions"
import { useEffect } from "react"


const HeaderAccomodation =() =>{

    const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
    const {getListHotel} =UseHotelActions()

    const fetchDate =async() =>{
      await getListHotel()
    }
  
    useEffect(() =>{
      fetchDate()
    },[])

    const FindIdHotel=(hotel) =>{
        return hotel.id_hotel ==23
    }
    
    const hotel = hotelList.find(FindIdHotel) 
  
    const FillContent =()=>{
        if(loadingHotel){
                return <p>cargando</p>
        }

        if(errorHotel){
            return   <h1>Error en el servicio</h1>
        }
        return  hotel?.nombre
    }
    
  
    return ( <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://grupo-hoteles.com/storage/app/23/page/1746688908-23-page-slider-1-_MG_4609-HDR.jpg)` }}>
                <div className="absolute inset-0 bg-black opacity-15"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-normal">{FillContent()}</h1>
                <p className="mt-4 text-lg md:text-2xl font-normal">Termina de buscar tu habitación</p>
                </div>
            </div>)

}

export default HeaderAccomodation
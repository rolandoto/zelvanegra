import React, { useCallback, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import moment from "moment";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import Search from "../../Component/Search/Search";
import {useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import CalenderSearchHome from "../../Component/CalenderSearch/CalenderSearchHome";
import TitleWelcome from "../../Component/TitleWelcome/TitleWelcome";
import Features from "../../Component/Features/Features";
import Footer from "../../Component/Footer/Footer";
import AccordionAsk from "../../Component/AccordionAsk/AccordionAsk";
import Events from "../../Component/Events/Events";
import RoomDetail from "../../Component/RoomDetail/RoomDetail";
import RoomPresentaion from "../../Component/RoomPresentation/RoomPresentation";




const Home =() =>{
  const navigate = useNavigate();
    const features = [
        { icon: '🍸', title: 'Cóctel de bienvenida' },
        { icon: '🍴', title: 'Desayuno incluido' },
        { icon: '🕛', title: 'Recepción 24 horas' },
        { icon: '🚗', title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
        { icon: '🏛️', title: 'Vida cultural y nocturna', description: 'Bares, museos, restaurantes' },
        { icon: '🅿️', title: 'Parqueadero gratis*', description: 'Sujeto a disponibilidad' },
      ];

    
      const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
      const {handleSelect,state,
            setContextMenuPosition,
            contextMenuPosition,
            handChangeAdults,
            handChangeChildrem,
            handDecreaseAdults,
            handDecreaseChildren,
            totalCountAdults,
            adults,
            childrem  } =  UseCalenderSearch()
        
      
    const formattedStartDateToString = moment(state?.[0]?.startDate ?? '').format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state?.[0]?.endDate ?? '').format('DD MMM YYYY').toLowerCase();
            
    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      navigate("/Accomodation");
    }, []);


    const HandClickMenuPeople =() =>{
      if(contextShowMenuPeople){
        setContextShowMenuPeople(false)
      }else if(!contextShowMenuPeople){
        setContextShowMenuPeople(true)
      }
      setContextMenuPosition(false)
    }
  
    const HandClickMenu =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }
       
  
    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }

             

    const faqs = [
      {
        question: '¿Cuáles son los sitios turísticos de la ciudad y si están cerca al hotel?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Teatros (3 a 9 min caminando)</li>
            <li>Museo de Antioquia</li>
            <li>Plaza Botero</li>
            <li>Jardín Botánico de Medellín</li>
            <li>Parque Lleras</li>
            <li>Comuna 13</li>
          </ul>
        ),
      },
      {
        question: '¿Cómo es la seguridad del sector? ¿se puede salir en la noche?',
        answer: 'La seguridad del sector es buena, pero siempre se recomienda tomar precauciones normales como en cualquier ciudad. Es seguro salir en la noche, especialmente en áreas concurridas y turísticas.',
      },
      {
        question: '¿Cuáles son los mejores centros comerciales de la ciudad de Medellín?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Centro Comercial Santa Fe</li>
            <li>Centro Comercial El Tesoro</li>
            <li>Centro Comercial Oviedo</li>
            <li>Centro Comercial Premium Plaza</li>
          </ul>
        ),
      },
      {
        question: '¿Dónde puedo cambiar divisas?',
        answer: 'Puede cambiar divisas en casas de cambio ubicadas en centros comerciales, en el aeropuerto, y en diversas partes del centro de la ciudad.',
      },
    ];


    const rooms = [
      { title: 'Room Box Clásica', image:"https://textycon.com/wp-content/uploads/MG_8585-scaled.jpg", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
      { title: 'Room Box Aire', image: "https://textycon.com/wp-content/uploads/MG_8585-scaled.jpg", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
      { title: 'Room Box Jacuzzi', image: "https://textycon.com/wp-content/uploads/MG_8585-scaled.jpg", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
    ];

    return (
        <div>
           <Header />
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(https://textycon.com/wp-content/uploads/MG_8648-scaled.jpg)` }}>
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-normal">Gallery Hotel</h1>
                    <p className="mt-4 text-lg md:text-2xl font-normal">Tu hogar en el centro de Medellín</p>
                    <p className="mt-2 text-md md:text-xl font-normal">Más que un hotel, una experiencia artística</p>
                    <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Ver habitaciones</button>
                  </div>
            <CalenderSearchHome HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel}
                                  totalCountAdults={totalCountAdults}/>
            {contextMenuPosition &&
                  <div className=" lg:hidden " >
                    <DateRange 
                        className="flex calender-search-home lg:hidden"
                        rangeColors={["#f97316"]}
                        minDate={new Date()}
                        onChange={handleSelect}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        showSelectionPreview={false}
                        months={1}
                        showDateDisplay={false}
                        ranges={state}
                        direction="horizontal"
                        locale={esLocale}
                    />
                  </div>
                  }
              {contextMenuPosition &&
                    <div className=" hidden sm:mb-8 sm:flex " >
                      <DateRange 
                          className="flex calender-search-home lg:hidden"
                          rangeColors={["#f97316"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          showSelectionPreview={false}
                          months={2}
                          showDateDisplay={false}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                    </div>
                    }
          <Search contextShowMenuPeople={contextShowMenuPeople}
            top={1015}
            adults={adults}
            childrem={childrem}
            handChangeAdults={handChangeAdults}
            handDecreaseAdults={handDecreaseAdults}
            handChangeChildrem={handChangeChildrem}
            handDecreaseChildren={handDecreaseChildren}
            setContextShowMenuPeople={setContextShowMenuPeople}  />
            </div>
       
          <TitleWelcome />
          <Features features={features} />
          <RoomPresentaion />
          <RoomDetail rooms={rooms} />
          <Events />
          <AccordionAsk faqs={faqs} />
          <Footer />
          </div>
    )
    
}

export default Home
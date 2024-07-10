import React, { useCallback, useRef, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
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
import "./home.css"
import { IconRiCloseLargeLine, IconsFaBanSmoking, IconsFaConciergeBell, IconsFaGlassMartini, IconsFaSquareParking, IconsFaStore, IconsGiForkKnifeSpoon, IconsRiBankFill, IconsaCar } from "../../Component/Icons/Icons";
import 'react-date-range/dist/styles.css'; // import the default styles
import 'react-date-range/dist/theme/default.css'; // import the default theme
import moment from 'moment';
import 'moment/locale/es';

const Home =() =>{
  const navigate = useNavigate();
  moment.locale('es');
 
    const features = [
        { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
        { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
        { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
        { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
        { icon: <IconsRiBankFill/>, title: 'Vida cultural y nocturna', description: 'Bares, museos, restaurantes' },
        { icon: <IconsFaSquareParking/>, title: 'Parqueadero gratis*', description: 'Sujeto a disponibilidad' },
        { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
        { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' },
        { icon: <IconsFaBanSmoking/>, title: 'Espacios libre de humo', description: "" },
      ];

      const roomSectionRef = useRef(null);
      const roomEventsSectionRef = useRef(null);

      const scrollToRoomSection = () => {
        if (roomSectionRef.current) {
            roomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  

    const scrollToRoomSectionEvent = () => {
      if (roomEventsSectionRef.current) {
          roomEventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

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
            childrem ,
            getClassNameForDate } =  UseCalenderSearch()
        
      
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
      {  title: 'Room Box Ventilador', price:99000 , image:"https://grupo-hoteles.com/storage/app/4/rooms/203289556-10-rooms-slider-1-habitacion_Estandar_Hotel_en_Medellin_Gallery_Hotel-01.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV'] },
      { title: 'Room Box Aire',price:109000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1046121300-11-rooms-slider-1-habitacion_Aire_Hotel_en_Medellin_Gallery_Hotel-01.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado'] },
      { title: 'Room Box Jacuzzi',price:169000, image: "https://grupo-hoteles.com/storage/app/4/rooms/1563326590-12-rooms-slider-1-habitacion_Jacuzzi_Hotel_en_Medellin_Gallery_Hotel-02.webp", features: ['Cama matrimonial', 'Baño privado con ducha', 'Wi-Fi gratuito', 'Smart TV','Aire Acondicionado','Jacuzzi'] },
    ];

    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado


    return (
        <div>
           <Header  scrollToRoomSectionEvent={scrollToRoomSectionEvent}   />
           <div className="relative bg-cover bg-center h-[650px]" style={{ 
                backgroundImage: `url(https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp)`,}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                    Gallery Hotel
                </h1>
                <p className="mt-2 text-base md:text-xl lg:text-3xl font-lora font-normal">
                    Más que un hotel, una experiencia artística
                </p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-[#ff7a45]" onClick={scrollToRoomSection}>
                    Ver habitaciones
                </button>
            </div>
        </div>

            <CalenderSearchHome HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel}
                                  totalCountAdults={totalCountAdults}/>

          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex  calender-search-home lg:hidden"
                  rangeColors={["rgb(255 104 0 / 36%);"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={true}
                  months={2}
                  dayContentRenderer={(date) => {
                    const className = getClassNameForDate(date);
                  
                    return (
                      <div className={className}>
                        {date.getDate()}
                      </div>
                    );
                  }}
                  autoFocus
                  moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                  showSelectionPreview={false} // Muestra la selección previa
                  startDatePlaceholder="Early"
                  showDateDisplay={true}
                  ranges={state}
                  direction="horizontal"
                  locale={esLocale}
                />
              )}
            </div>
          {contextMenuPosition &&
              <div class="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div class="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button class="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine /></button>
                 <div>
                    <h2 class="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-home lg:hidden"
                          rangeColors={["rgb(255 104 0 / 36%);"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={true}
                          months={monthsToShow}
                          dayContentRenderer={(date) => {
                            const className = getClassNameForDate(date);
                          
                            return (
                              <div className={className}>
                                {date.getDate()}
                              </div>
                            );
                          }}
                          autoFocus
                          moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                          showSelectionPreview={false} // Muestra la selección previa
                          startDatePlaceholder="Early"
                          showDateDisplay={true}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                     
                    </div>
                    <button
                      className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-[#ff7a45]"
                      onClick={(e) => setContextMenuPosition(false) }
                      style={{
                        position: 'absolute',
                        bottom: '20px',  // Ajusta esta propiedad según la distancia que desees del borde inferior
                        left: '50%',     // Centra el botón horizontalmente
                        transform: 'translateX(-50%)', // Ajusta la posición centrada
                      }}
                    >
                      Continuar
                    </button>
                 </div> 
            </div>} 
            {contextShowMenuPeople &&
              <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                        <div>
                              <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={715}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />
                      </div>
                  </div> 
              </div>} 
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={715}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>
             
          <TitleWelcome />
          <Features features={features} />
          <RoomPresentaion />
          <div ref={roomSectionRef} >   
            <RoomDetail ref={roomSectionRef}  rooms={rooms} />
          </div>
          <div ref={roomEventsSectionRef} >
            <Events  />
          </div>
          <AccordionAsk faqs={faqs} />
          <Footer />
          </div>
    )
    
}

export default Home
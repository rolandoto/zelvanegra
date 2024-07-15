import React, { useEffect }  from "react";
import Events from "../../Component/Events/Events";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const EventsNext =()  =>{

  
    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);
    return (<>
             <Header/>
               <div className="relative bg-cover bg-center h-[310px]" style={{ 
                backgroundImage: `url(https://raw.githubusercontent.com/rolandoto/image-pms/main/1155970062-4-page-slider-1-Habitacion-todos-jacuzzi-ventilador-centro-de-medellin-antioquia-colombia.webp)`,}}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                           Eventos
                        </h1>
                    </div>
                </div>
            <Events />
            <Footer/>
        </>)

}

export default EventsNext
import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const DetailEvents =() =>{

    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);
    let { userId } = useParams();

    const eventData = [
        {    
         id:1,
         title: "¡Vive la cultura y tradición en Expoartesano 2024 en Medellín!",
         description: "Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín",
         imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM.jpeg?raw=true",
         descriptionFull:"Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín. Sumérgete en un universo de colores, texturas y saberes populares donde más de 500 artesanos de todo el país exhiben sus creaciones únicas y llenas de historia. Descubre la maestría de las técnicas tradicionales y déjate sorprender por la innovación y el talento de los nuevos artistas.",
         subtitle:"Expoartesano",
         finally:"¡Vive al máximo Expoartesano en Hotel Gallery!",
         highlights: [
             "Un recorrido por las diferentes regiones de Colombia a través de sus artesanías.",
             "Piezas únicas en cerámica, textil, joyería, madera, cestería y mucho más.",
             "Muestras gastronómicas con los sabores típicos de cada región.",
             "Talleres y demostraciones en vivo para aprender técnicas artesanales.",
             "Espectáculos musicales y de danza para celebrar la riqueza cultural colombiana."
           ],
           hotelDetails: [
             "Un hotel original en el corazón de la ciudad, cerca de Expoartesano.",
             "Habitaciones modernas y confortables con un toque de arte urbano.",
             "Desayuno típico incluido y con productos locales.",
             "Rooftop Lienzo con vista panorámica de la ciudad.",
             "Atención personalizada y servicio de recepción las 24 horas.",
             "Parqueadero (Sujeto a disponibilidad)."
           ],
           breveDescriptions:"Y para completar tu experiencia en Medellín, te invitamos a hospedarte en el Gallery Hotel "
        },
        {
         id:2,
         title: "¡Sumérgete en el universo de la moda en Colombiamoda 2024!",
         description: "Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
         descriptionFull:"Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
         finally:"¡No te pierdas esta oportunidad única de vivir la moda en su máxima expresión!",
         subtitle:"Colombiamoda",
         highlights: [
             "Pasarelas con las últimas tendencias de diseñadores colombianos e internacionales.",
             "Salas de exposición donde podrás descubrir nuevas marcas y productos",
             "Conferencias y talleres con expertos de la industria de la moda.",
             "Ruedas de negocios para conectar con compradores y proveedores.",
             "Un espacio para la reflexión sobre el futuro de la moda en un mundo sostenible."
           ],
        hotelDetails: [
             "Un hotel temático en el corazón de Medellín, cerca de Plaza Mayor Medellín, donde se desarrolla Colombiamoda.",
             "Habitaciones modernas y confortables con un toque de arte colombiano.",
             "Desayuno incluido, con productos de la región.",
             "Atención personalizada y servicio de recepción las 24 horas o	arqueadero (Sujeto a disponibilidad)",
           ],
        breveDescriptions:"Y para completar tu experiencia en Medellín, te invitamos a hospedarte en el Gallery Hotel ",
         imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM%20(1).jpeg?raw=true"
        }
     ];

    const SearFindEvents =  eventData.find((item) => item.id == userId)

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

                {SearFindEvents ? 
                <div className="mx-auto max-w-4xl p-6 mb-24">
                    <h1 className="text-[30px] text-center text-orange-500  font-lora  mb-6">{SearFindEvents.title}</h1>
                        <div className=" w-full p-4">
                            <img
                                    src={SearFindEvents.imageUrl}
                                    alt="Room"
                                    className="w-full h-[500px] object-center rounded-lg shadow-lg"
                                
                                />
                        </div>
                        <span className="text-2xl font-lora text-black mb-4" >{SearFindEvents.subtitle}: </span>
                        <div className=" md:pl-6 mt-8 md:mt-3">
                            <p className="text-gray-700 text-justify	 mb-4">{SearFindEvents.descriptionFull}</p>
                            <ul className="list-disc list-inside  text-justify text-gray-700 mb-4">
                            {SearFindEvents.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                            </ul>
                            <p className="text-gray-700  text-justify	 mb-4">
                                {SearFindEvents.breveDescriptions}
                            </p>
                            <ul className="list-disc list-inside  text-justify text-gray-700 mb-4">
                            {SearFindEvents.hotelDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                            </ul>
                        </div>
                    <h1 className="text-[20px] text-black  font-lora  mb-6">{SearFindEvents.finally}</h1>
                </div>
              : 
              <div className="mx-auto max-w-4xl text-center p-6 mb-24" >
                    <span className="text-2xl text-center font-mono text-black mb-4" >Evento no disponible </span>
              </div>
              }
              <Footer/>
            </>)

}

export default  DetailEvents
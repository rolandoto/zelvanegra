import React from "react";
import CardEvents from "../CardEvents/CardEventjs";

const Events =()  =>{
    const eventData = [
       {    
        id:1,
        title: "¡Vive la cultura y tradición en Expoartesano 2024 en Medellín!",
        description: "Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín",
        imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM.jpeg?raw=true",
        descriptionFull:"Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín. Sumérgete en un universo de colores, texturas y saberes populares donde más de 500 artesanos de todo el país exhiben sus creaciones únicas y llenas de historia. Descubre la maestría de las técnicas tradicionales y déjate sorprender por la innovación y el talento de los nuevos artistas.",
        subtitle:"Expoartesano",
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
  
       },
       {
        id:2,
        title: "¡Sumérgete en el universo de la moda en Colombiamoda 2024!",
        description: "Del 23 al 25 de julio, Medellín se convierte en el epicentro de la moda latinoamericana con Colombiamoda 2024, un evento imperdible para diseñadores, empresarios, amantes de la moda y el público en general.",
        descriptionFull:"Un encuentro con la artesanía, la memoria y las costumbres ancestrales de Colombia te espera en Expoartesano 2024, del 5 al 14 de julio en Plaza Mayor Medellín. Sumérgete en un universo de colores, texturas y saberes populares donde más de 500 artesanos de todo el país exhiben sus creaciones únicas y llenas de historia. Descubre la maestría de las técnicas tradicionales y déjate sorprender por la innovación y el talento de los nuevos artistas.",
        subtitle:"Expoartesano",
        highlights: [
            "Pasarelas con las últimas tendencias de diseñadores colombianos e internacionales.",
            "Salas de exposición donde podrás descubrir nuevas marcas y productos.",
            "Conferencias y talleres con expertos de la industria de la moda.",
            "Ruedas de negocios para conectar con compradores y proveedores",
            "Un espacio para la reflexión sobre el futuro de la moda en un mundo sostenible."
          ],
          hotelDetails: [
            "Un hotel temático en el corazón de Medellín, cerca de Plaza Mayor Medellín, donde se desarrolla Colombiamoda.",
            "Habitaciones modernas y confortables con un toque de arte colombiano",
            "Desayuno típico incluido y con productos locales.",
            "Desayuno incluido, con productos de la región.",
            "Atención personalizada y servicio de recepción las 24 horas.",
            "Parqueadero (Sujeto a disponibilidad)"
          ],
        imageUrl: "https://github.com/rolandoto/image-pms/blob/main/WhatsApp%20Image%202024-07-12%20at%209.26.10%20AM%20(1).jpeg?raw=true"
       }
    ];
    return (
        <>
         <div     className="   mx-auto max-w-7xl p-6" >
                <h1 className="text-[30px] text-center text-orange-500  font-lora  mb-6">Próximos eventos en Medellín</h1>
                <div className="grid sm:grid-cols-1  gap-5   md:grid-cols-2 ">  
                      {eventData.map((item,e ) => (
                         <CardEvents key={e} {...item} />
                      ))}
              </div>
            </div>
        </>
    )
}
export default Events
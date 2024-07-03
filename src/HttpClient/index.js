import { config } from "../Config/Config";

const PostHotelByIdHotel = async ({id,desde,hasta,counPeople}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/SeacrhHotelsById`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({id,desde,hasta,counPeople})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const PostCreateReservation = async ({cart,name,apellido,email,city,country,fecha}) => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/hotels/HotelCreateWebSite`, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({cart,name,apellido,email,city,country,fecha})
        });
    
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const data = await resp.json();
        return data;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  const GetCountry = async () => {
    try {
        const resp = await fetch(`${config.serverRoute}/api/resecion/getcountry`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json'
          }
        });
        if (!resp.ok) {
          throw new Error('Response is not ok');
        }
    
        const {query} = await resp.json();
        return query;
      } catch (error) {
       
        throw error; // Puedes lanzar el error nuevamente o manejarlo de otra manera según tus necesidades
      }
  };

  export default {
    PostHotelByIdHotel,
    PostCreateReservation,
    GetCountry
  }


  


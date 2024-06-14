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

  export default {
    PostHotelByIdHotel
  }


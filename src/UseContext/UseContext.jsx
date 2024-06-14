import React, {useState} from 'react'
import { addDays} from 'date-fns';
import moment from "moment";

const Autoconext = React.createContext({})

export const AutoProvider =({children}) =>{
    
    const [contextMenuPosition, setContextMenuPosition] = useState(false);
    const [adults, setAdults] = useState(1);
    const [childrem, setChildrem] = useState(0);

    const totalCountAdults = adults + childrem;


    const handChangeAdults = () => {
      setAdults(adults + 1);
    }
    
    const handChangeChildrem = () => {
      setChildrem(childrem + 1);
    }
    
    const handDecreaseAdults = () => {
      if (adults > 1) {
        setAdults(adults - 1);
      }
    }
    
    const handDecreaseChildren = () => {
      if (childrem > 0) {
        setChildrem(childrem - 1);
      }
    }
  
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: "selection",
        },  
      ]);

      const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection;
        // Check if end date is the same as start date
        if (moment(endDate).isSame(startDate, 'day')) {
          // Reset the endDate to be the next day of startDate
          setState([
            {
              startDate: startDate,
              endDate: addDays(startDate, 1),
              key: 'selection',
            },
          ]);
        
        } else {
          setState([ranges.selection]);
          setContextMenuPosition(prevState => false);
        }
      };
  
    return <Autoconext.Provider value={{  
                                    state,
                                    handleSelect,
                                    setContextMenuPosition,
                                    contextMenuPosition,
                                    adults,
                                    childrem,
                                    handChangeAdults,
                                    handChangeChildrem,
                                    handDecreaseAdults,
                                    handDecreaseChildren,
                                    totalCountAdults

                                }}>
      {children}
    </Autoconext.Provider>
  }
  
  export default Autoconext
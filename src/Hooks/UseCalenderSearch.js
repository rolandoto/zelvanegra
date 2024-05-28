
import { useState } from "react"
import { addDays} from 'date-fns';
import moment from "moment";
const UseCalenderSearch =({setContextMenuPosition}) =>{

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

return {
    state,
    handleSelect
}

}

export default UseCalenderSearch
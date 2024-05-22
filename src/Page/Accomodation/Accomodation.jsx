import React, { useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import Layout from "../../Component/Layout/Layout";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import { SectionSearch} from "../../Ui/Style/GeneralStyle";
import CardAccomodation from "../../Component/CardAccomodation/CardAccomodation";
import TitleRoom from "../../Component/TitleRoom/TitleRoom";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";

const Accommodation = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(() => {
      const tomorrow = new Date();
      tomorrow.setDate(startDate.getDate() + 1);
      return tomorrow;
    });

  const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);

    const [contextMenuPosition, setContextMenuPosition] = useState(false);
    const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  
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

    /**
     *  
     */
                                
    const ray = ["https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg","https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/f6/02/088dc03b0c726862f072c61b45c00225074d135a57d26a01ef21d21002c0.jpeg"]

    return (<>
                <Layout>
                <SectionSearch  className="  ">
                  <TitleRoom/>
                  <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  setStartDate={setStartDate}  
                                  startDate={startDate}
                                  HandClickMenu={HandClickMenu} />
                                  
                    {contextMenuPosition &&
                        <DateRange
                          rangeColors={["#007cc2"]}
                          minDate={new Date()}
                          onChange={(item) => setState([item.selection])}
                          showSelectionPreview={false}
                          moveRangeOnFirstSelection={false}
                          months={2}
                          showDateDisplay={false}
                          ranges={state}
                        
                          direction="horizontal"
                          locale={esLocale}
                      />
                    }
                    <Search contextShowMenuPeople={contextShowMenuPeople}
                          setContextShowMenuPeople={setContextShowMenuPeople}  />
                </SectionSearch>
                 {ray.map((List) => <CardAccomodation img={List} />)}
                </Layout>
            </>
    );
}

export default Accommodation;

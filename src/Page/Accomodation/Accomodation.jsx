import React, { useCallback, useEffect, useState } from "react";
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
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";


const Accommodation = () => {

  const {getHotel} = UseHotelActions()
  const [contextMenuPosition, setContextMenuPosition] = useState(false);
  const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  const {error,hotel,loading}= useSelector((state) => state.Hotel)

  const {handleSelect,state} =  UseCalenderSearch({setContextMenuPosition})
  
    const formattedStartDate = moment(state[0].startDate).format('YYYY-MM-DD');
    const formattedEndDate = moment(state[0].endDate).format('YYYY-MM-DD');

    const formattedStartDateToString = moment(state[0].startDate).format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state[0].endDate).format('DD MMM YYYY').toLowerCase();

    
    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
     await getHotel({ id: 23, desde: formattedStartDate, hasta: formattedEndDate });
    }, []);

  useEffect(() => {
    PostHotelByIdHotel();
  }, [PostHotelByIdHotel]);

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



    const FillContent =()=>{
      if(loading){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(error){
        return <h1>error</h1>
      }
      return <>  {hotel?.availableRooms?.map((List) => <CardAccomodation  cantidad={List.cantidad}
                                                                           price={List.Price} title={List.title} img={List.room_image} />)}</>
    }

                                
    return (<>
    <Toaster position="bottom-right"  />
    
                <Layout>
                <SectionSearch  className="  ">
                  <TitleRoom/>
                  <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel} />
                  

            {contextMenuPosition &&
                    <div className=" lg:hidden " >
                      <DateRange 
                          className="flex lg:hidden"
                          rangeColors={["#007cc2"]}
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
                          className="flex lg:hidden"
                          rangeColors={["#007cc2"]}
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
                          setContextShowMenuPeople={setContextShowMenuPeople}  />
                </SectionSearch>
               {FillContent()}
                </Layout>
            </>
    );
}

export default Accommodation;

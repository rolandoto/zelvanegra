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
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import ContentLoader from "react-content-loader";


const LoadingSkeleton =(props) =>{
  return (      <ContentLoader height={1000} width={700} >
      <circle cx="25" cy="50" r="25" />
      <circle cx="25" cy="150" r="25" />
      <circle cx="25" cy="250" r="25" />
      <circle cx="25" cy="330" r="25" />
    
     
      <rect x="60" y="30" rx="5" ry="5" width="220" height="15" />
      <rect x="60" y="50" rx="5" ry="5" width="70" height="15" />
      <rect x="140" y="50" rx="5" ry="5" width="90" height="15" />
      <rect x="240" y="50" rx="5" ry="5" width="70" height="15" />
      <rect x="320" y="50" rx="5" ry="5" width="60" height="15" />
      <rect x="390" y="50" rx="5" ry="5" width="50" height="15" />
      <rect x="450" y="50" rx="5" ry="5" width="70" height="15" />
      <rect x="60" y="70" rx="5" ry="5" width="60" height="15" />
      <rect x="130" y="70" rx="5" ry="5" width="80" height="15" />
      <rect x="220" y="70" rx="5" ry="5" width="90" height="15" />
      <rect x="320" y="70" rx="5" ry="5" width="100" height="15" />
      <rect x="380" y="70" rx="5" ry="5" width="50" height="15" />
      <rect x="440" y="70" rx="5" ry="5" width="60" height="15" />

      <rect x="60" y="130" rx="5" ry="5" width="220" height="15" />
      <rect x="60" y="150" rx="5" ry="5" width="70" height="15" />
      <rect x="140" y="150" rx="5" ry="5" width="90" height="15" />
      <rect x="240" y="150" rx="5" ry="5" width="70" height="15" />
      <rect x="320" y="150" rx="5" ry="5" width="60" height="15" />
      <rect x="390" y="150" rx="5" ry="5" width="50" height="15" />
      <rect x="450" y="150" rx="5" ry="5" width="70" height="15" />
      <rect x="60" y="170" rx="5" ry="5" width="60" height="15" />
      <rect x="130" y="170" rx="5" ry="5" width="80" height="15" />
      <rect x="220" y="170" rx="5" ry="5" width="90" height="15" />
      <rect x="320" y="170" rx="5" ry="5" width="100" height="15" />
      <rect x="380" y="170" rx="5" ry="5" width="50" height="15" />
      <rect x="440" y="170" rx="5" ry="5" width="60" height="15" />

      <rect x="60" y="230" rx="5" ry="5" width="220" height="15" />
      <rect x="60" y="250" rx="5" ry="5" width="70" height="15" />
      <rect x="140" y="250" rx="5" ry="5" width="90" height="15" />
      <rect x="240" y="250" rx="5" ry="5" width="70" height="15" />
      <rect x="320" y="250" rx="5" ry="5" width="60" height="15" />
      <rect x="390" y="250" rx="5" ry="5" width="50" height="15" />
      <rect x="450" y="250" rx="5" ry="5" width="70" height="15" />
      <rect x="60" y="270" rx="5" ry="5" width="60" height="15" />
      <rect x="130" y="270" rx="5" ry="5" width="80" height="15" />
      <rect x="220" y="270" rx="5" ry="5" width="90" height="15" />
      <rect x="320" y="270" rx="5" ry="5" width="100" height="15" />
      <rect x="380" y="270" rx="5" ry="5" width="50" height="15" />
      <rect x="440" y="270" rx="5" ry="5" width="60" height="15" />

      <rect x="60" y="310" rx="5" ry="5" width="220" height="15" />
      <rect x="60" y="330" rx="5" ry="5" width="70" height="15" />
      <rect x="140" y="330" rx="5" ry="5" width="90" height="15" />
      <rect x="240" y="330" rx="5" ry="5" width="70" height="15" />
      <rect x="320" y="330" rx="5" ry="5" width="60" height="15" />
      <rect x="390" y="330" rx="5" ry="5" width="50" height="15" />
      <rect x="450" y="330" rx="5" ry="5" width="70" height="15" />
      <rect x="60" y="350" rx="5" ry="5" width="60" height="15" />
      <rect x="130" y="350" rx="5" ry="5" width="80" height="15" />
      <rect x="220" y="350" rx="5" ry="5" width="90" height="15" />
      <rect x="320" y="350" rx="5" ry="5" width="100" height="15" />
      <rect x="380" y="350" rx="5" ry="5" width="50" height="15" />
      <rect x="440" y="350" rx="5" ry="5" width="60" height="15" />

    
     
    </ContentLoader>)
}


const Accommodation = () => {

  const {getHotel} = UseHotelActions()

 
    

  const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const formattedStartDate = moment(state[0].startDate).format('YYYY-MM-DD');
    const formattedEndDate = moment(state[0].endDate).format('YYYY-MM-DD');


    const PostHotelByIdHotel=async()=>{
      await getHotel({id:23,desde:formattedStartDate,hasta:formattedEndDate})
    }
  
    const {error,hotel,loading}= useSelector((state) => state.Hotel)
  
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
      return <>  {hotel?.availableRooms?.map((List) => <CardAccomodation price={List.Price} title={List.title} img={List.room_image} />)}</>
    }
                                
    

    return (<>
    <Toaster position="bottom-right" />
                <Layout>
                <SectionSearch  className="  ">
                  <TitleRoom/>
                  <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                                  HandClickMenuEnd={HandClickMenuEnd}
                                 
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel} />
                                  
                    {contextMenuPosition &&
                        <DateRange
                          rangeColors={["#007cc2"]}
                          minDate={new Date()}
                          onChange={(item) => setState([item.selection])}
                          showSelectionPreview={false}
                          moveRangeOnFirstSelection={true}
                          months={2}
                          showDateDisplay={false}
                          ranges={state}
                          disabledDates={[]}
                          direction="horizontal"
                          locale={esLocale}
                      />
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

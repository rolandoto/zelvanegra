import React, { useCallback, useEffect, useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import { SectionSearch} from "../../Ui/Style/GeneralStyle";
import CardAccomodation from "../../Component/CardAccomodation/CardAccomodation";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import moment from "moment";
import LoadingSkeleton from "../../Component/LoadingSkeleton/LoadingSkeleton";
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import Header from "../../Component/Header/Header";
import EmpyCart from "../../Component/EmpyCart/EmpyCart";
import Cart from "../../Component/Cart/Cart";



const Accommodation = () => {

  const {getHotel} = UseHotelActions()
  const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
  const {error,hotel,loading}= useSelector((state) => state.Hotel)
  const {handleSelect,state,setContextMenuPosition,contextMenuPosition,
    handChangeAdults,
    handChangeChildrem,
    handDecreaseAdults,
    handDecreaseChildren,
    totalCountAdults,
    adults,
    childrem } =  UseCalenderSearch()

  const formattedStartDate = moment(state[0].startDate).format('YYYY-MM-DD');
  const formattedEndDate = moment(state[0].endDate).format('YYYY-MM-DD');

  const formattedStartDateToString = moment(state[0]?.startDate).format('DD MMM YYYY').toLowerCase();
  const formattedEndDateToString = moment(state[0]?.endDate).format('DD MMM YYYY').toLowerCase();

  const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      setContextShowMenuPeople(false)
       await getHotel({ id: 4, desde:formattedStartDate, hasta: formattedEndDate,counPeople:totalCountAdults });
    }, [formattedStartDate,formattedEndDate,totalCountAdults]);


    useEffect(() =>{
      PostHotelByIdHotel()
    },[])



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

    const {loadingCart} = useSelector(state => state.Cart);

    const LoadingOverlay = () => {
      return (
        <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
          <h1 className="text-4xl md:text-6xl font-normal text-white">Cargando producto...</h1>
        </div>
      );
    };


    const FillContent =()=>{
      if(loading){
       return  (
                <div  className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
                <LoadingSkeleton />
                </div> 
       ) 
      }if(error){
        return    <EmpyCart title={"Habitacion no encontrada"} />
                }
        return <>  {hotel?.availableRooms?.map((List,index) => <CardAccomodation  key={index} {...List}/>)}</>
    }
                          
    return (<div>
        <Toaster position="bottom-right"  />
        {loadingCart && <LoadingOverlay />}
        <Header/>
          <Cart  />
          <SectionSearch  className="  ">
          <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://textycon.com/wp-content/uploads/MG_8648-scaled.jpg)` }}>
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-normal">Gallery Hotel</h1>
                    <p className="mt-4 text-lg md:text-2xl font-normal">Termina de buscar tu habitacion</p>
                  </div>
          </div>
            
            <CalenderSearch  HandClickMenuPeople={HandClickMenuPeople} 
                            formattedStartDateToString={formattedStartDateToString}
                            formattedEndDateToString={formattedEndDateToString}
                            HandClickMenuEnd={HandClickMenuEnd}
                            HandClickMenu={HandClickMenu}
                            onsubmit={PostHotelByIdHotel} 
                            totalCountAdults={totalCountAdults}
                            />

            {contextMenuPosition &&
                    <div className=" lg:hidden " >
                      <DateRange 
                          className="flex  calender-search-Acoomodation lg:hidden "
                          rangeColors={["#f97316"]}
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
                    className="flex 
                    calender-search-Acoomodation  lg:hidden "
                    rangeColors={["#f97316"]}
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
                    top={580}
                    setContextShowMenuPeople={setContextShowMenuPeople} 
                    adults={adults}
                    childrem={childrem}
                    handChangeAdults={handChangeAdults}
                    handDecreaseAdults={handDecreaseAdults}
                    handChangeChildrem={handChangeChildrem}
                    handDecreaseChildren={handDecreaseChildren} />
                </SectionSearch>
                <div >
                    {FillContent()}
                
                </div>
              
            </div>
    );
}

export default Accommodation;

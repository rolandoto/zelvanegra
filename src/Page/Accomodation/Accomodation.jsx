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
import { IconCiShoppingCart, IconRiCloseLargeLine } from "../../Component/Icons/Icons";
import UseCart from "../../Hooks/UseCart";
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

    const {getCartSubtotal,getCartTotalCount} = UseCart()
    const subtotal = getCartSubtotal()
    const totalCount = getCartTotalCount()

    const [checkbox,setCheckBox] =useState(false)

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

    
    const handClickCart =() =>{
      setCheckBox(!checkbox)
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
        <div className="loading-opacity ">
          <h1 className="text-4xl md:text-5xl font-normal text-white">Cargando...</h1>
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
    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado

    return (<div>
            {subtotal >0 && 
            <button className="cartIcon  cursor-pointer "   onClick={handClickCart}   >
                      <div className="cartIcon-Number">
                          <span className="md:text-1xl font-normal">{totalCount}</span>
            
                      </div>
                      <IconCiShoppingCart  />
              </button>
            }
                  
            <Toaster position="bottom-right"  richColors   />
            {loadingCart && <LoadingOverlay />}
            <Header/>
            {subtotal >0 &&<Cart    
                            checkbox={checkbox} 
                            handClickCart={handClickCart} /> } 
            <SectionSearch  >
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
          
            
          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex calender-search-Acoomodation lg:hidden"
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
              )}
            </div>
          {contextMenuPosition &&
              <div class="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div class="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button class="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine />;</button>
                 <div>
                    <h2 class="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-Acoomodation lg:hidden"
                          rangeColors={["#f97316"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={true}
                          moveRangeOnFirstSelection={false}
                          showSelectionPreview={false}
                          months={monthsToShow}
                          showDateDisplay={false}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                    </div>
                 </div> 
            </div>} 

             {contextShowMenuPeople &&
              <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                        <div>
                              <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={715}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />
                      </div>
                  </div> 
              </div>} 


             
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={580}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>              
                </SectionSearch>
                <div >
                    {FillContent()}
                
                </div>
              
            </div>
    );
}

export default Accommodation;

import React, { useState } from "react";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import "./style.css"
import Layout from "../../Component/Layout/Layout";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Search from "../../Component/Search/Search";
import CalenderSearch from "../../Component/CalenderSearch/CalenderSearch";
import { ContaineButton, ContainerIcons, ImginProduct, MainProduct, SectionSearch, TextWidth } from "../../Ui/Style/GeneralStyle";
import { IconShower, IconTowels, IconsCheck, IconsSafe, IconsSnow, IconsTv, IconsWifi } from "../../Component/Icons/Icons";

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

    return (<>
                <Layout/>
                <SectionSearch  className="h-80 items-center border-header ">
                <div className="mx-auto flex  max-w-3xl items-center justify-between p-4 lg:px-8" >
                    <div className="flex  ">
                        <span className="text-[25px]  " >Nuestras Habitaciones</span> 
                    </div>
                    <div className="flex lg:flex-2">
                  
                    <select class="border border-blue-500 rounded-md">
                        <option class="border border-blue-500">Opción 1</option>
                        <option class="border border-blue-500">Opción 2</option>
                        <option class="border border-blue-500">Opción 3</option>
                        </select>

                    </div>
                </div>

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


                
                <main className="  mx-auto flex  max-w-5xl items-center justify-between p-4 lg:px-8" >
                  <MainProduct className="bg-white shadow-md"  >
                        <ImginProduct src="https://grupo-hoteles.com/storage/app/23/rooms/1904843090-83-rooms-slider-2-IMG_5980.jpeg"  alt="Hotel Image"/>
                        <div >
                        <TextWidth>
                        <h2 className="text-lg font-semibold mb-2">Room sencilla</h2>
                        </TextWidth>
                        <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                            <div>
                            <span className="text-green-300 font-semibold">10.0 - Exelente  <span >(200)</span></span>
                               
                            </div>
                            <TextWidth >
                                <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                            </TextWidth>
                            <ContainerIcons >
                              <IconsSnow />
                              <IconsWifi />
                              <IconsTv />
                              <IconsSafe />
                              <IconShower />
                              <IconTowels />
                              <IconsCheck />
                              <IconsCheck />
                              <IconsCheck />
                            </ContainerIcons>
                        </div>

                        <ContaineButton >
                          <div>
                            <h2 className="text-2xl font-semibold mb-2" >$70.0000</h2>
                            <h2  className="text-1xl font-semibold mb-2">por noche</h2>
                          </div>
                            <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                                          Reservas ahora
                            </button>
                       
                        </ContaineButton>
                       
                    </MainProduct>
                </main>

                <main className="  mx-auto flex  max-w-5xl items-center justify-between p-4 lg:px-8" >
                  <MainProduct className="bg-white shadow-md"  >
                        <ImginProduct src="https://grupo-hoteles.com/storage/app/23/rooms/682184610-84-rooms-slider-1-IMG_9576.JPG"  alt="Hotel Image"/>
                        <div >
                        <TextWidth>
                        <h2 className="text-lg font-semibold mb-2">Room Ventana</h2>
                        </TextWidth>
                        <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                            <div>
                            <span className="text-red-500 font-semibold">2.7 - Mala  <span >(166)</span></span>
                               
                            </div>
                            <TextWidth >
                                <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                            </TextWidth>
                            <ContainerIcons >
                              <IconsSnow />
                              <IconsWifi />
                              <IconsTv />
                              <IconsSafe />
                              <IconShower />
                              <IconTowels />
                              <IconsCheck />
                              <IconsCheck />
                              <IconsCheck />
                            </ContainerIcons>
                        </div>

                        <ContaineButton >
                          <div>
                            <h2 className="text-2xl font-semibold mb-2" >$70.0000</h2>
                            <h2  className="text-1xl font-semibold mb-2">por noche</h2>
                          </div>
                            <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                                          Reservas ahora
                            </button>
                       
                        </ContaineButton>
                       
                    </MainProduct>
                </main>

                <main className="  mx-auto flex  max-w-5xl items-center justify-between p-4 lg:px-8" >
                  <MainProduct className="bg-white shadow-md"  >
                        <ImginProduct src="https://grupo-hoteles.com/storage/app/23/rooms/1286426263-85-rooms-slider-1-IMG_9866.JPG"  alt="Hotel Image"/>
                        <div >
                        <TextWidth>
                        <h2 className="text-lg font-semibold mb-2">Room vip jacuzzi</h2>
                        </TextWidth>
                        <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                            <div>
                            <span className="text-yellow-500 font-semibold">7.7 - Bueno  <span >(166)</span></span>
                               
                            </div>
                            <TextWidth >
                                <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                            </TextWidth>
                            <ContainerIcons >
                              <IconsSnow />
                              <IconsWifi />
                              <IconsTv />
                              <IconsSafe />
                              <IconShower />
                              <IconTowels />
                              <IconsCheck />
                              <IconsCheck />
                              <IconsCheck />
                            </ContainerIcons>
                        </div>

                        <ContaineButton >
                          <div>
                            <h2 className="text-2xl font-semibold mb-2" >$70.0000</h2>
                            <h2  className="text-1xl font-semibold mb-2">por noche</h2>
                          </div>
                            <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                                          Reservas ahora
                            </button>
                       
                        </ContaineButton>
                       
                    </MainProduct>
                </main>
                <main className="  mx-auto flex  max-w-5xl items-center justify-between p-4 lg:px-8" >
                  <MainProduct className="bg-white shadow-md"  >
                        <ImginProduct src="https://grupo-hoteles.com/storage/app/23/rooms/1882808639-86-rooms-slider-1-IMG_0216.JPG"  alt="Hotel Image"/>
                        <div >
                        <TextWidth>
                        <h2 className="text-lg font-semibold mb-2">Room Balcon calle</h2>
                        </TextWidth>
                        <div className="text-sm text-gray-600 mb-2">Saint-Florent, a 5.9 km de: Patrimonio</div>
                            <div>
                            <span className="text-green-300 font-semibold">10.0 - Exelente   <span >(200)</span></span>
                              
                            </div>
                            <TextWidth >
                                <span className="text-sm text-gray-600 mb-2" > Esta habitación esta apunto de llenar sus fechas, haz click y reserva dsakhdasdhsajkdhsajdhaskjdhjashdkjashdjasdhjahkjsahaskjdhaskj.</span>
                            </TextWidth>
                            <ContainerIcons >
                              <IconsSnow />
                              <IconsWifi />
                              <IconsTv />
                              <IconsSafe />
                              <IconShower />
                              <IconTowels />
                              <IconsCheck />
                              <IconsCheck />
                              <IconsCheck />
                            </ContainerIcons>
                        </div>

                        <ContaineButton >
                          <div>
                            <h2 className="text-2xl font-semibold mb-2" >$70.0000</h2>
                            <h2  className="text-1xl font-semibold mb-2">por noche</h2>
                          </div>
                            <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                                          Reservas ahora
                            </button>
                       
                        </ContaineButton>
                       
                    </MainProduct>
                </main>
            </>
    );
}

export default Accommodation;

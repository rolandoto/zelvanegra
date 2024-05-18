import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalenderSearch =({HandClickMenuPeople,HandClickMenuEnd,setStartDate,startDate,HandClickMenu}) =>{

    return (<><div className="mx-auto flex border-heade  max-w-4xl p-2 items-center justify-center  rounded-lg shadow-2xl ">
                    <div className="flex flex-col hover-punter border-r-1">
                            <label className="mb-2 font-medium">Ciudad:</label>
                                Medeliin
                            </div>
                            <div className="flex flex-col hover-punter border-r-1"  onClick={HandClickMenu}>
                                    <label className="mb-2 font-medium" >Llegada :</label>
                                    <DatePicker
                                    disabled={true}
                                        selected={startDate}
                                        onChange={(date) => {
                                        setStartDate(date);
                                      
                                        }}
                                        className="bg-transparent"
                                        dateFormat="dd MMM yyyy"
                                        minDate={new Date()}
                                        
                                    />
                            </div>
                            <div className="flex flex-col divide-x hover-punter border-r-1" onClick={HandClickMenuEnd}>
                                    <label className="mb-2 font-medium">Salida:</label>
                                    <DatePicker
                                    disabled={true}
                                        selected={startDate}
                                        onChange={(date) => {
                                        setStartDate(date);
                                      
                                        }}
                                        className="bg-transparent"
                                        dateFormat="dd MMM yyyy"
                                        minDate={new Date()}
                                        
                                    />
                            </div>

                            <div className="flex flex-col hover-punter" onClick={HandClickMenuPeople}  >
                                <label className="mb-2 font-medium">Personas:</label>
                                <span>5 Huespedes</span>
                            </div>
                            
                            <div className="flex flex-col  Button-Search ">
                                <button className=" Button-Search w-[150px] bg-blue-500 text-white py-4  rounded hover:bg-blue-600 transition duration-200">
                                        Buscar
                                </button>
                            </div>
                        </div>
            </>
    )

}

export default CalenderSearch
import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BorderInput, BorderInputInitial, BorderSearch, ButtonSearch, ContainerButtonSearch, ContainerFooter, MainAccomodation, MainProduct } from "../../Ui/Style/GeneralStyle";

const CalenderSearch =({HandClickMenuPeople,
                        HandClickMenuEnd
                        ,HandClickMenu,
                        onsubmit,
                        formattedStartDateToString,
                        formattedEndDateToString}) =>{

    return (
        <MainAccomodation className=" lg:flex   mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
            
            <MainProduct className="mx-auto  	 lg:flex  items-center justify-between p-4 rounded-lg shadow-2xl ">
                           
                            <BorderInputInitial className="flex flex-col hover-punter "  onClick={HandClickMenu}>
                                    <span className="mb-2 font-medium" >Llegada :</span>
                                    <span> {formattedStartDateToString}</span>
                            </BorderInputInitial>
                            <BorderInput className="flex flex-col  hover-punter" onClick={HandClickMenuEnd}>
                                    <span className="mb-2 font-medium">Salida:</span>
                                    <span>{formattedEndDateToString}</span>
                            </BorderInput>

                            <BorderInput className="flex flex-col hover-punter" onClick={HandClickMenuPeople}  >
                                <span className="mb-2 font-medium">Personas:</span>
                                <span>5 Huespedes</span>
                            </BorderInput>
                            <ContainerButtonSearch className="flex flex-col ">
                                <ButtonSearch className="   w-[150px] bg-blue-500 text-white py-4    rounded hover:bg-blue-600 transition duration-200" onClick={onsubmit}>
                                        Buscar
                                </ButtonSearch>
                            </ContainerButtonSearch>
            </MainProduct>
            </MainAccomodation>
            
    )

}

export default CalenderSearch
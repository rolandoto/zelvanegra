import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BorderInput, BorderSearch, ButtonSearch, ContainerButtonSearch, ContainerFooter, MainAccomodation, MainProduct } from "../../Ui/Style/GeneralStyle";

const CalenderSearch =({HandClickMenuPeople,HandClickMenuEnd,setStartDate,startDate,HandClickMenu}) =>{

    return (
        <MainAccomodation className=" lg:flex   mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8">
            <MainProduct className="mx-auto  	 lg:flex  items-center justify-between p-4 rounded-lg shadow-2xl ">
                            <BorderSearch className="flex flex-col hover-punter">
                                <label className="mb-2 font-medium">Ciudad:</label>
                                    Medeliin
                            </BorderSearch>
                            <BorderInput className="flex flex-col hover-punter "  onClick={HandClickMenu}>
                                    <label className="mb-2 font-medium" >Llegada :</label>
                                    <span> 20 may 2027</span>
                            </BorderInput>
                            <BorderInput className="flex flex-col  hover-punter" onClick={HandClickMenuEnd}>
                                    <label className="mb-2 font-medium">Salida:</label>
                                    <span> 20 may 2027</span>
                            </BorderInput>

                            <BorderInput className="flex flex-col hover-punter" onClick={HandClickMenuPeople}  >
                                <label className="mb-2 font-medium">Personas:</label>
                                <span>5 Huespedes</span>
                            </BorderInput>
                            <ContainerButtonSearch className="flex flex-col ">
                                <ButtonSearch className="   w-[150px] bg-blue-500 text-white py-4    rounded hover:bg-blue-600 transition duration-200">
                                        Buscar
                                </ButtonSearch>
                            </ContainerButtonSearch>
            </MainProduct>
            </MainAccomodation>
            
    )

}

export default CalenderSearch
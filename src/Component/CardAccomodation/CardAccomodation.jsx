import React, { Fragment }  from "react";
import {ImginProduct, MainAccomodation, MainProduct, SectionSearch, TextWidth } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import UsenearScrean from "../../Hooks/USenearScreean";

const CardAccomodation =({img,title,price}) =>{

    const {show,element} =  UsenearScrean()
  
    return (   
            <MainAccomodation className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   ref={element}>
            <MainProduct className="lg:flex block bg-white shadow-md"    >
                {show  && 
                        <ImginProduct className="lg:w-full " src={img}  alt="Hotel Image"/>
                    }    
                        <DescripctionAccomodation  title={title}  />
                        <ButtonAccomodation price={price}  />
                    </MainProduct> 
                </MainAccomodation>)

}

export default CardAccomodation
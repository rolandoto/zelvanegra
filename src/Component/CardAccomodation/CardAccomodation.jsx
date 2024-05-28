import React, { Fragment }  from "react";
import {ContainerLabel, ImginProduct, MainAccomodation, MainProduct, SectionSearch, TextWidth } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import UsenearScrean from "../../Hooks/USenearScreean";
import TitleDinner from "../TitleDinner/TitleDinner";

const CardAccomodation =({img,title,price,cantidad}) =>{

    const {show,element} =  UsenearScrean()
  
    return (   
            <MainAccomodation className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   ref={element}>     
            <MainProduct className="lg:flex block bg-white shadow-md"    >
              
                {show  && (
                        <Fragment>
                            <TitleDinner />
                            <ImginProduct  className="w-auto " src={img}  alt="Hotel Image"/>
                        </Fragment>
                )      
                    }    
                        <DescripctionAccomodation cantidad={cantidad}   title={title}  />
                        <ButtonAccomodation price={price}  />
                    </MainProduct> 
            </MainAccomodation>)
}

export default CardAccomodation
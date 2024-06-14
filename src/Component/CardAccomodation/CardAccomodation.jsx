import React, { Fragment }  from "react";
import {ContainerLabel, ImginProduct, MainAccomodation, MainAccomodationRoom, MainProduct, SectionSearch, TextWidth } from "../../Ui/Style/GeneralStyle";
import ButtonAccomodation from "../ButtonAccomodation/ButtonAccomodation";
import DescripctionAccomodation from "../DescripctionAccomodation/DescripctionAccomodation";
import UsenearScrean from "../../Hooks/USenearScreean";
import TitleDinner from "../TitleDinner/TitleDinner";
import useCartActions from "../../Actions/useCartActions";

const CardAccomodation =({ID,room_image,title,Price,cantidad,nights,person,Room}) =>{

    const {AddCart } =useCartActions()

    const handleAddToCart = () => {
        AddCart({ID,room_image,title,Price,cantidad,nights,person,Room})
    };
    
    return (   
            <MainAccomodationRoom className=" lg:flex    mx-auto   max-w-5xl items-center justify-between p-4 lg:px-8"   >     
            <MainProduct className="lg:flex block bg-white shadow-md"    >
                        <Fragment>
                            <TitleDinner />
                            <ImginProduct  className="w-auto " src={room_image}  alt="Hotel Image"/>
                        </Fragment>
                        <DescripctionAccomodation cantidad={cantidad}   title={title}  />
                        <ButtonAccomodation 
                                handleAddToCart={handleAddToCart}
                                price={Price} 
                                nights={nights}
                                person={person}  />
                    </MainProduct> 
            </MainAccomodationRoom>)
}

export default CardAccomodation
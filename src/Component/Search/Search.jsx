import React from "react";

import { CiCirclePlus } from "react-icons/ci";
import {  StyleGroup, StyleNumberPeople, StyleSpan, StyleTitleHotel, StyledContextTyeHotel, StyledMenuItem, StyledMenuItemButton, StyledMenuItemNumber  } from "../../Ui/Style/GeneralStyle";

const Search =({contextShowMenuPeople,setContextShowMenuPeople}) =>{

    return(<>  {contextShowMenuPeople && 
                
            <StyledContextTyeHotel className="fade-in" valid={true}  top={330} left={100} >
            <StyledMenuItem>
               <StyleTitleHotel>Adultos</StyleTitleHotel>
               <StyleGroup>
               <StyledMenuItemNumber>
                <StyleSpan> <CiCirclePlus color="#3b82f6"  fontSize={50} /> </StyleSpan>
                  <StyleNumberPeople maxlength="2" minLength={2} min="0" defaultValue={0} placeholder="0" />
                  <StyleSpan> <CiCirclePlus color="#3b82f6" fontSize={50} /> </StyleSpan>
                  </StyledMenuItemNumber>
               </StyleGroup>
            </StyledMenuItem>

            <StyledMenuItem>
               <StyleTitleHotel>Niños</StyleTitleHotel>
               <StyleGroup>
               <StyledMenuItemNumber>
                <StyleSpan> <CiCirclePlus color="#3b82f6"  fontSize={50} /> </StyleSpan>
                  <StyleNumberPeople   maxlength="2" minLength={2} min="0" defaultValue={0} placeholder="0" />
                  <StyleSpan> <CiCirclePlus color="#3b82f6" fontSize={50} /> </StyleSpan>
                  </StyledMenuItemNumber>
               </StyleGroup>
            </StyledMenuItem>

            <StyledMenuItemButton>
                <button
                    onClick={() => setContextShowMenuPeople(false)}
                    className=" Button-Search w-[150px] bg-blue-500 text-white py-2  rounded hover:bg-blue-600 transition duration-200">
                    Buscar
                </button>
            </StyledMenuItemButton>   
        </StyledContextTyeHotel>
        }
      </>
    )

}

export default Search
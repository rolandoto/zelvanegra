import React from "react" 
import { ContainerIcons } from "../../Ui/Style/GeneralStyle"
import { IconShower, IconTowels, IconsSnow, IconsTv, IconsWifi } from "../Icons/Icons"

const IconAccomodation =({title}) =>{
    


    return (  <ContainerIcons >
                 {title != "Box Ventilador"  &&   <IconsSnow  />}  
                    <IconsWifi />
                    <IconsTv />
                    <IconShower />
                    <IconTowels />
                </ContainerIcons>)

}

export default IconAccomodation

import { useContext, useState } from "react"

import  AutoProvider  from "../UseContext/UseContext";

const UseCalenderSearch =() =>{

    const { state,
      handleSelect,
      setContextMenuPosition,
      contextMenuPosition,
      handChangeAdults,
      handChangeChildrem,
      handDecreaseAdults,
      handDecreaseChildren,
      totalCountAdults,
      adults,
      childrem} = useContext(AutoProvider)

return {
  state,
  handleSelect,
  setContextMenuPosition,
  contextMenuPosition,
  handChangeAdults,
  handChangeChildrem,
  handDecreaseAdults,
  handDecreaseChildren,
  totalCountAdults,
  adults,
  childrem
}

}

export default UseCalenderSearch
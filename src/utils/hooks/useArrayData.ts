import {useState} from "react"
import type {Optionvalue} from '../types'

export const useArrayData = (elements:string[]) =>{

  const [dropdownValues,setDropdownValues]=useState(elements)

  const handleSelectItem = (item: Optionvalue) => {
    const index = dropdownValues.includes(item.title);
    if (!index) {
      setDropdownValues([...dropdownValues, item.title]);
    }
  };
  const removeItem = (item: string) => {
    const filtered = dropdownValues.filter((data) => data !== item);
    setDropdownValues(filtered);
  };

  return [dropdownValues,setDropdownValues,handleSelectItem,removeItem] as const
}
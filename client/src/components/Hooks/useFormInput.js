import { useState, } from "react";

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

export const useFormCheckbox = () =>{
 
    const [value,setValue] = useState(false)
      return{
       value,
      onChange: (e) => setValue(!setValue)
     }
}
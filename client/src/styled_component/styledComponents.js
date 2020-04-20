import styled, { css } from "styled-components";
import React from 'react'
//Form Input

export const FormInput  = ({required, autofocus, label, type, name, value, placeholder, onChange}) => {
  
  const formInputComponent = () =>{
    if(required && autofocus){
     return (<FormInputComponent class="form-input"
      required
      autofocus
      type={type} 
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      />)
    } else if (required && !autofocus){
      return (<FormInputComponent class="form-input"
        required
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        />)
    } else if(!required && autofocus){
      return (<FormInputComponent class="form-input"
      autofocus
      type={type} 
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      />)
    }else {
      return (<FormInputComponent class="form-input"
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
      />)
    }

  }
  return(
  <>
  <FormLabelComponent class="form-label">{label}</FormLabelComponent>
  {formInputComponent()}
</>
)

}
const FormLabelComponent = styled.span`
    background: none;
    background-color: white;
    color: black;
    font-size: 1.4rem;
    padding: 5px 0px 5px 0px;
    display: block;
    width: 80%;
    border: none;
    margin: 10px auto 10px auto;
`;

const FormInputComponent = styled.input`
    background: none;
    background-color: white;
    color: black;
    font-size: 1.2rem;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 80%;
    ${'' /* border: none; */}
    border: 1px solid grey;
    border-radius: 4px;
    margin: 10px auto 10px auto;
    
`;

export const Form = styled.form`
position: relative;
margin: 2rem 0; 
`;



const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;


const getButtonStyles = (props) => {

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  margin: 5% auto 2% auto;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  ${getButtonStyles}
`;

export const UserContainer  =  styled.div`

  margin: 5vh auto 5vh auto;
  width: 70%;
  border: 1px solid black;
  padding: 10px 30px 10px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
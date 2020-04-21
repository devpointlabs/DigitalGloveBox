import styled, { css } from "styled-components";
import React from 'react'
//Form Input

export const FormInput  = ({required, autofocus, label, type, name, value, placeholder, onChange}) => {
  
  const formInputComponent = () =>{
    if(required && autofocus){
     return (<FormInputComponent 
      required
      autofocus
      type={type} 
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      />)
    } else if (required && !autofocus){
      return (<FormInputComponent 
        required
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        />)
    } else if(!required && autofocus){
      return (<FormInputComponent 
      autofocus
      type={type} 
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange} 
      />)
    }else {
      return (<FormInputComponent 
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


export const DropDown=({placeholder, fluid, search,selection,options,onChange,required})=>{
  const dropDownComponent = () =>{
      return (<DropDownComponent
        placeholder = {placeholder}
        fluid
        search
        selection
        options={options}
        onChange={onChange}
        required>
      { options.map(option =>(
        <option value={option.value}>{option.value}</option>)
         )}
        </DropDownComponent>)
  }
  return (
  <>
  
  {dropDownComponent()}
  </>
  )
}

const DropDownComponent = styled.select`
display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
  
  &:-ms-expand {
    display: none;
  }

  &:hover {
    border-color: #888;
  }
  
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
&:option {
	font-weight:normal;
}

`

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

export const ProfileButton = styled.button`
  height: 50px;
  cursor: pointer;
  background-color: none;
  color: #222233;
  border: none;
`;

export const ProfileContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 70%;
  padding: 20px 30px 20px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`;

export const UserContainer = styled.div`
  background-color: white;
  margin: 5vh auto 5vh auto;
  width: 70%;
  border: 1px solid black;
  padding: 40px 30px 20px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FormContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 70%;
  border: 1px solid black;
  padding: 60px 30px 20px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`;

export const AccountContainer = styled.div`
  margin: 5vh auto 5vh auto;
  width: 50%;
  border: 1px solid black;
  padding: 10px 30px 10px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`;

export const FormCarContainer = styled.div`
  height: 100vh;
  margin: 5vh auto 5vh auto;
  width: 70%;
  border: 1px solid black;
  padding: 10px 30px 10px 30px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


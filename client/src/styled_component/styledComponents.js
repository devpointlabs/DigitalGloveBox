import styled, { css } from "styled-components";
import React from 'react'
//Form Input

export const FormInput  = ({label, type,autoFocus , required, name, value, placeholder, onChange}) => {
  return(
  <label>
  <FormLabelComponent class="form-label">{label}</FormLabelComponent>
  <FormInputComponent class="form-input"
    type={type} 
    {...required}
    {...autoFocus}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange} 
    />
</label>
)

}
const FormLabelComponent = styled.span`
  font-size: 1.6rem;
`;

const FormInputComponent = styled.input`
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 1.6rem;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;
`;

export const Form = styled.form`
position: relative;
margin: 4rem 0; 
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
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
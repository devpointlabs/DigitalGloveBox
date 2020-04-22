import styled from "styled-components";


export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  color: black;t
`;

export const Paragraph = styled.p` 
  font-size: 1em;
`;



export const CarCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 3px white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 60%;
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 3px white;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 35%;
  height: 100%;
`;

export const ImgCar = styled.img`
  width: 100%;
  height: 100%;
  background-color: #C0C0C8;
 
`;

export const Button = styled.button`
  font-size: 1.5em;
  border: solid 2px;
  padding: 0em 0.5em;tt
  border-radius: 5px;
  transition-duration: 0.4s;
  color: white;
  background-color: black;


  &:hover {
    background-color: white;
    color: black;
    border: solid 2px;
    padding: 0em 0.5em;
    border-radius: 5px;
  }
`;
export const ContactLink = styled.link`
display: none;

`
export const ContactButton = styled.button`
  font-size: 1em;
  width: 1005:
  border: solid 2px;
  padding: 0.5em 0.5em;
  border-radius: 5px;
  transition-duration: 0.4s;
  color: white;
  background-color: black;


  &:hover {
    background-color: white;
    color: black;
  }
`;

export const DBackGround = styled.div`
  background-color: black;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftHalf = styled.div`
display: flex;
flex-direction: column;
background-color: #C0C0C8;
flex: 50%;
`

export const RightHalf = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: white;
  flex: 50%;
  
`
export const CarsRow = styled.div`
    display: 'flex', 
    justifyContent: 'tcenter',t
    width: '100%',
    marginBottom: '3em'
`

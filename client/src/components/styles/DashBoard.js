import styled from "styled-components";

export const NavMenu = styled.div`
  background-color: lightblue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2em;
`;

export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0em 1em;
`;

export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const Paragraph = styled.p`
  font-size: 1em;
`;

export const QuakeCard = styled.div`
  border: solid 1px orange;
  border-radius: 4px;
  padding: 1em;
`;

export const CarCard = styled.div`
  border: solid 3px white;
  border-radius: 4px;
  padding: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const ImgCar = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.button`
  font-size: 1em;
  border: solid 2px;
  padding: 0em 0.5em;
  border-radius: 3px;

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

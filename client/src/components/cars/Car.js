import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  leftHalf,
  Title,
  Paragraph,
  CarCard,
  rightHalf,
  ImgCar,
} from "../styles/DashBoard";

const Car = (props) => {
  return (
    <>
      <Link to={{ pathname: `/car_profile/${props.car.id}` }}>
        <CarCard key={props.car.id}>
          <leftHalf>
          <ImgCar src={`${props.car.file}`} />
          </leftHalf>
          <rightHalf>
          <Title>
            {props.car.year} {props.car.make} {props.car.model}
          </Title>
          </rightHalf>
          <Paragraph>{paragraph}</Paragraph>
        </CarCard>
      </Link>
    </>
  );
};

const paragraph =
  "All of your cars documents, information, and recent services in one convenient place!";

export default Car;

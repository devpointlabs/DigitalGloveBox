import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LeftHalf, Title, Paragraph, CarCard, RightHalf, ImgCar, } from "../styles/DashBoard";
import { Button } from '../../styled_component/styledComponents';

const Car = (props) => {

  return (
    <>
      <CarCard key={props.car.id}>
        <LeftHalf>
          <ImgCar src={`${props.car.file}`} />
        </LeftHalf>
        <RightHalf>
        <Link to={{ pathname: `/car_profile/${props.car.id}` }}>
          <Title style={{display: 'flex', justifyContent: 'center'}}>
            {props.car.year} {props.car.make} {props.car.model}
          </Title>
        </Link>
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', textAlign: 'center', paddingLeft: '25%',paddingRight: '25%'}}>
          <Paragraph >{paragraph}</Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to={{ pathname: `/car_profile/${props.car.id}` }}>
            <Button>Car Profile</Button>
          </Link>
        </div>
        </RightHalf>
      </CarCard>
    </>
  );
};

const paragraph =
  "All of your cars documents, information, and recent services in one convenient place";

export default Car;
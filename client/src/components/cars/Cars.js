import React, { useState, useEffect, useContext } from "react";
import { Image, Item } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Car from "./Car";
import {
  RowCenter,
  Title,
  Paragraph,
  CarCard,
  ImgCar,
  CarsRow,
} from "../styles/DashBoard";

import { Button } from '../../styled_component/styledComponents';

const Cars = (props) => {
  const [cars, setCars] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(cars);

  useEffect(() => {
    axios
      .get(`/api/users/${user.id}/cars`)
      .then((res) => {
        setCars(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  const renderCars = () => {
    return cars.map((car) => (
      <div key={`car-${car.id}`} style={styles.carsRow} >
        <Car car={car} />
        <br/>
        <br/>
      </div>
    ));
  };

  return (

    <Item>
      {cars.length === 0 ? (
        <Link to={{ pathname: `/CarApi` }}><Button>Add Your First Car</Button></Link>
      ) : (
        <>
          <Link to={{ pathname: `/CarApi` }}>
            <Button>Add Car</Button>
          </Link>
          <br/>
            <br />
          {renderCars()}{" "}
        </>
      )}
    </Item>
  );
};

export default Cars;

const styles = {
  carsRow: {
  display: 'flex', 
  justifyContent: 'center',
  width: '100%',
  marginBottom: '3em'
}
}



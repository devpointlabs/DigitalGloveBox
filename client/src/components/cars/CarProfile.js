import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthConsumer } from "../../providers/AuthProvider";
import { ProfileButton, ProfileContainer } from '../../styled_component/styledComponents';
import '../styles/CarProfile.css'

import 'semantic-ui-css/semantic.min.css';


const CarProfile = (props) => {

  const [car, setCar] = useState({});
  console.log(props);
  const { id } = props.match.params;
  const user_id = props.auth.user.id;

  useEffect( () => {
    axios.get(`/api/users/${user_id}/cars/${id}`).then(res => {
      (setCar( res.data ))
    }).catch(err => {
      console.log(err)
    })}, [user_id, id])

  const deleteCar = () => {
    axios
      .delete(`/api/users/${user_id}/cars/${id}`)
      .then((res) => props.history.goBack())
      .catch((e) => console.log(e));
  };


  const roadsideAssCheck = () => {
    if (car.roadside_ass === true) {
      return (
        <div>Roadside Assistance{" "}<p><Icon name="check square" /></p></div>
      );
    } else {
      return (
        <div>Roadside Assistance{" "}<p><Icon name="x" /></p></div>
      );
    }
  };

  return (
    <ProfileContainer>
      <h1>Car Profile</h1>
      <hr className="solid"></hr>
      <div style={styles.header}>
        <div style={styles.leftHeader}>
          <h1>{car.year} {car.make} {car.model}</h1>
        </div>
        <div style={styles.rightHeader}>
          <Link to={{ pathname: `/${user_id}/car_profile/${id}/edit`, car: car }}>
            <ProfileButton><Icon name="edit" size='large' /></ProfileButton>
          </Link>
            
        <Link to={{pathname: `/car_profile/${id}/documents`, car: car }}>
          <ProfileButton><Icon name="file alternate outline" size='large' /></ProfileButton>
        </Link>
        <ProfileButton onClick={deleteCar}><Icon name="trash alternate outline" size='large' /></ProfileButton> 
      </div>
    </div>

      <img className="centerImage" src={`${car.file}`} alt="user_car"/>
    
    <table key={car.id}>
      <tr>
        <td>License Plate<p>{car.license_plate}</p></td>
        <td>VIN<p>{car.vin}</p></td>
        <td>Miles<p>{car.miles}</p></td>
      </tr>
      </table>

      <hr className="solid"></hr>

      <table key={car.id}>
      <tr>
        <td>Insurance Provider<p>{car.insurance_provider}</p></td>
        <td>Policy Expiry<p>{car.policy_exp}</p></td>
        <td>Policy Number<p>{car.policy_number}</p></td>
        <td>{roadsideAssCheck()}</td>
        <td>Insurance Provider Number<p>{car.insurance_prov_num}</p></td>
      </tr>
    </table>
    </ProfileContainer>
  );
};

const ConnectedCarProfile = (props) => (
  <AuthConsumer>{(auth) => <CarProfile {...props} auth={auth} />}</AuthConsumer>
);

export default ConnectedCarProfile;

const styles = {
  header: {
    display: 'flex',
    width: 'auto',
    marginBottom: '2em',
    marginTop: '2em',
  },
  rightHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
  },
  leftHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    padding: '.5em .5em',
  },
}
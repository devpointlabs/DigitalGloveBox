import React from 'react'
import { LeftHalf, Title, Paragraph, CarCard, RightHalf, ImgCar, } from "../styles/DashBoard";
import { Link } from "react-router-dom";
import { Button } from '../../styled_component/styledComponents';


 const ContactUs =() => {

return(
  <div >
  <CarCard>
    <LeftHalf>
      <ImgCar src=''/>
    </LeftHalf>
    <RightHalf>
      <Link to ={''}>
        <Title style style={{display: 'flex', justifyContent: 'center'}}>
        Emily
        </Title>
      </Link>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', textAlign: 'center', paddingLeft: '25%',paddingRight: '25%'}}>
          <Paragraph >About Emily</Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to={{ pathname: '' }}>
            <Button>Go to Emily ProfilePage</Button>
          </Link>
        </div>
    </RightHalf>
  </CarCard>
  <br/>
  <CarCard>
    <LeftHalf>
      <ImgCar src=''/>
    </LeftHalf>
    <RightHalf>
      <Link to ={''}>
        <Title style style={{display: 'flex', justifyContent: 'center'}}>
        Seth
        </Title>
      </Link>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', textAlign: 'center', paddingLeft: '25%',paddingRight: '25%'}}>
          <Paragraph >About Seth</Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to={{ pathname: '' }}>
            <Button>Go to Seth ProfilePage</Button>
          </Link>
        </div>
    </RightHalf>
  </CarCard>
  <br/>
  <CarCard>
    <LeftHalf>
      <ImgCar src=''/>
    </LeftHalf>
    <RightHalf>
      <Link to ={''}>
        <Title style style={{display: 'flex', justifyContent: 'center'}}>
        Thomas
        </Title>
      </Link>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', textAlign: 'center', paddingLeft: '25%',paddingRight: '25%'}}>
          <Paragraph >About Thomas</Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to={{ pathname: '' }}>
            <Button>Go to Thomas ProfilePage</Button>
          </Link>
        </div>
    </RightHalf>
  </CarCard>
  <br/>
  <CarCard>
    <LeftHalf>
      <ImgCar src=''/>
    </LeftHalf>
    <RightHalf>
      <Link to ={''}>
        <Title style style={{display: 'flex', justifyContent: 'center'}}>
        Qi
        </Title>
      </Link>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', textAlign: 'center', paddingLeft: '25%',paddingRight: '25%'}}>
          <Paragraph >About Qi</Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to={{ pathname: '' }}>
            <Button>Go to Qi ProfilePage</Button>
          </Link>
        </div>
    </RightHalf>
  </CarCard>
  
  </div>
)


}

export default ContactUs

// const styles = {
//   carsRow: {
  
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: '3em'
// }
// }
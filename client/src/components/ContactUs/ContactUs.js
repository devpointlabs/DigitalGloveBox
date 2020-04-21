import React from "react";
import {
  LeftHalf,
  Title,
  Paragraph,
  CarCard,
  RightHalf,
  ImgCar,
} from "../styles/DashBoard";
import { Link } from "react-router-dom";
import { Button } from "../../styled_component/styledComponents";

const ContactUs = () => {
  return (
    <div style={styles.carsRow}>
      <CarCard>
        <LeftHalf>
          <ImgCar src="" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Emily
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph>About Emily</Paragraph>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={{ pathname: "" }}>
              <Button>Go to Emily ProfilePage</Button>
            </Link>
          </div>
        </RightHalf>
      </CarCard>
      <br />
      <CarCard>
        <LeftHalf>
          <ImgCar src="" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Seth
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph>
             about Seth
            </Paragraph>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={{ pathname: "" }}>
              <Button>Go to Seth ProfilePage</Button>
            </Link>
          </div>
        </RightHalf>
      </CarCard>
      <br />
      <CarCard>
        <LeftHalf>
          <ImgCar src="" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Thomas
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph>About Thomas</Paragraph>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={{ pathname: "" }}>
              <Button>Go to Thomas ProfilePage</Button>
            </Link>
          </div>
        </RightHalf>
      </CarCard>
      <br />
      <CarCard>
        <LeftHalf>
          <ImgCar src="https://res.cloudinary.com/dvnkqa41b/image/upload/v1587508561/Qi_l7ps73.jpg" />
        </LeftHalf>
        <RightHalf>
          <Link to={""}>
            <Title style style={{ display: "flex", justifyContent: "center" }}>
              Qi
            </Title>
          </Link>
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "25%",
              paddingRight: "25%",
            }}
          >
            <Paragraph> I’ve always loved to build things. Still do. To me, building
              violins and building software are really the same </Paragraph>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={{ pathname: "" }}>
              <Button>Go to Qi ProfilePage</Button>
            </Link>
          </div>
        </RightHalf>
      </CarCard>
    </div>
  );
};

export default ContactUs;

const styles = {
  carsRow: {
    display: "table",
    justifyContent: "center",
    width: "100%",
    marginBottom: "3em",
  },
};

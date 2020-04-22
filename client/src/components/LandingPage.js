import React from "react";

const LandingPage = () => {
  return (
    <div style={styles}>
      <div style={styles2}>
        <h1 style={{ fontSize: "64px" }}> Digital Glove Box</h1>
        <h3 style={{ wordWrap: "break-word" }}>
          Never look for your insurance card, service records or any document in
          your glovebox again.
        </h3>
        <br />
      </div>
    </div>
  );
};

export default LandingPage;

const styles = {
  color: "white",
  backgroundImage: 'url("../Dispatch.jpg")',
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textAlign: "center",
};

const styles2 = {
  padding: "2.5em",
  display: "inline-block",
  margin: "13% 5% 0 5%",
  zIndex: "1",
  background: "rgba(255,255,255, 0.1)",
  color: "white",
  borderRadius: "3px",
};

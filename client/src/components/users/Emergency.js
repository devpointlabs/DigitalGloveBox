import React from 'react';
import { EmergencyStyles } from '../../styles/EmergencyStyles';

const Emergency = () => (
  <EmergencyStyles>
    <h1>Emergency Information</h1>
    <h4>Question: I’m in an accident. What should I do?</h4>
      <p>STEP 1: Stop. If your vehicle is involved in an accident and you don’t stop, you may be subject to criminal prosecution.</p>
      <p>STEP 2: If it is safe to do so, get out of your car. If you have access to a digital camera or a cell phone, you should use it to take pictures of the scene.</p>
    <h4>REMEMBER</h4>
    <div style={{textAlign:'left'}}>
      <ul>
        <li>As difficult as it may seem, it is important that you remain calm.</li>
        <li>Do not argue with other drivers and passengers. Save your story for the police.</li>
        <li>Do not voluntarily assume liability or take responsibility, sign statements regarding fault, or promise to pay for damage at the scene of the accident.</li>
        <li>Be watchful for unauthorized tow truck operators.</li>
      </ul>
    </div>
    <h4>Question: Do I need to call the police?</h4>
      <p>Call the police if collisions meet at least one of the following criteria:</p>
    <div style={{textAlign:'left'}}>
      <ul>
        <li><b>SERIOUS INJURY or DEATH</b></li>
          <p>--Someone has been injured and taken to hospital (usually via ambulance), or someone has died. Minor injuries (cuts, scrapes, bruises, etc), or tissue damage (whiplash, etc), are not serious injuries in the purview of police response. We encourage people to get medical treatment at a later time.</p>
        <li><b>CRIME</b></li>
          <p>--A Criminal offence has been committed. Impaired Driving, Dangerous Driving, Criminal Negligence, Police Pursuit, etc, are all Criminal offences. Speeding, failing to stop for a red light, and following too close are not Criminal offences</p>
        <li><b>PUBLIC SAFETY</b></li>
          <p>--If your vehicle is not moveable, is blocking a major roadway, and the police are needed to direct traffic so that a second collision does not occur, police should be called. A collision in a parking lot or on a residential street does not meet this criteria. A collision on a busy road, at the crest of a hill, or around a blind curve are collisions that the police should attend to make sure that a second collision does not occur.</p>
      </ul>
    </div>
    <h4>Question: Are you blocking traffic?</h4>
      <p>When it is safe, move your vehicle to the side of the road out of traffic. If your vehicle cannot be driven, turn on your hazard lights or use cones, warning triangles or flares, as appropriate.</p>
    <h4>Question: What information do I need to get from the other driver?</h4>
      <p>Record the following information; you may also use your cell phone to audio record as much information as possible.</p>
      
      <div style={styles.row}>
        <div style={styles.column}>
          <h4>General Information</h4>
          <ul>
            <li>Date / Time</li>
            <li>Location</li>
            <li>Weather Conditions</li>
            <li>Road Conditions</li>
            <li>Estimated speed of vehicles</li>
            <li>Description of Accident</li>
            <li>Diagram of Accident</li>
            <li>Witness Information</li>
            <li>Police Officer Info</li>
            <li>Tow Truck Info</li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4>Other Driver's Information</h4>
          <ul>
            <li>Name</li>
            <li>Address</li>
            <li>Phone</li>
            <li>Licence Plate</li>
            <li>Driver's Licence No.</li>
            <li>Vehicle Make, Model, and Color</li>
            <li>VIN No.</li>
            <li>Registered Owner of Vehicle</li>
            <li>Insurance Co. Name, Policy No., Expiry Date</li>
            <li>Damage to Vehicle</li>
          </ul>
        </div>
      </div>
  </EmergencyStyles>
)

export default Emergency


const styles = {
  
  row:{
    display: 'flex',
    textAlign: 'left'
  },

  column: {
    flex: '50%',
    padding: '10px',
  }
}
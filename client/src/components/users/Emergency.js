import React from 'react';
import { EmergencyStyles } from '../../styles/EmergencyStyles';

const Emergency = () => (
  <div style={styles.container}>
    <EmergencyStyles>
      <h1>Emergency Information</h1>
      <h4>Question: I’m in an accident. What should I do?</h4>
        <p><b>STEP 1</b>: Stop your vehicle. If your vehicle is involved in an accident and you don’t stop, you may be subject to criminal prosecution.</p>
        <p><b>STEP 2</b>: If it is safe to do so, get out of your car. If you have access to a digital camera or a cell phone, you should use it to take pictures of the scene.</p>
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
      <h4>Question: Is this damage covered under insurance?</h4>
        <p>Call your insurance company as soon as possible after the accident. Inform them what happened and ask for next steps.</p>
      <h4>Question: How can I be prepared for any emergency on the road?</h4>
        <p>Always keep a basic vehicle first aid or emergency kit in the trunk of your vehicle. You can easily create an emergency kit for your vehicle by filling a plastic storage container with the following items: </p>
        <div style={styles.row}>
          <div style={styles.column}>
            <ul>
              <li>pen and paper</li>
              <li>a basic first aid kid</li>
              <li>a disposable camera</li>
              <li>emergency flares, warning triangles, or cones</li>
              <li>a fire extinguisher</li>
              <li>a flashlight and extra batteries</li>
              <li>bottled water</li>
            </ul>
          </div>
          <div style={styles.column}>
            <ul>
              <li>jumper cables</li>
              <li>a tire repair kit and pump</li>
              <li>a small toolkit</li>
              <li>a towel</li>
              <li>a pair of work gloves</li>
              <li>some non-perishable food</li>
              <li>hand wipes</li>
              <li>a thermal blanket</li>
            </ul>
          </div>
        </div>
    </EmergencyStyles>
  </div>
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
  },
  container: {
    padding: '5em 10% 6em',
    height: '100%',
    position: 'relative',
    minHeight: '100%',
    overflow: 'auto',
  },
}
import React from 'react'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'


const DocumentsShow = (props) => {

  const { docs } = props
  const { car_id } = props

  const deleteDoc = (id) => {
    console.log(id)
    axios
      .delete(`/api/cars/${car_id}/documents/${id}`)
      .then((res) => window.location.reload(false))
      .catch((e) => console.log(e));
  };

  
  if (docs.length === 0 || !docs){
    return(
      <p>You currently have no documents available</p>
    )} else {
      return docs.map( doc => (
      <>
        <div style={styles.text}>
          <span onClick = { ()=> {deleteDoc(doc.id)}} ><Icon name="trash alternate outline" style={styles.btn}/></span>
            <a as='a' href={doc.file} target="_blank"><Icon name="file"/>{doc.name}</a>        
        </div>
      </>
      )
    )
  }
}

export default DocumentsShow;

const styles = {
  text: {
    fontSize: '15px',
    padding: '.5em',
    cursor: 'pointer',
  },
  btn: {
    color: '#161629'
  }
}
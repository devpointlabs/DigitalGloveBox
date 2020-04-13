import React from 'react'
import { List } from 'semantic-ui-react'

const DocumentsShow = (props) => {

  const {docs} = props
  
  if (docs.length === 0 || !docs){
    return(
      <p>You currently have no documents available</p>
    )} else {
      return docs.map( doc => (
        <List divided relaxed key={`doc-${doc.id}`}>
        <List.Item >
          <List.Icon name='file' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' href={doc.file} target="_blank">{doc.name}</List.Header>
          </List.Content>
        </List.Item>
      </List>
      )
    )
  }
}

export default DocumentsShow;
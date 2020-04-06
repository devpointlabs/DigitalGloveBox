import React from 'react'
import { Menu } from 'semantic-ui-react'

export default class DocumentNavbar extends React.Component {
  
  state = { activeItem: 'INSURANCE' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='INSURANCE'
            active={activeItem === 'insurance'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='REGISTRATION'
            active={activeItem === 'registration'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='SERVICE RECORDS'
            active={activeItem === 'service records'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='OTHER'
            active={activeItem === 'other'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
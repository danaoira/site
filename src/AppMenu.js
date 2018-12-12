import React, { Component } from 'react'
import { links } from './utils'
import { Menu, Title, Subtitle, List, Link } from './style'

const ListItem = (props) => (
  <li><Link {...props}>{props.children}</Link></li>
)

class AppMenu extends Component {
  render() {
    const { handlePageSelect } = this.props

    return (
      <Menu>
        <Title>Dana Oira</Title>
        <Subtitle>Data Visualization<br />Software Engineer</Subtitle>
        <List>
          <ListItem onClick={() => handlePageSelect('about')}>About</ListItem>
          <ListItem onClick={() => handlePageSelect('portfolio')}>Portfolio</ListItem>
          <ListItem href={links.linkedin}><i className="fab fa-linkedin"></i></ListItem>
          <ListItem href={links.github}><i className="fab fa-github"></i></ListItem>
          <ListItem href={'mailto:danaoira@live.com'}><i className="far fa-envelope"></i></ListItem>
        </List>
      </Menu>
    )
  }
}

export default AppMenu

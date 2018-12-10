import React, { Component } from 'react'
import { links } from './utils'
import { Menu, Title, Subtitle, List, Link } from './style'

const ListItem = ({ text, url, last }) => (
  <li><Link href={url}>{text}</Link> {!last && ' '}&nbsp; </li>
)

class AppMenu extends Component {
  render() {
    return (
      <Menu>
        <Title>Dana Oira</Title>
        <Subtitle>Data Visualization<br />Software Engineer</Subtitle>
        <List>
          <Link>Brand</Link>
          <ListItem text={'About'} />
          <ListItem text={'Portfolio'} />
          <ListItem text={'LinkedIn'} url={links.linkedin} />
          <ListItem text={'GitHub'} url={links.github} />
          <ListItem text={'Email'} url={'mailto:danaoira@live.com'} />
        </List>
      </Menu>
    )
  }
}

export default AppMenu

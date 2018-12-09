import React, { Component } from 'react'
import { links } from './utils'
import { 
  Wrapper,
  Title,
  Subtitle,
  List,
  Link
} from './style'

const ListItem = ({ text, url, last }) => (
  <li><Link href={url}>{text}</Link> {!last && ' '}&nbsp; </li>
)

class AppMenu extends Component {
  render() {
    return (
      <div className="AppMenu">
        <header className="AppMenu-header">
          <Wrapper>
            <Title>Dana Oira</Title>
            <Subtitle>Data Visualization<br />Software Engineer</Subtitle>
            <List>
              <ListItem text={'About'} />
              <ListItem text={'Portfolio'} />
              <ListItem text={'LinkedIn'} url={links.linkedin} />
              <ListItem text={'GitHub'} url={links.github} />
              <ListItem text={'Email'} url={'mailto:danaoira@live.com'} />
            </List>
          </Wrapper>
        </header>
      </div>
    )
  }
}

export default AppMenu

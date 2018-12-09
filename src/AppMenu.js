import React, { Component } from 'react'
import styled from 'styled-components'
import { links, theme } from './utils'

const Wrapper = styled.div``

const Title = styled.h1`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  font-size: 3em;
  line-height: 1em;
  text-decoration: none;
`

const Subtitle = styled.h2`
  font-family: ${theme.type.default.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  font-size: 1.5em;
  color: ${theme.color.black};
  text-decoration: none;
  letter-spacing: 1px;
`

const List = styled.ul`
  line-height: 1.5em;
  list-style: none;
  list-style-position: outside;
  padding: 0;
`

const Link = styled.a`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-size: 1em;
  text-decoration: none;

  :link {
    cursor: url(http://static.tumblr.com/xjqjg7j/XJOlou09h/blackcursor.png),
    url(http://static.tumblr.com/xjqjg7j/XJOlou09h/blackcursor.png), auto;
  }

  :hover {
    color: ${theme.color.black};
    background: ${theme.color.pink};
  }
`

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

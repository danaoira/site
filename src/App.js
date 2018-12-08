import React, { Component } from 'react'
import styled from 'styled-components'
import { links, theme } from './utils'

const Wrapper = styled.div`
  padding: 1em 4em;
`

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

const Menu = styled.div`
  line-height: 3em;
`

const Link = styled.a`
  color: ${theme.color.black};
  font-family: ${theme.type.default.fontFamily};
  font-size: 1em;
  text-decoration: none;
  border-bottom: solid 1px ${theme.color.pink};

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
  <span><Link href={url}>{text}</Link> {!last && '.'} </span>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wrapper>
            <Title>Dana Oira</Title>
            <Subtitle>Data Visualization<br />Software Engineer</Subtitle>
            <Menu>
              <ListItem text={'Portfolio'} url={''} />
              <ListItem text={'LinkedIn'} url={links.linkedin} />
              <ListItem text={'GitHub'} url={links.github} last />
            </Menu>
          </Wrapper>
        </header>
      </div>
    )
  }
}

export default App

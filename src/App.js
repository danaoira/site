import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from './utils'

const Wrapper = styled.div``

const Title = styled.h1`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  font-style: italic;x
  font-size: 3em;
  line-height: 1em;
  margin-top: 1.3em;
  text-decoration: none;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Wrapper>
            <Title>Hello world! Welcome to my little space on the internet.</Title>
          </Wrapper>
        </header>
      </div>
    )
  }
}

export default App

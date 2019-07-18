import React, { Component } from 'react'
import styled from 'styled-components'
import { Brand } from '../Brand'
import { Portfolio } from '../Portfolio'
import { About } from '../About'
import container from './container'

const Main = styled.div`
  overflow-y: scroll;

  @media (min-width: 800px) {
    padding-right: 5vw;
  }
`

class AppMain extends Component {
  render() {
    const { page, handlePageSelect } = this.props

    return (
      <Main>
        {(page === 'brand') && <Brand />}
        {(page === 'portfolio') && <Portfolio callback={handlePageSelect} />}
        {(page === 'about') && <About />}
      </Main>
    )
  }
}

export default container(AppMain)

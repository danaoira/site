import React, { Component } from 'react'
import { Brand } from './components/pages/Brand'
import { Portfolio } from './components/pages/Portfolio'
import { About } from './components/pages/About'

class AppMain extends Component {
  render() {
    const { page } = this.props

    return (
      <div>
        {(page === 'brand') && <Brand />}
        {(page === 'portfolio') && <Portfolio />}
        {(page === 'about') && <About />}
      </div>
    )
  }
}

export default AppMain

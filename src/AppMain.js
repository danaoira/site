import React, { Component } from 'react'
import { Brand } from './components/pages/Brand'
import { Portfolio } from './components/pages/Portfolio'

class AppMain extends Component {
  render() {
    const { page, handlePageSelect } = this.props

    return (
      (page === 'brand') && <Brand /> ||
      (page === 'portfolio') && <Portfolio />
    )
  }
}

export default AppMain

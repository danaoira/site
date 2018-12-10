import React, { Component } from 'react'
import { Brand } from './components/pages/Brand'

class AppMain extends Component {
  render() {
    const { page, handlePageSelect } = this.props

    console.log(page)

    return (
      (page === 'brand') && <Brand />
    )
  }
}

export default AppMain

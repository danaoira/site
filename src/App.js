import React, { Component } from 'react'
import { AppWrapper, Title, Subtitle, Paragraph } from './style'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Title>Style Guide</Title>
        <section>
          <Subtitle>Typography</Subtitle>
          <Paragraph>
            <div>Noto Serif TC</div>
            <div>Raleway</div>
          </Paragraph>
        </section>

        <section>
          <Subtitle>Colors</Subtitle>
          <Paragraph>
            <div>Pink</div>
            <div>Gray</div>
            <div>Black</div>
            <div>White</div>
            <div>Yellow</div>
          </Paragraph>
        </section>
        </AppWrapper>
    )
  }
}

export default App

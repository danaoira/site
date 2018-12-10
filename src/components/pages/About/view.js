import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from '../../../utils'

const Grid2Col = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin-top: 92px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
  }
`

const Section = styled.section`
  background-color: ${theme.color.pink};
  height: 24vh;

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

class About extends Component {
  render() {
    return (
      <Grid2Col>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </Grid2Col>
    )
  }
}

export default About
import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from './utils'
import { Subtitle, Paragraph } from './style'

const Grid2Col = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin-top: 92px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
  }
`

const GridHeader = styled.div`
  grid-column: span 2;
`

const AccentFont = styled.span`
  font-family: ${theme.type.accent.fontFamily};
  font-size: 2.4em;
  display: block;
`
const DefaultFont = styled.span`
  font-family: ${theme.type.default.fontFamily};
  font-size: 2.4em;
  display: block;
`

const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  grid-auto-flow: row;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 1em;
  }
`

const Section = styled.section`
  // background-color: ${theme.color.pink};
  min-height: 50vh;

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Color = ({ name, color, hex }) => (
  <div width={'100%'} height={'5em'}>
    <div style={{ width: '100%', height: '5em', backgroundColor: `${color}`, border: 'solid 1px #fff' }}></div>
    <div style={{ textAlign: 'center', width: '100%', fontFamily: `${theme.type.accent.fontFamily}` }}>
      <div>{name}</div>
      <div>{hex}</div>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <Grid2Col>
        {/* <GridHeader /> */}
        <Section>
          <Subtitle>Typography</Subtitle>
          <Paragraph>
            <AccentFont>Noto Serif TC</AccentFont>
            <div>Default Font</div>
          </Paragraph>
          <Paragraph>
            <DefaultFont>Raleway</DefaultFont>
            <div>Accent Font</div>
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Colors</Subtitle>
          <ColorGrid>
            <Color name={'Pink'} color={theme.color.pink} hex={'#eedede'} />
            <Color name={'Gray'} color={theme.color.gray} hex={'#cccbc9'} />
            <Color name={'Black'} color={theme.color.black} hex={'#343434'} />
            {/* <Color name={'White'} color={theme.color.white} hex={'#eedede'} /> */}
            {/* <Color name={'Yellow'} color={theme.color.yellow} hex={'#eedede'} /> */}
          </ColorGrid>
        </Section>
      </Grid2Col>
    )
  }
}

export default App

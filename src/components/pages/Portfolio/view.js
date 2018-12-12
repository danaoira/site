import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from '../../../utils'

const Grid3Col = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
    margin: 92px 0;
  }
`

const Tile = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  background: ${theme.color.pink};
  color: ${props => props.wip ? theme.color.white : theme.color.black};
  font-weight: ${theme.type.fontWeight.normal};
  border: solid 1px ${theme.color.pink};
  font-size: 2em;
  height: 36vh;
  display: table;
  text-decoration: none;
  width: 100%;
  background: ${props => props.image ? `url(${require('../../../images/' + props.image)})` : null};

  :hover {
    cursor: ${props => props.wip ? 'not-allowed' : 'pointer'};
  }

  > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
  }

  > img {
    height: 200px;
  }

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Title = styled.div`
  font-size: 1em;
  line-height: 1.6em;
  display: block;
`

const Subtitle = styled.div`
  font-size: 0.6em;
  font-style: italic;
  display: block;
`

class About extends Component {
  render() {
    const { callback } = this.props

    return (
      <Grid3Col>
        <Tile wip>
          <div>
            <Title>BART Ridership</Title>
            <Subtitle>coming soon</Subtitle>
          </div>
        </Tile>
        <Tile wip>
          <div>
            <Title>Chart Selection</Title>
            <Subtitle>coming soon</Subtitle>
          </div>
        </Tile>
        <Tile onClick={() => callback('brand')}>
          <div>Brand</div>
        </Tile>
        <a href={'http://bl.ocks.org/danaoira/6b271c84d8a22789b6145ff1e82d8eb4'}>
          <Tile image={'exoplanets.png'} style={{ backgroundPosition: '30% 75%', backgroundSize: '200%' }} />
        </a>
        <a href={'https://bl.ocks.org/danaoira/7e2ffa935c8da4f97681f376f34ae5a5'}>
          <Tile image={'nations.png'} style={{ backgroundPosition: '87% bottom', backgroundSize: 'cover' }} />
        </a>
        <a href={'http://github.com/danaoira/cgv'}>
          <Tile image={'curriculum-graph-visualizer.png'} style={{ backgroundPosition: 'left bottom', backgroundSize: '200%' }} />
        </a>
      </Grid3Col>
    )
  }
}

export default About
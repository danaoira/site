import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { theme } from '../../../utils'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
    row-gap: 2em;
    margin: 28px 0;
  }
`

const Tile = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  background: ${theme.color.pink};
  color: ${props => props.wip ? theme.color.white : theme.color.black};
  font-weight: ${theme.type.fontWeight.normal};
  border: solid 1px ${theme.color.pink};
  background: ${props => props.image ? `url(${require('../../../images/' + props.image)})` : null};
  height: 36vh;
  display: table;
  width: 100%;

  :hover {
    cursor: ${props => props.wip ? 'not-allowed' : 'pointer'};
  }

  > div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  > img {
    height: 200px;
  }

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Title = styled.div`
  font-size: 2em;
  line-height: 1.8em;
  display: block;
`

const Subtitle = styled.div`
  font-size: 1.2em;
  font-style: italic;
  line-height: 1.8em;
  display: block;
`

const Detail = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.color.pink};
  opacity: 0;
  transition: opacity 0.7s ease-in-out;

  :hover {
    opacity: 1;
    text-decoration: none;
  }
`

const Link = styled.a`
  text-decoration: none;
`

class About extends Component {
  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this)

    elem.style.opacity = 0
    window.requestAnimationFrame(function() {
      elem.style.transition = "opacity 1200ms"
      elem.style.opacity = 1
    })
  }
  
  render() {
    const { callback } = this.props

    return (
      <Grid>
        <Tile wip>
          <div>
            <Title>BART Ridership</Title>
            <Subtitle>daily station-to-station ridership map</Subtitle>
            <Subtitle>coming soon</Subtitle>
          </div>
        </Tile>
        <Tile wip>
          <div>
            <Title>Chart Selection</Title>
            <Subtitle>interactive graph selection flow chart</Subtitle>
            <Subtitle>coming soon</Subtitle>
          </div>
        </Tile>
        {/* <Tile onClick={() => callback('brand')}>
          <Title>Brand</Title>
        </Tile> */}
        <Link href={'http://bl.ocks.org/danaoira/6b271c84d8a22789b6145ff1e82d8eb4'}>
          <Tile image={'exoplanets.png'} style={{ backgroundPosition: '30% 75%', backgroundSize: '200%' }}>
            <Detail>
              <Title>Exoplanets</Title>
              <Subtitle>D3.js</Subtitle>
            </Detail>
          </Tile>
        </Link>
        <Link href={'https://bl.ocks.org/danaoira/7e2ffa935c8da4f97681f376f34ae5a5'}>
          <Tile image={'nations.png'} style={{ backgroundPosition: '87% bottom', backgroundSize: 'cover' }}>
            <Detail>
              <Title>Health & Wealth of Nations</Title>
              <Subtitle>D3.js</Subtitle>
            </Detail>
          </Tile>
        </Link>
        <Link href={'http://github.com/danaoira/cgv'}>
          <Tile image={'curriculum-graph-visualizer.png'} style={{ backgroundPosition: 'left bottom', backgroundSize: '200%' }}>
            <Detail>
              <Title>Curriculum Graph Visualizer</Title>
              <Subtitle>Python, GraphViz, DOTS</Subtitle>
            </Detail>
          </Tile>
        </Link>
      </Grid>
    )
  }
}

export default About
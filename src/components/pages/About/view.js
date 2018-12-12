import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { theme, links } from '../../../utils'

const Grid2Col = styled.div`
  font-family: ${theme.type.accent.fontFamily};
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  padding: 1em;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2em;
    row-gap: 2em;
    padding: 92px 0;
  }
`

const Section = styled.section`
  height: auto;

  @media (min-width: 1024px) {
    min-height: initial;
  }
`

const Title = styled.div`
  font-size: 1.8em;
  line-height: 2.4em;
  display: block;
`

const Subtitle = styled.div`
  font-size: 1.2em;
  font-style: italic;
  display: block;
`

const Paragraph = styled.div``

const List = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  line-height: 1.6em;
`

const lists = {
  current: [
    {
      link: links.noodle,
      role: 'UI Engineer',
      org: 'Noodle.ai',
      desc: `(we're hiring!)`
    }
  ],
  former: [
    {
      link: links.wd,
      role: 'Engineer Intern',
      org: 'Western Digital'
    },
    {
      link: links.codazen,
      role: 'Web Developer',
      org: 'Codazen'
    },
    {
      link: links.csuf,
      role: 'Grad Student',
      org: 'CSUF Computer Science'
    },
    {
      link: links.uci,
      role: 'Undergrad',
      org: 'UCI Public Health'
    }
  ],
  associations: [
    {
      link: links.acm,
      org: 'Association for Computing Machinery' 
    },
    {
      link: links.wibd,
      org: 'Women in Big Data'
    },
    {
      link: links.sfcma,
      org: 'San Francisco Civic Music Association'
    }
  ]
}

const Link = styled.a`
  color: ${theme.color.black};
  //background: ${theme.color.pink};
  text-decoration: none;
  border-bottom: solid 2px ${theme.color.pink};
  transition: border-bottom 0.5s ease-in-out;

  :hover {
    background: ${theme.color.white};
    border-bottom: solid 2px ${theme.color.white};
  }
`

const SideNote = styled.span`
  color: ${theme.color.black};
  font-style: italic;
  font-size: 0.8em;
`

const LinkSection = ({ data, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {data.map(d => {
          console.log(d)
          return (
            <ListItem>{d.role ? `${d.role} at ` : null}<Link href={d.link}>{d.org}</Link> {d.desc ? (<SideNote>~we're hiring!</SideNote>) : null}</ListItem>
          )
        })}
      </List>
    </Section>
  )
}

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
    return (
      <Grid2Col>
        {/* <Section>
          <Title>About</Title>
          <Paragraph>I like to make connections out of arbitrary things.</Paragraph>
        </Section> */}
        <LinkSection data={lists.current} title={'Current'} />
        <LinkSection data={lists.former} title={'Former'} />
        <LinkSection data={lists.associations} title={'Associations'} />
        {/* <Section>
          <Title>Currently</Title>
          <List>
            <ListItem>UI Engineer at Noodle.ai</ListItem>
          </List>
        </Section>
        <Section>
          <Title>Formerly</Title>
          <List>
            <ListItem><a href={links.wd}>Engineer Intern at Western Digital</a></ListItem>
            <ListItem>Web Developer at Codazen</ListItem>
            <ListItem>Grad Student at CSUF Computer Science</ListItem>
            <ListItem>Undergrad at UCI Public Health</ListItem>
          </List>
        </Section>
        <Section>
          <Title>Associations</Title>
          <List>
            <ListItem>Association for Computing Machinery (ACM)</ListItem>
            <ListItem>Women in Big Data (WiBD)</ListItem>
            <ListItem>San Francisco Civic Music Association</ListItem>
          </List>
        </Section> */}
      </Grid2Col>
    )
  }
}

export default About
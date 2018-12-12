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

  > .about {
    grid-area: about;
    grid-row: 1 / span 4;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas: 'about current'
                         'about former'
                         'about associations';
    grid-auto-columns: 1fr;
    column-gap: 3em;
    row-gap: 2em;
    padding: 28px 0;
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

const Paragraph = styled.div`
  line-height: 1.6em;
  margin-bottom: 1em;
`

const List = styled.ul`
  list-style-type: none;
`

const ListItem = styled.li`
  line-height: 1.6em;
`

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
        {data.map(d => (
          <ListItem>{d.role ? `${d.role} at ` : null}<Link href={d.link}>{d.org}</Link> {d.desc ? (<SideNote>{d.desc}</SideNote>) : null}</ListItem>
        ))}
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
        <Section className={'about'}>
          <Title>Hello, my name is Dana.</Title>
          <Paragraph>I like to say that I grew up with the Internet.</Paragraph>
          <Paragraph>I started creating websites in 1999 in grade school. Those were the days of dial-up, <Link href={links.dhtml}>DHTML</Link> and life before social networks existed - it was a magical, unexplored frontier.</Paragraph>
          <Paragraph>While discovering my career path, I studied Public Health where I used <Link href={links.r}>R</Link> to visualize <Link href={links.epidemiology}>epidemiology</Link> and statistics. I took <Link href={links.hci}>Human Computer Interaction</Link> on a whim and realized my love for creating on the internet was still there.</Paragraph>
          <Paragraph>I was later accepted to a computer science graduate program where I enjoyed studying <Link href={links.graphtheory}>graph theory</Link>, <Link href={links.computation}>theory of computation</Link> and advanced software processes.</Paragraph>
          <Paragraph>In the programs I enjoyed the most, I realized creating data visualizations was the common denominator.</Paragraph>
          <Paragraph>Today, I am a UI Engineer based in San Francisco where I enjoy the challenge of taking arbitrary ideas and transforming them into beautiful and functional data visualizations.</Paragraph>
        </Section>
        <LinkSection data={links.lists.current} title={'Current'} />
        <LinkSection data={links.lists.former} title={'Former'} />
        <LinkSection data={links.lists.associations} title={'Associations'} />
        <Section><img src={require('../../../images/danaoira.jpg')} style={{ width: 120, borderRadius: '50%', marginTop: '.4em' }}></img></Section>
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
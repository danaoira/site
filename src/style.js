import styled from 'styled-components'
import { theme } from './utils'

const Wrapper = styled.div``

const AppWrapper = styled.div`
  min-height: 100vh;
`

const Menu = styled.div`
  position: fixed;
  z-index: 100;
  left: 3em;
  background-color: #fff;
  min-height: 100vh;
`

const Title = styled.h1`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  font-size: 3em;
  line-height: 1em;
  text-decoration: none;
`

const Subtitle = styled.h2`
  color: ${theme.color.black};
  font-family: ${theme.type.default.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  font-size: 1.5em;
  text-decoration: none;
  letter-spacing: 1px;
`

const List = styled.ul`
  line-height: 1.5em;
  list-style: none;
  list-style-position: outside;
  padding: 0;
`

const Link = styled.a`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-size: 1em;
  text-decoration: none;

  :link {
    cursor: url(http://static.tumblr.com/xjqjg7j/XJOlou09h/blackcursor.png),
    url(http://static.tumblr.com/xjqjg7j/XJOlou09h/blackcursor.png), auto;
  }

  :hover {
    color: ${theme.color.black};
    background: ${theme.color.pink};
  }
`

const Paragraph = styled.div`
  color: ${theme.color.black};
  font-family: ${theme.type.accent.fontFamily};
  font-weight: ${theme.type.fontWeight.extraLight};
  margin-top: 1.6em;
`

export {
  Wrapper,
  AppWrapper,
  Menu,
  Title,
  Subtitle,
  List,
  Link,
  Paragraph
}
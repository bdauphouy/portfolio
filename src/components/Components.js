import styled from 'styled-components'

const Title = styled.h2`
  font-size: ${props => props.size};
  color: ${props => props.color};
  line-height: ${props => props.size};
`

const Paragraph = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
  line-height: ${props => `calc(${1.5 * parseFloat(props.size)}px)`};
`

const Link = styled.a`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 600;
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 3px;
    background: ${props => props.color};
    top: 50%;
    left: -20px;
    transform: translate(-50%, -50%);
    transition: left 0.4s;
  }

  &:hover::before {
    left: calc(100% + 20px);
  }
`

const Stroked = styled.span`
  -webkit-text-stroke: ${props => `2px ${props.color}`};
  font-size: ${props => props.size};
  color: transparent;
`

const Container = styled.section`
  padding: 100px ${props => props.padding};
  display: flex;
  min-height: 100vh;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export { Title, Paragraph, Link, Stroked, Container, Column, Row }

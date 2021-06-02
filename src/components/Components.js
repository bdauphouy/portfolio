import styled from 'styled-components'

const Title = styled.h2`
  font-size: ${props => props.size};
  -webkit-text-stroke: ${props => props.stroked && `1px ${props.color}`};
  color: ${props => (props.stroked ? 'transparent' : props.color)};
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
  -webkit-text-stroke: ${props => `1px ${props.color}`};
  font-size: ${props => props.size};
  color: transparent;
`

const Container = styled.section`
  padding: ${props => props.padding};
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

export { Title, Paragraph, Link, Stroked, Container, Column, Row }

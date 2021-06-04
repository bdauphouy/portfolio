import { Title, Container, Column } from '../components/Components'
import styled from 'styled-components'

const PageNotFound = ({ styles }) => {
  return (
    <>
      <Container
        id="home"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{ alignItems: 'center', minHeight: '100vh' }}>
        <Column>
          <Title
            className="appearLeft"
            size={styles.titles.t2}
            color={styles.colors.text}>
            Page not found
          </Title>
          <a
            href="/"
            style={{ textDecoration: 'none', display: 'inline-block' }}>
            <NavItem size={styles.titles.t2} color={styles.colors.text} stroked>
              Go back to home
            </NavItem>
          </a>
        </Column>
      </Container>
    </>
  )
}

const NavItem = styled.h2`
  font-size: ${props => props.size};
  -webkit-text-stroke: ${props => props.stroked && `1px ${props.color}`};
  color: ${props => (props.stroked ? 'transparent' : props.color)};
  line-height: ${props => props.size};
  transition: color 0.4s;
  margin-top: 20px;

  &:hover {
    color: ${props => props.color};
  }
`

export default PageNotFound

import { Title, Container, Column } from '../components/Components'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFound = ({ styles, palette }) => {
  return (
    <>
      <Container
        id="pagenotfound"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{ alignItems: 'center', minHeight: 'calc(100vh - 100px)' }}>
        <Column>
          <Title
            className="appearLeft"
            size={styles.titles.t2}
            color={styles.colors.text}>
            Sorry, this page doesn't exist.
          </Title>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Link size={styles.links.l1} color={palette.greens.g5}>
              Go to the homepage
            </Link>
          </NavLink>
        </Column>
      </Container>
    </>
  )
}

const Link = styled.span`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 600;
  text-decoration: none;
  position: relative;
  display: inline-block;
  margin-top: 50px;

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

export default PageNotFound

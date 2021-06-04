import { Title, Container, Column, Link } from '../components/Components'
import { NavLink } from 'react-router-dom'

const Homepage = ({ styles, palette, mobile, appear }) => {
  return (
    <>
      <Container
        id="home"
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
            <Link
              href="/"
              size={styles.links.l1}
              color={palette.greens.g5}
              style={{ marginTop: '50px', display: 'inline-block' }}>
              Go to the homepage
            </Link>
          </NavLink>
        </Column>
      </Container>
    </>
  )
}

export default Homepage

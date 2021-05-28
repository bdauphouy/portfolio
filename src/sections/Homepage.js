import styled from 'styled-components'
import { Title, Container, Stroked } from '../components/Components'

const Homepage = ({ styles, mobile }) => {
  return (
    <>
      <Container
        padding={styles.paddings.p1}
        style={{ minHeight: '500px', alignItems: 'flex-end' }}>
        <Title size={styles.titles.t2} color={styles.palette.blacks.b1}>
          Hello, I am
          <Stroked
            size={styles.titles.t2}
            color={styles.palette.blacks.b1}
            style={{ marginLeft: '15px' }}>
            Baptiste Dauphouy
          </Stroked>
          , a frontend developer.
        </Title>
      </Container>
      <Projects>
        <Project background={styles.palette.greens.g1} />
        <Project background={styles.palette.greens.g2} />
        <Project background={styles.palette.greens.g3} />
        <Project background={styles.palette.greens.g4} />
      </Projects>
    </>
  )
}

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
`

const Project = styled.div`
  height: 250px;
  background: ${props => props.background};
`

export default Homepage

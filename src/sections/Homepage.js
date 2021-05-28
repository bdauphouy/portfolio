import styled from 'styled-components'
import { Title, Container, Stroked } from '../components/Components'

const Homepage = ({ styles }) => {
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
            style={{ marginLeft: '20px' }}>
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
  display: flex;
  justify-content: space-between;
  grid-gap: 20px;
`

const Project = styled.div`
  flex: 1;
  height: 250px;
  background: ${props => props.background};
`

export default Homepage

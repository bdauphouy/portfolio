import styled from 'styled-components'
import { Title, Container, Stroked } from '../components/Components'

const Homepage = ({ styles, tablet }) => {
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
      <Projects
        style={{
          gridTemplateColumns:
            tablet && 'repeat(auto-fill, minmax(300px, 1fr))',
        }}>
        <Project background={styles.palette.greens.g1}>
          <ProjectThumbnail src="./projects-thumbnails/fantashop.png" />
        </Project>
        <Project background={styles.palette.greens.g2}>
          <ProjectThumbnail src="./projects-thumbnails/institut.png" />
        </Project>
        <Project background={styles.palette.greens.g3}>
          <ProjectThumbnail src="./projects-thumbnails/benjamin-code.png" />
        </Project>
        <Project background={styles.palette.greens.g4}>
          <ProjectThumbnail src="./projects-thumbnails/flexomatic.png" />
        </Project>
      </Projects>
    </>
  )
}

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

const Project = styled.div`
  height: 15vw;
  min-height: 250px;
  max-height: 400px;
  min-width: 300px;
  flex: 1;
  background: ${props => props.background};
`

const ProjectThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default Homepage

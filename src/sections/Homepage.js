import styled from 'styled-components'
import { Title, Container, Stroked } from '../components/Components'
import ProjectThumbnail from '../components/ProjectThumbnail'
import useGSAP from '../hooks/useGSAP'

const Homepage = ({ styles, palette, mobile }) => {
  useGSAP()

  return (
    <>
      <Container
        id="home"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{ alignItems: 'flex-end', minHeight: '500px' }}>
        <Title
          data-home-text
          data-gsap-text
          size={styles.titles.t2}
          color={styles.colors.text}>
          Hello, I am
          <Stroked
            size={styles.titles.t2}
            color={styles.colors.text}
            style={{ marginLeft: '15px' }}>
            Baptiste Dauphouy
          </Stroked>
          , a frontend developer.
        </Title>
      </Container>

      <Projects
        style={{
          gridTemplateColumns: mobile
            ? 'repeat(auto-fill, minmax(300px, 1fr))'
            : 'repeat(auto-fill, minmax(400px, 1fr))',
        }}>
        <a href="https://fantashop.fr">
          <ProjectThumbnail palette={palette} title="fantashop" />
        </a>
        <a href="https://github.com/baptistedph/institut-bien-etre-griottines">
          <ProjectThumbnail palette={palette} title="institut" />
        </a>
        <a href="https://benjamin-code.bdph.me">
          <ProjectThumbnail palette={palette} title="benjamin-code" />
        </a>
        <a href="https://baptiste.tech/vue-countries-app">
          <ProjectThumbnail palette={palette} title="vue-countries-app" />
        </a>
        <a href="https://baptiste.tech/azura">
          <ProjectThumbnail palette={palette} title="azura" />
        </a>
        <a href="https://baptiste.tech/flexomatic">
          <ProjectThumbnail palette={palette} title="flexomatic" />
        </a>
        <a href="https://github.com/baptistedph/react-native-countries-app">
          <ProjectThumbnail
            palette={palette}
            title="react-native-countries-app"
          />
        </a>
      </Projects>
    </>
  )
}

const Projects = styled.div`
  display: grid;
`

export default Homepage

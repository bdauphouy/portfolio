import styled from 'styled-components'
import { Container, Stroked, Title } from '../components/Components'
import useGSAP from '../hooks/useGSAP'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const Homepage = ({ styles, palette, mobile }) => {
  useGSAP()

  const fourK = useResolutionIsGreaterThan(3839)

  return (
    <>
      <Container
        id="home"
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{ alignItems: 'flex-end', minHeight: '500px' }}
      >
        <Title
          data-home-text
          data-gsap-text
          size={styles.titles.t2}
          color={styles.colors.text}
        >
          Hello, I am&nbsp;
          <Stroked size={styles.titles.t2} color={styles.colors.text}>
            Baptiste Dauphouy
          </Stroked>
          , a frontend developer.
        </Title>
      </Container>

      <Projects
        style={{
          gridTemplateColumns: mobile
            ? 'repeat(auto-fill, minmax(300px, 1fr))'
            : fourK
            ? 'repeat(auto-fill, minmax(640px, 1fr))'
            : 'repeat(auto-fill, minmax(400px, 1fr))',
        }}
      >
        {/* <ProjectThumbnail
          palette={palette}
          title="vitaliplay"
          href="https://vitaliplay.fr"
        ></ProjectThumbnail> */}
      </Projects>
    </>
  )
}

const Projects = styled.div`
  display: grid;
`

export default Homepage

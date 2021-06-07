import styled from 'styled-components'
import {
  Title,
  Container,
  Column,
  Row,
  Paragraph,
} from '../components/Components'
import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound'

const Project = ({ styles, palette, mobile, appear }) => {
  const { id } = useParams()

  const projectsContent = [
    {
      id: 'fantashop',
      title: 'Fantashop',
      subtitle: 'Coming soon',
      technologies: ['react', 'javascript'],
      repo: 'https://github.com/baptistedph/fantashop',
    },

    {
      id: 'institut',
      title: 'Institut Bien-Etre Griottines',
      subtitle: 'Coming soon',
      technologies: ['node', 'javascript', 'html', 'scss'],
      repo: 'https://github.com/baptistedph/institut-bien-etre-griottines',
    },

    {
      id: 'benjamin-code',
      title: 'Benjamin Code',
      subtitle: 'Coming soon',
      technologies: ['javascript', 'html', 'css'],
      repo: 'https://github.com/baptistedph/benjamin-code',
    },

    {
      id: 'flexomatic',
      title: 'Flexomatic',
      subtitle: 'Coming soon',
      technologies: ['javascript', 'html', 'css'],
      repo: 'https://github.com/baptistedph/flexomatic',
    },
  ]

  const handleProject = id => {
    return projectsContent.find(projectContent => projectContent.id === id)
  }

  const projectContent = handleProject(id)

  return (
    <>
      {projectContent ? (
        <Container
          id="project"
          padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
          style={{ alignItems: 'flex-end', minHeight: '500px' }}>
          <Row>
            <Column>
              <Title
                className="appearLeft"
                size={styles.titles.t2}
                color={styles.colors.text}>
                {projectContent.title}
              </Title>
              <Row gap="20px" style={{ marginTop: '20px' }}>
                {projectContent.technologies.map(technology => {
                  return (
                    <Technology color={palette.grays.g1}>
                      {technology}
                    </Technology>
                  )
                })}
              </Row>
              <Paragraph
                style={{ marginTop: '80px' }}
                color={palette.grays.g1}
                size={styles.paragraphs.p1}>
                {projectContent.subtitle}
              </Paragraph>
            </Column>
          </Row>
        </Container>
      ) : (
        <PageNotFound styles={styles} palette={palette} />
      )}
    </>
  )
}

const Technology = styled.span`
  display: inline-block;
  border: solid 1px ${props => props.color};
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: 500;
  line-height: ${props => `calc(${1.5 * parseFloat(props.size)}px)`};
  border-radius: 30px;
  padding: 4px 15px;
`

export default Project

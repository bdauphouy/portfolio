import styled from 'styled-components'
import {
  Column,
  Container,
  Link,
  Paragraph,
  Title,
} from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const About = ({ styles, palette, tablet, externalLinks }) => {
  const greaterThan450 = useResolutionIsGreaterThan(450)

  return (
    <Container
      id="about"
      padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
      style={{
        gridGap: !tablet ? '150px' : '80px',
        flexDirection: tablet && 'column',
      }}
    >
      <Column style={{ flex: 1.5 }}>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text
        >
          My name is Baptiste Dauphouy, I am a 19 years old french developer,
          and I live in Paris.
        </Paragraph>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text
        >
          I have been a frontend developer for almost 5 years and I'm studying
          at HETIC for my second year. I'm currently in internship in Radio
          France since August 2022.
        </Paragraph>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text
        >
          I mainly work with Svelte and TypeScript, but I also use React in some
          projects.
        </Paragraph>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text
        >
          I'm available for short freelance missions (up to 3 months), so don't
          hesitate to contact me.
        </Paragraph>
        <Link
          href={externalLinks.linkedin}
          data-cursor
          size={styles.links.l1}
          color={palette.greens.g5}
          style={{ marginTop: '50px' }}
          data-about-link
          target="_blank"
        >
          Jump to my profile
        </Link>
      </Column>
      <Column style={{ flex: 1, minWidth: !tablet && '350px' }}>
        <Title
          data-about-text
          size={styles.titles.t3}
          stroked
          color={styles.colors.text}
        >
          Curriculum
        </Title>
        <Step style={{ marginTop: '50px' }}>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ whiteSpace: 'nowrap' }}
            data-about-text
            data-gsap-text
          >
            2022-2023
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}
            >
              Radio France
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}
            >
              Paris, France
            </Paragraph>
          </Column>
        </Step>
        <Step>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ whiteSpace: 'nowrap' }}
            data-about-text
            data-gsap-text
          >
            2021-2024
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}
            >
              HETIC
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}
            >
              Montreuil, France
            </Paragraph>
          </Column>
        </Step>
        <Step>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ whiteSpace: 'nowrap' }}
            data-about-text
            data-gsap-text
          >
            2018-2021
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}
            >
              Lycée Saint-Sauveur
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}
            >
              Redon, France
            </Paragraph>
          </Column>
        </Step>
      </Column>
    </Container>
  )
}

const Step = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 40px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

export default About

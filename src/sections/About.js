import styled from 'styled-components'
import {
  Paragraph,
  Container,
  Column,
  Link,
  Title,
} from '../components/Components'
import useResolutionIsGreaterThan from '../hooks/useResolutionIsGreaterThan'

const About = ({ styles, palette, tablet }) => {
  const greaterThan450 = useResolutionIsGreaterThan(450)

  return (
    <Container
      id="about"
      padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
      style={{
        gridGap: !tablet ? '150px' : '80px',
        flexDirection: tablet && 'column',
      }}>
      <Column style={{ flex: 1.5 }}>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text>
          My name is Baptiste Dauphouy, I am a 17 years old french developer,
          and I live in Paris.
        </Paragraph>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text>
          I have been a frontend developer for 3 years and today I would like to
          put in application all the knowledges I acquired in these last years.
        </Paragraph>
        <Paragraph
          color={styles.colors.text}
          size={styles.paragraphs.p1}
          style={{ marginTop: '20px' }}
          data-about-text
          data-gsap-text>
          So, if you want to work with me, you will find below, the ways to
          contact me.
        </Paragraph>
        <Link
          href="/resume.pdf"
          download
          data-cursor
          size={styles.links.l1}
          color={palette.greens.g5}
          style={{ marginTop: '50px' }}
          data-about-link>
          Download my resume
        </Link>
      </Column>
      <Column style={{ flex: 1, minWidth: !tablet && '350px' }}>
        <Title
          data-about-text
          size={styles.titles.t3}
          stroked
          color={styles.colors.text}>
          Curriculum
        </Title>
        <Step style={{ marginTop: '50px' }}>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ whiteSpace: 'nowrap' }}
            data-about-text
            data-gsap-text>
            2021-2024
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}>
              HETIC
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}>
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
            data-gsap-text>
            2018-2021
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}>
              Lycée Saint-Sauveur
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}>
              Redon, France
            </Paragraph>
          </Column>
        </Step>
        <Step>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ whiteSpace: 'nowrap' }}
            data-about-text
            data-gsap-text>
            2014-2018
          </Paragraph>
          <Column style={{ marginLeft: greaterThan450 ? 80 : 0 }}>
            <Paragraph
              data-about-text
              data-gsap-text
              color={styles.colors.text}
              size={styles.paragraphs.p1}>
              Collège Saint-Martin
            </Paragraph>
            <Paragraph
              data-about-text
              data-gsap-text
              color={palette.grays.g1}
              size={styles.paragraphs.p1}>
              Pontchâteau, France
            </Paragraph>
          </Column>
        </Step>
      </Column>
    </Container>
  )
}

const Step = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export default About

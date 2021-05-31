import styled from 'styled-components'
import {
  Paragraph,
  Container,
  Column,
  Link,
  Title,
} from '../components/Components'
import { useState, useEffect } from 'react'

const About = ({ styles, mobile }) => {
  const [smallDevice, setSmallDevice] = useState(false)

  const isSmallDevice = () => {
    return window.innerWidth <= 550
  }

  useEffect(() => {
    isSmallDevice() ? setSmallDevice(true) : setSmallDevice(false)
  }, [])

  window.addEventListener('resize', () => {
    isSmallDevice() ? setSmallDevice(true) : setSmallDevice(false)
  })

  return (
    <>
      <Container
        padding={styles.paddings.p1}
        style={{
          gridGap: !mobile ? '150px' : '80px',
          flexDirection: mobile && 'column',
        }}>
        <Column style={{ flex: 1.5 }}>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}
            style={{ marginTop: '20px' }}>
            My name is Baptiste Dauphouy, I am french developer, 17 years old,
            and I live near Rennes in France.
          </Paragraph>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}
            style={{ marginTop: '20px' }}>
            I have been a frontend developer for 2 years and today I would like
            to put in application all the knowledges I acquired in these couple
            of years.
          </Paragraph>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}
            style={{ marginTop: '20px' }}>
            So, if you want to work with me, you will find below, the ways to
            contact me.
          </Paragraph>
          <Link
            href="/cv.pdf"
            download
            size={styles.links.l1}
            color={styles.palette.greens.g5}
            style={{ marginTop: '50px' }}>
            Download my CV
          </Link>
        </Column>
        <Column style={{ flex: 1, minWidth: !mobile && '350px' }}>
          <Title
            size={styles.titles.t3}
            stroked
            color={styles.palette.blacks.b1}>
            Curriculum
          </Title>
          <Step style={{ marginTop: '50px' }}>
            <Paragraph
              color={styles.palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ whiteSpace: 'nowrap' }}>
              2021-2024
            </Paragraph>
            <Column style={{ marginLeft: smallDevice ? '30px' : '80px' }}>
              <Paragraph
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                HETIC
              </Paragraph>
              <Paragraph
                color={styles.palette.grays.g1}
                size={styles.paragraphs.p1}>
                Montreuil, France
              </Paragraph>
            </Column>
          </Step>
          <Step>
            <Paragraph
              color={styles.palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ whiteSpace: 'nowrap' }}>
              2018-2021
            </Paragraph>
            <Column style={{ marginLeft: smallDevice ? '30px' : '80px' }}>
              <Paragraph
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                Lycée Saint-Sauveur
              </Paragraph>
              <Paragraph
                color={styles.palette.grays.g1}
                size={styles.paragraphs.p1}>
                Redon, France
              </Paragraph>
            </Column>
          </Step>
          <Step>
            <Paragraph
              color={styles.palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ whiteSpace: 'nowrap' }}>
              2014-2018
            </Paragraph>
            <Column style={{ marginLeft: smallDevice ? '30px' : '80px' }}>
              <Paragraph
                color={styles.palette.blacks.b1}
                size={styles.paragraphs.p1}>
                Collège Saint-Martin
              </Paragraph>
              <Paragraph
                color={styles.palette.grays.g1}
                size={styles.paragraphs.p1}>
                Pontchâteau, France
              </Paragraph>
            </Column>
          </Step>
        </Column>
      </Container>
    </>
  )
}

const Step = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
`

export default About

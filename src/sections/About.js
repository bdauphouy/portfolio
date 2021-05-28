import styled from 'styled-components'
import { Paragraph, Container, Column } from '../components/Components'

const About = ({ styles }) => {
  return (
    <>
      <Container padding={styles.paddings.p1}>
        <Column>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}>
            My name is Baptiste Dauphouy, I am french developer, 17 years old,
            and I live near Rennes in France.
          </Paragraph>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}>
            I have been a frontend developer for 2 years and today I would like
            to put in application all the knowledges I acquired in these couple
            of years.
          </Paragraph>
          <Paragraph
            color={styles.palette.blacks.b1}
            size={styles.paragraphs.p1}>
            So, if you want to work with me, you will find below, the ways to
            contact me.
          </Paragraph>
        </Column>
      </Container>
    </>
  )
}

export default About

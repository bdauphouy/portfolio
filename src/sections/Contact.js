import styled from 'styled-components'
import {
  Column,
  Container,
  Link,
  Paragraph,
  Title,
} from '../components/Components'

const Contact = ({ styles, palette, tablet, externalLinks }) => {
  return (
    <Container
      id="contact"
      padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
      style={{
        gridGap: !tablet ? '150px' : '80px',
        flexDirection: tablet && 'column',
      }}
    >
      <Column style={{ flex: 1 }}>
        <Paragraph
          data-gsap-text
          data-contact-text
          color={styles.colors.text}
          size={styles.paragraphs.p1}
        >
          For any inqueries about me, you can contact me using my email or
          social networks.
        </Paragraph>
      </Column>
      <Column style={{ flex: 3 }}>
        <Title
          data-gsap-text
          data-contact-text
          size={styles.titles.t2}
          stroked
          color={styles.colors.text}
        >
          Contact me
        </Title>
        <Way border={palette.grays.g2} data-contact-border>
          <Title
            size={styles.titles.t3}
            color={styles.colors.text}
            style={{
              wordBreak: 'break-all',
            }}
            data-gsap-text
            data-contact-text
          >
            mail@bdau.fr
          </Title>
          <Paragraph
            color={palette.grays.g1}
            size={styles.paragraphs.p1}
            style={{ marginTop: '10px' }}
            data-gsap-text
            data-contact-text
          >
            Do not hesitate to contact me for any information about me or my
            work.
          </Paragraph>
        </Way>
        <List>
          <li>
            <Link
              href={externalLinks.twitter}
              color={palette.greens.g5}
              size={styles.links.l1}
              data-gsap-text
              data-cursor
              data-contact-text
              target="_blank"
            >
              twitter
            </Link>
          </li>
          <li>
            <Link
              href={externalLinks.linkedin}
              color={palette.greens.g5}
              size={styles.links.l1}
              data-gsap-text
              data-cursor
              data-contact-text
              target="_blank"
            >
              linkedin
            </Link>
          </li>
          <li>
            <Link
              href={externalLinks.github}
              color={palette.greens.g5}
              size={styles.links.l1}
              data-gsap-text
              data-cursor
              data-contact-text
              target="_blank"
            >
              github
            </Link>
          </li>
        </List>
      </Column>
    </Container>
  )
}

const Way = styled.div`
  border-bottom: solid 2px ${props => props.border};
  padding-bottom: 30px;
  margin-top: 50px;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  margin-top: 80px;
  list-style: none;
  justify-content: space-between;
  width: 100%;
`

export default Contact

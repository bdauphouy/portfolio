import styled from 'styled-components'
import {
  Paragraph,
  Container,
  Column,
  Title,
  Link,
} from '../components/Components'

const Contact = ({ styles, palette, tablet, externalLinks }) => {
  return (
    <>
      <Container
        padding={`${styles.paddings.p4} ${styles.paddings.p1}`}
        style={{
          gridGap: !tablet ? '150px' : '80px',
          flexDirection: tablet && 'column',
        }}>
        <Column style={{ flex: 1 }}>
          <Paragraph color={styles.colors.text} size={styles.paragraphs.p1}>
            For any inqueries about me, you can contact me by email, phone
            number or with social networks.
          </Paragraph>
        </Column>
        <Column style={{ flex: 3 }}>
          <Title size={styles.titles.t2} stroked color={styles.colors.text}>
            Contact me
          </Title>
          <Way border={palette.grays.g2}>
            <Title
              size={styles.titles.t3}
              color={styles.colors.text}
              style={{
                wordBreak: 'break-all',
              }}>
              bdauphouy[at]gmail.com
            </Title>
            <Paragraph
              color={palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ marginTop: '10px' }}>
              Do not hesitate to contact me for any information about me or my
              work.
            </Paragraph>
          </Way>
          <Way border={palette.grays.g2}>
            <Title size={styles.titles.t3} color={styles.colors.text}>
              +33621629748
            </Title>
            <Paragraph
              color={palette.grays.g1}
              size={styles.paragraphs.p1}
              style={{ marginTop: '10px' }}>
              If you prefer to ear my voice, you can call me.
            </Paragraph>
          </Way>
          <List>
            <li>
              <Link
                href={externalLinks.twitter}
                color={palette.greens.g5}
                size={styles.links.l1}>
                twitter
              </Link>
            </li>
            <li>
              <Link
                href={externalLinks.discord}
                color={palette.greens.g5}
                size={styles.links.l1}>
                discord
              </Link>
            </li>
            <li>
              <Link
                href={externalLinks.github}
                color={palette.greens.g5}
                size={styles.links.l1}>
                github
              </Link>
            </li>
          </List>
        </Column>
      </Container>
    </>
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

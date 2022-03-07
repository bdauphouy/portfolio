import { Paragraph } from '../components/Components'

const Footer = ({ styles, palette }) => {
  return (
    <footer
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Paragraph
        data-gsap-text
        data-contact-text
        color={palette.grays.g1}
        size={styles.paragraphs.p1}
        style={{
          textAlign: 'center',
        }}>
        © 2022 - Baptiste Dauphouy
      </Paragraph>
    </footer>
  )
}

export default Footer

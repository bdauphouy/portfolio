import { Paragraph } from '../components/Components'
const Footer = ({ styles, palette, tablet }) => {
  return (
    <footer style={{ padding: `${styles.paddings.p3} 0` }}>
      <Paragraph
        color={palette.grays.g1}
        size={styles.paragraphs.p1}
        style={{
          textAlign: 'center',
        }}>
        © 2021 - Baptiste Dauphouy
      </Paragraph>
    </footer>
  )
}

export default Footer

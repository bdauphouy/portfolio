import styled from 'styled-components'
import { Paragraph, Column } from '../components/Components'

const SwitchTheme = ({ styles, setTheme, theme }) => {
  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Input
      color={styles.colors.text}
      style={{
        right: styles.paddings.p2,
      }}
      data-fixed-element>
      <Column style={{ alignItems: 'center' }}>
        <Paragraph color={styles.colors.text} size={styles.paragraphs.p2}>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </Paragraph>
        <input
          id="switch"
          type="checkbox"
          onChange={handleChange}
          checked={theme === 'light' && true}
          style={{ marginTop: '5px' }}
        />
        <label htmlFor="switch" color={styles.colors.text}></label>
      </Column>
    </Input>
  )
}

const Input = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 30px;

  & input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  & label {
    background: ${props => props.color};
    width: 50px;
    height: 26px;
    display: block;
    cursor: pointer;
    border-radius: 100px;
    position: relative;
    transition: background 0.4s;
  }

  & label::after {
    background: ${props => props.color};
    content: '';
    position: absolute;
    top: 3px;
    right: 3px;
    width: 20px;
    height: 20px;
    border-radius: 30px;
    filter: invert(1);
    transition: right 0.3s, filter 0.4s;
  }

  & input:checked + label::after {
    right: calc(100% - 24px);
  }
`

export default SwitchTheme

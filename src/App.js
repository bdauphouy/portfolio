import Navbar from './partials/Navbar'
import Homepage from './sections/Homepage'
import About from './sections/About'
import Use from './sections/Use'
import Contact from './sections/Contact'
import Menu from './partials/Menu'
import DownloadCV from './components/DownloadCV'
import SwitchTheme from './components/SwitchTheme'
import Footer from './partials/Footer'
import useLocalStorage from './hooks/useLocalStorage'
import { useState, useEffect } from 'react'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const [tablet, setTablet] = useState(false)
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useLocalStorage('bdph-portfolio-theme', 'dark')

  const isTablet = () => {
    return window.innerWidth <= 1024
  }

  const isMobile = () => {
    return window.innerWidth <= 414
  }

  useEffect(() => {
    if (menu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [menu])

  useEffect(() => {
    isMobile() ? setMobile(true) : setMobile(false)
    isTablet() ? setTablet(true) : setTablet(false)
  }, [])

  window.addEventListener('resize', () => {
    isMobile() ? setMobile(true) : setMobile(false)
    isTablet() ? setTablet(true) : setTablet(false)
  })

  const externalLinks = {
    twitter: 'https://twitter.com/baptistedph',
    discord: 'https://discordapp.com/users/471654834328698880',
    github: 'https://github.com/baptistedph',
  }

  const palette = {
    greens: {
      g1: '#f1fffb',
      g2: '#d9f9ef',
      g3: '#b2f5df',
      g4: '#72edc4',
      g5: '#00df94',
    },
    grays: {
      g1: '#94A3B8',
      g2: '#E2E8F0',
    },
    blacks: {
      b1: '#000000',
    },
    whites: {
      w1: '#ffffff',
    },
  }

  const styles = {
    titles: {
      t1: tablet ? '70px' : '130px',
      t2: tablet ? '50px' : '70px',
      t3: tablet ? '30px' : '50px',
    },
    paragraphs: {
      p1: '20px',
      p2: '12px',
    },
    links: {
      l1: '20px',
      l2: tablet ? '12px' : '15px',
    },
    colors: {
      text: theme === 'light' ? palette.blacks.b1 : palette.whites.w1,
      background: theme === 'light' ? palette.whites.w1 : palette.blacks.b1,
    },
    paddings: {
      p1: '10%',
      p2: '3%',
      p3: '30px',
      p4: '100px',
    },
  }

  useEffect(() => {
    document.body.style.background = styles.colors.background
  }, [styles.colors.background])

  return (
    <>
      <SwitchTheme styles={styles} theme={theme} setTheme={setTheme} />
      <DownloadCV styles={styles} tablet={tablet} />
      <Navbar styles={styles} menu={menu} setMenu={setMenu} />
      {menu && (
        <Menu
          styles={styles}
          palette={palette}
          tablet={tablet}
          menu={menu}
          setMenu={setMenu}
        />
      )}
      <Homepage styles={styles} palette={palette} />
      <About
        styles={styles}
        palette={palette}
        mobile={mobile}
        tablet={tablet}
      />
      <Use styles={styles} tablet={tablet} />
      <Contact
        styles={styles}
        palette={palette}
        tablet={tablet}
        externalLinks={externalLinks}
      />
      <Footer styles={styles} palette={palette} tablet={tablet} />
    </>
  )
}

export default App

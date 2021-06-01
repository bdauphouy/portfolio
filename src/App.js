import Navbar from './partials/Navbar'
import Homepage from './sections/Homepage'
import About from './sections/About'
import Use from './sections/Use'
import Contact from './sections/Contact'
import Menu from './partials/Menu'
import DownloadCV from './partials/DownloadCV'
import { useState, useEffect } from 'react'

const App = () => {
  const [mobile, setMobile] = useState(false)
  const [tablet, setTablet] = useState(false)
  const [menu, setMenu] = useState(false)

  const isTablet = () => {
    return window.innerWidth <= 1024
  }

  const isMobile = () => {
    return window.innerWidth <= 414
  }

  const methods = {
    resolutionIsGreaterThan: resolution => {
      return window.innerWidth > resolution
    },
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

  const styles = {
    titles: {
      t1: tablet ? '70px' : '130px',
      t2: tablet ? '50px' : '70px',
      t3: tablet ? '30px' : '50px',
    },
    paragraphs: {
      p1: '20px',
    },
    links: {
      l1: '20px',
      l2: tablet ? '12px' : '15px',
    },
    palette: {
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
    },
    paddings: {
      p1: '10%',
      p2: '3%',
    },
  }

  return (
    <>
      <DownloadCV styles={styles} tablet={tablet} />
      <Navbar styles={styles} tablet={tablet} menu={menu} setMenu={setMenu} />
      {menu && (
        <Menu styles={styles} tablet={tablet} menu={menu} setMenu={setMenu} />
      )}
      <Homepage styles={styles} tablet={tablet} />
      <About styles={styles} mobile={mobile} tablet={tablet} />
      <Use styles={styles} tablet={tablet} methods={methods} />
      <Contact styles={styles} tablet={tablet} externalLinks={externalLinks} />
    </>
  )
}

export default App

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
  const [menu, setMenu] = useState(false)

  const isMobile = () => {
    return window.innerWidth <= 1024
  }

  useEffect(() => {
    if (menu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [menu])

  useEffect(() => {
    isMobile() ? setMobile(true) : setMobile(false)
  }, [])

  window.addEventListener('resize', () => {
    isMobile() ? setMobile(true) : setMobile(false)
  })

  const externalLinks = {
    twitter: 'https://twitter.com/baptistedph',
    discord: 'https://discordapp.com/users/471654834328698880',
    github: 'https://github.com/baptistedph',
  }

  const styles = {
    titles: {
      t1: mobile ? '70px' : '130px',
      t2: mobile ? '50px' : '70px',
      t3: mobile ? '30px' : '50px',
    },
    paragraphs: {
      p1: '20px',
    },
    links: {
      l1: '20px',
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
      <DownloadCV />
      <Navbar styles={styles} mobile={mobile} menu={menu} setMenu={setMenu} />
      {menu && (
        <Menu styles={styles} mobile={mobile} menu={menu} setMenu={setMenu} />
      )}
      <Homepage styles={styles} mobile={mobile} />
      <About styles={styles} mobile={mobile} />
      <Use styles={styles} mobile={mobile} />
      <Contact styles={styles} mobile={mobile} externalLinks={externalLinks} />
    </>
  )
}

export default App

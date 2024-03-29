import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Cursor from './components/Cursor'
import DownloadResume from './components/DownloadResume'
import SwitchTheme from './components/SwitchTheme'
import useLocalStorage from './hooks/useLocalStorage'
import Footer from './partials/Footer'
import Loader from './partials/Loader'
import Navbar from './partials/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Homepage from './sections/Homepage'
import Use from './sections/Use'

const App = () => {
  const lsLoading = window.localStorage.getItem('bdph-loader')

  const loadingPage = !lsLoading

  const [mobile, setMobile] = useState(false)
  const [tablet, setTablet] = useState(true)
  const [load, setLoad] = useState(loadingPage ? false : true)
  const [loader, setLoader] = useState(loadingPage ? true : false)
  const [appear, setAppear] = useState(loadingPage ? false : true)
  const [animate, setAnimate] = useState(loadingPage ? true : false)
  const [theme, setTheme] = useLocalStorage('bdph-portfolio-theme', 'dark')

  const externalLinks = {
    twitter: 'https://twitter.com/bdauphouy',
    linkedin: 'https://linkedin.com/in/baptiste-dauphouy',
    github: 'https://github.com/bdauphouy',
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
      b1: '#04041c',
    },
    whites: {
      w1: '#eaeaea',
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

  const isTablet = () => {
    return window.innerWidth <= 1024
  }

  const isMobile = () => {
    return window.innerWidth <= 414
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      isMobile() ? setMobile(true) : setMobile(false)
      isTablet() ? setTablet(true) : setTablet(false)
    })
    window.addEventListener('load', () => setLoad(true))

    setTimeout(() => {
      setAnimate(false)
    }, 3000)

    isMobile() ? setMobile(true) : setMobile(false)
    isTablet() ? setTablet(true) : setTablet(false)
  }, [])

  useEffect(() => {
    load && !animate && setTimeout(() => setLoader(false), 500)
    load && !animate && setTimeout(() => setAppear(true), 0)
  }, [load, animate])

  useEffect(() => {
    document.body.style.overflow = loader ? 'hidden' : 'auto'
  }, [loader])

  useEffect(() => {
    document.body.style.background = styles.colors.background
  }, [styles.colors.background])

  return (
    <Router basename="/">
      <SwitchTheme styles={styles} theme={theme} setTheme={setTheme} />
      {loader && <Loader styles={styles} load={load} animate={animate} />}
      {!tablet && <Cursor theme={theme} styles={styles} tablet={tablet} />}
      <DownloadResume
        styles={styles}
        tablet={tablet}
        externalLinks={externalLinks}
      />

      <Navbar styles={styles} theme={theme} />
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Homepage
                styles={styles}
                palette={palette}
                mobile={mobile}
                appear={appear}
              />
              <About
                styles={styles}
                palette={palette}
                mobile={mobile}
                tablet={tablet}
                appear={appear}
                externalLinks={externalLinks}
              />
              <Use styles={styles} tablet={tablet} />
              <Contact
                styles={styles}
                palette={palette}
                tablet={tablet}
                externalLinks={externalLinks}
              />
            </Route>

            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
      />
      <Footer styles={styles} palette={palette} tablet={tablet} />
    </Router>
  )
}

export default App

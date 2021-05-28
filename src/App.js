import Navbar from './partials/Navbar'
import Homepage from './sections/Homepage'
import About from './sections/About'
import Use from './sections/Use'
import Contact from './sections/Contact'

const App = () => {
  const styles = {
    titles: {
      t1: '130px',
      t2: '70px',
      t3: '50px',
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
      <Navbar styles={styles} />
      <Homepage styles={styles} />
      <About styles={styles} />
      <Use styles={styles} />
      <Contact styles={styles} />
    </>
  )
}

export default App

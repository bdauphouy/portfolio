import styled from 'styled-components'

const App = () => {
  return (
    <Center>
      <Container>
        <Title>Baptiste Dauphouy</Title>
        <Subtitle>
          Bonjour ! Je m'appelle Baptiste, j'ai 17 ans et je suis actuellement
          en classe de terminale.
          <br />
          Je me passionne pour le développement web depuis maintenant plus de 2
          ans. C'est pourquoi je rejoindrai dès l'année prochaine l'école HETIC,
          qui forme sur les métiers et technologies du web.
        </Subtitle>
        <List>
          <Link>
            <a href="/cv" data-text="CV">
              CV
            </a>
          </Link>
          <Link>
            <a href="/projet-etudes" data-text="Projet d'études">
              Projet d'études
            </a>
          </Link>
          <Link>
            <a href="/cours" data-text="Cours">
              Cours
            </a>
          </Link>
          <Link>
            <a href="https://twitter.com/baptistedph" data-text="Twitter">
              Twitter
            </a>
          </Link>
        </List>
      </Container>
    </Center>
  )
}

export default App

const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  line-height: 70px;

  @media (max-width: 600px) {
    font-size: 50px;
    line-height: 50px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
`

const Container = styled.div`
  font-family: 'Gilroy', sans-serif;
  width: 50%;
  min-width: 500px;
  height: 100%;
  padding: 50px 0;

  @media (max-width: 600px) {
    width: 90%;
    min-width: unset;
  }
`

const Center = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Link = styled.li`
  overflow: hidden;
  a {
    display: inline-block;
    color: #00df94;
    text-decoration: none;
    transition: transform 0.4s;
    font-size: 18px;
    font-weight: 600;
    position: relative;
  }
  a::before {
    content: attr(data-text);
    position: absolute;
    top: 100%;
  }
  a:hover {
    transform: translateY(-100%);
  }

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`

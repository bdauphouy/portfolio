import styled from 'styled-components'

const ProjectThumbnail = ({ palette, title }) => {
  return (
    <Project data-home-thumbnail id={title} background={palette.greens.g4}>
      <Thumbnail src={`./projects-thumbnails/${title}.webp`} alt={title} />
    </Project>
  )
}

const Project = styled.div`
  height: 15vw;
  min-height: 250px;
  max-height: 400px;
  min-width: 300px;
  flex: 1;
  background: ${props => props.background};
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default ProjectThumbnail

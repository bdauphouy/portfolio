import styled from 'styled-components'

const ProjectThumbnail = ({ palette, title, children }) => {
  return (
    <Project data-home-thumbnail id={title} background={palette.greens.g4}>
      <Thumbnail
        data-cursor
        src={`./projects-thumbnails/${title}.webp`}
        alt={title}
      />
      <Label>{children}</Label>
    </Project>
  )
}

const Project = styled.div`
  height: 15vw;
  min-height: 250px;
  max-height: 400px;
  min-width: 300px;
  flex: 1;
  position: relative;
  background: ${props => props.background};
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Label = styled.span`
  color: white;
  position: absolute;
  font-size: 1rem;
  bottom: 0;
  right: 0;
  margin: 5px 15px;
  font-weight: 500;
`

export default ProjectThumbnail

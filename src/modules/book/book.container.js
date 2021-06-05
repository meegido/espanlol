import React from 'react'
import {Col, Row} from 'react-awesome-styled-grid'
import {
  TitleProfile,
  ProfileImage,
  SocialContainer,
  SocialIcon,
  SectionTitle,
  ReadButton,
  SocialWithButtonContainer,
  ContextoIcon,
  WebLink
} from './book.container.style'

export const BookContainer = () => {
  return (
    <Col
    debug
      xs={4}
      md={8}
      lg={12}
      style={{padding: 0, margin: 0, borderBottom: '1px solid black'}}
    >
      <SectionTitle>Libro</SectionTitle>
      <Row justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
        <ProfileImage
            style={{paddingTop: '2em'}}
            alt="Cover Españlol Book"
            src="https://res.cloudinary.com/dekysavu4/image/upload/v1622834026/Espa%C3%B1lol/portada_oh4vng.jpg"
          />
       
        <SocialWithButtonContainer style={{marginTop: '2em'}}>
            <ContextoIcon
              alt="Read more"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817048/Espa%C3%B1lol/iconos/RevistaCtxt_ve9q96.png"
            />
            <ReadButton>Leer mas</ReadButton>
          </SocialWithButtonContainer>
          </Col>
      </Row>
      <TitleProfile>Virginia Lázaro</TitleProfile>
      <Row  justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
          <ProfileImage
            alt="Virginia Lázaro"
            src="https://res.cloudinary.com/dekysavu4/image/upload/v1622726412/Espa%C3%B1lol/Unknown_eg63gj.png"
          />
          <p>
          Virginia Lázaro Villa es crítica cultural e investigadora afincada en Londres. En la actualidad se encuentra cursando estudios de doctorado en la Universidad de Goldsmiths en Londres, con una investigación que versa sobre las relaciones entre la presente radicalización de la población, el gesto iconoclasta, y en relación a los cambios sufridos por las imágenes derivados de la llegada de la esfera digital. 
          </p>
          <p>Es licenciada en Bellas Artes por la Universidad Complutense de Madrid, Master en Historia del Arte Contemporáneo y Cultura Visual en el Museo de Arte Contemporáneo Reina Sofía, con especialización en Crítica de Arte. Como divulgadora y crítica cultural ha publicado en medios como El salto, Political Critique  o Adesk.</p>
          <SocialContainer>
            <SocialIcon
              alt="Instagram profile"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816831/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh.png"
            />
            <WebLink href="http://virginialazaro.com">Web</WebLink>
          </SocialContainer>
        </Col>
      </Row>
      
    </Col>
  )
}

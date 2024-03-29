import React from 'react'
import { Link } from 'react-router-dom'
import {Col, Row} from 'react-awesome-styled-grid'
import {
  TitleProfile,
  ProfileImage,
  SocialContainer,
  SocialIcon,
  ContextoIcon,
  ContextoLink,
  SectionTitle,
  ReadButton,
  SocialWithButtonContainer,
  WebLink,
  BookImage,
  SocialLink
} from './book.container.style'

export const BookContainer = () => {
  return (
    <Col
      xs={4}
      md={8}
      lg={12}
      style={{padding: 0, margin: 0, borderBottom: '1px solid black'}}
    >
      <SectionTitle>Libro</SectionTitle>
      <Row justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
        <BookImage
            alt="Cover Españlol Book"
            src="https://res.cloudinary.com/dekysavu4/image/upload/v1622884987/Espa%C3%B1lol/portada_Espa%C3%B1lol_libro_vydwgj.jpg"/>
       
        <SocialWithButtonContainer style={{marginTop: '2em'}}>
            <ContextoLink href="https://ctxt.es/es/20210601/Culturas/36329/legionarios-muerte-velocidad-imperialismo-modernidad-Virginia-Lazaro.htm" target="blank">
              <ContextoIcon
                alt="Read more"
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817048/Espa%C3%B1lol/iconos/RevistaCtxt_ve9q96.png"
              />
            </ContextoLink>
            
            <Link to="/project">
              <ReadButton>Leer mas</ReadButton>
            </Link>
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
          <p>Virginia Lázaro Villa es crítica cultural e investigadora afincada en Londres. En la actualidad se encuentra cursando estudios de doctorado en la Universidad de Goldsmiths en Londres, con una investigación que versa sobre las relaciones entre la presente radicalización de la población, el gesto iconoclasta, y en relación a los cambios sufridos por las imágenes derivados de la llegada de la esfera digital.</p>
          <p>Es licenciada en Bellas Artes por la Universidad Complutense de Madrid, Master en Historia del Arte Contemporáneo y Cultura Visual en el Museo de Arte Contemporáneo Reina Sofía, con especialización en Crítica de Arte. Como divulgadora y crítica cultural ha publicado en medios como El salto, Political Critique  o Adesk.</p>
          <SocialContainer>
            <SocialLink  href="https://www.instagram.com/virginia_lazaro_/" target="_blank ">
              <SocialIcon
                alt="Instagram profile"
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
              />
            </SocialLink>
            <a href="https://www.virginialazaro.com/" target="blank">
              <WebLink href="http://virginialazaro.com">Web</WebLink>
            </a>
          </SocialContainer>
        </Col>
      </Row>
      
    </Col>
  )
}

import React from 'react'
import { Container, Col, Row } from 'react-awesome-styled-grid'

import { TitleSection, SocialContainer, YoutubeIcon, SpotifyIcon, SingleImage, AlginIconLeft, AlginIconRight } from './singles.container.style'
import { NavContainer } from '../../modules/nav/nav.container'
import { Footer } from '../../modules/footer/footer.container'

export const SinglesPage = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}  >
        <NavContainer />
        <TitleSection>Proyecto</TitleSection>
        <Row justify="center" style={{marginBottom: '2em'}}>
          <Col xs={4} md={4} lg={6} style={{ padding: '0 2em' }}>
            <SingleImage alt="Cajas cover" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622970160/Espa%C3%B1lol/Logo-beige-72dpi_Low-resolution-email_okwsnm.jpg" />
            <SocialContainer>
              <AlginIconRight href="https://open.spotify.com/track/49m0sQGXfWUNtcgAQc68Gv?si=ce8c85d0cd4548e1" target="blank">
                <SpotifyIcon
                  alt="Spotify profile"
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
                />
              </AlginIconRight>
              <AlginIconLeft href="https://www.youtube.com/watch?v=I4nI2WaJDSQ" target="blank">
                <YoutubeIcon
                  alt="Youtube profile"
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622996626/Espa%C3%B1lol/iconos/youtube-logo-0_llcgyw_wcauew.png"
                />
              </AlginIconLeft>
            </SocialContainer>
            <p>Cajas Destemplás es el primer single de Españlol que se edita el viernes 16 de abril de 2021. En
            esta canción compuesta por Carlos Gárate se une la voz de Niño de Elche, la letra escrita por
            Virginia Lázaro, junto a un vídeo a cargo de Matías Uris, con vestuario de Jorge López y con la
            aparición del actor Omar Ayuso. Una canción que nos introduce en el universo de Españlol.
            </p>
            <p>“Echar con cajas destempladas”, es un gesto de descrédito y deshonra. En esta canción se habla
            de cómo nos construimos como sujetos a través de la vergüenza, y de su reverso, a través de
            intentar evitarla mostrando que seguimos las normas.
            </p>
          </Col>
        </Row>
        <Row justify="center" style={{ borderTop: '1px solid black' }}>
          <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
            <SingleImage alt="Oriental cover" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622970135/Espa%C3%B1lol/portada_oriental_gg1ql5.jpg" />
            <SocialContainer>
              <AlginIconRight href="https://open.spotify.com/track/14ZOMOReWrpJRiUtvLtFV2?si=4582864924c34037" target="blank">
                <SpotifyIcon
                  alt="Spotify profile"
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
                />
              </AlginIconRight>
              <AlginIconLeft href="https://www.youtube.com/watch?v=6pstjSUDwSw" target="blank">
                <YoutubeIcon
                  alt="Youtube profile"
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622996626/Espa%C3%B1lol/iconos/youtube-logo-0_llcgyw_wcauew.png"
                />
              </AlginIconLeft>
            </SocialContainer>
            <p>Oriental es un tema en el que partiendo de un sample de piano del compositor clásico Enrique Granados, Carlos construye una canción que se acerca a la épica de la electrónica más trancera, 
              en su revisión de la música popular, un homenaje que se pone de relieve en cada track del álbum. Oriental presenta también un vídeo dirigido por Matías Uris y rodado en la provincia de Ciudad Real en donde destaca la colaboración en el rodaje de vecinos de las diferentes localizaciones donde se grabó. Un vídeo construido a través del imaginario de Francisco de Goya y Lucientes, que cuenta con la Dirección de arte de Virginia Lázaro y Matías Uris
            </p>
          </Col>
        </Row>
      </Col>
      <Footer />
    </Container>
  )
}

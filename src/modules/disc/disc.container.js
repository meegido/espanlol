import React from 'react'
import { Link } from "@reach/router"
import {Col, Row} from 'react-awesome-styled-grid'
import {
  TitleProfile,
  ProfileImage,
  SocialContainer,
  SocialIcon,
  SectionTitle,
  ReadButton,
  SocialWithButtonContainer,
  SpotifyIcon,
  RecordImage,
  SocialLink
} from './disc.container.style'

export const DiscContainer = () => {
  return (
    <Col
      xs={4}
      md={8}
      lg={12}
      style={{padding: 0, margin: 0}}
    >
      <TitleProfile>Carlos Gárate</TitleProfile>
      <Row justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
          <ProfileImage
            alt="Carlos Gárate"
            src="https://res.cloudinary.com/dekysavu4/image/upload/v1622818575/Espa%C3%B1lol/carlosgarate_awn0si.jpg"
          />
          <p>
            Carlos Gárate Marquerie (Madrid, 1989) es un artista sonoro y músico que vive y trabaja en Madrid. 
            Completó sus estudios de arte sonoro y diseño de sonido en la Universidad de Artes de Londres. Carlos compone música para danza 
            y teatro trabajando junto a artistas como Elena Córdoba, el colectivo La Imperfecta, Lara Brown o participando en la composición 
            musical y en la gira de Grito Pelao junto a Silvia Perez Cruz y Rocío Molina. Esta última le ha llevado a tocar en algunos de los 
            teatros más prestigiosos de España y Francia como el Théâtre National de Chaillot en París, Los teatros del Canal en Madrid, La Maestranza en 
            Sevilla o el Teatre Grec en Barcelona.
          </p>
          <p>
            En junio de 2021 inicia su trayectoria en solitario presentando su primer álbum “Españlol”. Disco que empieza a tomar forma tras residir durante más de cinco años en Inglaterra, 
            ubicación desde donde empieza a interrogarse sobre lo que rodea al concepto de lo español. Así, a su vuelta a Madrid y tras tres años de investigación y trabajo de composición, 
            publica ahora un disco autoproducido en el que cuestiona a través de la música lo que entendemos por identidad española. En él colaboran artistas como Virginia Lázaro, Toni Quiroga, 
            Matias Uris o Niño de Elche.
          </p>
          <p>
            Durante 2021 y 2022 verán la luz varias colaboraciones en las que Carlos colabora como compositor y productor musical, así como algunas bandas sonoras para cine y danza.
          </p>
          <p>
            Su trabajo ha sido mostrado en España, Grecia, Francia, Colombia y el Reino Unido. Además ha sido invitado por la Universidad de Basilea en Suiza y el festival In-Sonora 
            de Madrid para hablar sobre su investigación en torno a la conexión entre el Antropoceno y el sonido del subsuelo.
          </p>
          <SocialContainer>
            <SocialLink href="https://www.instagram.com/carlosgaratemarquerie/">
              <SocialIcon
                alt="Instagram profile"
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
              />
            </SocialLink>
            <SocialLink href="https://open.spotify.com/artist/4fLBliL0dQYGhPgTnetHAZ?si=-WFUKhQCTMiDWf4TmQ90-w&dl_branch=1">
            <SpotifyIcon
              alt="Spotify profile"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
            />
            </SocialLink>
          </SocialContainer>
        </Col>
      </Row>
      <SectionTitle>Disco</SectionTitle>
      <Row justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
          <RecordImage
              style={{paddingTop: '2em'}}
              alt="Cover Españlol"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622632727/Espa%C3%B1lol/JPG%20rgb%2072%20dpi%20compressed%20%28para%20email%20y%20webs%20donde%20os%20pidan%20que%20pesen%20poco%29/PORTADA-ESPA%C3%91LOL-OK-2-72_dpi_3000x3000_ad5ibc.jpg"
            />
          
          <SocialWithButtonContainer style={{marginTop: '2em'}}>
          <SocialLink href="https://open.spotify.com/album/4XF2pXXEab8kWc3OBuz1kA?si=X37qjCabRIaoHQeI_rdDEA&dl_branch=1" target="blank">
            <SpotifyIcon
              alt="Read more"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
            />
          </SocialLink>
            <Link to="/project">
              <ReadButton>Leer mas</ReadButton>
            </Link>
        </SocialWithButtonContainer>
        </Col>
      </Row>
    </Col>
  )
}

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
  SpotifyIcon
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
            Carlos Gárate Marquerie es un artista sonoro y músico que vive y
            trabaja en Madrid. Completó sus estudios de arte sonoro en la
            Universidad de Artes de Londres. Carlos ha trabajado en torno a la
            agencia de la materialidad de la tierra y sus energías en los
            sistemas sociales.
          </p>
          <p>
            Además se dedica a componer música para danza y teatro trabajando
            junto a Elena Córdoba, el colectivo la imperfecta o participando en
            la composición musical y en la gira de Grito Pelao junto a Silvia
            Perez Cruz y Rocío Molina. Esta última le ha llevado a tocar en
            algunos de los teatros más prestigiosos de España y Francia como el
            Théâtre National de Chaillot en París, Los teatros del Canal en
            Madrid, La Maestranza en Sevilla o el Teatre Grec en Barcelona.
          </p>
          <SocialContainer>
            <SocialIcon
              alt="Instagram profile"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
            />
            <SocialIcon
              alt="Soundcloud profile"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816760/Espa%C3%B1lol/iconos/580b57fcd9996e24bc43c537_xr3vsl.png"
            />
          </SocialContainer>
        </Col>
      </Row>
      <SectionTitle>Disco</SectionTitle>
      <Row justify="center">
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
        <ProfileImage
            style={{paddingTop: '2em'}}
            alt="Cover Españlol"
            src="https://res.cloudinary.com/dekysavu4/image/upload/v1622632727/Espa%C3%B1lol/JPG%20rgb%2072%20dpi%20compressed%20%28para%20email%20y%20webs%20donde%20os%20pidan%20que%20pesen%20poco%29/PORTADA-ESPA%C3%91LOL-OK-2-72_dpi_3000x3000_ad5ibc.jpg"
          />
        
        <SocialWithButtonContainer style={{marginTop: '2em'}}>
            <SpotifyIcon
              alt="Read more"
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
            />
            <ReadButton>Leer mas</ReadButton>
          </SocialWithButtonContainer>
        </Col>
      </Row>
    </Col>
  )
}

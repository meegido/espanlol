import React from 'react'
import { Col, Row } from 'react-awesome-styled-grid'
import { Title, ProfileImage, SocialContainer, SocialIcon } from './disc.container.style'

export const DiscContainer = () => {
  return (
    <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}} >
      <Title>Carlos Gárate</Title>
      <Row justify='center'>
        <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
          <ProfileImage alt="Carlos Gárate" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622818575/Espa%C3%B1lol/carlosgarate_awn0si.jpg" />
          <p>Carlos Gárate Marquerie es un artista sonoro y músico que vive y trabaja en Madrid. Completó sus estudios de arte sonoro en la Universidad de Artes de Londres. Carlos ha trabajado en torno a la agencia de la materialidad de la tierra y sus energías en los sistemas sociales.</p>
          <p>Además se dedica a componer música para danza y teatro trabajando junto a Elena Córdoba, el colectivo la imperfecta o participando en la composición musical y en la gira de Grito Pelao junto a Silvia Perez Cruz y Rocío Molina. Esta última le ha llevado a tocar en algunos de los teatros más prestigiosos de España y Francia como el Théâtre National de Chaillot en París, Los teatros del Canal en Madrid, La Maestranza en Sevilla o el Teatre Grec en Barcelona.</p>
          <SocialContainer>
            <SocialIcon alt="Instagram profile" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816831/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh.png"/>
            <SocialIcon alt="Soundcloud profile" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816760/Espa%C3%B1lol/iconos/580b57fcd9996e24bc43c537_xr3vsl.png"/>
          </SocialContainer>
        </Col>
      </Row>
    </Col>
  )
}

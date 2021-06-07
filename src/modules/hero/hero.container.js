import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { BuyButtonContainer } from '../button/button.container'
import { 
  HeroImage, 
  HeroTitle, 
  TitleContainer, 
  HeroText, 
  SloganContainer, 
  SloganText 
} from './hero.component.style'

export const HeroContainer = () => {
    return (
      <Container fluid={true} style={{padding: 0, margin: 0}}>
        <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
          <HeroImage  />
          <TitleContainer>
            <HeroTitle alt="espanlol" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622756829/Espa%C3%B1lol/PORTADA_ESPA%C3%91LOL_OK_2-3_ildbwn_igr3dd.png" />
            <HeroText>Primer álbum de Carlos Gárate</HeroText>
            <HeroText>Lanzamiento 11 de junio</HeroText>
          </TitleContainer>
          <BuyButtonContainer /> 
          <SloganContainer>
            <SloganText>Una reflexión sobre la identidad española</SloganText>
          </SloganContainer>
        </Col>
      </Container>
      
    )
}

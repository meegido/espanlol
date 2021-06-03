import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { HeroImage, HeroTitle, BuyButton, ButtonContainer } from './hero.component.style'

export const HeroContainer = () => {
    return (
      <Container fluid={true} style={{padding: 0, margin: 0}}>
        <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
          <HeroImage  />
          <HeroTitle alt="" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622632827/Espa%C3%B1lol/titulo_b9ylsn.png" />
          <p>Primer álbum de Carlos Gárate</p>
          <ButtonContainer>
            <BuyButton>Comprar</BuyButton>
            
          </ButtonContainer>
          
        </Col>
      </Container>
      
    )
}

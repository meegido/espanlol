import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { 
  HeroImage, HeroTitle, BuyButton, ButtonContainer, MoneyIcon, TitleContainer, HeroText, SloganContainer, SloganText } from './hero.component.style'

export const HeroContainer = () => {
    return (
      <Container fluid={true} style={{padding: 0, margin: 0}}>
        <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
          <HeroImage  />
          <TitleContainer>
            <HeroTitle alt="" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622737042/Espa%C3%B1lol/titulo_b9ylsn.png" />
            <HeroText>Primer álbum de Carlos Gárate</HeroText>
          </TitleContainer>
          <ButtonContainer>
            <BuyButton>Comprar
              <MoneyIcon alt="money-button" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622735298/Espa%C3%B1lol/money-icon_ycqgeq.png" />
            </BuyButton>
          </ButtonContainer>
          <SloganContainer>
            <SloganText>Una reflexión sobre la identidad española</SloganText>
          </SloganContainer>
        </Col>
      </Container>
      
    )
}

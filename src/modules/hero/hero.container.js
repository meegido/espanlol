import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'
import { HeroImage, HeroTitle, BuyButton, ButtonContainer, MoneyIcon } from './hero.component.style'

export const HeroContainer = () => {
    return (
      <Container fluid={true} style={{padding: 0, margin: 0}}>
        <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
          <HeroImage  />
          <div>
            <HeroTitle alt="" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622632827/Espa%C3%B1lol/titulo_b9ylsn.png" />
            <p>Primer álbum de Carlos Gárate</p>
          </div>
          <ButtonContainer>
            <BuyButton>Comprar
              <MoneyIcon alt="money-button" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622735298/Espa%C3%B1lol/money-icon_ycqgeq.png" />
            </BuyButton>
          </ButtonContainer>
          
        </Col>
      </Container>
      
    )
}

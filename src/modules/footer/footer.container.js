import React from 'react'
import { Col } from 'react-awesome-styled-grid'
import { Contact, FooterContainer } from './footer.container.style'

export const Footer = () => {
  return (
    <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
      <FooterContainer justify='center' >
        <Contact>Info y contratacion: <span>c.garate.marquerie@gmail.com</span></Contact>
      </FooterContainer>
    </Col>
  )
}

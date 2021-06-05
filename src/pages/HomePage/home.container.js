import React from 'react'
import { Container, Col } from 'react-awesome-styled-grid'

import { HeroContainer } from '../../modules/hero/hero.container'
import { CarouselContainer } from '../../modules/carousel/carousel.container'
import { DiscContainer } from '../../modules/disc/disc.container'
import { BookContainer } from '../../modules/book/book.container'
import { OrientalContainer } from '../../modules/oriental/oriental.container'
export const HomeContainer = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <HeroContainer /> 
        <CarouselContainer />
        <DiscContainer />
        <OrientalContainer />
        <BookContainer />
      </Col>
    </Container>
  )
}

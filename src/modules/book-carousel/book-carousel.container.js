import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import { Image, ArrowsContainer, Arrow, ButtonsSpace } from './book-carousel.container.style'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const BookCarouselContainer = () => {
  return (
    <Row justify='center' style={{marginTop: 18}}>
      <Col xs={4} md={4} lg={4} style={{padding: '1em', margin: 0}}>
        <CarouselProvider
          naturalSlideWidth={50}
          naturalSlideHeight={75}
          totalSlides={3}
          infinite={true}
          isPlaying={false}
        >
          <Slider>
            <Slide index={0}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622798831/Espa%C3%B1lol/prefacio/prefacio_1_wcsg2q.jpg"
              />
            </Slide>
            <Slide index={1}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622798832/Espa%C3%B1lol/prefacio/prefacio_2_uphf4i.jpg"
              />
            </Slide>
            <Slide index={2}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622798832/Espa%C3%B1lol/prefacio/prefacio_3_it6dti.jpg"
              />
            </Slide>
          </Slider>
          <ArrowsContainer>
            <ButtonBack style={{background: 'none', border: 'none'}}>
              <Arrow
                  alt=""
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622808642/Espa%C3%B1lol/carrousel/arrow-left_yjcw29.png"
                />
            </ButtonBack>
            <ButtonsSpace></ButtonsSpace>
            <ButtonNext style={{background: 'none', border: 'none'}}>
              <Arrow
                  alt=""
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622808642/Espa%C3%B1lol/carrousel/arrow-right_euh22w.png"
                />
            </ButtonNext>
          </ArrowsContainer>
        </CarouselProvider>
      </Col>
    </Row>
  )
}

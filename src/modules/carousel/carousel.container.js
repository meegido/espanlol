import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import { Image, ArrowsContainer, ArrowsText } from './carousel.style'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const CarouselContainer = () => {
  return (
    <Row align='center' style={{marginTop: 18}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={8}
          infinite={true}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622726640/Espa%C3%B1lol/carrousel/11_c0jmb1.jpg"
              />
            </Slide>
            <Slide index={1}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622726569/Espa%C3%B1lol/carrousel/10_neywma.jpg"
              />
            </Slide>
            <Slide index={2}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622712570/Espa%C3%B1lol/carrousel/9_ouz4vx.jpg"
              />
            </Slide>
            <Slide index={3}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622711929/Espa%C3%B1lol/carrousel/8_kq9pja.jpg"
              />
            </Slide>
            <Slide index={4}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622711675/Espa%C3%B1lol/carrousel/6seis_aq6sqy.jpg"
              />
            </Slide>
            <Slide index={5}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622633724/Espa%C3%B1lol/carrousel/dos_nwbldx.jpg"
              />
            </Slide>
            <Slide index={6}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622633720/Espa%C3%B1lol/carrousel/uno_xfsqar.jpg"
              />
            </Slide>
            <Slide index={7}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1622633703/Espa%C3%B1lol/carrousel/cuatro_ffnwiz.jpg"
              />
            </Slide>
          </Slider>
          <ArrowsContainer>
            <ButtonBack style={{background: 'none', border: 'none'}}>
              <img
                  alt=""
                  src="https://res.cloudinary.com/dekysavu4/image/upload/v1622808642/Espa%C3%B1lol/carrousel/arrow-left_yjcw29.png"
                />
            </ButtonBack>
              <ArrowsText>Españlol es una investigación que ha tomado la forma de un disco y un libro</ArrowsText>
            <ButtonNext style={{background: 'none', border: 'none'}}>
              <img
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

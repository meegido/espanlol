import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import { Image, ArrowsContainer, ArrowsText, Arrow } from './carousel.style'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const CarouselContainer = () => {
  return (
    <Row align='center' style={{marginTop: 18}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={10}
          infinite={true}
          isPlaying={true}
        >
          <Slider>
            <Slide index={0}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091671/Espa%C3%B1lol/carrousel%20definitivo/Untitled-28_zs3qz2.jpg"
              />
            </Slide>
            <Slide index={1}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091671/Espa%C3%B1lol/carrousel%20definitivo/Untitled-25_ti7hqb.jpg"
              />
            </Slide>
            <Slide index={2}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091669/Espa%C3%B1lol/carrousel%20definitivo/Untitled-24_jq3qhs.jpg"
              />
            </Slide>
            <Slide index={3}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091669/Espa%C3%B1lol/carrousel%20definitivo/Untitled-27_cty23u.jpg"
              />
            </Slide>
            <Slide index={4}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091656/Espa%C3%B1lol/carrousel%20definitivo/Untitled-3_eru27v.jpg"
              />
            </Slide>
            <Slide index={5}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091669/Espa%C3%B1lol/carrousel%20definitivo/Untitled-29_bppk4h.jpg"
              />
            </Slide>
            <Slide index={6}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091655/Espa%C3%B1lol/carrousel%20definitivo/untitled-21_kogtsy.jpg"
              />
            </Slide>
            <Slide index={7}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091654/Espa%C3%B1lol/carrousel%20definitivo/Untitled-22_syiryl.jpg"
              />
            </Slide>
            <Slide index={8}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091648/Espa%C3%B1lol/carrousel%20definitivo/Untitled-23_c19qmh.jpg"
              />
            </Slide>
            <Slide index={9}>
              <Image
                alt=""
                src="https://res.cloudinary.com/dekysavu4/image/upload/v1623091640/Espa%C3%B1lol/carrousel%20definitivo/Untitled-17_vfqndz.jpg"
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
              <ArrowsText>Españlol es una investigación que ha tomado la forma de un disco y un libro</ArrowsText>
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

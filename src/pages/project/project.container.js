import React from 'react'
import { Container, Col, Row } from 'react-awesome-styled-grid'
import { NavContainer } from '../../modules/nav/nav.container'
import { BookCarouselContainer } from '../../modules/book-carousel/book-carousel.container'
import { BuyButtonContainer } from '../../modules/button/button.container'
import { TeamContainer } from '../../modules/team/team.container'
import { Footer } from '../../modules/footer/footer.container'

import {
  Image,
  TitleSection,
  BookIndex,
  IndexLayout,
  DiscIndex,
  IndexTitle,
  ProjectDescription
} from './project.container.style'

export const ProjectPage = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <NavContainer />
        <TitleSection>Proyecto</TitleSection>
        <ProjectDescription justify="center">
          <Col xs={4} md={4} lg={6} style={{padding: '0 2em'}}>
            <p>
              Españlol es el primer álbum de Carlos Gárate. Un trabajo que
              propone pensar sobre la identidad española a través de una mirada
              descreída y nacida en la ironía. Afronta de cara las problemáticas
              con que nos encontamos actualmente como sociedad, tales como el
              presente feminista, la migración o la racialización de colectivos.
              Para construir el futuro, hay que reconstruir el pasado, y por eso
              Gárate propone una visión en la que pasodobles, jotas,
              procesiones, reggaetón, canción popular, música clásica, pop y
              electrónica se entremezclan y versionan para dar forma a este
              álbum.
            </p>
            <Image
              alt=""
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622970276/Espa%C3%B1lol/granadas_bujmml.jpg"
            />
            <p>
              Una perspectiva que se completa con un ensayo escrito por Virginia
              Lázaro, y una imagen guiada por esta investigación teórica. Se
              construye así un proyecto audiovisual multidisciplinar que puede
              disfrutarse en disco, libro, videos y conciertos en directo. Un
              proyecto que cuenta con la colaboración de artistas como Niño de
              Elche, Virginia Lázaro, Toni Quiroga, Matias Uris, Caona u Omar
              Ayuso.
            </p>
            <Image
              alt=""
              src="https://res.cloudinary.com/dekysavu4/image/upload/v1622970203/Espa%C3%B1lol/SILLAS_kjiaez.jpg"
            />
            <p>
              Tanto el disco, como el ensayo, los vídeos, fotografía y el
              concierto en directo, invocan imágenes de la españolidad que
              habitan en nuestra mente. Este proyecto revisa nuestra propia
              identidad desde lugares tan comunes como la gastronomía, la
              naturaleza, canciones populares o el imaginario de Francisco de
              Goya. Dialoga con compositores como Enrique Granados, Claude
              Debussy o Erik Satie. Desde el lado más teórico, nos recuerda
              algunas reflexiones de Saidiya Hartman, Ariella Aisha Azoulay o
              George Orwell para explicar por qué las identidades nacionales, a
              pesar de quererse unitarias, son múltiples.
            </p>
          </Col>
        </ProjectDescription>
        <Row justify="center">
          <IndexLayout
            xs={4}
            md={6}
            lg={8}
            style={{padding: '0'}}
            justify="center"
          >
            <DiscIndex>
              <IndexTitle>Españlol (Disco)</IndexTitle>
              <ul>
                <li>1 La Tarara</li>
                <li>2 Cajas destemplás</li>
                <li>3 A la España cañi</li>
                <li>4 Oriental</li>
                <li>5 Procesión de las cadenas</li>
                <li>6 La Habanera de Debussy</li>
                <li>7 Jotilla de la futura pradera madrileña</li>
                <li>8 Invocación a la bestia</li>
                <li>9 España cañí</li>
                <li>10 Españaña</li>
              </ul>
            </DiscIndex>

            <BookIndex>
              <IndexTitle>Españlol (Libro)</IndexTitle>
              <ul>
                <li>La materia de la historia 1</li>
                <li>Un hábito de la mente 2</li>
                <li>El alma de España 3</li>
                <li>El aroma español 4</li>
                <li>¿Dónde se aloja el alma? 5</li>
                <li>Viernes de Dolores 6</li>
                <li>Lo cañí 7</li>
                <li>¡Presentes! 8</li>
                <li>La pradera y el futuro 9</li>
              </ul>
            </BookIndex>
          </IndexLayout>
        </Row>
      </Col>
      <BookCarouselContainer />
      <BuyButtonContainer />
      <TeamContainer />
      <Footer />
    </Container>
  )
}

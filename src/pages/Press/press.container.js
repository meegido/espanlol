import React from 'react'
import { Container, Col, Row } from 'react-awesome-styled-grid'
import { TitleSection, PressContainer, Icon } from './press.container.style'
import { NavContainer } from '../../modules/nav/nav.container'
import { Footer } from '../../modules/footer/footer.container'

export const PressPage = () => {
  return (
    <Container fluid={true} style={{padding: 0, margin: 0}}>
      <Col xs={4} md={8} lg={12} style={{padding: 0, margin: 0}}>
        <NavContainer />
        <TitleSection>Prensa</TitleSection>
        <Row justify="center" style={{marginBottom: '2em'}}>
          <Col xs={4} md={4} lg={6} style={{ padding: '0 2em' }}>
            <PressContainer>
              <Icon alt="rne3" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817158/Espa%C3%B1lol/iconos/1024px-Logo_RTVE.svg_majglg.png" />
              <a style={{color: 'black', textDecoration: 'underline'}} href="https://www.rtve.es/alacarta/audios/siglo-21/years-years-14-04-21/5853520/" target="blank">
               <p>Siglo 21 - Years & Years - 14/04/21</p>
              </a>
            </PressContainer>
            <PressContainer>
              <Icon alt="rne3" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817158/Espa%C3%B1lol/iconos/1024px-Logo_RTVE.svg_majglg.png" />
              <a style={{color: 'black', textDecoration: 'underline'}} href="https://www.rtve.es/m/alacarta/audios/siglo-21/elsas-09-06-21/5935491/" target="blank">
                <p>Siglo XXI - Elsas - 09/06/2021</p>
              </a>
            </PressContainer>
            <PressContainer>
              <Icon alt="rne3" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817158/Espa%C3%B1lol/iconos/1024px-Logo_RTVE.svg_majglg.png" />
              <a style={{color: 'black', textDecoration: 'underline'}} href="https://www.rtve.es/alacarta/audios/retromania/retromania-folklore-renovado-baiuca-escena-espanola/5941238/" target="blank">
                <p>Retromanía - Folklore renovado, Baiuca y la escena española 14/06/2021 	</p>
              </a>
            </PressContainer>
            <PressContainer>
              <Icon alt="neo2" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817388/Espa%C3%B1lol/iconos/titulo_menu-1_dkitov.png" />
              <a style={{color: 'black', textDecoration: 'underline'}} href="https://www.neo2.com/carlos-garate-espanlol/" target="blank">
              <p>Carlos Gárate habla sobre la España profunda en Españlol</p>
              </a>
            </PressContainer>
            <PressContainer>
              <Icon alt="fanasticmag" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622817456/Espa%C3%B1lol/iconos/Screenshot_2021-06-04_at_15.37.25_umdtnb.png" />
              <a style={{color: 'black', textDecoration: 'underline'}} href="https://www.fantasticmag.es/carlos-garate-fast-date/" target="blank">
                <p>#FastDate con Carlos Gárate</p>
              </a>
              
            </PressContainer>
          </Col>
        </Row>
      </Col>
      <Footer />
    </Container>
      
  )
}

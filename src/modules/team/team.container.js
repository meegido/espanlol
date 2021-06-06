import React from 'react'
import {Col, Row} from 'react-awesome-styled-grid'

import {
  TeamTitle,
  SocialProfileContainerPrincipal,
  SocialProfileContainerSecondary,
  SocialProfileContainerSgae,
  SocialContainerSmall,
  SocialProfile,
  SocialProfileYoutube,
  SocialProfileSoundcloud,
  SocialProfileSgae,
  SocialProfileSpotify,
  WebLink,
  SecondaryTeam,
  Name,
  Rol,
  Person,
  LinkStyle
} from './team.container.style'

export const TeamContainer = () => {
  return (
    <Col
    xs={4}
    md={8}
    lg={12}
    style={{padding: 0, margin: 0}}
    >
      <TeamTitle>Equipo</TeamTitle>
      <Row justify="center"  style={{marginBottom: '3em'}}>
        <Col xs={4} md={4} lg={4} style={{padding: '0 2em'}}>
            <ul>
              <Person>
                <Name>Carlos Gárate</Name>
                <Rol>Director y compositor</Rol>
                <SocialProfileContainerPrincipal>
                  <LinkStyle href="https://www.instagram.com/carlosgaratemarquerie/" target="_blank">
                    <SocialProfile
                      alt="Insagram Carlos"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                  <LinkStyle href="https://soundcloud.com/carlos-g-rate" target="_blank">
                    <SocialProfileSoundcloud
                      alt="Soundcloud Carlos"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816760/Espa%C3%B1lol/iconos/580b57fcd9996e24bc43c537_xr3vsl.png"
                    />
                  </LinkStyle>
                  <LinkStyle href="https://open.spotify.com/artist/4fLBliL0dQYGhPgTnetHAZ?si=8j0_4b4HQoiTn18i7mCqoQ" target="_blank">
                    <SocialProfileSpotify
                      alt="Spotify Carlos"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816589/Espa%C3%B1lol/iconos/logo-spotify-icon-4096_d6hdlj.png"
                    />
                  </LinkStyle>
                  <LinkStyle href="https://www.youtube.com/user/MusicFromBadlands" target="_blank">
                    <SocialProfileYoutube
                      alt="Youtube Carlos"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622996626/Espa%C3%B1lol/iconos/youtube-logo-0_llcgyw_wcauew.png"
                    />
                  </LinkStyle>
                </SocialProfileContainerPrincipal>
              </Person>
              <Person>
                <Name>Virginia Lázaro</Name>
                <Rol>Directora artistica, investigadora y escritora</Rol>
                <SocialContainerSmall style={{alignItems: 'baseline'}}>
                  <LinkStyle style={{width: '25%', marginTop: '.3em'}} href="https://www.instagram.com/_virginialazaro_/">
                    <SocialProfile
                      alt="Insagram Virginia Lázaro"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                  <WebLink href="http://virginialazaro.com">Web</WebLink>
                </SocialContainerSmall>
              </Person>
              <Person>
                <Name>Toni Quiroga (Donna Haringwey)</Name>
                <Rol>Productor musical</Rol>
                <SocialProfileContainerPrincipal>
                  <LinkStyle href="https://www.discogs.com/artist/5840031-Donna-Haringwey" target="_blank">
                    <SocialProfileYoutube
                      alt="Discogs Toni Quriga"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886367/Espa%C3%B1lol/iconos/discogs-logo-transparent_gwix3x.png"
                    />
                  </LinkStyle>                
                  <LinkStyle href="https://www.facebook.com/donna666haringwey" target="_blank">
                    <SocialProfile
                      alt="Facebook Toni Quriga"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886616/Espa%C3%B1lol/iconos/clipart1854464_z7o8x8.png"
                    />
                  </LinkStyle>
                  <LinkStyle href="https://www.instagram.com/donna_666_haringwey/" target="_blank">
                    <SocialProfile
                      alt="Instagram Toni Quriga"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                  <LinkStyle href="https://soundcloud.com/donnaharingwey" target="_blank">
                    <SocialProfileSoundcloud
                      alt="Soundcloud Toni Quriga"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816760/Espa%C3%B1lol/iconos/580b57fcd9996e24bc43c537_xr3vsl.png"
                    />
                  </LinkStyle>
                </SocialProfileContainerPrincipal>
              </Person>
              <Person>
                <Name>Matias Uris</Name>
                <Rol>Vídeo y foto</Rol>
                <SocialContainerSmall style={{alignItems: 'baseline'}}>
                  <LinkStyle style={{width: '25%', marginTop: '.3em'}} href="https://www.instagram.com/matiasuris/" target="_blank">
                    <SocialProfile
                      alt="Instagram Matias Uris"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                <WebLink href="/">Web</WebLink>
                </SocialContainerSmall>
              </Person>
            </ul>
            <SecondaryTeam>
              <Person>
                <Name>Caona</Name>
                <Rol>Cantante</Rol>
                <SocialProfileContainerSecondary>
                  <LinkStyle style={{width: '25%'}} href="https://soundcloud.com/caonakaona" target="_blank">
                    <SocialProfileSoundcloud
                      alt="Soundcloud Canoa"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622816760/Espa%C3%B1lol/iconos/580b57fcd9996e24bc43c537_xr3vsl.png"
                    />
                  </LinkStyle>
                  <LinkStyle style={{width: '25%'}} href="https://www.instagram.com/caona_2thenoisebleed/" target="_blank">
                    <SocialProfile
                        style={{marginRight: 0 }}
                        alt="Instagram Canoa"
                        src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                      />
                  </LinkStyle>
                </SocialProfileContainerSecondary>
              </Person>
              <Person>
                <Name>Niño de Elche</Name>
                <Rol>Cantante</Rol>
                <SocialProfileContainerSecondary>
                  <LinkStyle style={{width: '25%'}} href="https://www.instagram.com/ninodeelche/" target="_blank">
                    <SocialProfile
                      style={{marginRight: 0 }}
                      alt="Instagram Niño de Elche"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                </SocialProfileContainerSecondary>
              </Person>
              <Person>
                <Name>@rell_brl</Name>
                <Rol>Mezcla</Rol>
                <SocialProfileContainerSecondary>
                <LinkStyle style={{width: '25%'}} href="https://www.instagram.com/rell_brl/" target="_blank">
                  <SocialProfile
                    style={{marginRight: 0 }}
                    alt="Instagram Rell_brl"
                    src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                  />
                </LinkStyle>
                </SocialProfileContainerSecondary>
              </Person>
              <Person>
                <Name>@dadub_mastering</Name>
                <Rol>Mastering</Rol>
                <SocialProfileContainerSecondary>
                  <LinkStyle style={{width: '25%'}} href="https://www.instagram.com/dadub_mastering/" target="_blank">
                    <SocialProfile
                      style={{marginRight: 0 }}
                      alt="Instagram dadub_mastering"
                      src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                    />
                  </LinkStyle>
                </SocialProfileContainerSecondary>
              </Person>
              <Person>
                <Name>Mercedes Egido</Name>
                <Rol>Diseño Web</Rol>
              </Person>
              <Person>
              <Name>@somosaguacateymango </Name>
              <Rol>Diseño Gráfico</Rol>
              <SocialProfileContainerSecondary>
                <LinkStyle style={{width: '25%'}} href="https://www.instagram.com/somosaguacateymango/" target="_blank">
                  <SocialProfile
                    style={{marginRight: 0 }}
                    alt="Instagram somosaguacateymango"
                    src="https://res.cloudinary.com/dekysavu4/image/upload/v1622886838/Espa%C3%B1lol/iconos/logo-computer-icons-clip-art-instagram-layout-238806f88991bbd95457aa43ae40ca85_yotwzh_mwlj4d.png"
                  />
                </LinkStyle>
                </SocialProfileContainerSecondary>
            </Person>
          </SecondaryTeam>
          <SocialProfileContainerSgae>
            <p style={{marginRight: '.5em'}}>Gracias a</p>
            <SocialProfileSgae
              alt="sgae"
              src="https://res.cloudinary.com/dekysavu4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1622816643/Espa%C3%B1lol/iconos/iu_txzdta.png"
            />
          </SocialProfileContainerSgae>
        </Col>
      </Row>
    </Col>
    
  )
}

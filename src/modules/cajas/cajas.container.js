import React from 'react'
import {Row} from 'react-awesome-styled-grid'
import { RelativeCol, AbsolutText, Text } from './cajas.container.style'

export const CajasContainer = () => {
  return ( 
    <Row justify="center">
    <RelativeCol
      debug
      xs={4}
      md={8}
      lg={12}
      style={{padding: 0, margin: 0}}
    >
      <AbsolutText> 
        <Text>Cajas destemplás</Text>
        <Text>Ft. Niño de Elche</Text>
      </AbsolutText>
     
      <img style={{padding: 0, width: "100%"}} alt="Cajas destemplás single reel" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622882625/Espa%C3%B1lol/gifs/gif-cajas-244_sfitzq.gif" />
    </RelativeCol>
    </Row>
  )

}

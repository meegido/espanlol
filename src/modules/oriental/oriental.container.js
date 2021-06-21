import React from 'react'
import { Row } from 'react-awesome-styled-grid'
import { RelativeColOriental, AbsolutTextOriental, TextOriental } from './oriental.container.style'

export const OrientalContainer = () => {
  return ( 
    <Row justify="center">
      <RelativeColOriental
        xs={4}
        md={8}
        lg={12}
        style={{padding: 0, margin: 0}}
      >       
        <AbsolutTextOriental> 
          <TextOriental>Oriental</TextOriental>
        </AbsolutTextOriental> 
        <img style={{padding: 0, width: "100%"}} alt="Oriental reel single" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622883469/Espa%C3%B1lol/gifs/oriental-33_blpykd.gif" />
      </RelativeColOriental>
    </Row>
  )

}

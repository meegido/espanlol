import React from 'react'
import { ButtonContainer, MoneyIcon, BuyButton } from './button.container.style'

export const BuyButtonContainer = () => {
  return (
    <ButtonContainer>
      <a href="https://carlosgarate.bandcamp.com/album/espa-lol" target="blank">
        <BuyButton>
          Comprar
          <MoneyIcon alt="money-button" src="https://res.cloudinary.com/dekysavu4/image/upload/v1622735298/Espa%C3%B1lol/money-icon_ycqgeq.png" />
        </BuyButton>
      </a>
    </ButtonContainer>
  )
}

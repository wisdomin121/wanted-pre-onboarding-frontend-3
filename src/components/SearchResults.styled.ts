import { styled } from 'styled-components'

export const OuterStyled = styled.div`
  overflow: hidden;
  position: absolute;
  top: calc(50% + 40px);
  width: 100%;
  height: 40%;
  padding: 30px 0;
  max-width: 425px;
  border-radius: 20px;
  background-color: white;

  @media screen and (min-width: 426px) {
    max-width: 425px;
  }

  @media screen and (max-width: 425px) {
    max-width: calc(100% - 50px);
  }
`

export const InnerStyled = styled.div`
  overflow: auto;
  height: 100%;
`

export const TextStyled = styled.p`
  margin: 0 30px 10px;
  font-size: 14px;
`

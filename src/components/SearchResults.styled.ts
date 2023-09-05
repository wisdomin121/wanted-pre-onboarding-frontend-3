import { styled } from 'styled-components'

export const OuterStyled = styled.div`
  position: absolute;
  top: calc(50% + 40px);
  width: 100%;
  max-width: 425px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;

  @media screen and (min-width: 426px) {
    max-width: 425px;
  }

  @media screen and (max-width: 425px) {
    max-width: calc(100% - 50px);
  }
`

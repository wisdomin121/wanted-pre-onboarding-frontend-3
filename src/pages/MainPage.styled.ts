import { styled } from 'styled-components'

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`

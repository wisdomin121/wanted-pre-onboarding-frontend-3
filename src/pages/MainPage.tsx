import { styled } from 'styled-components'

import { Input } from 'components'

function MainPage() {
  return (
    <MainStyled>
      <Input />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`

export default MainPage

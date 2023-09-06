import { useState } from 'react'
import { styled } from 'styled-components'

import { Input, SearchResults } from 'components'

function MainPage() {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <MainStyled>
      <Input handleBlur={handleBlur} handleFocus={handleFocus} isFocus={isFocus} />
      {isFocus && <SearchResults />}
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

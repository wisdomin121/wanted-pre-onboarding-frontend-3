import { useState } from 'react'

import { SearchInput, SearchResults } from 'components'

import { MainStyled } from './MainPage.styled'

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
      <SearchInput handleBlur={handleBlur} handleFocus={handleFocus} isFocus={isFocus} />
      {isFocus && <SearchResults />}
    </MainStyled>
  )
}

export default MainPage

import { useState } from 'react'

import { SearchInput, SearchResults } from 'components'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <MainStyled>
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} value={value} />
      {isFocus && <SearchResults value={value} />}
    </MainStyled>
  )
}

export default MainPage

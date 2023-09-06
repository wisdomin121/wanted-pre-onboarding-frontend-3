/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useEffect, useRef, useState } from 'react'

import { SearchInput, SearchResults } from 'components'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeResults = (e: MouseEvent) => {
      if (mainRef.current !== null && !mainRef.current.contains(e.target as Node)) {
        setIsFocus(false)
      }
    }

    document.addEventListener('mousedown', closeResults)

    return () => {
      document.removeEventListener('mousedown', closeResults)
    }
  }, [])

  return (
    <MainStyled ref={mainRef}>
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} value={value} />
      {isFocus && <SearchResults value={value} />}
    </MainStyled>
  )
}

export default MainPage

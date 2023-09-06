import { useEffect, useRef, useState } from 'react'

import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useResultsStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const { setResults } = useResultsStore()

  const mainRef = useRef<HTMLDivElement>(null)

  const checkCache = useRecommendStorage(value, setResults)
  const getResultsWithDebounce = useDebounce(checkCache)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  useEffect(() => {
    const closeResults = (e: MouseEvent) => {
      if (mainRef.current !== null && !mainRef.current.contains(e.target as Node)) {
        setIsFocus(false)
      }
    }

    document.addEventListener('click', closeResults)

    return () => {
      document.removeEventListener('click', closeResults)
    }
  }, [])

  return (
    <MainStyled
      ref={mainRef}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} value={value} />

      {isFocus && <SearchResults setValue={setValue} value={value} />}
    </MainStyled>
  )
}

export default MainPage

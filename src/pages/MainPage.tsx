/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'

import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useResultsStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [focusIdx, setFocusIdx] = useState<number>(-1)
  const { setResults } = useResultsStore()

  const { checkCache, loading } = useRecommendStorage(value, setResults)
  const getResultsWithDebounce = useDebounce(checkCache)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  return (
    <MainStyled>
      <SearchInput
        focusIdx={focusIdx}
        isFocus={isFocus}
        setFocusIdx={setFocusIdx}
        setIsFocus={setIsFocus}
        setValue={setValue}
        value={value}
      />

      {isFocus && (
        <SearchResults focusIdx={focusIdx} loading={loading} setValue={setValue} value={value} />
      )}
    </MainStyled>
  )
}

export default MainPage

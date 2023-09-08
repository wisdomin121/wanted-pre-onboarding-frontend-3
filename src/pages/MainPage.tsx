/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'

import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useResultsStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
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
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} value={value} />

      {isFocus && <SearchResults loading={loading} setValue={setValue} value={value} />}
    </MainStyled>
  )
}

export default MainPage

import { useEffect, useState } from 'react'

import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useSearchStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const { value, setResults } = useSearchStore()

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
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} />

      {isFocus && <SearchResults loading={loading} />}
    </MainStyled>
  )
}

export default MainPage

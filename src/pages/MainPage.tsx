import { useEffect, useState } from 'react'

import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useSearchStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [isSearchBarFocus, setIsSearchBarFocus] = useState<boolean>(false)
  const { value, setResults } = useSearchStore()

  const { checkCacheOrApi, loading } = useRecommendStorage(value, setResults)
  const getResultsWithDebounce = useDebounce(checkCacheOrApi)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  return (
    <MainStyled>
      <SearchInput isSearchBarFocus={isSearchBarFocus} setIsSearchBarFocus={setIsSearchBarFocus} />

      {isSearchBarFocus && <SearchResults loading={loading} />}
    </MainStyled>
  )
}

export default MainPage

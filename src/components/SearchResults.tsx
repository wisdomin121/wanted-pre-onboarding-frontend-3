import { SearchResult } from 'components'
import useValueStore from 'stores/useValueStore'

import { OuterStyled, TextStyled } from './SearchResults.styled'

function SearchResults() {
  const { value } = useValueStore()

  return (
    <OuterStyled>
      {value.length === 0 ? (
        <TextStyled>최근 검색어</TextStyled>
      ) : (
        <TextStyled>추천 검색어</TextStyled>
      )}
      <SearchResult text="코로나" />
      <SearchResult text="코로나" />
    </OuterStyled>
  )
}

export default SearchResults

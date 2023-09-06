import { SearchResult } from 'components'
import useResultsStore from 'stores/useResultsStore'
import useValueStore from 'stores/useValueStore'

import { InnerStyled, OuterStyled, TextStyled } from './SearchResults.styled'

function SearchResults() {
  const { value } = useValueStore()
  const { results } = useResultsStore()

  return (
    <OuterStyled>
      {value.length === 0 ? (
        <TextStyled>최근 검색어</TextStyled>
      ) : (
        <TextStyled>추천 검색어</TextStyled>
      )}

      <InnerStyled>
        {results.map((result, idx) => {
          return <SearchResult key={idx} text={result.sickNm} />
        })}
      </InnerStyled>
    </OuterStyled>
  )
}

export default SearchResults

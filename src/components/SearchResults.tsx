import { SearchResult } from 'components'
import { RESULTS_MAX_LENGTH } from 'const'
import { useSearchStore } from 'stores'

import { InnerStyled, NoResultsTextStyled, OuterStyled, TextStyled } from './SearchResults.styled'

interface SearchResultsProps {
  loading: boolean
}

function SearchResults({ loading }: SearchResultsProps) {
  const { value, results, focusIdx } = useSearchStore()

  const recentlyKeywords = sessionStorage.getItem('recentlyKeywords')

  return (
    <OuterStyled
      onMouseDown={(e) => {
        e.preventDefault()
      }}
    >
      {value.length === 0 ? (
        <TextStyled>최근 검색어</TextStyled>
      ) : (
        <TextStyled>추천 검색어</TextStyled>
      )}

      <InnerStyled>
        {loading ? (
          <NoResultsTextStyled>Loading...</NoResultsTextStyled>
        ) : value !== '' ? (
          results.length !== 0 ? (
            results.slice(0, RESULTS_MAX_LENGTH).map((result, idx) => {
              return (
                <SearchResult key={idx} isResultFocus={focusIdx === idx} keyword={result.sickNm} />
              )
            })
          ) : (
            <NoResultsTextStyled>추천 검색어 없음</NoResultsTextStyled>
          )
        ) : recentlyKeywords ? (
          JSON.parse(recentlyKeywords)
            .reverse()
            .slice(0, RESULTS_MAX_LENGTH)
            .map((keyword: string, idx: number) => {
              return <SearchResult key={idx} isResultFocus={focusIdx === idx} keyword={keyword} />
            })
        ) : (
          <NoResultsTextStyled>최근 검색어 없음</NoResultsTextStyled>
        )}
      </InnerStyled>
    </OuterStyled>
  )
}

export default SearchResults

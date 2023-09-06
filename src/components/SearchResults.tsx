import { SearchResult } from 'components'
import { useResultsStore } from 'stores'

import { InnerStyled, NoResultsTextStyled, OuterStyled, TextStyled } from './SearchResults.styled'

interface SearchResultsProps {
  value: string
}

function SearchResults({ value }: SearchResultsProps) {
  const { results } = useResultsStore()

  const recentlyKeywords = sessionStorage.getItem('recentlyKeywords')

  return (
    <OuterStyled>
      {value.length === 0 ? (
        <TextStyled>최근 검색어</TextStyled>
      ) : (
        <TextStyled>추천 검색어</TextStyled>
      )}

      <InnerStyled>
        {value !== '' ? (
          results.length !== 0 ? (
            results.map((result, idx) => {
              return <SearchResult key={idx} text={result.sickNm} />
            })
          ) : (
            <NoResultsTextStyled>추천 검색어 없음</NoResultsTextStyled>
          )
        ) : recentlyKeywords ? (
          JSON.parse(recentlyKeywords)
            .reverse()
            .map((keyword: string, idx: number) => {
              return <SearchResult key={idx} text={keyword} />
            })
        ) : (
          <NoResultsTextStyled>최근 검색어 없음</NoResultsTextStyled>
        )}
      </InnerStyled>
    </OuterStyled>
  )
}

export default SearchResults

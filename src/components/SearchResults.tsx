import { SearchResult } from 'components'
import { useSearchStore } from 'stores'

import { InnerStyled, NoResultsTextStyled, OuterStyled, TextStyled } from './SearchResults.styled'

interface SearchResultsProps {
  loading: boolean
}

function SearchResults({ loading }: SearchResultsProps) {
  const { value, setValue, results, focusIdx } = useSearchStore()

  const recentlyKeywords = sessionStorage.getItem('recentlyKeywords')

  return (
    <OuterStyled>
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
            results.slice(0, 7).map((result, idx) => {
              return (
                <SearchResult
                  key={idx}
                  _onClick={() => {
                    setValue(result.sickNm)
                  }}
                  isResultFocus={focusIdx === idx}
                  text={result.sickNm}
                />
              )
            })
          ) : (
            <NoResultsTextStyled>추천 검색어 없음</NoResultsTextStyled>
          )
        ) : recentlyKeywords ? (
          JSON.parse(recentlyKeywords)
            .reverse()
            .slice(0, 7)
            .map((keyword: string, idx: number) => {
              return (
                <SearchResult
                  key={idx}
                  _onClick={() => {
                    setValue(keyword)
                  }}
                  isResultFocus={focusIdx === idx}
                  text={keyword}
                />
              )
            })
        ) : (
          <NoResultsTextStyled>최근 검색어 없음</NoResultsTextStyled>
        )}
      </InnerStyled>
    </OuterStyled>
  )
}

export default SearchResults

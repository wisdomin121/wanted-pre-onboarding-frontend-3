import { SearchResult } from 'components'
import { useResultsStore } from 'stores'

import { InnerStyled, NoResultsTextStyled, OuterStyled, TextStyled } from './SearchResults.styled'

interface SearchResultsProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchResults({ value, setValue }: SearchResultsProps) {
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
              return (
                <SearchResult
                  key={idx}
                  _onClick={() => {
                    setValue(result.sickNm)
                  }}
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
            .map((keyword: string, idx: number) => {
              return (
                <SearchResult
                  key={idx}
                  _onClick={() => {
                    setValue(keyword)
                  }}
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

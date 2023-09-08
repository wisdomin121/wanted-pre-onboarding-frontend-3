import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useSearchStore } from 'stores'

import { OuterStyled } from './SearchResult.styled'

interface SearchResultProps {
  keyword: string
  isResultFocus: boolean
}

function SearchResult({ keyword, isResultFocus }: SearchResultProps) {
  const { setValue } = useSearchStore()

  const resultClick = () => {
    setValue(keyword)
  }

  return (
    <OuterStyled
      $isResultFocus={isResultFocus}
      onClick={(e) => {
        e.stopPropagation()
        resultClick()
      }}
    >
      <Magnifying fill="gray" />
      {keyword}
    </OuterStyled>
  )
}

export default SearchResult

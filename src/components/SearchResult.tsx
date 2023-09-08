import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'

import { OuterStyled } from './SearchResult.styled'

interface SearchResultProps {
  text: string
  _onClick: () => void
  isResultFocus: boolean
}

function SearchResult({ text, _onClick, isResultFocus }: SearchResultProps) {
  return (
    <OuterStyled
      $isResultFocus={isResultFocus}
      onClick={_onClick}
      onMouseDown={(e) => {
        e.preventDefault()
      }}
    >
      <Magnifying fill="gray" />
      {text}
    </OuterStyled>
  )
}

export default SearchResult

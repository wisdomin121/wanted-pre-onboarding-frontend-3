import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'

import { OuterStyled } from './SearchResult.styled'

interface SearchResultProps {
  text: string
  _onClick: () => void
}

function SearchResult({ text, _onClick }: SearchResultProps) {
  return (
    <OuterStyled
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

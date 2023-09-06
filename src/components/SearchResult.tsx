import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'

import { OuterStyled } from './SearchResult.styled'

interface SearchResultProps {
  text: string
}

function SearchResult({ text }: SearchResultProps) {
  return (
    <OuterStyled>
      <Magnifying fill="gray" />
      {text}
    </OuterStyled>
  )
}

export default SearchResult

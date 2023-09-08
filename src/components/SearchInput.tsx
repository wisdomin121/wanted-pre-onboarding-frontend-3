import { SearchButton } from 'components'
import { useSearchWithKeyBoard } from 'hooks'
import { useSearchStore } from 'stores'

import { InputStyled, OuterStyled } from './SearchInput.styled'

interface InputProps {
  isSearchBarFocus: boolean
  setIsSearchBarFocus: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchInput({ isSearchBarFocus, setIsSearchBarFocus }: InputProps) {
  const { value, setValue } = useSearchStore()

  const useKeyBoard = useSearchWithKeyBoard(setIsSearchBarFocus)

  const focusSearchBar = () => {
    setIsSearchBarFocus(true)
  }

  const outOfFocusSearchBar = () => {
    setIsSearchBarFocus(false)
  }

  const renewalValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <OuterStyled $isSearchBarFocus={isSearchBarFocus}>
      <InputStyled
        placeholder={isSearchBarFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        value={value}
        onBlur={outOfFocusSearchBar}
        onChange={renewalValue}
        onFocus={focusSearchBar}
        onKeyDown={useKeyBoard}
      />

      <SearchButton />
    </OuterStyled>
  )
}

export default SearchInput

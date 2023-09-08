import { SearchButton } from 'components'
import useChangeFocus from 'hooks/useChangeFocus'
import { useSearchStore } from 'stores'

import { InputStyled, OuterStyled } from './SearchInput.styled'

interface InputProps {
  isFocus: boolean
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchInput({ isFocus, setIsFocus }: InputProps) {
  const { value, setValue } = useSearchStore()

  const handleKeyDown = useChangeFocus(setIsFocus)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <OuterStyled $isFocus={isFocus}>
      <InputStyled
        placeholder={isFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        value={value}
        onBlur={handleBlur}
        onChange={changeValue}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />

      <SearchButton />
    </OuterStyled>
  )
}

export default SearchInput

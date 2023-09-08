import { SearchButton } from 'components'

import { InputStyled, OuterStyled } from './SearchInput.styled'

interface InputProps {
  isFocus: boolean
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchInput({ isFocus, setIsFocus, value, setValue }: InputProps) {
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
      />

      <SearchButton setValue={setValue} value={value} />
    </OuterStyled>
  )
}

export default SearchInput

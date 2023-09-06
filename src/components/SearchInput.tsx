import { useEffect } from 'react'

import { getSicks } from 'apis/sickApi'
import { SearchButton } from 'components'
import { useDebounce } from 'hooks'
import { useResultsStore } from 'stores'

import { InputStyled, OuterStyled } from './SearchInput.styled'

interface InputProps {
  isFocus: boolean
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchInput({ isFocus, setIsFocus, value, setValue }: InputProps) {
  const { setResults } = useResultsStore()

  const handleFocus = () => {
    setIsFocus(true)
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const loadSicksFunc = () => {
    getSicks(value)
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err))
  }

  const getResultsWithDebounce = useDebounce(loadSicksFunc)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  return (
    <OuterStyled isFocus={isFocus}>
      <InputStyled
        placeholder={isFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        value={value}
        onChange={changeValue}
        onFocus={handleFocus}
      />

      <SearchButton setValue={setValue} value={value} />
    </OuterStyled>
  )
}

export default SearchInput

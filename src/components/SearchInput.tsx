import { useEffect, useState } from 'react'

import { getSicks } from 'apis/sickApi'
import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useDebounce, useStorage } from 'hooks'
import { useResultsStore, useValueStore } from 'stores'

import { IconButtonStyled, InputStyled, OuterStyled } from './SearchInput.styled'

interface InputProps {
  isFocus: boolean
  handleFocus: () => void
  handleBlur: () => void
}

function SearchInput({ isFocus, handleFocus, handleBlur }: InputProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const { value, setValue } = useValueStore()
  const { setResults } = useResultsStore()

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const loadSicksFunc = () => {
    getSicks(value)
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err))
  }

  const getResultsWithDebounce = useDebounce(loadSicksFunc)
  const saveRecommandResult = useStorage('recentlyKeywords', value)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  useEffect(() => {
    if (isClicked) {
      saveRecommandResult()
      setIsClicked(false)
      setValue('')
    }
  }, [isClicked])

  return (
    <OuterStyled isFocus={isFocus}>
      <InputStyled
        placeholder={isFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        value={value}
        onBlur={handleBlur}
        onChange={changeValue}
        onFocus={handleFocus}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter') setIsClicked(true)
        }}
      />
      <IconButtonStyled
        onClick={() => {
          setIsClicked(true)
        }}
      >
        <Magnifying fill="white" />
      </IconButtonStyled>
    </OuterStyled>
  )
}

export default SearchInput

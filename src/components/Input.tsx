/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { getSicks } from 'apis/sickApi'
import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useDebounce, useStorage } from 'hooks'
import useResultsStore from 'stores/useResultsStore'
import useValueStore from 'stores/useValueStore'

import { IconButtonStyled, InputStyled, OuterStyled } from './Input.styled'

interface InputProps {
  isFocus: boolean
  handleFocus: () => void
  handleBlur: () => void
}

function Input({ isFocus, handleFocus, handleBlur }: InputProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const { value, setValue } = useValueStore()
  const { setResults } = useResultsStore()

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const sickApiFunc = () => {
    getSicks(value).then((res) => setResults(res.data))
  }

  const debounceSickApiFunc = useDebounce(sickApiFunc)
  const saveResult = useStorage('recentlyKeywords', value)

  useEffect(() => {
    if (value.length !== 0) {
      debounceSickApiFunc()
    } else {
      setResults([])
    }
  }, [value])

  useEffect(() => {
    if (isClicked) {
      saveResult()
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

export default Input

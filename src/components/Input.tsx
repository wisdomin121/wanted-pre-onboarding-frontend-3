import { useState } from 'react'

import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'

import { IconButtonStyled, InputStyled, OuterWrapper } from './Input.styled'

function Input() {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  return (
    <OuterWrapper isFocus={isFocus}>
      <InputStyled
        placeholder={isFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <IconButtonStyled>
        <Magnifying fill="white" />
      </IconButtonStyled>
    </OuterWrapper>
  )
}

export default Input

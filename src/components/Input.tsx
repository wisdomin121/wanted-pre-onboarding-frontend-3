import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'

import { IconButtonStyled, InputStyled, OuterStyled } from './Input.styled'

interface InputProps {
  isFocus: boolean
  handleFocus: () => void
  handleBlur: () => void
}

function Input({ isFocus, handleFocus, handleBlur }: InputProps) {
  return (
    <OuterStyled isFocus={isFocus}>
      <InputStyled
        placeholder={isFocus ? '' : '🔍︎ 질환명을 입력해 주세요'}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <IconButtonStyled>
        <Magnifying fill="white" />
      </IconButtonStyled>
    </OuterStyled>
  )
}

export default Input

import { styled } from 'styled-components'

export const OuterStyled = styled.button<{ $isResultFocus: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 30px;
  text-align: start;
  background-color: white;

  &:hover {
    background-color: #f9f7f2;
  }

  ${({ $isResultFocus }) => $isResultFocus && `background-color: #f9f7f2`}
`

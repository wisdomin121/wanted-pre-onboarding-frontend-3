import { styled } from 'styled-components'

export const OuterStyled = styled.div<{ $isSearchBarFocus: boolean }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 425px;
  padding: 0 8px 0 24px;
  border-radius: 42px;
  background-color: white;

  ${({ $isSearchBarFocus }) => $isSearchBarFocus && 'border: 2px solid #007be9;'}
`

export const InputStyled = styled.input`
  width: calc(100% - 48px);
  padding: 20px 10px 20px 0;
`

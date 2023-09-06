import { useEffect, useState } from 'react'

import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useStorage } from 'hooks'

import { IconButtonStyled } from './SearchButton.styled'

interface SearchButtonProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchButton({ value, setValue }: SearchButtonProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const saveRecommandResult = useStorage('recentlyKeywords', value)

  useEffect(() => {
    if (isClicked) {
      saveRecommandResult()
      setIsClicked(false)
      setValue('')
    }
  }, [isClicked])

  return (
    <IconButtonStyled
      onClick={() => {
        setIsClicked(true)
      }}
    >
      <Magnifying fill="white" />
    </IconButtonStyled>
  )
}

export default SearchButton

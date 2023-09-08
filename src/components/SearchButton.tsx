import { useEffect, useState } from 'react'

import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useRecentStorage } from 'hooks'
import { useSearchStore } from 'stores'

import { IconButtonStyled } from './SearchButton.styled'

function SearchButton() {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const { value, setValue } = useSearchStore()

  const saveRecommandResult = useRecentStorage('recentlyKeywords', value)

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

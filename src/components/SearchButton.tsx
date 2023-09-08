import { useEffect, useState } from 'react'

import { ReactComponent as Magnifying } from 'assets/Magnifying.svg'
import { useRecentStorage } from 'hooks'
import { useSearchStore } from 'stores'

import { IconButtonStyled } from './SearchButton.styled'

function SearchButton() {
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const { value, setValue } = useSearchStore()

  const saveRecommandResult = useRecentStorage('recentlyKeywords', value)

  const searchKeyword = () => {
    setIsSearched(true)
  }

  const searchedKeyword = () => {
    saveRecommandResult()
    setIsSearched(false)
    setValue('')
  }

  useEffect(() => {
    if (isSearched) {
      searchedKeyword()
    }
  }, [isSearched])

  return (
    <IconButtonStyled onClick={searchKeyword}>
      <Magnifying fill="white" />
    </IconButtonStyled>
  )
}

export default SearchButton

import { useEffect, useRef, useState } from 'react'

import { getSicks } from 'apis/sickApi'
import { SearchInput, SearchResults } from 'components'
import { useDebounce, useRecommendStorage } from 'hooks'
import { useResultsStore } from 'stores'

import { MainStyled } from './MainPage.styled'

function MainPage() {
  const [value, setValue] = useState<string>('')
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const { setResults } = useResultsStore()

  const mainRef = useRef<HTMLDivElement>(null)

  const checkCache = useRecommendStorage(value)

  const loadSicksFunc = () => {
    const cache = checkCache()

    if (cache) {
      setResults(cache)
    } else {
      getSicks(value)
        .then((res) => {
          setResults(res.data)
          sessionStorage.setItem(value, JSON.stringify(res.data))
        })
        .catch((err) => console.error(err))
    }
  }

  const getResultsWithDebounce = useDebounce(loadSicksFunc)

  useEffect(() => {
    if (value.length !== 0) {
      getResultsWithDebounce()
    } else {
      setResults([])
    }
  }, [value])

  useEffect(() => {
    const closeResults = (e: MouseEvent) => {
      if (mainRef.current !== null && !mainRef.current.contains(e.target as Node)) {
        setIsFocus(false)
      }
    }

    document.addEventListener('mousedown', closeResults)

    return () => {
      document.removeEventListener('mousedown', closeResults)
    }
  }, [])

  return (
    <MainStyled ref={mainRef}>
      <SearchInput isFocus={isFocus} setIsFocus={setIsFocus} setValue={setValue} value={value} />

      {isFocus && <SearchResults setValue={setValue} value={value} />}
    </MainStyled>
  )
}

export default MainPage

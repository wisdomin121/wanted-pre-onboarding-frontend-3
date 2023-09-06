import { getSicks } from 'apis/sickApi'
import { Result } from 'types/search'

const useRecommendStorage = (keyword: string, setResults: (value: Result[]) => void) => {
  const checkCache = () => {
    const cache = sessionStorage.getItem(keyword)

    if (cache) {
      setResults(JSON.parse(cache))
    }

    getSicks(keyword)
      .then((res) => {
        setResults(res.data)
        sessionStorage.setItem(keyword, JSON.stringify(res.data))
      })
      .catch((err) => console.error(err))
  }

  return checkCache
}

export default useRecommendStorage

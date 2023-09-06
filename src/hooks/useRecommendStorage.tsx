import { getSicks } from 'apis/sickApi'
import { Result } from 'types/search'

const useRecommendStorage = (keyword: string, setResults: (value: Result[]) => void) => {
  const checkCache = () => {
    const cache = sessionStorage.getItem(keyword)

    if (cache) {
      const parseCache = JSON.parse(cache)

      if (parseCache.expireTime < new Date().getTime()) {
        sessionStorage.removeItem(keyword)
      } else {
        setResults(JSON.parse(cache).data)
        return
      }
    }

    getSicks(keyword)
      .then((res) => {
        setResults(res.data)
        sessionStorage.setItem(
          keyword,
          JSON.stringify({ data: res.data, expireTime: new Date().getTime() + 1000 * 60 })
        )
      })
      .catch((err) => console.error(err))
  }

  return checkCache
}

export default useRecommendStorage

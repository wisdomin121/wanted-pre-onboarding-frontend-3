import { useState } from 'react'

import { getSicks } from 'apis/sickApi'
import { Result } from 'types/search'

const useRecommendStorage = (keyword: string, setResults: (value: Result[]) => void) => {
  const [loading, setLoading] = useState<boolean>(false)

  const checkCache = () => {
    if (keyword.length === 0) return

    setLoading(true)

    const cache = sessionStorage.getItem(keyword)

    if (cache) {
      const parseCache = JSON.parse(cache)

      if (parseCache.expireTime < new Date().getTime()) {
        sessionStorage.removeItem(keyword)
      } else {
        setResults(JSON.parse(cache).data)
        setLoading(false)
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
      .finally(() => setLoading(false))
  }

  return { checkCache, loading }
}

export default useRecommendStorage

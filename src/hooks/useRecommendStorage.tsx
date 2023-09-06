const useRecommendStorage = (keyword: string) => {
  const checkCache = () => {
    const cache = sessionStorage.getItem(keyword)

    if (cache) {
      return JSON.parse(cache)
    }

    return null
  }

  return checkCache
}

export default useRecommendStorage

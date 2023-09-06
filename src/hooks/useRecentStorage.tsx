const useRecentStorage = (key: string, value: string) => {
  const saveResults = () => {
    const recentlyKeywords = sessionStorage.getItem(key)

    if (recentlyKeywords) {
      const keywordsSet = new Set(JSON.parse(recentlyKeywords))

      if (value.length !== 0) {
        if (keywordsSet.has(value)) {
          keywordsSet.delete(value)
        }

        keywordsSet.add(value)
      }

      sessionStorage.setItem(key, JSON.stringify(Array.from(keywordsSet)))
    } else {
      const keywordsSet = new Set([value])

      sessionStorage.setItem(key, JSON.stringify(Array.from(keywordsSet)))
    }
  }

  return saveResults
}

export default useRecentStorage

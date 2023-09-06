const useStorage = (key: string, value: string) => {
  const saveResults = () => {
    const recentlyKeywords = sessionStorage.getItem(key)

    if (recentlyKeywords) {
      const arr = JSON.parse(recentlyKeywords)

      if (!arr.includes(value) && value.length !== 0) arr.push(value)

      sessionStorage.setItem(key, JSON.stringify(arr))
    } else {
      const arr = [value]

      sessionStorage.setItem(key, JSON.stringify(arr))
    }
  }

  return saveResults
}

export default useStorage

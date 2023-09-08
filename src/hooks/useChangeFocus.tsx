import { Result } from 'types/search'

const RESULTS_MAX_LENGTH = 7

const useChangeFocus = (
  results: Result[],
  focusIdx: number,
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>,
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>,
  setValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const RESULTS_LENGTH = results.length

  const changeIdxNum = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      RESULTS_LENGTH > 0 && RESULTS_LENGTH < RESULTS_MAX_LENGTH
        ? setFocusIdx((prev) => (prev + 1) % RESULTS_LENGTH)
        : setFocusIdx((prev) => (prev + 1) % RESULTS_MAX_LENGTH)
    }
    if (e.key === 'ArrowUp') {
      RESULTS_LENGTH > 0 && RESULTS_LENGTH < RESULTS_MAX_LENGTH
        ? setFocusIdx((prev) => (prev - 1 + RESULTS_LENGTH) % RESULTS_LENGTH)
        : setFocusIdx((prev) => (prev - 1 + RESULTS_MAX_LENGTH) % RESULTS_MAX_LENGTH)
    }
    if (e.key === 'Escape') {
      setFocusIdx(-1)
      setIsFocus(false)
    }
    if (e.key === 'Enter') {
      RESULTS_LENGTH > 0 && focusIdx >= 0 && setValue(results[focusIdx]['sickNm'])
      setFocusIdx(-1)
    }
  }

  return changeIdxNum
}

export default useChangeFocus

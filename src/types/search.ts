export interface Value {
  value: string
  setValue: (value: string) => void
}

export interface Result {
  sickCd: string
  sickNm: string
}

export interface Search {
  results: Result[]
  setResults: (value: Result[]) => void
  value: string
  setValue: (v: string) => void
  focusIdx: number
  setFocusIdx: (value: number) => void
}

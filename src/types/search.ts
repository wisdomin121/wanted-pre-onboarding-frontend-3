export interface Value {
  value: string
  setValue: (value: string) => void
}

export interface Result {
  sickCd: string
  sickNm: string
}

export interface Results {
  results: Result[]
  setResults: (value: Result[]) => void
}

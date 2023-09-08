import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { Result, Search } from 'types/search'

const useSearchStore = create<Search>()(
  devtools(
    immer((set) => ({
      results: [],
      setResults: (value: Result[]) => {
        set((state) => {
          state.results = value
        })
      },
      value: '',
      setValue: (v: string) => {
        set((state) => {
          state.value = v
        })
      },
      focusIdx: -1,
      setFocusIdx: (value: number) => {
        set((state) => {
          state.focusIdx = value
        })
      },
    }))
  )
)

export default useSearchStore

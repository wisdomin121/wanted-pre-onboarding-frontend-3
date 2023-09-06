import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { Result, Results } from 'types/search'

const useResultsStore = create<Results>()(
  devtools(
    immer((set) => ({
      results: [],
      setResults: (value: Result[]) => {
        set((state) => {
          state.results = value
        })
      },
    }))
  )
)

export default useResultsStore

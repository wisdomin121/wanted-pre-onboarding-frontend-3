import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { Value } from 'types/search'

const useValueStore = create<Value>()(
  devtools(
    immer((set) => ({
      value: '',
      setValue: (v: string) => {
        set((state) => {
          state.value = v
        })
      },
    }))
  )
)

export default useValueStore

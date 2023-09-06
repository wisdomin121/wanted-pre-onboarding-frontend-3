import { useRef } from 'react'

const useDebounce = (callback: () => void) => {
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    const newTimer = setTimeout(() => {
      callback()
    }, 750)

    timer.current = newTimer
  }

  return dispatchDebounce
}

export default useDebounce

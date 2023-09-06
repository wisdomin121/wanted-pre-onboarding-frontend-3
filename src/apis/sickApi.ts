import { API } from './api'

export const getSicks = async (value: string) => {
  const { data } = await API.get('/sick', {
    params: {
      q: value,
    },
  })

  return { data }
}

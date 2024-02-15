import { useState } from 'react'

export function useIcrement(initialValue = 0) {
  const [value, setValue] = useState(initialValue)
  const increment = () => setValue(ov => ov + 1)
  const decrement = _ => setValue(ov => ov > 1 ? ov - 1 : 0)
  return [value, increment, decrement]
}

export function useIcrementRetObj({ base=0, min=-Infinity}) {
  const [value, setValue] = useState(base)
  const increment = () => setValue(ov => ov + 1)
  const decrement = () => setValue(ov => ov > min ? ov - 1 : min)
  return { value, increment, decrement }
}

export function useIcrementObj({ base=0, step=1, max=Infinity, min=-Infinity }) {
  // TODO: implement useIcrementObj
  return { 
    value: null,
    increment: null, 
    decrement: null 
  }
}
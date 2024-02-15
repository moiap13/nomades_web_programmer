import { useState } from 'react'

/** 
 * @param {boolean} initialValue, default false
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(!value)
  return [value, toggle]
}
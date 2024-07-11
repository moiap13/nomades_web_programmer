import { useState } from "react";

export function useCounter(initialValue=0, step=1, min=-Infinity) {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(count+step)
  const decrement = () => setCount(cv => cv > min ? cv - step : min)

  return [count, increment, decrement]
}

export function useCounterRetObj(initialValue=0, step=1, min=-Infinity) {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(count+step)
  const decrement = () => setCount(cv => cv > min ? cv - step : min)

  return {count, increment, decrement}
}

export function useCounterObjRetObj({ initialValue=0, step=1, min=-Infinity, max=Infinity} ) {
  const [count, setCount] = useState(initialValue)
  const increment = () => setCount(cv => cv < max ? cv + step : max)
  const decrement = () => setCount(cv => cv > min ? cv - step : min)

  return {count, increment, decrement}
}
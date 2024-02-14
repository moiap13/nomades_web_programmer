import { useState, useEffect } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(v => {
        if (v === 0) {
          clearInterval(interval)
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div className='vstack gap-2'>
    <Input
      placeholder='Duration'
      value={duration}
      onChange={handleChange}
    />
    <div>Seconds Left: {secondsLeft}</div>
  </div>
}
export default App
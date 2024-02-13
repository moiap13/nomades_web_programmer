import { useState, useEffect } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  console.log('render')

  useEffect(() => {
    setSecondsLeft(secondsLeft - 1)
  }, [duration])

  return <div className='vstack gap-2'>
    <Input
      placeholder='Duration'
      value={duration}
      onChange={setDuration}
    />
    <div>Seconds Left: {secondsLeft}</div>
  </div>
}
export default App
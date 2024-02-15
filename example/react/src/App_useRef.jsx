import { useState, useEffect, useMemo, useId, useRef } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const divRef = useRef(null)
  const [prefix, setPrefix] = useState('')
  const prefixRef = useMemo(() => ({current: ''}), [])
  prefixRef.current = prefix

  
  useEffect(() => {
    console.log("useEffect render")
    const t = setInterval(() => {
      console.log(prefixRef.current)
    }, 1000)
    return () => clearInterval(t)
  }, [])
  
  return <div ref={divRef}>
    <Input label="prefix" value={prefix} onChange={setPrefix} />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque a lectus. Donec et imperdiet nibh. Suspendisse potenti.
    <p>Prefixe: {prefix}</p>
  </div>
}
export default App
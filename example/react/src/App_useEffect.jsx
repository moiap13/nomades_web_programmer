import { useState, useEffect } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const [showTitle, setShowTitle] = useState(true)

  return <div className='container my-3 stack'>
    <Checkbox
      label='Show Title'
      onChange={setShowTitle}
      checked={showTitle}
    />
    { showTitle && <EditTitle />}
    <div style={{height: "300vh"}}></div>
  </div>
}

function EditTitle() {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')
  const [y, setY] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      console.log('scroll')
      setY(window.scrollY)
    }
    window.addEventListener('scroll', scrollHandler)
    
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    document.title = title
  }, [title])

  return <div className='vstack gap-3'>
    <div>Y: {y}</div>
    <Input
      placeholder='Modify Title'
      value={title}
      onChange={setTitle}
    />
    <Input
      placeholder='Firstname'
      value={firstname}
      onChange={setFirstname}
    />
  </div>
}
export default App
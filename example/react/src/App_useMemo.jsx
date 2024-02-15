import { useState, useEffect } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'
import { useMemo } from 'react'

function App() {
  const [username, setUsername] = useState('moiap13')
  const [password, setPassword] = useState('password')
  console.log('render')
  const today = useMemo(() => new Date(), [])
  // const today = new Date()
  // const security = passwordSecurity(password)
  const security = useMemo(() => passwordSecurity(password), [password]) 

  return <div className="container my-3 vstack gap-2">
    <Input
      label='Username'
      placeholder='Username'
      value={username}
      onChange={setUsername}
    />
    <div>  
      <Input
        label='Password'
        placeholder='Password'
        value={password}
        onChange={setPassword}
      />
      <div>Password security: {security}</div>
      <div>Today: {today.toString()}</div>
    </div>
  </div>
}

function passwordSecurity(password) {
  // simulate a slow function
  let start = performance.now()
  while (performance.now() - start < 100) {}

  if (password.length < 8) return 'Weak'
  if (password.length < 12) return 'Moderate'
  return 'Strong'
}
export default App
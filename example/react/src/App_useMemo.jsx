import { useState, useEffect } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {
  const [username, setUsername] = useState('moiap13')
  const [password, setPassword] = useState('password')
  const security = passwordSecurity(password)

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
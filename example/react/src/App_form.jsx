import { useState } from 'react';

function App() {
  const [value, setValue] = useState(undefined);
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return <form>
    <label htmlFor="myInput">
      Name:
      <input type="text" name="myInput" id="myInput" value={value} onChange={handleChange}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
}
export default App
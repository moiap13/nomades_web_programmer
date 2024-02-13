import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const [checked, setChecked] = useState(false);
  const toggleCheck = (e) => {
    setChecked(!checked);
  }


  return <form>
    <label htmlFor="myInput">
      Name:
    </label>
    <textarea name="myInput" id="myInput" value={value} onChange={handleChange}/>
    <input type="checkbox" name="myCheck" id="myCheck" checked={checked} onChange={toggleCheck}/>
    {checked && <input type="submit" value="Submit" />}
  </form>
}
export default App
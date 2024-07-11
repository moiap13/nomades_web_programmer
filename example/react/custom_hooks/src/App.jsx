import useToggle from "./hooks/useToggle"


function App() {
  const [checked, toggleChecked] = useToggle()
  
  return <div>
    <input type="checkbox" checked={checked} onChange={toggleChecked} />
    {checked ? <p onClick={toggleChecked}>checked</p> : <p onClick={toggleChecked}>not checked</p>}
  </div>
}
export default App
import { useCounter, useCounterRetObj, useCounterObjRetObj } from "./hooks/useCounterAntonio"
import useToggle from "./hooks/useToggle"


function App() {
  const [checked, toggleChecked] = useToggle()
  const {count, increment, decrement} = useCounterObjRetObj({ max: 10})

  return <div>
    <input type="checkbox" checked={checked} onChange={toggleChecked} />
    {checked ? <p onClick={toggleChecked}>checked</p> : <p onClick={toggleChecked}>not checked</p>}

    <div>
      <p>{ count }</p>
      <button disabled={count >= 10} onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </div>
}
export default App